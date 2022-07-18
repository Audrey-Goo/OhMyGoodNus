import { useRouter } from "next/router";
import styled from "styled-components";
import { useSession } from "next-auth/react"
import { Avatar, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert"
import AttachFileIcon from '@mui/icons-material/AttachFile'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from '../components/Message'
import { collection, where, query, orderBy, serverTimestamp, setDoc, addDoc, doc} from "firebase/firestore";
import MicIcon from '@mui/icons-material/Mic'
import { useRef, useState } from "react";
import getRecipientEmail from "../utils/getRecipientEmail";
import TimeAgo from "timeago-react";

function ChatScreen({chat, messages}) {
    const router = useRouter();
    const { data: session } = useSession();
    const [input, setInput] = useState("");
    const endOfMessagesRef = useRef(null);

    const q = query(collection(db,'chats',router.query.id,'messages'), orderBy('timestamp', 'asc'));
    const [messagesSnapshot] = useCollection(q);
    // const [messagesSnapshot] = useCollection(db.collection('chats').doc(router.query.id).collection('messages').orderBy('timestamp', 'asc'))

    const q2 = query(collection(db,'users'),where('email','==',getRecipientEmail(chat.users, session.user)));
    const [recipientSnapshot] = useCollection(q2);
    // const [recipientSnapshot] = useCollection(db.collection('users').where('email','==',getRecipientEmail(chat.users, session.user)))

    const showMessages = () => {
        if (messagesSnapshot) {
            return messagesSnapshot.docs.map(message => (
                <Message
                  key={message.id}
                  user={message.data().user}
                  message={{
                    ...message.data(),
                    timestamp: message.data().timestamp?.toDate().getTime(),
                  }}
                />
            ))
        } else {
            return JSON.parse(messages).map(message => (
                <Message key={message.id} user={message.user} message={message} />
            ));
        }
    }

    const scrollToBottom = () => {
        endOfMessagesRef.current.scrollIntoView({
            behavior:'smooth',
            block:'start',
        })
    }

    const sendMessage = (e) => {
        e.preventDefault();

        setDoc(doc(db,"users","user"), {
            lastSeen: serverTimestamp(),
        }, { merge: true}
        )

        setDoc(doc(db,"users",session.user.uid), {
            lastSeen: serverTimestamp(),
        }, { merge: true });

        // db.collection("users").doc(user.uid).set(
        //     {
        //         lastSeen: serverTimestamp(),
        //     },
        //     { merge: true }
        // );


        addDoc(collection(db,'chats',router.query.id,'messages'), {
            timestamp: serverTimestamp(),
            message: input,
            user: session.user.email,
            photoURL: session.user.image,
        });

        // db.collection("chats").doc(router.query.id).collection("messages").add({
        //     timestamp: serverTimestamp(),
        //     message: input,
        //     user: session.user.email,
        //     photoURL: session.user.image,
        // });

        setInput("");
        scrollToBottom();
    }
    
    const recipient = recipientSnapshot?.docs?.[0]?.data()
    const recipientEmail = getRecipientEmail(chat.users, session.user)

    return (
        <Container>
          <Header>
            {/* <Avatar /> */}

            {recipient ? (
                <Avatar src={recipient?.photoURL} />
            ) : (
                <Avatar>{recipientEmail[0]}</Avatar>
            )}

            <HeaderInformation>
                {/* <h3>RecipientEmail</h3> */}

                {recipientEmail}

                {/* <p>Last Seen ...</p> */}

                {recipientSnapshot ? (
                    <p>Last active: {" "}
                    {recipient?.lastSeen?.toDate() ? (
                        <TimeAgo datetime={recipient?.lastSeen?.toDate()} />
                    ) : (
                        "Unavailable"
                    )}
                    </p>
                ): (
                    <p>Loading last active...</p>
                )}


            </HeaderInformation>
            <HeaderIcons>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </HeaderIcons>
          </Header>

          <MessageContainer>
                {showMessages()}
            <EndOfMessage ref={endOfMessagesRef}/>
          </MessageContainer>
          <InputContainer>
            <InsertEmoticonIcon />
            <Input value={input} onChange={e => setInput(e.target.value)}/>
            <button hidden disabled={!input} type="submit" onClick={sendMessage}>
            Send Message
            </button>
            <MicIcon />
          </InputContainer>
        </Container>
    )
}

export default ChatScreen

const Container = styled.div``;

const Input = styled.input`
flex: 1;
align-items: center;
padding: 10px;
position: sticky;
bottom: 0;
background-color: #f7efe9;
z-index: 100;
`;

const InputContainer = styled.form`
display: flex;
align-items: center;
padding: 10px;
position: sticky;
bottom:0;
background-color: #e5ded2;
z-index: 100;
`;

const Header = styled.div`
    position: sticky;
    background-color: #e5ded2;
    z-index: 100;
    top: 0;
    display: flex;
    padding: 11px;
    height: 80px;
    align-items: center;
    border-bottom: 1px solid whitesmoke;
`;

const HeaderInformation = styled.div`
    margin-left: 15px;
    flex:1;

    > h3 {
        margin-bottom: 3px;
    }

    > p {
        font-size: 14px;
        color: gray;
    }
`;

const EndOfMessage = styled.div`
margin-bottom: 50px;
`;

const HeaderIcons = styled.div``;

const MessageContainer = styled.div`
padding: 30px;
background-color: #e5ded8;
min-height: 90vh;
`;