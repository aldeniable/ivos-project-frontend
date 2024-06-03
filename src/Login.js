import React, {useState} from 'react'
import { } from './styles/Login.styled';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LockIcon from '@mui/icons-material/Lock';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import { useNavigate } from 'react-router-dom';
import { AuthenticateUserContainer } from './styles/Login.styled';

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
            const response = await fetch('http://127.0.0.1:8000/login/', {method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(data)});
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
            <divet>
            <form onSubmit = {handleSubmit}>
                <label> Username: <input type = "text" name = "username" value = {data.username} onChange = {handleChange} /></label>
                < br/>
                <br />
                <label> Password: <input type = "password" name = "password" value = {data.password} onChange = {handleChange} /></label>
                <br/>
                <button type = "submit">Login</button>
            </form>
            {showStatus && (
                <div>
                    <p> {usernameStatus} </p>
                </div>
            )}
            </divet>
        </AuthenticateUserContainer>

    );
};
export default Login;