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

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [user] = useAuthState(auth);
  //const auth = getAuth();



  useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setDoc(doc(db,"users"), {
        email: user.email,
        lastSeen: serverTimestamp(),
        photoURL: user.photoURL,
      },
      {merge:true})
    }
  }) },[])

  // useEffect(() => {
  //   if (user) {
  //     setDoc(doc(db,"users"), {
  //       email: user.username,
  //       lastSeen: serverTimestamp(),
  //       photoURL: user.photoURL,
  //     },
  //     {merge:true})
  //   }
  // }, [user])

  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp
