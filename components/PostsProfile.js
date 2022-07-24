/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import PostProfile from './PostProfile'
import { onSnapshot, collection, query, where, orderBy } from 'firebase/firestore';
import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { useSession } from "next-auth/react"

function PostsProfile() {
    const [posts, setPosts] = useState([]);
    const { data: session } = useSession();

    useEffect(() => 
         onSnapshot(query(collection(db,'profilePosts'), where("username", "==", session?.user?.username)), snapshot => {
          setPosts(snapshot.docs)
         })  
    , [db])

  return (
    <div className="grid grid-cols-4 gap-4">
      
      {posts.map((post) => (
        <div>
            <PostProfile 
              key={post.id}
              id={post.id}
              username={post.data().username}
              userImg={post.data().profileImg}
              img={post.data().image}
              caption={post.data().caption} />
              
        </div>
        )
        )}
        
      
    </div>

    
  )
}

export default PostsProfile