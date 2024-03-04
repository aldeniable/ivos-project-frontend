import { StyledHeader, Nav, button } from './styles/Header.styled'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ivosLogo from './images/ivos-logo.jpg';
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
                        <button onClick = {() => handleClick('/TopStreams')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/TopStreams' ? 'bold': 'normal'}}> Top Streams (All-time) </button>
                        <button onClick = {() => handleClick('/TopTrending')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/TopTrending' ? 'bold': 'normal'}}> Trending This Month </button>
                        <vertical-line />
                        <button onClick = {() => handleClick('/ArtistAnalytics')} style = {{ textDecoration: 'none', fontWeight: location.pathname === '/ArtistAnalytics' ? 'bold': 'normal'}}> Artist Analytics </button>
                       
                    </li>
                </ul>    
            </Nav>    
        </StyledHeader>
    ) 
}

export default Header;