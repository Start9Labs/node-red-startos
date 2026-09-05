import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '5.0.6:0',
  releaseNotes: {
    en_US:
      'Updated Node-RED to 5.0.6. Improves malformed JSON handling, TLS configuration, multiplayer events, and editor behavior; updates JSONata; and restores compatibility with affected Raspberry Pi systems. [Full upstream changes](https://github.com/node-red/node-red/compare/5.0.4...5.0.6)',
    es_ES:
      'Se actualizó Node-RED a 5.0.6. Mejora el manejo de JSON malformado, la configuración TLS, los eventos multijugador y el comportamiento del editor; actualiza JSONata; y restablece la compatibilidad con los sistemas Raspberry Pi afectados. [Cambios completos del proyecto original](https://github.com/node-red/node-red/compare/5.0.4...5.0.6)',
    de_DE:
      'Node-RED wurde auf 5.0.6 aktualisiert. Verbessert den Umgang mit fehlerhaftem JSON, die TLS-Konfiguration, Mehrbenutzerereignisse und das Editorverhalten; aktualisiert JSONata; und stellt die Kompatibilität mit betroffenen Raspberry-Pi-Systemen wieder her. [Vollständige Änderungen des Upstream-Projekts](https://github.com/node-red/node-red/compare/5.0.4...5.0.6)',
    pl_PL:
      'Zaktualizowano Node-RED do wersji 5.0.6. Usprawniono obsługę nieprawidłowego JSON, konfigurację TLS, zdarzenia trybu wieloosobowego i działanie edytora; zaktualizowano JSONata; oraz przywrócono zgodność z dotkniętymi problemem systemami Raspberry Pi. [Pełna lista zmian projektu źródłowego](https://github.com/node-red/node-red/compare/5.0.4...5.0.6)',
    fr_FR:
      'Mise à jour de Node-RED vers la version 5.0.6. Améliore la gestion du JSON mal formé, la configuration TLS, les événements multijoueurs et le comportement de l’éditeur ; met à jour JSONata ; et rétablit la compatibilité avec les systèmes Raspberry Pi concernés. [Liste complète des modifications en amont](https://github.com/node-red/node-red/compare/5.0.4...5.0.6)',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
