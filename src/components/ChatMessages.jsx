import React from 'react'
import { auth } from '../config/firebase'

const  ChatMessages = (props) => {
    const {text, uid, photoURL} = props.message
    const messageClass=uid === auth.currentUser.uid ?'sent':'recieved'
    return (
        <div className={`message ${messageClass}`}>
      <img alt="profile" src={photoURL} />
      <p>{text}</p>
    </div>
    )
}

export default ChatMessages