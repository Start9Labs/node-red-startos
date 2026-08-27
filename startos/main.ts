import { adminUser, storeJson } from './fileModels/store.json'
import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info('Starting Node-RED')

  const config = await storeJson.read().const(effects)

  if (!config?.adminPasswordHash) {
    throw new Error(
      'Node-RED has no admin password. Run the "Set Admin Password" action.',
    )
  }

  const subcontainer = sdk.SubContainer.of(
    effects,
    { imageId: 'node-red' },
    sdk.Mounts.of()
      .mountVolume({
        volumeId: 'main',
        subpath: null,
        mountpoint: '/data',
        readonly: false,
      })
      .mountAssets({ subpath: null, mountpoint: '/assets' }),
    'node-red-sub',
  )

  return sdk.Daemons.of(effects)
    .addOneshot('chown', {
      subcontainer,
      exec: {
        command: ['chown', '-R', 'node-red:node-red', '/data'],
        user: 'root',
      },
      requires: [],
    })
    .addDaemon('primary', {
      subcontainer,
      exec: {
        command: sdk.useEntrypoint(['--settings', '/assets/settings.js']),
        env: {
          TZ: config.timezone,
          NODE_RED_ENABLE_SAFE_MODE: String(config.safeMode),
          STARTOS_ADMIN_USER: adminUser,
          STARTOS_ADMIN_PASSWORD_HASH: config.adminPasswordHash,
          STARTOS_CREDENTIAL_SECRET: config.credentialSecret,
        },
      },
      ready: {
        display: i18n('Web Interface'),
        // A trigger sleeps before its first yield, so `starting` is the delay
        // before the first poll, not just the rate of later ones.
        trigger: sdk.trigger.statusTrigger(30_000, {
          starting: 4_000,
          failure: 2_000,
        }),
        fn: () =>
          sdk.healthCheck.checkWebUrl(
            effects,
            `http://localhost:${uiPort}/auth/login`,
            {
              successMessage: i18n('The flow editor is ready'),
              errorMessage: i18n('The flow editor is not ready'),
            },
          ),
      },
      requires: ['chown'],
    })
})
