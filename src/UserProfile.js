import React, { useState, useEffect} from 'react';
import { ProfileContainer, BodyContainer, HeaderContainer } from './styles/UserProfile.styled';


const UserProfile = () => {

    const [profile, setProfile] = useState();
    const token = localStorage.getItem('authToken');
    const userID = localStorage.getItem('userID');
    const username = localStorage.getItem('username')

    const fetchData = async () => {
        try
        {
            fetch(`http://127.0.0.1:8000/userProfile/${userID}`)
            .then(res => res.json())
            .then(data => { setProfile(data)});
        }catch (error) { }
    };

    useEffect(() => {
      fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const data = { id : id, username: username, email: email, fullname: fullname, age: age, place: place, fav_artist: fav_artist, fave_album: fave_album, current_fave_song: current_fave_song, gatekeep_song: gatekeep_song, fan_converter_song : fan_converter_song, alltime_fave_song: alltime_fave_song, dont_like_song : dont_like_song }
          const response = await fetch('http://127.0.0.1:8000/updateUserProfile/', {method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization':`Token ${token}`}, body: JSON.stringify(data)});
          if (response.ok) {
            fetch(`http://127.0.0.1:8000/userProfile/${userID}`)
            .then(res => res.json())
            .then(data => { setProfile(data)})
            .catch((err) => {} );
          }
        } catch (error) { }
      };


    return (
        <>
        <BodyContainer>
            <HeaderContainer>
                <h1>Spader Profile</h1>
            </HeaderContainer>

            {profile.map((prof) => (
            <ProfileContainer key = {prof.id}>
                <p>{prof.username}</p>
                <p>{prof.fullname}</p>
                <p>{prof.email}</p>
                <p>{prof.age}</p>
                <p>{prof.place}</p>
                <p>My favorite artist: {prof.fav_artist}</p>
                <p>My favorite album: {prof.fave_album}</p>
                <p>My current favorite song: {prof.current_fave_song}</p>
                <p>Song that I gatekeep: {prof.gatekeep_song}</p>
                <p>Song that made me a fan: {prof.fan_converter_song}</p>
                <p>My all-time favorite song: {prof.alltime_fave_song}</p>
                <p>Song I don't really like: {prof.dont_like_song}</p>
    
            </ProfileContainer>
            ))}





        </BodyContainer>


        </>
    );
    }

export default UserProfile;