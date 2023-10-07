import { useState, useEffect, useRef, FormEvent } from "react";
import { db } from "@/lib/firebase";
import firebase from "firebase/compat/app";
import { Message } from "@/types/chat";
import { useAuth } from "@/context/AuthContext";
import styles from "@/styles/ChatRoom.module.css"; 

function ChatRoom() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState("");
    const { user, loading } = useAuth();
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (loading) return;

        const unsubscribe = db
            .collection("messages")
            .orderBy("timestamp")
            .onSnapshot((snapshot) => {
                const fetchedMessages: Message[] = snapshot.docs.map((doc) => ({
                    uid: doc.data().uid,
                    text: doc.data().text,
                    timestamp: doc.data().timestamp,
                }));
                setMessages(fetchedMessages);
                // Scroll to the bottom of the chat
                chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
            });

        return () => unsubscribe();
    }, [loading]);

    const handleSendMessage = async (e: FormEvent) => {
        e.preventDefault();
        if (newMessage.trim() === "" || !user) return;

        try {
            await db.collection("messages").add({
                uid: user.uid,
                text: newMessage,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
            setNewMessage("");
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    if (loading) return <p className={styles.loading}>Loading...</p>;
    if (!user) return <p className={styles.error}>Please sign in to chat.</p>;

    return (
        <div className={styles.chatContainer}>
            <div className={styles.header}>
                <div>Chat Portal</div>
                <div className={styles.userName}>
                    <span className={styles.userIcon}></span>
                    {user.displayName}
                    <span className={styles.userStatus}>Online</span>
                </div>
            </div>
            <div className={styles.chatContainer2}>
                <div className={styles.messagesColumn}>
                    <div className={styles.messages}>
                        {messages.map((message) => (
                            <div
                                key={
                                    message.timestamp?.toMillis() || message.uid
                                }
                                className={
                                    message.uid === user.uid
                                        ? styles.myMessage
                                        : styles.theirMessage
                                }
                            >
                                <strong>
                                    {message.uid === user.uid
                                        ? user.displayName
                                        : "Other User Name"}
                                </strong>
                                : {message.text}
                            </div>
                        ))}
                        <div ref={chatEndRef}></div>
                    </div>
                </div>

                <div className={styles.usersColumn}>
                    <div className={styles.usersList}>
                        <p>Online Users</p>
                        {/* Sample list of users. You can replace this with dynamic data */}
                        <div className={styles.user}>User XYZ</div>
                        <div className={styles.user}>User ABC</div>
                        {/* ... More users ... */}
                    </div>
                </div>
            </div>

            <form className={styles.messageForm} onSubmit={handleSendMessage}>
                <input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message"
                    className={styles.messageInput}
                />
                <button type="submit" className={styles.sendButton}>
                    Send
                </button>
            </form>
        </div>
    );
}

export default ChatRoom;
