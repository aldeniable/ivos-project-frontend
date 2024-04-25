import React, {useState} from 'react'
import { } from './styles/Signup.styled';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LockIcon from '@mui/icons-material/Lock';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
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

    const [showStatus, setShowStatus] = useState(false);
    const [usernameStatus, setUsernameStatus] = useState('');
    const navigateTo = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/signup/', {method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(data)});

            if(response.ok){
                const { user } = await response.json();
                const token = response.token;
                localStorage.setItem('authToken', token);
                localStorage.setItem('userID', user["id"]);
                setShowStatus(true);
                setUsernameStatus(user["username"]);
                setTimeout(() => {
                    navigateTo('/AboutTheCreator');
                }, 3000);
            }else{
                const user = await response.json();
                setShowStatus(true);
                setUsernameStatus(user["username"]);
            }
            
        }catch (error) {
        }
    };

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label> Username: <input type = "text" name = "username" value = {data.username} onChange = {handleChange} /></label>
                < br/>
                <label> E-mail: <input type = "email" name = "email" value = {data.email} onChange = {handleChange} /></label>\
                <br/>
                <label> Password: <input type = "password" name = "password" value = {data.password} onChange = {handleChange} /></label>
                <br/>
                <button type = "submit">Signup</button>
            </form>

            {showStatus && (
                <div>
                    <p>{usernameStatus}</p>
                </div>
            )}
        </div>

    );
};
export default Signup;