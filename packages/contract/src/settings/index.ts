import { ClientSettings } from './client'
import { ServerSettings } from './server'

export * from './client'
export * from './server'

export type ManyClientSettings = { [id: string]: ClientSettings }
export type Settings = {
  global: ServerSettings,
  local: ClientSettings,
  clients: ManyClientSettings,
}