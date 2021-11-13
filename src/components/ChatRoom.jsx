import React, { useState, useRef } from "react";
import { firebase, auth, firestore } from "../config/firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessages from "./ChatMessages";

const ChatRoom = () => {
  const dummy = useRef();

  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt");

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    
      const { uid, photoURL } = auth.currentUser;

      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
      });

      setFormValue("");

      dummy.current.scrollIntoView({ behavior: "smooth" });
    
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessages key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type message here!"
        />

        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
