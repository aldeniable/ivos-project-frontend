import { StyledHeader, Nav, button } from './styles/Header.styled'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ivosLogo from './images/ivos-logo.jpg';

import HomeIcon from '@material-ui/icons/Home'
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import CreateIcon from '@mui/icons-material/Create';
import AddchartIcon from '@mui/icons-material/Addchart';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ThreePIcon from '@mui/icons-material/ThreeP';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleClick = (path) => {
        navigate(path);
    }

    return (
        <StyledHeader>
            <img src = {ivosLogo} alt="" />  
            <Nav>
                <Link to = "/" style = {{textDecoration: 'none', color: 'black'}} ><h1>IV OF SPADES ANALYTICS</h1></Link>
                <ul>

                    <li>
                        <buttons>
                            <div>
                           <button onClick = {() => handleClick('/TopStreams')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/TopStreams' ? 'bold': 'normal'}}>  <AddchartIcon/> Top Streams (All-time) </button>
                            <button onClick = {() => handleClick('/TopTrending')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/TopTrending' ? 'bold': 'normal'}}> <WhatshotIcon/> Trending This Month </button>
                          
                            <button onClick = {() => handleClick('/ArtistAnalytics')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/ArtistAnalytics' ? 'bold': 'normal'}}> <ThreePIcon/> Artist Analytics </button>
                            </div>
                            <div>
                            <button onClick = {() => handleClick('/')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/' ? 'bold': 'normal'}}> Quiz </button>
                            <button onClick = {() => handleClick('/')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/' ? 'bold': 'normal'}}> Fan Board </button>
                            <button onClick = {() => handleClick('/')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/' ? 'bold': 'normal'}}> Fan Polls </button>
                          
                            <button onClick = {() => handleClick('/AboutTheCreator')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/AboutTheCreator' ? 'bold': 'normal'}}>  About The Creator </button>
                            <button onClick = {() => handleClick('/Signup')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/Signup' ? 'bold': 'normal'}}>  Sign up </button>
                            <button onClick = {() => handleClick('/Login')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/Login' ? 'bold': 'normal'}}>  Log in </button>
                            
                            </div>
                        </buttons>
                    </li>
                </ul>    
            </Nav>    
        </StyledHeader>
    ) 
}

export default Header;