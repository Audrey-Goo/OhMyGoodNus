/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import PostProfile from './PostProfile'
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';
import { useState, useEffect } from 'react'
import { db } from '../firebase'

function PostsProfile() {
    const [posts, setPosts] = useState([]);

    useEffect(() => 
         onSnapshot(query(collection(db,'profilePosts'), orderBy('timestamp', 'desc')), snapshot => {
          setPosts(snapshot.docs)
         })  
    , [db])

  return (
    <div>
      {posts.map((post) => (
        <PostProfile 
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />    
        ))}
    </div>
  )
}

export default PostsProfile