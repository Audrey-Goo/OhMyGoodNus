import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { RecoilRoot } from "recoil"
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from "../firebase"
import { getFirestore } from "firebase/firestore";
import { useEffect } from 'react'
import { useSession } from "next-auth/react"
import { addDoc, collection, onSnapshot, orderBy, serverTimestamp, query, setDoc, deleteDoc, doc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  //const [user] = useAuthState(auth);
  //const { data: session } = useSession();

  // useEffect(() => {
  //   if (user) {
  //     db.collection('users').doc(user.uid).set({
  //       email: user.email,
  //       lastSeen: serverTimestamp(),
  //       photoURL: user.image,
  //     }, 
  //     {merge:true})
  //   }
  // },[user])

  return (
    
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  
  );
}

export default MyApp
