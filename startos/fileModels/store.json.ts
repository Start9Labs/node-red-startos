import { FileHelper, utils, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

export const adminUser = 'admin'
export const defaultTimezone = 'Etc/UTC'

const shape = z.looseObject({
  adminPasswordHash: z.string().optional().catch(undefined),
  // Rotating this makes every credential stored in flows_cred.json undecryptable.
  credentialSecret: z
    .string()
    .catch(utils.getDefaultString({ charset: 'a-z,A-Z,0-9', len: 64 })),
  safeMode: z.boolean().catch(false),
  timezone: z.string().catch(defaultTimezone),
})

export const storeJson = FileHelper.json(
  { base: sdk.volumes.startos, subpath: 'store.json' },
  shape,
)
