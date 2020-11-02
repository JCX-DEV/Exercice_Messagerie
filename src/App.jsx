import React, { useState, useEffect } from "react";
import Page from "./Components/Organisms/Page.jsx";
import Header from "./Components/Organisms/Header.jsx";
import "./styles.scss";
import API from "./MOCK_API/mock_api.jsx";

export default function App() {
  const [user, setUser] = useState("1");
  const [annonce, setAnnonce] = useState("1");
  const [messages, setMessages] = useState(API.getMessages(user, annonce));

  useEffect(() => {
    setMessages(API.getMessages(user, annonce));
  }, [user, annonce]);

  return (
    <div className="App">
      <Header
        user={user}
        users={API.getUsers()}
        annonce={annonce}
        annonces={API.getAnnonces()}
        selectUser={(user) => setUser(user)}
        selectAnnonce={(annonce) => setAnnonce(annonce)}
        reset={() => {
          API.resetTables();
          setMessages(API.getMessages(user, annonce));
        }}
      />
      <div className="app-body">
        <Page
          user={user}
          annonce={API.getAnnonce(annonce)}
          messages={messages}
          postMessage={(text, confidential) => {
            setMessages(API.postMessage(user, annonce, text, confidential));
          }}
        />
      </div>
    </div>
  );
}
