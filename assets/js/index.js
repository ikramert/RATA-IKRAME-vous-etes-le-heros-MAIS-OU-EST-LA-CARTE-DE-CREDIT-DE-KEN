//TRAVAILLE PRESENTEMENT SUR MON CSS

// la twist
let twist = false;

// Création de l'objet "chapters"
let chapters = {
  introduction: {
    titre: "Mais ou es la carte de Ken?",
    description:
      "Barbie doit absolument s’acheter une robe pour le bal de samedi. Sa carte de crédit est au maximum. Elle a pu une cenne! ...mais Ken, oui. Elle a besoin de sa carte, mais elle sait que Ken ne lui donnera pas. Il faut quelle l’obtienne a tout prix pour être la plus belle. Elle le remboursera, ne vous inquiétez pas.",
    image: "/assets/images/commencer.gif",
    boutons: [{ titre: "Commencer !", destination: "debut" }],
  },
  debut: {
    titre: "Niveau 1 : Le Plan Fracassant",
    description:
      "Barbie découvre que la carte de crédit de Ken est cachée dans leur maison de poupée géante. Elle doit trouver un moyen de prendre la carte.",
    video: "/assets/videos/barbie_choquer.mp4", // video du chapitre 1
    boutons: [
      {
        titre: "Engager des fourmis.",
        destination: "evasion",
      },
      {
        titre: "Organiser une fête surprise.",
        destination: "surprise",
      },
    ],
  },
  evasion: {
    titre: "Niveau 2 : L'Évasion",
    description:
      "Maintenant, il faut que Barbie aide les fourmis à s'échapper de la maison de poupée géante sans que Ken ne s’en rende compte. Il faut qu’elle fasse diversion. Choisissez un moyen de diversion.",
    video: "/assets/videos/barbie_surprise.mp4", // video du chapitre 2
    boutons: [
      {
        titre: "Un concert dans la cour.",
        destination: "concert",
      },
      { titre: "Un feu au cabanon.", destination: "feu" },
      {
        titre: "Se jeter dans la piscine.",
        destination: "noyade",
      },
    ],
  },

  concert: {
    titre: "Niveau 3 : Le centre commercial",
    description:
      "Barbie est au centre commercial avec la carte de crédit de Ken et se rend à la boutique Coco Loco. Ils ont deux robes qu'elle veut. Aidez-la à choisir une robe. Son choix va impacter son aventure.",
    image: "/assets/images/centre_commerical.gif", // image du chapitre 3
    boutons: [
      { titre: "La robe bleue.", destination: "robebleue" },
      { titre: "La robe rose.", destination: "roberose" },
    ],
  },

  surprise: {
    titre: "Fin - Fête Surprise",
    description:
      "Ken ne fait pas tomber sa carte, Barbie n’aura pas sa carte de crédit.",
    image: "/assets/images/image_fin.gif", // l'image de fin
    boutons: [{ titre: "Recommencer.", destination: "debut" }],
  },

  feu: {
    titre: "Niveau 3 - Cabanon en feu",
    description:
      "Le cabanon a coûté sept milles $ à détruire et reconstruire, vous êtes en dette vous deux.",
    image: "/assets/images/feu.gif", // l'image de feu/ fin
    boutons: [{ titre: "Recommencer.", destination: "debut" }],
  },

  noyade: {
    titre: "Niveau 3 - Noyade",
    description: "Aucun des deux ne sait nager, ils se sont noyés.",
    image: "/assets/images/noyade.jpg", // image noyade
    boutons: [{ titre: "Recommencer.", destination: "debut" }],
  },

  robebleue: {
    titre: "Niveau 4 - Robe bleue",
    description:
      "Barbie a pris du poids. Elle ne rentre pas dans la robe et a brisé le zipper. Il faut qu'elle paye pour les dommages. Elle ne peut plus aller au Bal.",
    image: "/assets/images/robe_bleue.gif", // image barbie robe blueue
    boutons: [{ titre: "Recommencer.", destination: "debut" }],
  },

  roberose: {
    titre: "Niveau 4 - Robe rose",
    description:
      "Barbie a enfin sa robe, elle est prête pour le bal. Elle doit passer à la caisse, mais celle-ci se sent coupable. Que doit-elle faire?",
    image: "/assets/images/robe_rose.gif", // Robe rose
    boutons: [
      { titre: "Payer.", destination: "payer" },
      { titre: "Dire la vérité.", destination: "verite" },
    ],
  },

  payer: {
    titre: "Fin - Payer",
    description: "Oups! Barbie n’a pas le NIP de la carte...",
    image: "/assets/images/payer.gif", // image carte de credit
    boutons: [{ titre: "Recommencer.", destination: "debut" }],
  },

  verite: {
    titre: "Fin - Dire la vérité",
    description:
      "Ken apprécie l'honnêteté de Barbie et décide de lui acheter sa robe.",
    image: "/assets/images/verite.gif", // l'image de fin verite
    boutons: [{ titre: "Recommencer.", destination: "debut" }],
  },
};

