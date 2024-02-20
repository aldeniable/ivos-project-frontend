import { StyledHeader, Nav, button } from './styles/Header.styled'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ivosLogo from './images/ivos-logo.jpg';
const Header = () => {
    return (
        <StyledHeader>
            <Nav>
                <Link to = "/" style = {{textDecoration: 'none', color: 'black'}} ><h1>IV OF SPADES</h1></Link>
                <ul>
                    <li>
                        <button><Link to = "/TopStreams" style = {{textDecoration: 'none', color: 'black'}}> Top Streams </Link></button>
                        <button><Link to = "/TopStreams" style = {{textDecoration: 'none', color: 'black'}}> Top Streams</Link></button>
                        <button><Link to = "/TopStreams" style = {{textDecoration: 'none', color: 'black'}}> Top Streams</Link></button>

                    </li>
                </ul>    
            </Nav>  
            <img src = {ivosLogo} alt="" />    
        </StyledHeader>
    ) 
}

export default Header;