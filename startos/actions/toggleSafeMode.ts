import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

export const toggleSafeMode = sdk.Action.withoutInput(
  'toggle-safe-mode',

  async ({ effects }) => {
    const safeMode = await storeJson.read((s) => s.safeMode).const(effects)
    return {
      name: safeMode ? i18n('Leave Safe Mode') : i18n('Enter Safe Mode'),
      description: safeMode
        ? i18n(
            'Safe mode is on: Node-RED loads the editor but runs no flow. Turn it off to run flows again.',
          )
        : i18n(
            'Load the editor without running any flow, so a flow that crashes or overloads Node-RED can be fixed or deleted.',
          ),
      warning: safeMode
        ? null
        : i18n(
            'Your flows stop running, and stay stopped on every restart until you leave safe mode.',
          ),
      allowedStatuses: 'any',
      group: null,
      visibility: 'enabled',
    }
  },

  async ({ effects }) => {
    const safeMode = await storeJson.read((s) => s.safeMode).const(effects)
    await storeJson.merge(effects, { safeMode: !safeMode })
  },
)
