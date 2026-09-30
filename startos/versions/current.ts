import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '5.0.7:0',
  releaseNotes: {
    en_US:
      'Updated Node-RED to 5.0.7. Restores compatibility for JSONata expressions that access prototype-backed properties or chain function calls, and fixes File In completion, single-type inputs, and disabled wires in the dark editor theme. [Full upstream release notes](https://github.com/node-red/node-red/releases/tag/5.0.7)',
    es_ES:
      'Se actualizó Node-RED a 5.0.7. Restablece la compatibilidad de las expresiones JSONata que acceden a propiedades basadas en prototipos o encadenan llamadas a funciones, y corrige la finalización de File In, las entradas de un solo tipo y los cables desactivados en el tema oscuro del editor. [Notas completas de la versión original](https://github.com/node-red/node-red/releases/tag/5.0.7)',
    de_DE:
      'Node-RED wurde auf 5.0.7 aktualisiert. Stellt die Kompatibilität für JSONata-Ausdrücke wieder her, die auf prototypbasierte Eigenschaften zugreifen oder Funktionsaufrufe verketten, und behebt Fehler beim Abschluss von File In, bei Eingaben mit nur einem Typ und bei deaktivierten Verbindungen im dunklen Editor-Design. [Vollständige Versionshinweise des Upstream-Projekts](https://github.com/node-red/node-red/releases/tag/5.0.7)',
    pl_PL:
      'Zaktualizowano Node-RED do wersji 5.0.7. Przywrócono zgodność wyrażeń JSONata korzystających z właściwości opartych na prototypach lub łańcuchowych wywołań funkcji oraz poprawiono kończenie działania File In, pola wejściowe jednego typu i widoczność wyłączonych połączeń w ciemnym motywie edytora. [Pełne informacje o wydaniu projektu źródłowego](https://github.com/node-red/node-red/releases/tag/5.0.7)',
    fr_FR:
      'Mise à jour de Node-RED vers la version 5.0.7. Rétablit la compatibilité des expressions JSONata qui accèdent à des propriétés basées sur des prototypes ou enchaînent des appels de fonction, et corrige la finalisation de File In, les saisies à type unique et les connexions désactivées dans le thème sombre de l’éditeur. [Notes de version complètes du projet en amont](https://github.com/node-red/node-red/releases/tag/5.0.7)',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
