import React, {useState} from 'react'
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardRoundedIcon from '@material-ui/icons/CardGiftcardRounded';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChannelInfo, selectChannelName } from "./features/appSlice";
import { selectUser } from "./features/userSlice";
import db from "./firebase";
import { useEffect } from "react";
import firebase from 'firebase';


function Chat() {

    const user = useSelector(selectUser);
    const channelInfo = useSelector(selectChannelInfo);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelInfo) {
            db.collection('channels').doc(channelInfo).collection("messages").orderBy('timestamp', "asc").onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
        )

        }
        
    }, [channelInfo])

    const sendMessage = e => {
        e.preventDefault();
        db.collection('channels').doc(channelInfo).collection('messages').add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        })
        setInput("");
    }
    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />
            <div className="chat__messages">
                {messages.map((message) => (
                    <Message 
                    timestamp= {message.timestamp}
                    message={message.message}
                    user= {message.user}
                     />

                ))}

            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input value={input} disabled={!channelInfo} onChange={(e) => setInput(e.target.value)} placeholder={`Message #${channelName}`} />
                    <button disabled={!channelInfo} className="chat__inputButton" type="submit" onClick={sendMessage}/>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardRoundedIcon fontSize="large" />
                    <GifIcon fontSize="large"/>
                    <EmojiEmotionsIcon fontSize="large"/>

                </div>

            </div>
            
        </div>
    )
}

export default Chat
