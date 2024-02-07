import { StyledHeader, Nav, Logo } from './styles/Header.styled'


const Header = () => {
    return (
        <StyledHeader>
            <Nav>
                <Logo src='./images/ivos-logo.svg'  />
                <h1> IV OF SPADES </h1>
            </Nav>      
        </StyledHeader>
    ) 
}

export default Header;