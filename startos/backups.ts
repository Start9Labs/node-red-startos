import { sdk } from './sdk'

export const { createBackup, restoreInit } = sdk.setupBackups(
  async ({ effects }) =>
    sdk.Backups.withOptions({ exclude: ['.npm'] })
      .addVolume('main')
      .addVolume('startos'),
)