let audioElement = document.createElement("audio");
audioElement.src = "/assets/sons/page_tourne.wav";
document.body.appendChild(audioElement);

// PS3.2
function goToChapter(chapitreCle) {
  if (chapters[chapitreCle]) {
    let chapitre = chapters[chapitreCle];

    // Sauvegarder la clé du chapitre en cours dans le localStorage
    localStorage.setItem("currentChapter", chapitreCle);

    // Sauvegarder l'état de la twist dans le localStorage
    if (twist) {
      localStorage.setItem("twistActivated", "true");
    } else {
      localStorage.removeItem("twistActivated");
    }

    audioElement.currentTime = 0;
    audioElement.play();

    // Modification du titre de la page
    document.title = chapitre.titre;

    // Modification du titre du chapitre
    document.getElementById("chapter-title").innerText = chapitre.titre;

    // Modification de la description du chapitre
    document.getElementById("chapter-description").innerText =
      chapitre.description;

    // Modification de l'image ou de la vidéo du chapitre
    let mediaElement = document.getElementById("chapter-media");

    if (chapitre.video) {
      // Si le chapitre a une vidéo, affichez la vidéo
      mediaElement.innerHTML = `<video id="chapter-video" muted autoplay loop><source src="${chapitre.video}" type="video/mp4"></video>`;
    } else {
      // Sinon, affichez l'image
      mediaElement.innerHTML = `<img id="chapter-image" src="${chapitre.image}" alt="${chapitre.titre}">`;
    }

    // Modification des boutons du chapitre
    let buttonsContainer = document.getElementById("buttons-container");
    buttonsContainer.innerHTML = "";
    if (chapitre.boutons.length > 0) {
      // Créez des boutons pour chaque option
      chapitre.boutons.forEach(function (bouton, index) {
        let buttonElement = document.createElement("button");
        buttonElement.innerText = bouton.titre;

        // Ajout d'un événement "click" pour chaque bouton
        buttonElement.addEventListener("click", function () {
          // Quand le bouton est cliqué, allez au chapitre correspondant
          goToChapter(bouton.destination);
        });

        buttonsContainer.appendChild(buttonElement);
      });
    } else {
      // Fin du jeu
      buttonsContainer.innerHTML = "<p>Fin du jeu.</p>";
    }

    // Vérification et modification de la variable twist
    if (chapitreCle === "payer") {
      twist = true;
    }
  } else {
    console.log("Mauvaise clé de chapitre : " + chapitreCle);
  }
}

// Fonction pour afficher le premier chapitre
function afficherPremierChapitre() {
  // Récupérer depuis le localStorage
  let currentChapterKey = localStorage.getItem("currentChapter");
  // afficher ce chapitre
  if (currentChapterKey && chapters[currentChapterKey]) {
    goToChapter(currentChapterKey);
  } else {
    // Sinon, afficher le premier chapitre
    goToChapter("introduction");
  }
}
afficherPremierChapitre();

// Ajouter un événement "click" pour le bouton "Réinitialiser"
let resetButton = document.getElementById("reset-button");

if (resetButton) {
  resetButton.addEventListener("click", function () {
    // Supprimer toutes les variables dans le localStorage
    localStorage.clear();

    // Recharger la page pour revenir au début de l'histoire
    window.location.reload();
  });
}
