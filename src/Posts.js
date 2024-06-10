import React, { useState, useEffect} from 'react';
import { PostContainer, PostInput, PostsContainer, InputContainer } from './styles/Posts.styled';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/material/Button';


function getMySQLDate(date) {
  return date.toISOString().slice(0, 19).replace('T', ' ');
}

const Posts = ({ userIdOnProfile }) => {

  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem('authToken');
  const userID = localStorage.getItem('userID');
  const username = localStorage.getItem('username')
  const [post, setPostContent] = useState('');
  const [likes, setLikes] = useState([]);

  const now = new Date();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'long', day: 'numeric', year: 'numeric'};
    return date.toLocaleDateString('en-US', options);
  };

  function formatTimeDifference(timestamp) {
    const now = new Date();
    const diffInSeconds = Math.floor((now - timestamp) / 1000);
  
    if (diffInSeconds < 60) {
      return 'just now';
    } else if (diffInSeconds < 120) {
      return '1 minute ago';
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minutes ago`;
    } else if (diffInSeconds < 7200) {
      return '1 hour ago';
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hours ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      if(days < 8){
        return `${days} days ago`;
      }
      else
      {
        return formatDate(timestamp);
      } 
    }
  }

  const fetchData = async () => {
      try {
        const API_calls = [
          fetch('http://127.0.0.1:8000/posts/').then(res => res.json())
        ];
        if (userID) {
          API_calls.push(fetch(`http://127.0.0.1:8000/didLike/${userID}`).then(res => res.json()))
        }

        const results = await Promise.all(API_calls);
        if(userID) {
          const listOfPostIDs = results[1].map((like) => like.post_id);
          setLikes(listOfPostIDs  || []);
        }

        if(!userIdOnProfile){
          setPosts(results[0]);
        }
        else
        {
          
          const posts = results[0].filter(post => parseInt(post.userID) === parseInt(userIdOnProfile));
          console.log(posts);
          setPosts(posts);
        }
        
      } catch (error) { }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  const handleLiking = async (e, postID) => {
    e.preventDefault();
    try{        
      const response = await fetch(`http://127.0.0.1:8000/likePost/${userID}/${postID}`, {method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization':`Token ${token}`}});
      await fetchData();
    }catch (error) { }
  }

  const handleUnliking = async (e, postID) => {
    e.preventDefault();
    try{        
      const response = await fetch(`http://127.0.0.1:8000/unlikePost/${userID}/${postID}`, {method: 'DELETE', headers: { 'Content-Type': 'application/json', 'Authorization':`Token ${token}`}});
      await fetchData();
    }catch (error) { }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();
    const datePosted = getMySQLDate(date);

    try {
      const data = { username: username, userID: userID, datePosted: datePosted, post: post }
      const response = await fetch('http://127.0.0.1:8000/insertPost/', {method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization':`Token ${token}`}, body: JSON.stringify(data)});
      if (response.ok) {
        fetch('http://127.0.0.1:8000/posts/')
          .then((res) => res.json())
          .then((data) => {
            setPosts(data);
          })
        .catch((err) => {} );
      }
    } catch (error) { }
  };

  return (
    <>
    { !userIdOnProfile ?
    (
      <InputContainer>
          { userID ? (
            <PostInput>
              <form onSubmit = {handleSubmit} >

                <Textarea
                  color="warning"
                  disabled={false}
                  minRows={1}
                  minColumns = {7}
                  size="sm"
                  variant="outlined"
                  placeholder = 'Post something here'
                  value = {post}
                  onChange = {(e) => setPostContent(e.target.value)} />
                  <br />
                  <buttondiv><Button variant="contained" size="small" color="warning" type="submit"> Post </Button></buttondiv>
                </form>
            </PostInput>
          ):
          ( <PostInput><p> Log in to be able to post! </p></PostInput>)
          }    
      </InputContainer>
    )
    :
    (
      <br />
    )
    }
      <PostsContainer>
        {posts.map((post) => (
          <PostContainer>
            {post.post}
            <br/>
            <br/>
            <br/>
            <user> {post.username}   |    {formatTimeDifference(new Date(post.datePosted))} </user>
            <br/>
            {userID ? (
              (likes.includes(post.idPost) ?
                (<FavoriteIcon onClick = {(e) => handleUnliking(e, post.idPost)}/>) 
                : 
                (<FavoriteBorderIcon onClick =  {(e) => handleLiking(e, post.idPost)}/>))
              )
              :
              (<FavoriteTwoToneIcon/>)
            }
            <likes> {post.like_count} </likes>
          </PostContainer>
        ))}
      </PostsContainer>
    </>
  );
}

export default Posts;