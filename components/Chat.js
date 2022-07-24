import { Avatar } from "@mui/material"
import styled from "styled-components"
import React from 'react'
import Header from '../components/Header'
import getRecipientEmail from '../utils/getRecipientEmail'
import { useSession } from "next-auth/react"
import { addDoc, collection, onSnapshot, orderBy, serverTimestamp, query, setDoc, deleteDoc, doc, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../firebase'
import { useRouter } from "next/router"
import { useCollection } from "react-firebase-hooks/firestore";

function Chat({ id, users }) {
    const router = useRouter()
    const { data: session } = useSession();

    const recipientEmail = (session.user != null) ? getRecipientEmail(users,session.user) : "wyerock24@gmail.com";
    console.log("DEBUG (recipientEmail): " + recipientEmail);

    const q = (recipientEmail) ? query(collection(db,"users"), where('email','==', recipientEmail)) : null;
    const [recipientSnapshot] = useCollection(q)
    const recipient = recipientSnapshot?.docs?.[0]?.data()

    const enterChat = () => {
        router.push(`/chat/${id}`)
    }


  return (
    <Container onClick={enterChat}>
        {/* Hi */}
      {recipient ? (
        <UserAvatar src={recipient?.photoURL} />
      ) : (
        recipientEmail ? <UserAvatar>{recipientEmail}</UserAvatar> : null
      )}
      <p>{recipientEmail}</p>
    </Container>
  )

}

export default Chat

const Container = styled.div`
    display: flex;  
    align-items: center;
    cursor: pointer;
    padding: 15px;
    word-break: break-word;

    :hover {
        background-color: #e9eaeb;
    }
`

const UserAvatar = styled(Avatar)`
    margin: 5px;
    margin-right: 15px;
`