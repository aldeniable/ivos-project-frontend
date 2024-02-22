import { StyledHeader, Nav, button } from './styles/Header.styled'
import { Link } from 'react-router-dom';
import ivosLogo from './images/ivos-logo.jpg';
const Header = () => {
    return (
        <StyledHeader>
            <img src = {ivosLogo} alt="" />  
            <Nav>
                <Link to = "/" style = {{textDecoration: 'none', color: 'black'}} ><h1>IV OF SPADES ANALYTICS</h1></Link>
                <ul>
                    <li>
                        <button><Link to = "/TopStreams" style = {{textDecoration: 'none', color: 'black'}}> Top Streams (All-time) </Link></button>
                        <button><Link to = "/TopStreams" style = {{textDecoration: 'none', color: 'black'}}> Trending Now</Link></button>
                        <button><Link to = "/TopStreams" style = {{textDecoration: 'none', color: 'black'}}> Top Streams</Link></button>

                    </li>
                </ul>    
            </Nav>    
        </StyledHeader>
    ) 
}

export default Header;