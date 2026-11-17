import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '5.0.10:0',
  releaseNotes: {
    en_US:
      'Updated Node-RED to 5.0.10, a security and stability release. Hardens the editor and its API against malformed requests and path tricks in projects and context storage, fixes a denial of service from compressed requests, and stops several faults from crashing Node-RED. [Full upstream release notes](https://github.com/node-red/node-red/releases/tag/5.0.10)',
    es_ES:
      'Se actualizó Node-RED a 5.0.10, una versión de seguridad y estabilidad. Refuerza el editor y su API frente a solicitudes malformadas y rutas manipuladas en proyectos y en el almacenamiento de contexto, corrige una denegación de servicio mediante solicitudes comprimidas y evita que varios fallos detengan Node-RED. [Notas completas de la versión original](https://github.com/node-red/node-red/releases/tag/5.0.10)',
    de_DE:
      'Node-RED wurde auf 5.0.10 aktualisiert, eine Sicherheits- und Stabilitätsversion. Härtet den Editor und seine API gegen fehlerhafte Anfragen und manipulierte Pfade in Projekten und im Kontextspeicher, behebt eine Denial-of-Service-Lücke durch komprimierte Anfragen und verhindert, dass mehrere Fehler Node-RED zum Absturz bringen. [Vollständige Versionshinweise des Upstream-Projekts](https://github.com/node-red/node-red/releases/tag/5.0.10)',
    pl_PL:
      'Zaktualizowano Node-RED do wersji 5.0.10, wydania poprawiającego bezpieczeństwo i stabilność. Zabezpiecza edytor i jego API przed niepoprawnymi żądaniami oraz zmanipulowanymi ścieżkami w projektach i magazynie kontekstu, usuwa podatność na odmowę usługi przez skompresowane żądania i zapobiega awariom Node-RED wywoływanym przez kilka błędów. [Pełne informacje o wydaniu projektu źródłowego](https://github.com/node-red/node-red/releases/tag/5.0.10)',
    fr_FR:
      'Mise à jour de Node-RED vers la version 5.0.10, une version de sécurité et de stabilité. Renforce l’éditeur et son API contre les requêtes malformées et les chemins détournés dans les projets et le stockage de contexte, corrige un déni de service par requêtes compressées et empêche plusieurs erreurs de faire planter Node-RED. [Notes de version complètes du projet en amont](https://github.com/node-red/node-red/releases/tag/5.0.10)',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
