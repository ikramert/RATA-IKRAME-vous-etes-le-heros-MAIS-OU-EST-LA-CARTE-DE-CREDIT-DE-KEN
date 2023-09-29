// Création de l'objet "chapters"
let chapters = {
  debut: {
    titre: "Niveau 1 : Le Plan Fracassant",
    description:
      "Barbie découvre que la carte de crédit de Ken est cachée dans leur maison de poupée géante. Elle doit trouver un moyen de prendre la carte.",
    image: "assets/images/debut.jpg", // Image du chapitre 1
    boutons: [
      { titre: "Engager une équipe de fourmis", destination: "evasion" },
      {
        titre: "Organiser une fête surprise",
        destination: "surprise",
      },
    ],
  },
  evasion: {
    titre: "Niveau 2 : L'Évasion",
    description:
      "Maintenant, il faut que Barbie aide les fourmis à s'échapper de la maison de poupée géante sans que Ken ne s’en rende compte. Il faut qu’elle fasse diversion. Choisissez un moyen de diversion.",
    image: "assets/images/evasion.jpg", // image du chapitre 2
    boutons: [
      {
        titre: "Un concert dans la cour pour attirer Ken à l’extérieur",
        destination: "concert",
      },
      { titre: "Mettre le feu au cabanon", destination: "feu" },
      { titre: "Se jeter dans la piscine", destination: "noyade" },
    ],
  },

  concert: {
    titre: "Niveau 3 : Le centre commercial",
    description:
      "Barbie est au centre commercial avec la carte de crédit de Ken et se rend à la boutique Coco Loco. Ils ont deux robes qu'elle veut. Aidez-la à choisir une robe. Son choix va impacter son aventure.",
    image: "assets/images/centre_commercial.jpg", // image du chapitre 3
    boutons: [
      { titre: "La robe bleue", destination: "robebleue" },
      { titre: "La robe rose", destination: "roberose" },
    ],
  },

  surprise: {
    titre: "Fin - Fête Surprise",
    description:
      "Ken ne fait pas tomber sa carte, Barbie n’aura pas sa carte de crédit.",
    image: "assets/images/image_fin.jpg", // l'image de fin
    boutons: [{ titre: "Recommencer", destination: "debut" }],
  },

  feu: {
    titre: "Niveau 3 - Cabanon en feu",
    description:
      "Le cabanon a coûté 7000$ à détruire et reconstruire, vous êtes en dette vous deux.",
    image: "assets/images/feu.gif", // l'image de feu/ fin
    boutons: [{ titre: "Recommencer", destination: "debut" }],
  },

  noyade: {
    titre: "Niveau 3 - Noyade",
    description: "Aucun des deux ne sait nager, ils se sont noyés.",
    image: "assets/images/noyade.jpg", // image noyade
    boutons: [{ titre: "Recommencer", destination: "debut" }],
  },

  robebleue: {
    titre: "Niveau 4 - Robe bleue",
    description:
      "Barbie a pris du poids. Elle ne rentre pas dans la robe et a brisé le zipper. Il faut qu'elle paye pour les dommages. Elle ne peut plus aller au Bal.",
    image: "assets/images/robe_bleue", // image barbie robe blueue
    boutons: [{ titre: "Recommencer", destination: "debut" }],
  },

  roberose: {
    titre: "Niveau 4 - Robe rose",
    description:
      "Barbie a enfin sa robe, elle est prête pour le bal. Elle doit passer à la caisse, mais celle-ci se sent coupable. Que doit-elle faire?",
    image: "assets/images/robe_rose.jpg", // Robe rose
    boutons: [
      { titre: "Payer", destination: "payer" },
      { titre: "Dire la vérité", destination: "verite" },
    ],
  },

  payer: {
    titre: "Fin - Payer",
    description:
      "Oups! Barbie n’a pas le NIP de la carte. Il faut qu’elle supplie Ken.",
    image: "images/assets/payer.jpg", // image carte de credit
    boutons: [{ titre: "Recommencer", destination: "debut" }],
  },

  verite: {
    titre: "Fin - Dire la vérité",
    description:
      "Ken apprécie l'honnêteté de Barbie et décide de lui acheter sa robe.",
    image: "assets/images/verite.jpg", // l'image de fin verite
    boutons: [{ titre: "Recommencer", destination: "debut" }],
  },
};

// Fonction pour aller à un chapitre spécifique ( J'ai utilise des ressources internet pour la portion de ce code)
function goToChapter(chapitreCle) {
  if (chapters[chapitreCle]) {
    let chapitre = chapters[chapitreCle];
    console.log("Titre du chapitre : " + chapitre.titre);
    console.log("Description du chapitre : " + chapitre.description);

    if (chapitre.boutons.length > 0) {
      console.log("Destinations possibles :");
      chapitre.boutons.forEach(function (bouton, index) {
        console.log(index + 1 + ": " + bouton.titre);
      });
    } else {
      console.log("Fin du jeu.");
    }
  } else {
    console.log("Mauvaise clé de chapitre : " + chapitreCle);
  }
}

// Fonction pour afficher le premier chapitre
function afficherPremierChapitre() {
  goToChapter("debut");
}
afficherPremierChapitre();
