import React, {useState} from 'react'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LockIcon from '@mui/icons-material/Lock';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import { useNavigate } from 'react-router-dom';
import { AuthenticateUserContainer } from './styles/Login.styled';

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
                    <label> <MoveToInboxIcon/> E-mail: <input style = {{width: '190px'}} type = "email" name = "email" value = {data.email} onChange = {handleChange} /></label>
                    < br/>
                    < br/>
                    <label> <AssignmentIndIcon/> Username: <input type = "text" name = "username" value = {data.username} onChange = {handleChange} /></label>
                    <br/>
                    < br/>
                    <label> <LockIcon/> Password: <input style = {{width: '165px'}} type = "password" name = "password" value = {data.password} onChange = {handleChange} /></label>
                    <br/>
                    < br/>
                    <buttondiv>
                        <button type = "submit">Sign up</button>
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