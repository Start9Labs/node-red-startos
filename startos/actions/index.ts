import { sdk } from '../sdk'
import { setAdminPassword } from './setAdminPassword'
import { setTimezone } from './setTimezone'
import { toggleSafeMode } from './toggleSafeMode'

export const actions = sdk.Actions.of()
  .addAction(setAdminPassword)
  .addAction(setTimezone)
  .addAction(toggleSafeMode)
