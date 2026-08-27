import { defaultTimezone, storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

const { InputSpec, Value } = sdk

const inputSpec = InputSpec.of({
  timezone: Value.text({
    name: i18n('Time Zone'),
    description: i18n(
      'An IANA time zone name, such as America/New_York or Europe/Berlin. Inject nodes set to a time of day fire in this zone.',
    ),
    required: true,
    default: defaultTimezone,
  }),
})

export const setTimezone = sdk.Action.withInput(
  'set-timezone',

  {
    name: i18n('Set Time Zone'),
    description: i18n(
      'Set the time zone Node-RED uses for scheduling. Node-RED restarts to apply it.',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  },

  inputSpec,

  async ({ effects }) => ({
    timezone:
      (await storeJson.read((s) => s.timezone).once()) ?? defaultTimezone,
  }),

  async ({ effects, input }) => {
    const timezone = input.timezone.trim()
    try {
      Intl.DateTimeFormat('en-US', { timeZone: timezone })
    } catch {
      throw new Error(
        i18n(
          'Not a recognized time zone. Enter an IANA name such as America/New_York or Europe/Berlin.',
        ),
      )
    }
    await storeJson.merge(effects, { timezone })
  },
)
