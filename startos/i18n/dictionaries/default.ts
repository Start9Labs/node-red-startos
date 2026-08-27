export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Web Interface': 0,
  'The flow editor is ready': 1,
  'The flow editor is not ready': 2,
  // interfaces.ts
  'Web UI': 3,
  'The Node-RED flow editor, and any HTTP endpoints your flows serve': 4,
  // actions/setAdminPassword.ts
  'Set Admin Password': 5,
  'Generate a new password for the Node-RED editor. It is shown once, and Node-RED restarts to apply it.': 6,
  'Your current password stops working and every signed-in browser is signed out.': 7,
  'Node-RED Login': 8,
  'Use these credentials to sign in to the flow editor.': 9,
  Username: 10,
  Password: 11,
  // actions/setTimezone.ts
  'Set Time Zone': 12,
  'Set the time zone Node-RED uses for scheduling. Node-RED restarts to apply it.': 13,
  'Time Zone': 14,
  'An IANA time zone name, such as America/New_York or Europe/Berlin. Inject nodes set to a time of day fire in this zone.': 15,
  'Not a recognized time zone. Enter an IANA name such as America/New_York or Europe/Berlin.': 16,
  // actions/toggleSafeMode.ts
  'Enter Safe Mode': 17,
  'Load the editor without running any flow, so a flow that crashes or overloads Node-RED can be fixed or deleted.': 18,
  'Your flows stop running, and stay stopped on every restart until you leave safe mode.': 19,
  'Leave Safe Mode': 20,
  'Safe mode is on: Node-RED loads the editor but runs no flow. Turn it off to run flows again.': 21,
  // init/watchCredentials.ts
  'Node-RED flows can run arbitrary code, so the editor must be password protected before it starts.': 22,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
