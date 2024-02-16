import styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color: #FFA500;
    padding: 20px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    border-radius: 8px;
    margin: 15px 15px 15px 15px;
    font-family: 'Darker Grotesque', sans-serif;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;
    padding: 10px 10px; 

    a {
        color: inherit;
        display: flex;
        align-items: center;
    }
    
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        gap: 1rem;
    }

    li:hover {
        color: #FFFFFF;

    }



`
export const Logo = styled.img`
    width: 100px;
    height: auto;
`