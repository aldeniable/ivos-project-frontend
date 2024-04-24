import React, { useState, useEffect} from 'react';
import { PostContainer } from './styles/Posts.styled';


const Posts = () => {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/posts/')
      .then( res => { return res.json(); } )
      .then( data => { setPosts (data) } );
  }, []
  );

  return (
    <>
    {posts.map((post) => (
    <PostContainer>
      <p> by: {post.username} </p>
      <p> posted on: {post.datePosted} </p>
      <p> {post.post} </p>
    </PostContainer>
    ))}
    </>
  );
}

export default Posts;