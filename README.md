# Kajo — Cours en ligne (Bénin)

App gratuite de cours et quiz pour élèves du collège (niveau BEPC), utilisable **hors-ligne** une fois ouverte une première fois — utile en cas de connexion faible ou coûteuse.

## Contenu inclus
- **Mathématiques** : fractions, théorème de Pythagore
- **Français** : classes grammaticales, résumé de texte
- **SVT** : reproduction chez les plantes
- **Histoire-Géographie** : le royaume du Danxomè
- **Anglais** : Present Simple vs Present Continuous

Chaque leçon a un quiz de validation. La progression est sauvegardée sur l'appareil (aucun compte requis, aucun paiement).

## Mettre en ligne gratuitement (GitHub Pages)
1. Crée un compte sur [github.com](https://github.com) si tu n'en as pas
2. Crée un nouveau dépôt (repository), par exemple `kajo-cours`
3. Upload tous les fichiers de ce dossier à la racine du dépôt
4. Va dans **Settings > Pages**, choisis la branche `main`, dossier `/root`
5. L'app sera accessible à `https://ton-nom.github.io/kajo-cours/`

## Installer l'app sur téléphone
Une fois le site ouvert dans Chrome (Android) :
1. Menu (⋮) en haut à droite
2. **Ajouter à l'écran d'accueil**
3. L'app s'installe comme une vraie application, utilisable même sans connexion ensuite

## Ajouter d'autres leçons
Tout le contenu se trouve dans `data.js`. Pour ajouter une leçon, copie le format d'une leçon existante (titre, contenu HTML, questions de quiz) et ajoute-la dans le tableau `lessons` de la matière concernée.

## Fichiers
- `index.html` — structure de la page
- `style.css` — mise en forme
- `data.js` — tout le contenu pédagogique
- `app.js` — navigation, quiz, progression
- `manifest.json` + `sw.js` — rendent l'app installable et utilisable hors-ligne
- `icon-192.png`, `icon-512.png` — icônes de l'app
