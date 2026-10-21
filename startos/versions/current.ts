import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '5.0.9:0',
  releaseNotes: {
    en_US:
      'Updated Node-RED to 5.0.9 and start-sdk to 3.1.0. Fixes CSV processing and repeated MQTT connections, and improves the editor. Range nodes now drop non-numeric input instead of coercing it; check affected flows before updating. [Full upstream release notes](https://github.com/node-red/node-red/releases/tag/5.0.9)',
    es_ES:
      'Se actualizaron Node-RED a 5.0.9 y start-sdk a 3.1.0. Corrige el procesamiento de CSV y las conexiones MQTT repetidas, y mejora el editor. Los nodos Range ahora descartan las entradas no numéricas en vez de convertirlas; revisa los flujos afectados antes de actualizar. [Notas completas de la versión original](https://github.com/node-red/node-red/releases/tag/5.0.9)',
    de_DE:
      'Node-RED wurde auf 5.0.9 und start-sdk auf 3.1.0 aktualisiert. Behebt die CSV-Verarbeitung und wiederholte MQTT-Verbindungen und verbessert den Editor. Range-Knoten verwerfen jetzt nichtnumerische Eingaben, statt sie umzuwandeln; betroffene Flows vor dem Update prüfen. [Vollständige Versionshinweise des Upstream-Projekts](https://github.com/node-red/node-red/releases/tag/5.0.9)',
    pl_PL:
      'Zaktualizowano Node-RED do wersji 5.0.9 i start-sdk do 3.1.0. Poprawiono przetwarzanie CSV, ponawiane połączenia MQTT i edytor. Węzły Range odrzucają teraz dane nienumeryczne zamiast je konwertować; przed aktualizacją sprawdź przepływy korzystające z takich danych. [Pełne informacje o wydaniu projektu źródłowego](https://github.com/node-red/node-red/releases/tag/5.0.9)',
    fr_FR:
      'Mise à jour de Node-RED vers la version 5.0.9 et de start-sdk vers la version 3.1.0. Corrige le traitement CSV et les connexions MQTT répétées, et améliore l’éditeur. Les nœuds Range ignorent désormais les entrées non numériques au lieu de les convertir ; vérifiez les flux concernés avant la mise à jour. [Notes de version complètes du projet en amont](https://github.com/node-red/node-red/releases/tag/5.0.9)',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
