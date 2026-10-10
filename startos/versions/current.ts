import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '5.0.8:0',
  releaseNotes: {
    en_US: 'Updated Node-RED to 5.0.8. Fixes WebSocket connection leaks on deploy, CSV parsing of leading empty columns, and library saves completing before data is written. [Full upstream release notes](https://github.com/node-red/node-red/releases/tag/5.0.8)',
    es_ES: 'Se actualizó Node-RED a 5.0.8. Corrige las conexiones WebSocket que quedaban abiertas al desplegar, el análisis de CSV con columnas vacías al principio y el guardado en la biblioteca que finalizaba antes de escribir los datos. [Notas completas de la versión original](https://github.com/node-red/node-red/releases/tag/5.0.8)',
    de_DE: 'Node-RED wurde auf 5.0.8 aktualisiert. Behebt nicht geschlossene WebSocket-Verbindungen beim Bereitstellen, die Verarbeitung führender leerer CSV-Spalten und Bibliotheksspeicherungen, die vor dem Schreiben der Daten abgeschlossen wurden. [Vollständige Versionshinweise des Upstream-Projekts](https://github.com/node-red/node-red/releases/tag/5.0.8)',
    pl_PL: 'Zaktualizowano Node-RED do wersji 5.0.8. Naprawiono pozostawianie otwartych połączeń WebSocket przy wdrażaniu, odczyt CSV z pustymi kolumnami na początku oraz kończenie zapisu do biblioteki przed zapisaniem danych. [Pełne informacje o wydaniu projektu źródłowego](https://github.com/node-red/node-red/releases/tag/5.0.8)',
    fr_FR: 'Mise à jour de Node-RED vers la version 5.0.8. Corrige les connexions WebSocket laissées ouvertes lors du déploiement, la lecture des CSV commençant par des colonnes vides et les sauvegardes dans la bibliothèque terminées avant l’écriture des données. [Notes de version complètes du projet en amont](https://github.com/node-red/node-red/releases/tag/5.0.8)',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
