import { setAdminPassword } from '../actions/setAdminPassword'
import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

export const watchCredentials = sdk.setupOnInit(async (effects) => {
  const adminPasswordHash = await storeJson
    .read((s) => s.adminPasswordHash)
    .const(effects)

  if (!adminPasswordHash) {
    await sdk.action.createOwnTask(effects, setAdminPassword, 'critical', {
      reason: i18n(
        'Node-RED flows can run arbitrary code, so the editor must be password protected before it starts.',
      ),
    })
  }
})
