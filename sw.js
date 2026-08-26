// Service worker minimal — nécessaire pour que le navigateur propose
// "Installer l'application" / "Ajouter à l'écran d'accueil".
// Pas de cache agressif pour l'instant : on privilégie toujours le réseau,
// pour que le chat reste à jour avec le backend.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Laisse passer toutes les requêtes normalement (pas de mode hors-ligne pour l'instant)
});
