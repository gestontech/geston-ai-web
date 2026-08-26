# GESTON AI — Site Web (PWA)

Une seule page (HTML/CSS/JS, sans build) qui parle au même backend que l'app
Android. Fonctionne dans n'importe quel navigateur, et s'installe sur
iPhone/iPad via "Ajouter à l'écran d'accueil" dans Safari.

## Déploiement (GitHub Pages — gratuit, depuis ton iPhone)

1. Crée un nouveau repository GitHub, ex : `geston-ai-web`
2. Uploade ces 5 fichiers/dossiers à la racine du repo :
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icons/icon-192.png`
   - `icons/icon-512.png`
   - `icons/apple-touch-icon.png`
3. Va dans **Settings** du repo → **Pages** (menu de gauche)
4. Sous "Build and deployment" → Source : **Deploy from a branch**
5. Branch : **main**, dossier : **/ (root)** → **Save**
6. Attends 1-2 minutes → ton site est en ligne à une adresse du type :
   `https://<ton-nom-utilisateur>.github.io/geston-ai-web/`

## Installer sur iPhone/iPad

1. Ouvre le lien ci-dessus dans **Safari** (pas Chrome — le "Ajouter à
   l'écran d'accueil" de Safari est ce qui rend l'app installable sur iOS)
2. Bouton Partager (carré avec flèche) → **Sur l'écran d'accueil**
3. L'icône GESTON AI apparaît sur l'écran d'accueil, s'ouvre en plein écran
   comme une vraie app (pas de barre de navigateur visible)

## Installer sur PC/Mac (Chrome/Edge)

Une icône d'installation apparaît dans la barre d'adresse — clique dessus
pour installer comme une app de bureau.

## Notes

- Le backend (`API_BASE` dans `index.html`) pointe déjà vers
  `https://geston-ai-backend.onrender.com/`.
- Le CORS du backend est actuellement ouvert (`origin: '*'`) donc ce site
  fonctionnera sans configuration supplémentaire côté serveur.
- Cette page ne nécessite aucun outil de build (pas de npm, pas de
  compilation) — c'est un simple site statique.
