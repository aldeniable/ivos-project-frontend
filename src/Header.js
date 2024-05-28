import { StyledHeader, Nav, ImageContainer, TitleContainer, ListContainer } from './styles/Header.styled'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ivosLogo from './images/ivos-logo.jpg';
import AddchartIcon from '@mui/icons-material/Addchart';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ThreePIcon from '@mui/icons-material/ThreeP';

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
                    <img src = {ivosLogo} alt = ""/>
                </ImageContainer> 
                <TitleContainer >
                    <Link to = "/" style = {{textDecoration: 'none', color: 'black'}} ><h1> IV OF SPADES ANALYTICS </h1></Link>
                </TitleContainer>
                <ListContainer>
                    <ul>
                        <li>
                            <buttons>
                                <div>
                                    <button onClick = {() => handleClick('/TopStreams')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/TopStreams' ? 'bold': 'normal'}}>  <AddchartIcon/> Top Streams (All-time) </button>
                                    <button onClick = {() => handleClick('/TopTrending')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/TopTrending' ? 'bold': 'normal'}}> <WhatshotIcon/> Trending This Month </button>                
                                    <button onClick = {() => handleClick('/ArtistAnalytics')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/ArtistAnalytics' ? 'bold': 'normal'}}> <ThreePIcon/> Artist Analytics </button>
                                </div>
                                <div>
                                    <button onClick = {() => handleClick('/Timeline')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/Timeline' ? 'bold': 'normal'}}> Timeline </button>
                                    <button onClick = {() => handleClick('/Posts')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/Posts' ? 'bold': 'normal'}}> Board </button>
                                    <button onClick = {() => handleClick('/AboutTheCreator')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/AboutTheCreator' ? 'bold': 'normal'}}>  About The Creator </button>
                                    <button onClick = {() => handleClick('/Signup')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/Signup' ? 'bold': 'normal'}}>  Sign up </button>  
                                    {!loggedIn ? (
                                        <button onClick = {() => handleClick('/Login')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/Login' ? 'bold': 'normal'}}>  Log in </button>
                                    ) :
                                    (   <button onClick={handleLogout}>  Log Out </button> 
                                    )}
                                    {!loggedIn ? (
                                        <button onClick = {() => handleClick('/')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/' ? 'bold': 'normal'}}>  My Profile </button>
                                    ) :
                                    (   <button onClick={handleLogout}> My Profile </button> 
                                    )}
                                </div>
                            </buttons>
                        </li>
                    </ul>    
                </ListContainer>
            </Nav>    
        </StyledHeader>
    ) 
}

export default Header;