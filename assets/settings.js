module.exports = {
  uiPort: 1880,
  uiHost: '0.0.0.0',
  flowFile: 'flows.json',
  flowFilePretty: true,
  credentialSecret: process.env.STARTOS_CREDENTIAL_SECRET,
  adminAuth: {
    type: 'credentials',
    users: [
      {
        username: process.env.STARTOS_ADMIN_USER,
        password: process.env.STARTOS_ADMIN_PASSWORD_HASH,
        permissions: '*',
      },
    ],
  },
  telemetry: { enabled: false },
  diagnostics: { enabled: true, ui: true },
  runtimeState: { enabled: true, ui: true },
  logging: { console: { level: 'info', metrics: false, audit: false } },
  contextStorage: {
    default: 'memoryOnly',
    memoryOnly: { module: 'memory' },
    file: { module: 'localfilesystem' },
  },
  exportGlobalContextKeys: false,
  externalModules: {},
  functionGlobalContext: {},
  editorTheme: {
    projects: { enabled: false },
    codeEditor: { lib: 'monaco' },
    markdownEditor: { mermaid: { enabled: true } },
  },
}
