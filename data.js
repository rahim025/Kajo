// Contenu des cours — programme collège (niveau BEPC), Bénin
const SUBJECTS = [
  {
    id: "maths",
    name: "Mathématiques",
    color: "#c0532d",
    iconSvg: `<svg viewBox="0 0 24 24"><path d="M4 20L12 5l8 15H4z" fill="currentColor"/><path d="M9 20l3-6 3 6" stroke="#fbf6ea" stroke-width="1.3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    lessons: [
      {
        id: "maths-1",
        title: "Les fractions",
        content: `
          <p>Une <strong>fraction</strong> représente une partie d'un tout. Elle s'écrit a/b, où :</p>
          <ul>
            <li><strong>a</strong> est le numérateur (le nombre de parts prises)</li>
            <li><strong>b</strong> est le dénominateur (le nombre total de parts, jamais égal à 0)</li>
          </ul>
          <p><strong>Exemple :</strong> Si tu partages une igname en 4 morceaux égaux et que tu en prends 3, tu as pris 3/4 de l'igname.</p>
          <p><strong>Additionner deux fractions de même dénominateur :</strong><br>
          2/5 + 1/5 = (2+1)/5 = 3/5</p>
          <p><strong>Simplifier une fraction :</strong> on divise le numérateur et le dénominateur par leur plus grand diviseur commun.<br>
          Exemple : 6/8 = (6÷2)/(8÷2) = 3/4</p>
        `,
        quiz: [
          {
            q: "Dans la fraction 5/8, quel est le dénominateur ?",
            options: ["5", "8", "13", "3"],
            answer: 1,
          },
          {
            q: "Combien vaut 2/6 simplifié ?",
            options: ["1/2", "1/3", "2/3", "1/6"],
            answer: 1,
          },
          {
            q: "3/7 + 2/7 = ?",
            options: ["5/14", "5/7", "6/7", "1/7"],
            answer: 1,
          },
        ],
      },
      {
        id: "maths-2",
        title: "Le théorème de Pythagore",
        content: `
          <p>Dans un <strong>triangle rectangle</strong>, le carré de l'hypoténuse (le côté opposé à l'angle droit)
          est égal à la somme des carrés des deux autres côtés.</p>
          <p><strong>Formule :</strong> BC² = AB² + AC²</p>
          <p><strong>Exemple :</strong> Si AB = 3 cm et AC = 4 cm, alors :<br>
          BC² = 3² + 4² = 9 + 16 = 25<br>
          BC = √25 = 5 cm</p>
          <p>Ce théorème sert à calculer une distance qu'on ne peut pas mesurer directement, par exemple la hauteur d'un mur ou d'un arbre.</p>
        `,
        quiz: [
          {
            q: "Le théorème de Pythagore s'applique à quel type de triangle ?",
            options: ["Équilatéral", "Rectangle", "Isocèle", "N'importe lequel"],
            answer: 1,
          },
          {
            q: "Si AB = 6 et AC = 8, combien vaut BC (hypoténuse) ?",
            options: ["10", "14", "7", "12"],
            answer: 0,
          },
        ],
      },
    ],
  },
  {
    id: "francais",
    name: "Français",
    color: "#8a2f4b",
    iconSvg: `<svg viewBox="0 0 24 24"><path d="M12 5c-2-1.3-4.6-1.6-7-1v13c2.4-.6 5 0 7 1.3V5z" fill="currentColor"/><path d="M12 5c2-1.3 4.6-1.6 7-1v13c-2.4-.6-5 0-7 1.3V5z" fill="currentColor" opacity=".7"/></svg>`,
    lessons: [
      {
        id: "fr-1",
        title: "Les classes grammaticales",
        content: `
          <p>Chaque mot d'une phrase appartient à une <strong>classe grammaticale</strong> (ou nature) :</p>
          <ul>
            <li><strong>Nom</strong> : désigne une personne, un lieu, une chose (ex : marché, Cotonou)</li>
            <li><strong>Verbe</strong> : exprime une action ou un état (ex : manger, être)</li>
            <li><strong>Adjectif</strong> : qualifie un nom (ex : grand, rouge)</li>
            <li><strong>Pronom</strong> : remplace un nom (ex : il, celui-ci)</li>
            <li><strong>Adverbe</strong> : modifie un verbe, un adjectif (ex : rapidement, très)</li>
          </ul>
          <p><strong>Exemple analysé :</strong> « Le petit garçon court vite. »<br>
          Le (déterminant) — petit (adjectif) — garçon (nom) — court (verbe) — vite (adverbe)</p>
        `,
        quiz: [
          {
            q: "Dans « la voiture rouge », quelle est la classe grammaticale de « rouge » ?",
            options: ["Nom", "Verbe", "Adjectif", "Adverbe"],
            answer: 2,
          },
          {
            q: "Quel mot est un pronom ?",
            options: ["Cotonou", "elle", "grand", "chanter"],
            answer: 1,
          },
        ],
      },
      {
        id: "fr-2",
        title: "Le résumé de texte",
        content: `
          <p>Résumer un texte, c'est en donner l'essentiel en beaucoup moins de mots, sans rien inventer.</p>
          <p><strong>Méthode en 3 étapes :</strong></p>
          <ol>
            <li>Lire le texte entièrement pour comprendre l'idée générale</li>
            <li>Repérer l'idée principale de chaque paragraphe</li>
            <li>Reformuler ces idées avec tes propres mots, dans l'ordre du texte</li>
          </ol>
          <p><strong>À éviter :</strong> copier des phrases entières du texte, ajouter ton avis personnel, changer l'ordre des idées.</p>
        `,
        quiz: [
          {
            q: "Un bon résumé doit surtout...",
            options: [
              "Copier les plus belles phrases",
              "Donner l'essentiel avec ses propres mots",
              "Ajouter son opinion",
              "Être plus long que le texte original",
            ],
            answer: 1,
          },
        ],
      },
    ],
  },
  {
    id: "svt",
    name: "SVT",
    color: "#2f6b4f",
    iconSvg: `<svg viewBox="0 0 24 24"><path d="M20 4C10 4 4 10 4 18c0 1 .8 2 2 2 8 0 14-6 14-16z" fill="currentColor"/><path d="M6 18C10 14 14 10 19 5" stroke="#fbf6ea" stroke-width="1.1" stroke-linecap="round" fill="none"/></svg>`,
    lessons: [
      {
        id: "svt-1",
        title: "La reproduction chez les plantes",
        content: `
          <p>La plupart des plantes se reproduisent grâce à leurs <strong>fleurs</strong>.</p>
          <p><strong>Étapes :</strong></p>
          <ol>
            <li><strong>Pollinisation</strong> : le pollen (partie mâle) est transporté vers le pistil (partie femelle), souvent par le vent ou les insectes</li>
            <li><strong>Fécondation</strong> : le pollen féconde l'ovule</li>
            <li><strong>Formation du fruit</strong> : l'ovule fécondé devient une graine, protégée par un fruit</li>
          </ol>
          <p><strong>Exemple local :</strong> Le manguier produit des fleurs qui, après pollinisation par les insectes, donnent naissance aux mangues contenant les graines.</p>
        `,
        quiz: [
          {
            q: "Quelle étape vient en premier ?",
            options: ["Formation du fruit", "Fécondation", "Pollinisation", "Germination"],
            answer: 2,
          },
          {
            q: "Qui transporte souvent le pollen ?",
            options: ["Les racines", "Les insectes et le vent", "L'eau du sol", "Les feuilles"],
            answer: 1,
          },
        ],
      },
    ],
  },
  {
    id: "histoire",
    name: "Histoire-Géographie",
    color: "#22385c",
    iconSvg: `<svg viewBox="0 0 24 24"><path d="M4 20V11a8 8 0 0116 0v9H4z" fill="currentColor"/><rect x="3.2" y="19" width="17.6" height="2" rx="0.6" fill="currentColor"/></svg>`,
    lessons: [
      {
        id: "histoire-1",
        title: "Le royaume du Danxomè",
        content: `
          <p>Le <strong>royaume du Danxomè</strong> (ou Dahomey) fut l'un des royaumes les plus puissants
          d'Afrique de l'Ouest, fondé au 17ᵉ siècle, avec pour capitale <strong>Abomey</strong>.</p>
          <p><strong>Points clés :</strong></p>
          <ul>
            <li>Fondé vers 1625 par le roi Houégbadja</li>
            <li>Connu pour son armée organisée, incluant les célèbres Agojie (guerrières)</li>
            <li>Les palais royaux d'Abomey sont aujourd'hui classés au patrimoine mondial de l'UNESCO</li>
            <li>Le royaume a résisté à la colonisation française jusqu'en 1894</li>
          </ul>
        `,
        quiz: [
          {
            q: "Quelle était la capitale du royaume du Danxomè ?",
            options: ["Porto-Novo", "Abomey", "Cotonou", "Parakou"],
            answer: 1,
          },
          {
            q: "Les palais royaux d'Abomey sont classés par quelle organisation ?",
            options: ["ONU", "UNESCO", "Union Africaine", "CEDEAO"],
            answer: 1,
          },
        ],
      },
    ],
  },
  {
    id: "anglais",
    name: "Anglais",
    color: "#d9a441",
    iconSvg: `<svg viewBox="0 0 24 24"><path d="M4 5h16a1 1 0 011 1v9a1 1 0 01-1 1H9l-4 4v-4H4a1 1 0 01-1-1V6a1 1 0 011-1z" fill="currentColor"/><text x="12" y="13.6" font-size="7.5" font-weight="700" fill="#22385c" text-anchor="middle" font-family="Arial">Aa</text></svg>`,
    lessons: [
      {
        id: "ang-1",
        title: "Present Simple vs Present Continuous",
        content: `
          <p><strong>Present Simple</strong> : habitudes, faits généraux, vérités.<br>
          Ex : <em>I go to school every day.</em> (Je vais à l'école tous les jours.)</p>
          <p><strong>Present Continuous</strong> : action en train de se passer maintenant.<br>
          Ex : <em>I am reading a book right now.</em> (Je suis en train de lire un livre.)</p>
          <p><strong>Astuce :</strong> Present Continuous = be (am/is/are) + verbe + ing</p>
        `,
        quiz: [
          {
            q: "Comment dit-on « Elle mange » (habitude) ?",
            options: ["She is eating", "She eat", "She eats", "She eating"],
            answer: 2,
          },
          {
            q: "Comment dit-on « Je suis en train de lire » ?",
            options: ["I read", "I am reading", "I reads", "I reading"],
            answer: 1,
          },
        ],
      },
    ],
  },
];
