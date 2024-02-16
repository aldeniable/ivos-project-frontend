import { StyledHeader, Nav, Logo } from './styles/Header.styled'


const Header = () => {
    return (
        <StyledHeader>
            <Nav>
                <a href = "/">IV OF SPADES Analytics</a>
                <ul>
                    <li>
                        <a href = "/topstreams"> Top Streams</a>
                    </li>
                    <li>
                        <a href = "/trending"> Trending</a> 
                    </li>
                </ul>
            </Nav>      
        </StyledHeader>
    ) 
}

export default Header;