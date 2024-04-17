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
        transition: border-radius .3s; 
        transition: width .3s;
    }

    img:hover {
        border-radius: 50px;
        width: 100px;
        height: auto;
    }

    vertical-line {
        border-left: 3px solid #000;
        height: 100px; 
        margin: 0 10px; 
      }

`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    h1 {
        font-size: 2rem;
        font-family: 'Arial';
        font-color: blue;
        transition: font-size .3s;
    }
    h1:hover {
        font-size: 2.5rem;
    }
    buttons {
        display: flex;
        justify-content: space-between;
    }

    button {
        transition: transform 1s ease;
        transition: background 1s ease;
        font-size: 21px;
        margin: 10px;
        font-family: Arial;
        background-color: transparent;
        border: none;
    }
    button:hover {
        background: #FFDEAD;
        width: auto;
        border: none;
        font-weight: bold;
        border-radius: 7px;
        transform: scale(1.2);
    }
    
    ul {
        list-style: none;
        display: flex;

    }

    li:hover {
        color: #FFFFFF;
    }


`
export const Logo = styled.img`
    width: 100px;
    height: auto;
`

