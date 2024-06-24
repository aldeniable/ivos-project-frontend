import React, {useState} from 'react'
import { } from './styles/Login.styled';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LockIcon from '@mui/icons-material/Lock';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import { useNavigate } from 'react-router-dom';
import { AuthenticateUserContainer } from './styles/Login.styled';
import Input from '@mui/joy/Input';
import Button from '@mui/material/Button';

const Login = () => {

    const [showStatus, setShowStatus] = useState(false);
    const [usernameStatus, setUsernameStatus] = useState('');
    const navigateTo = useNavigate();

    const [data, setData] = useState( {
        username: '',
        password: ''
    }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://ivos-app-api.onrender.com/login/', {method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(data)});
            if(response.ok){
                const responseData = await response.json();
                const token = responseData.token;
                const user = responseData.user; 
                localStorage.setItem('authToken', token);
                localStorage.setItem('userID', user["id"]);
                localStorage.setItem('username', user["username"]);
                setShowStatus(true);
                setUsernameStatus("Login successful for " + user["username"] + "!");
                setTimeout(() => {
                    navigateTo('/Posts');
                }, 1000);
            }else{
                setShowStatus(true);
                setUsernameStatus("Login failed. Try again!");
                setTimeout(() => {
                    navigateTo('/Login');
                }, 1000);
            }
        }catch (error) {
        }
    };

    return (
        <AuthenticateUserContainer>
            <formcontainer>
            <form onSubmit = {handleSubmit}>
                <label>
                    <AssignmentIndIcon/>
                    Username
                    <Input
                        color="warning"
                        size="sm"
                        variant="soft"
                        style = {{width: '190px'}}
                        type = "text"
                        name = "username"
                        value = {data.username}
                        onChange = {handleChange}
                        required
                    />
                </label>
                <br/>
                <label>
                    <LockIcon/>
                    Password
                    <Input
                        color="warning"
                        size="sm"
                        variant="soft"
                        style = {{width: '190px'}}
                        type = "password"s
                        name = "password"
                        value = {data.email}
                        onChange = {handleChange}
                        required
                    />
                </label>
                <br/>
                <buttondiv>
                <Button variant="plain" size="small" color="success" type = "submit"> Log In </Button>
                </buttondiv>
            </form>
            {showStatus && (
                <div>
                    <p> {usernameStatus} </p>
                </div>
            )}
            </formcontainer>
        </AuthenticateUserContainer>

    );
};
export default Login;