import React, { useState, useEffect} from 'react';
import { PostContainer } from './styles/Posts.styled';

function getMySQLDate(date) {
  return date.toISOString().slice(0, 19).replace('T', ' '); // Remove 'T' and everything after seconds
}

const Posts = () => {
  const [posts,setPosts] = useState([]);
  const token = localStorage.getItem('authToken');
  const userID = localStorage.getItem('userID');
  const username = localStorage.getItem('username')
  const [post, setPostContent] = useState('');
  const [showStatus, setShowStatus] = useState(false);
  const [usernameStatus, setUsernameStatus] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/posts/')
      .then( res => { return res.json(); } )
      .then( data => { setPosts (data) } );
  }, []
  );

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();
    const datePosted = getMySQLDate(date);
    try {
      const data = {username: username, userID: userID, datePosted: datePosted, post: post }
      const response = await fetch('http://127.0.0.1:8000/insertPost/', {method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization':`Token ${token}`}, body: JSON.stringify(data)});
      if (response.ok) {
        setShowStatus(true);
        setUsernameStatus(getMySQLDate(date) + "success");

                // Re-fetch existing posts after successful insertion
                fetch('http://127.0.0.1:8000/posts/')
                .then((res) => res.json())
                .then((data) => {
                  setPosts(data);
                })
                .catch((err) => {
                  console.error("Error re-fetching posts:", err);
                });
                

      } else {
        setShowStatus(true);
        setUsernameStatus(getMySQLDate(date) + "no");
      } 
    }catch (error) {
    }
};


  return (
    <>
    {userID ? (
          <div>
          <form onSubmit = {handleSubmit} >
            <textarea placeholder = 'Post here...' value = {post} onChange = {(e) => setPostContent(e.target.value)}>
              
            </textarea>
            <button type = "submit">Post</button>
          </form>
        </div>
    ):(<p>Log in to post.</p>)
    }

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