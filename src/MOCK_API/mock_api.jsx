import DATABASE from "./DATABASE.jsx";
import moment from "moment";

const API = {
  // utils
  timestamp() {
    let timestamp = new Date(Date.now());
    return `${timestamp.getFullYear()}-${timestamp.getMonth() < 9 ? "0" : ""}${
      timestamp.getMonth() + 1
    }-${timestamp.getDate()} ${
      timestamp.getHours() < 10 ? "0" : ""
    }${timestamp.getHours()}:${
      timestamp.getMinutes() < 10 ? "0" : ""
    }${timestamp.getMinutes()}:${
      timestamp.getSeconds() < 10 ? "0" : ""
    }${timestamp.getSeconds()}`;
  },

  // accesseurs des tables (getter & setter)
  Table_Annonces() {
    let localTable = JSON.parse(localStorage.getItem("db_annonces"));
    if (!localTable) {
      localTable = DATABASE.ANNONCES;
      localStorage.setItem("db_annonces", JSON.stringify(localTable));
    }
    return localTable;

    //return DATABASE.ANNONCES;
  },

  Table_Users() {
    let localTable = JSON.parse(localStorage.getItem("db_users"));
    if (!localTable) {
      localTable = DATABASE.USERS;
      localStorage.setItem("db_users", JSON.stringify(localTable));
    }
    return localTable;

    //return DATABASE.USERS;
  },

  Table_Messages() {
    let localTable = JSON.parse(localStorage.getItem("db_messages"));
    if (!localTable) {
      localTable = DATABASE.MESSAGES;
      localStorage.setItem("db_messages", JSON.stringify(localTable));
    }
    return localTable;

    //return DATABASE.MESSAGES;
  },

  getNewMessageId() {
    let localTable = this.Table_Messages();
    return localTable.length + 1;
  },

  insertMessage(newMessage) {
    let oldTable = this.Table_Messages();
    let newTable = [...oldTable, newMessage];
    localStorage.setItem("db_messages", JSON.stringify(newTable));
  },

  resetTables() {
    localStorage.removeItem("db_users");
    localStorage.removeItem("db_annonces");
    localStorage.removeItem("db_messages");
  },

  // API
  getUsers() {
    return this.Table_Users().map((user) => ({
      id: user.id,
      label: user.name
    }));
  },

  getAnnonces() {
    return this.Table_Annonces().map((annonce) => ({
      id: annonce.id,
      label: annonce.object
    }));
  },

  getAuthor(annonce_id) {
    let annonce = this.Table_Annonces().filter(
      (annonce) => annonce.id === annonce_id
    );
    return annonce.length > 0 ? annonce[0].author_id : null;
  },

  getUserName(user_id) {
    let user = this.Table_Users().filter((user) => user.id === user_id);
    return user.length > 0 ? user[0].name : "Inconnu";
  },

  getAnnonce(annonce_id) {
    let annonce = this.Table_Annonces().filter(
      (annonce) => annonce.id === annonce_id
    );
    return annonce.length > 0
      ? {
          author: this.getUserName(annonce[0].author_id),
          date: annonce[0].date,
          object: annonce[0].object,
          text: annonce[0].descr
        }
      : null;
  },

  getMessages(user_id, annonce_id) {
    let displayPrivate = this.getAuthor(annonce_id) === user_id;
    let messages = this.Table_Messages()
      .filter(
        (message) =>
          message.annonce_id === annonce_id &&
          (displayPrivate ? true : !message.private)
      )
      .map((message) => ({
        id: `${annonce_id}-${message.id}`,
        sender: this.getUserName(message.author),
        date: message.date,
        text: message.text,
        private: message.private
      }));

    messages.sort((a, b) => moment(b.date) - moment(a.date));

    return messages;
  },

  postMessage(user_id, annonce_id, message, confidential) {
    let newMessage = {
      id: `${this.getNewMessageId()}`,
      annonce_id: `${annonce_id}`,
      author: `${user_id}`,
      date: this.timestamp(),
      text: message,
      private: confidential
    };

    this.insertMessage(newMessage);
    alert("Message envoyé");
    return this.getMessages(user_id, annonce_id);
  }
};

export default API;
