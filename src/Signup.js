import React, {useState} from 'react'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LockIcon from '@mui/icons-material/Lock';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import { useNavigate } from 'react-router-dom';
import { AuthenticateUserContainer } from './styles/Login.styled';
import Input from '@mui/joy/Input';
import Button from '@mui/material/Button';

const Signup = () => {

    const [showStatus, setShowStatus] = useState(false);
    const [usernameStatus, setUsernameStatus] = useState('');
    const navigateTo = useNavigate();
    
    const [data, setData] = useState( {
        username: '',
        email: '',
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
            const response = await fetch('http://127.0.0.1:8000/signup/', {method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(data)});
            if (response.ok) {
                const { user } = await response.json();
                const token = response.token;
                localStorage.setItem('authToken', token);
                localStorage.setItem('userID', user["id"]);
                setShowStatus(true);
                setUsernameStatus("Registration successful for " + user["username"] + "!");
                setTimeout(() => {
                    navigateTo('/Posts');
                }, 3000);
            } else {
                const user = await response.json();
                setShowStatus(true);
                setUsernameStatus("Registration failed. Try again!");
            }
            
        }catch (error) {
        }
    };

    return (

        <AuthenticateUserContainer>
            <formcontainer>
                <form onSubmit = {handleSubmit}>
                    <label>
                        <MoveToInboxIcon/>
                        E-mail
                        <Input
                            color="warning"
                            size="sm"
                            variant="soft"
                            style = {{width: '190px'}}
                            type = "email"
                            name = "email"
                            value = {data.email}
                            onChange = {handleChange}
                            required
                        />
                    </label>
                    <br/>
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
                            type = "password"
                            name = "password"
                            value = {data.password}
                            onChange = {handleChange}
                            required
                        />
                    </label>
                    < br/>
                    <buttondiv>
                    <Button variant="plain" size="small" color="success" type = "submit"> Sign Up </Button>
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
export default Signup;