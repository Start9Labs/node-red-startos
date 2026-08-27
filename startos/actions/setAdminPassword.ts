import { utils } from '@start9labs/start-sdk'
import { rm } from 'fs/promises'
import { adminUser, storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

export const setAdminPassword = sdk.Action.withoutInput(
  'set-admin-password',

  async ({ effects }) => {
    const adminPasswordHash = await storeJson
      .read((s) => s.adminPasswordHash)
      .const(effects)

    return {
      name: i18n('Set Admin Password'),
      description: i18n(
        'Generate a new password for the Node-RED editor. It is shown once, and Node-RED restarts to apply it.',
      ),
      warning: adminPasswordHash
        ? i18n(
            'Your current password stops working and every signed-in browser is signed out.',
          )
        : null,
      allowedStatuses: 'any',
      group: null,
      visibility: 'enabled',
    }
  },

  async ({ effects }) => {
    const password = utils.getDefaultString({
      charset: 'a-z,A-Z,0-9',
      len: 32,
    })

    const adminPasswordHash = await sdk.SubContainer.withTemp(
      effects,
      { imageId: 'node-red' },
      null,
      'hash-password',
      async (sub) => {
        const { stdout } = await sub.execFail(
          [
            'node',
            '-e',
            'let p="";process.stdin.on("data",(d)=>{p+=d}).on("end",()=>{process.stdout.write(require("bcryptjs").hashSync(p,8))})',
          ],
          { cwd: '/usr/src/node-red', input: password },
        )
        return stdout.toString()
      },
    )

    await storeJson.merge(effects, { adminPasswordHash })
    await rm(sdk.volumes.main.subpath('.sessions.json'), { force: true })

    return {
      version: '1',
      title: i18n('Node-RED Login'),
      message: i18n('Use these credentials to sign in to the flow editor.'),
      result: {
        type: 'group',
        value: [
          {
            type: 'single',
            name: i18n('Username'),
            description: null,
            value: adminUser,
            masked: false,
            copyable: true,
            qr: false,
          },
          {
            type: 'single',
            name: i18n('Password'),
            description: null,
            value: password,
            masked: true,
            copyable: true,
            qr: false,
          },
        ],
      },
    }
  },
)
