import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Sidebar from '../../components/Sidebar'
import ChatScreen from '../../components/ChatScreen'
import { db } from '../../firebase'
import { useSession } from "next-auth/react"
import { collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import getRecipientEmail from '../../utils/getRecipientEmail'

function Chat({chat , messages}) {
  const { data: session } = useSession();

  return (
    <Container>
      <Head>
        <title>Chat</title> 
        {/* Chat with {getRecipientEmail(chat.users,session.user)} */}
      </Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen chat={chat} messages={messages}/>
      </ChatContainer>
    </Container>
  )
}

export default Chat

export async function getServerSideProps(context) {

    const ref = doc(db,'chats',context.query.id)  
    //const ref = db.collection("chats").doc(context.query.id);

    const messagesRes = await getDocs(query(collection(ref,'messages'), orderBy('timestamp','asc')))
    //const messagesRes = await ref.collection('messages').orderBy('timestamp', 'asc').get();

    const messages = messagesRes.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    })).map((messages) => ({
        ...messages,
        timestamp: messages.timestamp.toDate().getTime()
    }))


    const chatRes = await getDoc(ref)
    //const chatRes = await ref.get();
    const chat = {
        id: chatRes.id,
        ...chatRes.data()
    }

    return {
        props: {
            messages: JSON.stringify(messages),
            chat: chat
        }
    }

}

const Container = styled.div`
    display: flex;
`;

const ChatContainer = styled.div`
    flex:1;
    overflow:scroll;
    height:100vh;

    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

`;