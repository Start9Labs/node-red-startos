import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'node-red',
  title: 'Node-RED',
  license: 'Apache-2.0',
  packageRepo: 'https://github.com/Start9Labs/node-red-startos',
  upstreamRepo: 'https://github.com/node-red/node-red',
  marketingUrl: 'https://nodered.org',
  donationUrl: null,
  description: { short, long },
  volumes: ['main', 'startos'],
  images: {
    'node-red': {
      source: { dockerTag: 'nodered/node-red:5.0.6' },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
