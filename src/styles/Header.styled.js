import styled from 'styled-components'

export const StyledHeader = styled.header`
    background: #ffa500;
    display: flex;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;

    img {
        border-radius: 200px;
        padding: 30px;
        width: 75px;
        height: auto;
        transition: border-radius .3s; 
        transition: width .3s;
        
    }
    
    img:hover {
        border-radius: 50px;
        width: 100px;
        height: auto;
    }

`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    h1 {
        font-size: 2rem;
        font-family: 'Arial';
        font-color: black;
        transition: font-size .3s;
    }
    h1:hover {
        font-size: 2.5rem;
    }

    button {
        transition: height 2s
        transition: background 2s;
        font-size: 21px;
        margin: 10px;
        font-family: Arial;
        background-color: transparent;
        border: none;
    }
    button:hover {
        background: #EFA02C;
        height: 100px;  
        border: none;
        font-weight: bold;
    }
    
    ul {
        margin: 0 70px;;
        list-style: none;
        display: flex;
        gap: 100rem;
    }
    li:hover {
        color: #FFFFFF;
    }



`
export const Logo = styled.img`
    width: 100px;
    height: auto;
`