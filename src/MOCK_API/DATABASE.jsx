const DATABASE = {
  ANNONCES: [
    {
      id: "1",
      author_id: "2",
      date: "2020-10-29 15:00:00",
      object: "Annonce",
      descr:
        "Bienvenue sur cette page de test et merci pour votre connexion :)\nVous pouvez voir l'auteur de cette annonce dans le coin supérieur droit.\nLaissez-vous guider en lisant les commentaires ci-dessous."
    },
    {
      id: "2",
      author_id: "1",
      date: "2020-10-29 15:00:00",
      object: "Autre annonce",
      descr:
        "Merci d'avoir testé une autre annonce :)\nVous pouvez vous aider des commentaires pour y rédiger un nouveau message."
    }
  ],
  USERS: [
    {
      id: "1",
      name: "Alice"
    },
    {
      id: "2",
      name: "Bob"
    },
    {
      id: "3",
      name: "Charlie"
    }
  ],
  MESSAGES: [
    {
      id: "1",
      annonce_id: "1",
      author: "1",
      date: "2020-10-30 09:01:02",
      text:
        "Ce message est le premier indexé en base, mais l'affichage se fait quand même dans l'ordre chronologique inverse.",
      private: false
    },
    {
      id: "2",
      annonce_id: "2",
      author: "1",
      date: "2020-10-30 10:00:02",
      text:
        "Il n'y a pas beaucoup de messages sur mon annonce... :'(\nRendons le test un peu plus interactif en enrichissant cette page :)\n\n- Saisissez un message. Votre limite de caractères est indiquée en bas à gauche.\n- Le bouton de publication ne s'active que lorsque la zone de texte est non vide.\n- Le toggle vous permet de définir le message comme privé ou public.\n\nPour ce test, le local storage jouera le rôle du serveur. Vous pouvez restaurer son état initial en cliquant sur le bouton reset en haut à droite de la page.",
      private: false
    },
    {
      id: "3",
      annonce_id: "1",
      author: "3",
      date: "2020-10-30 09:00:01",
      text:
        "En effet, bien qu'étant le troisième enregistrement de la table, la date de ce message est antérieure aux autres.",
      private: false
    },
    {
      id: "4",
      annonce_id: "1",
      author: "1",
      date: "2020-10-30 09:30:15",
      text:
        "Vous remarquerez que même l'auteur du message ne pouvait voir son message privé.\nMais ce comportement pourrait être facilement modifié si besoin.",
      private: true
    },
    {
      id: "5",
      annonce_id: "1",
      author: "3",
      date: "2020-10-30 11:00:15",
      text:
        "Les messages privés ne s'affichent que pour l'auteur de l'annonce.",

      private: true
    },
    {
      id: "6",
      annonce_id: "1",
      author: "2",
      date: "2020-10-30 11:00:16",
      text:
        "Ici, vous pouvez voir une liste de messages : ceux qui sont associés à cette annonce.\n\nSur cette page, il y a aussi deux composants select en haut à gauche. Un pour modifier l'utilisateur connecté, et l'autre pour voir une autre annonce.\n\nConnectez-vous avec l'auteur de cette annonce pour afficher les messages privés.\n\nVous pouvez aussi changer d'annonce pour voir une autre liste de messages.",
      private: false
    }
  ]
};

export default DATABASE;
