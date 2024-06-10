import { StyledHeader, Nav, ImageContainer, TitleContainer, ListContainer } from './styles/Header.styled'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import orangeera from './images/orangeera.jpg';
import AddchartIcon from '@mui/icons-material/Addchart';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ThreePIcon from '@mui/icons-material/ThreeP';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import FilterFramesOutlinedIcon from '@mui/icons-material/FilterFramesOutlined';

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const loggedIn = localStorage.getItem("userID");

    const handleClick = (path) => {
        navigate(path);
    }
    
    const handleLogout = () => {
        localStorage.clear();
        navigate('/Login');
    };

    return (
        <StyledHeader>
            <Nav>
                <ImageContainer>
                    <img src = {orangeera} alt = ""/>
                </ImageContainer> 
                <TitleContainer >
                    <h1  style = {{textDecoration: 'none', color: 'black'}}> IV OF SPADES STATS </h1>
                </TitleContainer>
                <ListContainer>
                    <ul>
                        <li>
                            <buttons>
                                <bigdiv>
                                    <button onClick = {() => handleClick('/TopStreams')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/TopStreams' ? 'bold': 'normal'}}>  All-Time Streams </button>
                                    <button onClick = {() => handleClick('/TopTrending')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/TopTrending' ? 'bold': 'normal'}}>Trending Now </button>                
                                    <button onClick = {() => handleClick('/ArtistAnalytics')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/ArtistAnalytics' ? 'bold': 'normal'}}> Artist Analytics </button>
                                </bigdiv>
                                <meddiv>
                                    <button onClick = {() => handleClick('/Timeline')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/Timeline' ? 'bold': 'normal'}}> The IVOS Timeline </button>
                                    <button onClick = {() => handleClick('/Posts')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/Posts' ? 'bold': 'normal'}}> Fan Board </button>
                                </meddiv>
                                <smoldiv>
                                    <button onClick = {() => handleClick('/Signup')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/Signup' ? 'bold': 'normal'}}>  Sign up </button>  
                                    {!loggedIn ? (
                                        <button onClick = {() => handleClick('/Login')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/Login' ? 'bold': 'normal'}}>  Log in </button>
                                    ) :
                                    (   <button onClick={handleLogout}>  Log Out </button> 
                                    )}
                                    {!loggedIn ? (
                                      <div></div>
                                    ) :
                                    (   <button onClick = {() => handleClick('/UserProfile')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/UserProfile' ? 'bold': 'normal'}}> My Profile </button> 
                                    )}
                                    <button onClick = {() => handleClick('/AboutTheCreator')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/AboutTheCreator' ? 'bold': 'normal'}}>  About The Creator </button>
                                </smoldiv>
                            </buttons>
                        </li>
                    </ul>    
                </ListContainer>
            </Nav>    
        </StyledHeader>
    ) 
}

export default Header;