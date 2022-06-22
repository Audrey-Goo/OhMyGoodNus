import React from 'react'
import styled from "styled-components"
import { Avatar, Button, IconButton } from "@mui/material"
import ChatIcon from "@mui/icons-material/Chat"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import SearchIcon from "@mui/icons-material/Search"
import * as EmailValidator from 'email-validator'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useEffect } from 'react'
import { useSession } from "next-auth/react"
import { addDoc, collection, onSnapshot, orderBy, serverTimestamp, query, setDoc, deleteDoc, doc, getDocs, where } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Chat from "../components/Chat"



function Sidebar() {
  const [user] = useAuthState(auth);
  const { data: session } = useSession();

      const q = query(collection(db,"chats"), where('users','array-contains', session.user.email))
      //const userChatRef = getDocs(q)
      const [chatsSnapshot] = useCollection(q)
    
      const createChat = () => {
        const input = prompt("Please enter an email address for the user you wish to chat with");
    
        if (!input) return null;
    
        if (EmailValidator.validate(input) && !chatAlreadyExists(input) && input !== session.user.email) {
          addDoc(collection(db, 'chats'), {
            users: [session.user.email, input],
          })
        }
     }
    
      const chatAlreadyExists = (recipientEmail) =>
        !!chatsSnapshot?.docs.find((chat)=>chat.data().users.find(user=>user ===recipientEmail)?.length>0)
    

  return (
    <Container>
      <Header>
        <UserAvatar src={session.user.image}/>

        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SearchInput placeholder='Search in Chats' />
      </Search>

      <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>

      {chatsSnapshot?.docs.map((chat) => (
        <Chat key={chat.id} id ={chat.id} users={chat.data().users} />
      ))}
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
flex: 0.45;
border-right: 1px solid whitesmoke;
height: 100vh;
min-width: 300px;
max-width: 350px;
overflow-y: scroll;
background-color: #e5ded2;

::-webkit-scrollbar {
  display: none;
}

-ms-overflow-style: none;
scrollbar-width: none;
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    background-color: #e5ded2;
    padding: 20px;
    border-radius: 2px;
`

const SidebarButton = styled(Button)`
    width: 100%;

    &&& {
      border-top: 1px solid whitesmoke;
      border-bottom: 1px solid whitesmoke;
    }
`

const SearchInput = styled.input`
    outline-width: 0;
    border: none;
    flex: 1;
    background-color: #f7efe9;
`

const Header = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    background-color: #dbc8b9;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
`


const UserAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`

const IconsContainer = styled.div``