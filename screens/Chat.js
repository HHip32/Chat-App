import React from "react";
import { GiftedChat } from "react-native-gifted-chat";

export default function Chat() {
    const [messages, setMessages] = React.useState([]);

    const onSend = (newMessages = []) => setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));

    return (
        <GiftedChat
            messages={messages}
            onSend={(newMessages) => onSend(newMessages)}
        />
    );
}