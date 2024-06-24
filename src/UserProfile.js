import React, { useState, useEffect} from 'react';
import { ProfileContainer, BodyContainer, HeaderContainer, FormContainer } from './styles/UserProfile.styled';
import FaceIcon from '@mui/icons-material/Face';
import Button from '@mui/material/Button';
import Input from '@mui/joy/Input';
import Posts from './Posts';

const UserProfile = () => {

    const [editMode, setEditMode] = useState(false);
    const [profile, setProfile] = useState([]);
    const token = localStorage.getItem('authToken');
    const userID = localStorage.getItem('userID');
    const username = localStorage.getItem('username');

    const [editedProfile, setEditedProfile] = useState({
      email: '',
      fullname: '',
      age: '',
      place: '',
      fav_artist: '',
      fave_album: '',
      current_fave_song: '',
      gatekeep_song: '',
      fan_converter_song: '',
      alltime_fave_song: '',
      dont_like_song: ''
    });

    const fetchData = async () => {
        try
        {
            fetch(`https://ivos-app-api.onrender.com/userProfile/${userID}`)
            .then(res => res.json())
            .then(data => { setProfile(data)})
        }catch (error) { }
    };

    useEffect(() => {
      fetchData();
    }, []);

    const handleChange= (e) => {
      const { name, value } = e.target;
      setEditedProfile( prevProfile => ({
        ...prevProfile,
        [name]: value
      }));
    };

    const handleUpdateButton = () => {
      console.log(profile);
        setEditedProfile({
          email: profile[0].email,
          fullname: profile[0].fullname,
          age: profile[0].age,
          place: profile[0].place,
          fav_artist: profile[0].fav_artist,
          fave_album: profile[0].fave_album,
          current_fave_song: profile[0].current_fave_song,
          gatekeep_song: profile[0].gatekeep_song,
          fan_converter_song: profile[0].fan_converter_song,
          alltime_fave_song: profile[0].alltime_fave_song,
          dont_like_song: profile[0].dont_like_song
        });
        console.log(editedProfile);
        setEditMode(true);
    
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const data = { id : userID, username: username, ...editedProfile }
        const response = await fetch('https://ivos-app-api.onrender.com/updateUserProfile/', {method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization':`Token ${token}`}, body: JSON.stringify(data)});
        if (response.ok) {
          fetchData();
          setEditMode(false);
        }
      } catch (error) { }
    };

    return (
        <>
        <BodyContainer>

          { !editMode ? (
             
             profile.map((prof) => (
                <div key={profile.id}>
                  <HeaderContainer>
                    <FaceIcon /> <h1>Spader Profile </h1>
                  </HeaderContainer>
                  
                  <ProfileContainer>
                      <p><stronger>{username}</stronger></p>
                      <p>Name: {prof.fullname}</p>
                      <p>Age: {prof.age}</p>
                      <p>Place: {prof.place}</p>
                      <p>Email: {prof.email}</p>
                      <p><strong>Favorite artist:</strong> {prof.fav_artist}</p>
                      <p><strong>Favorite album:</strong> {prof.fave_album}</p>
                      <p><strong>Current favorite song:</strong> {prof.current_fave_song}</p>
                      <p><strong>Song that I gatekeep:</strong> {prof.gatekeep_song}</p>
                      <p><strong>Song that made me a fan:</strong> {prof.fan_converter_song}</p>
                      <p><strong>All-time favorite song:</strong> {prof.alltime_fave_song}</p>
                      <p><strong>Song I don't really like:</strong> {prof.dont_like_song}</p>


                      <br/>
                  <buttondiv>
                    <Button onClick = {handleUpdateButton} variant="contained" size="small" color="warning" type="submit"> Update Profile </Button>
                  </buttondiv>   
                  </ProfileContainer>


            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          <postdiv> {prof.username}'s posts</postdiv>
          <Posts userIdOnProfile = {userID} />
                </div>
              
              ))
            )
            :
            (
              <div>
              <HeaderContainer>
                <FaceIcon /> <h1> Edit Profile</h1>
              </HeaderContainer>
              <FormContainer>
                <form onSubmit = {handleSubmit}>
                  <label> Email:  <Input color="warning" size="sm" variant="soft" style = {{width: '190px'}} type = "text" name = "email" value =  {editedProfile.email} onChange = {handleChange} /></label>
                  <br/>
                  <label> Full Name:  <Input color="warning" size="sm" variant="soft" style = {{width: '190px'}} type = "text" name = "fullname" value =  {editedProfile.fullname} onChange = {handleChange} /></label>
                  <br/>
                  <label> Age: <Input required color="warning" size="sm" variant="soft" style = {{width: '190px'}} type = "text" name = "age" value =  {editedProfile.age} onChange = {handleChange} /></label>
                  <br/>
                  <label> Address: <Input color="warning" size="sm" variant="soft" style = {{width: '190px'}} type = "text" name = "place" value =  {editedProfile.place} onChange = {handleChange} /></label>
                  <br/>
                  <label> Favorite Artist: <Input color="warning" size="sm" variant="soft" style = {{width: '190px'}} type = "text" name = "fav_artist" value =  {editedProfile.fav_artist} onChange = {handleChange} /></label>
                  <br/>
                  <label> Favorite Album: <Input color="warning" size="sm" variant="soft" style = {{width: '190px'}} type = "text" name = "fave_album" value =  {editedProfile.fave_album} onChange = {handleChange} /></label>
                  <br/>
                  <label> Current Favorite Song:<Input color="warning" size="sm" variant="soft" style = {{width: '190px'}} type = "text" name = "current_fave_song" value =  {editedProfile.current_fave_song} onChange = {handleChange} /></label>
                  <br/>
                  <label> Song that I gatekeep: <Input color="warning" size="sm" variant="soft" style = {{width: '190px'}} type = "text" name = "gatekeep_song" value =  {editedProfile.gatekeep_song} onChange = {handleChange} /></label>
                  <br/>
                  <label> Song that made me a fan: <Input color="warning" size="sm" variant="soft" style = {{width: '190px'}} type = "text" name = "fan_converter_song" value =  {editedProfile.fan_converter_song} onChange = {handleChange} /></label>
                  <br/>
                  <label> All-Time Favorite Song: <Input color="warning" size="sm" variant="soft" style = {{width: '190px'}} type = "text" name = "alltime_fave_song" value =  {editedProfile.alltime_fave_song} onChange = {handleChange} /></label>
                  <br/>
                  <label> Song I Don't Really Like: <Input color="warning" size="sm" variant="soft" style = {{width: '190px'}} type = "text" name = "dont_like_song" value =  {editedProfile.dont_like_song} onChange = {handleChange} /></label>
                  <br/>
                  <buttondiv><Button variant="contained" size="small" color="warning" type = "submit"> Done </Button></buttondiv>
                </form>
                
              </FormContainer>

              </div>
              
            )

          }
        </BodyContainer>


        </>
    );
    }

export default UserProfile;