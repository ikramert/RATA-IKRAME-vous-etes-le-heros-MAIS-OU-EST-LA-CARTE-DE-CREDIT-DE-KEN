// la twist
let twist = false;

// Création de l'objet "chapters"
let chapters = {
  introduction: {
    titre: "Mais où es la carte de crédit de Ken?",
    description:
      "Barbie doit absolument s’acheter une robe pour le bal de samedi. Sa carte de crédit est au maximum. Elle a pu une cenne! ...mais Ken, oui. Elle a besoin de sa carte, mais elle sait que Ken ne lui donnera pas. Il faut quelle l’obtienne a tout prix pour être la plus belle. Elle le remboursera, ne vous inquiétez pas.",
    image: "/assets/images/commencer.gif",
    boutons: [{ titre: "Commencer! ", destination: "debut" }],
  },
  debut: {
    titre: "Niveau 1 : Le Plan Fracassant",
    description:
      "Barbie découvre que la carte de crédit de Ken est cachée dans leur maison de poupée géante. Elle doit trouver un moyen de prendre la carte.",
    video: "/assets/videos/barbie_choquer.mp4", // video du chapitre 1
    boutons: [
      {
        titre: "Engager des fourmis",
        destination: "evasion",
      },
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
    video: "/assets/videos/barbie_surprise.mp4", // video du chapitre 2
    boutons: [
      {
        titre: "Un concert dans la cour",
        destination: "concert",
      },
      { titre: "Un feu au cabanon", destination: "feu" },
      {
        titre: "Se jeter dans la piscine",
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
      { titre: "La robe bleue", destination: "robebleue" },
      { titre: "La robe rose", destination: "roberose" },
    ],
  },

  surprise: {
    titre: "Fin - Fête Surprise",
    description:
      "Ken ne fait pas tomber sa carte, Barbie n’aura pas sa carte de crédit.",
    image: "/assets/images/image_fin.gif", // l'image de fin
    boutons: [{ titre: "Recommencer", destination: "debut" }],
  },

  feu: {
    titre: "Niveau 3 - Cabanon en feu",
    description:
      "Le cabanon a coûté sept milles $ à détruire et reconstruire, vous êtes en dette vous deux.",
    image: "/assets/images/feu.gif", // l'image de feu/ fin
    boutons: [{ titre: "Recommencer", destination: "debut" }],
  },

  noyade: {
    titre: "Niveau 3 - Noyade",
    description: "Aucun des deux ne sait nager, ils se sont noyés.",
    image: "/assets/images/noyade.jpg", // image noyade
    boutons: [{ titre: "Recommencer", destination: "debut" }],
  },

  robebleue: {
    titre: "Niveau 4 - Robe bleue",
    description:
      "Barbie a pris du poids. Elle ne rentre pas dans la robe et a brisé le zipper. Il faut qu'elle paye pour les dommages. Elle ne peut plus aller au Bal.",
    image: "/assets/images/robe_bleue.gif", // image barbie robe blueue
    boutons: [{ titre: "Recommencer", destination: "debut" }],
  },

  roberose: {
    titre: "Niveau 4 - Robe rose",
    description:
      "Barbie a enfin sa robe, elle est prête pour le bal. Elle doit passer à la caisse, mais celle-ci se sent coupable. Que doit-elle faire?",
    image: "/assets/images/robe_rose.gif", // Robe rose
    boutons: [
      { titre: "Payer", destination: "payer" },
      { titre: "Dire la vérité", destination: "verite" },
    ],
  },

  payer: {
    titre: "Fin - Payer",
    description: "Oups! Barbie n’a pas le NIP de la carte...",
    image: "/assets/images/payer.gif", // image carte de credit
    boutons: [{ titre: "Recommencer", destination: "debut" }],
  },

  verite: {
    titre: "Fin - Dire la vérité",
    description:
      "Ken apprécie l'honnêteté de Barbie et décide de lui acheter sa robe.",
    image: "/assets/images/verite.gif", // l'image de fin verite
    boutons: [{ titre: "Recommencer", destination: "debut" }],
  },
};

let trameSonoreElement = document.createElement("audio");
trameSonoreElement.src = "/assets/chansons/trame_sonore.mp3";
document.body.appendChild(trameSonoreElement);

let tournerPageElement = document.createElement("audio");
tournerPageElement.src = "/assets/sons/page_tourne.wav";
document.body.appendChild(tournerPageElement);

// Fonction pour vérifier si la sourdine est activée
function isMuteChecked() {
  let muteCheckbox = document.getElementById("mute-checkbox");
  return muteCheckbox ? muteCheckbox.checked : false;
}

// Fonction pour jouer l'audio de la trame sonore
function playTrameSonore() {
  if (!isMuteChecked()) {
    if (trameSonoreElement.paused) { // Vérifie si la trame sonore est déjà en lecture
      trameSonoreElement.play();
    }
  } else {
    trameSonoreElement.pause(); // Mettre en pause la trame sonore si la case "mute" est cochée
  }
}

// Fonction pour jouer l'audio de la page qui tourne
function playTournerPage() {
  if (!isMuteChecked()) {
    tournerPageElement.currentTime = 0;
    tournerPageElement.play();
  }
}

// Fonction pour naviguer vers un chapitre spécifique
function goToChapter(chapitreCle) {
  if (chapters[chapitreCle]) {
    let chapitre = chapters[chapitreCle];

    // Sauvegarder la clé du chapitre actuel dans localStorage
    localStorage.setItem("currentChapter", chapitreCle);

    // Sauvegarder l'état du twist dans localStorage
    if (twist) {
      localStorage.setItem("twistActivated", "true");
    } else {
      localStorage.removeItem("twistActivated");
    }
  }
}
    // Jouer l'audio de la page qui tourne
    playTournerPage();
// PS3.2
function goToChapter(chapitreCle) {
  if (chapters[chapitreCle]) {
    let chapitre = chapters[chapitreCle];

    // Sauvegarder la clé du chapitre actuel dans localStorage
    localStorage.setItem("currentChapter", chapitreCle);

    // Sauvegarder l'état du twist dans localStorage
    if (twist) {
      localStorage.setItem("twistActivated", "true");
    } else {
      localStorage.removeItem("twistActivated");
    }

    // Réinitialiser le temps actuel de l'audio
    playTrameSonore();

    // Jouer l'audio de la page qui tourne
    playTournerPage();

    // Modifier le titre de la page
    document.title = chapitre.titre;

    // Modifier le titre du chapitre
    document.getElementById("chapter-title").innerText = chapitre.titre;

    // Modifier la description du chapitre
    document.getElementById("chapter-description").innerText =
      chapitre.description;

    // Modifier l'image ou la vidéo du chapitre
    let mediaElement = document.getElementById("chapter-media");

    if (chapitre.video) {
      // Si le chapitre a une vidéo, afficher la vidéo
      mediaElement.innerHTML = `<video id="chapter-video" muted autoplay loop><source src="${chapitre.video}" type="video/mp4"></video>`;
    } else {
      // Sinon, afficher l'image
      mediaElement.innerHTML = `<img id="chapter-image" src="${chapitre.image}" alt="${chapitre.titre}">`;
    }

    // Modifier les boutons du chapitre
    let buttonsContainer = document.getElementById("buttons-container");
    buttonsContainer.innerHTML = "";
    if (chapitre.boutons.length > 0) {
      // Créer des boutons pour chaque option
      chapitre.boutons.forEach(function (bouton, index) {
        let buttonElement = document.createElement("button");
        buttonElement.innerText = bouton.titre;

        // Ajouter un événement "click" pour chaque bouton
        buttonElement.addEventListener("click", function () {
          // Lorsque le bouton est cliqué, aller au chapitre correspondant
          goToChapter(bouton.destination);
        });

        buttonsContainer.appendChild(buttonElement);
      });
    } else {
      // Fin du jeu
      buttonsContainer.innerHTML = "<p>Fin du jeu.</p>";
    }

    // Vérifier et modifier la variable twist
    if (chapitreCle === "payer") {
      twist = true;
    }
  } else {
    console.log("Mauvaise clé de chapitre : " + chapitreCle);
  }
}

// Fonction pour afficher le premier chapitre
function afficherPremierChapitre() {
  // Récupérer depuis localStorage
  let currentChapterKey = localStorage.getItem("currentChapter");
  // Afficher ce chapitre
  if (currentChapterKey && chapters[currentChapterKey]) {
    goToChapter(currentChapterKey);
  } else {
    // Sinon, afficher le premier chapitre
    goToChapter("introduction");
  }

  // Démarrer l'audio lors de l'affichage du premier chapitre
  playTrameSonore();
}

afficherPremierChapitre();

// Ajouter un événement "change" pour la case à cocher "Mute"
let muteCheckbox = document.getElementById("mute-checkbox");

if (muteCheckbox) {
  muteCheckbox.addEventListener("change", function () {
    // Appeler la fonction playTrameSonore lorsque l'état de la sourdine change
    playTrameSonore();
  });
}

// Ajouter un événement "click" pour le bouton "Réinitialiser"
let resetButton = document.getElementById("reset-button");

if (resetButton) {
  resetButton.addEventListener("click", function () {
    // Réinitialiser l'option de sourdine
    if (muteCheckbox) {
      muteCheckbox.checked = false;
    }

    // Effacer le localStorage
    localStorage.clear();

    // Recharger la page pour redémarrer l'histoire
    window.location.reload();
  });
}

if (muteCheckbox) {
  muteCheckbox.addEventListener("change", function () {
    // Appeler la fonction playTrameSonore lorsque l'état de la sourdine change
    playTrameSonore();

    // Sauvegarder l'état de la sourdine dans localStorage
    localStorage.setItem("muteStatus", muteCheckbox.checked.toString());
  });

  // Récupérer l'état de la sourdine depuis localStorage
  let savedMuteStatus = localStorage.getItem("muteStatus");

  if (savedMuteStatus !== null) {
    // Mettre à jour l'état de la sourdine en fonction de la valeur sauvegardée
    muteCheckbox.checked = savedMuteStatus === "true";
  }
}

