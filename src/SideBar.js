import { StyledSideBar } from './styles/SideBar.styled'
import { Link, useNavigate, useLocation } from 'react-router-dom';

import {SideBarData} from './SideBarData';

const SideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleClick = (path) => {
        navigate(path);
    }

    return (
        <StyledSideBar>
            <ul>
                {SideBarData.map((val, key) =>{
                    return(
                        <li key = {key} onClick = {() => handleClick('/TopStreams')}  >
                            <div>{val.icon}</div><div>{val.title}</div>
                        </li>
                    );     
                }            
                ) 
                }
            </ul>
             
        </StyledSideBar>
    ) 
}

export default SideBar;