import styled from 'styled-components'

export const StyledHeader = styled.header`
    background: linear-gradient(to top, #ffa500, #ffd700);
    display: flex;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    border-radius: 8px;
    margin: 25px 50px 50px 50px;
    justify-content: space-between;
    align-items: center;

    img {
        border-radius: 200px;
        padding: 30px;
        width: 100px;
        height: auto;
        align-items: end;
        transition: border-radius .3s; 
        transition: width .3s;
        margin: 2px;
        
    }
    
    img:hover {
        border-radius: 50px;
        width: 150px;
        height: auto;
    }

`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 5px 5px 5px 20px;
    padding: 5px 5px; 

    h1 {
        font-size: 3rem;
        font-family: 'Georgia';
        font-color: black;
        transition: font-size .3s;
    }
    h1:hover {
        font-size: 3.5rem;
    }

    button {
        display: inline-block;
        padding: 10px 15px;
        color: #333;
        border-color: #ffa500; 
        border-radius: 12px; 
        transition: width 1s;
        transition: background-color 1s;
        font-size: 15px;
        margin: 10px;
        font-family: Georgia;
    
    }
    button:hover {
        background-color: #FFA500;
        width: 200px;  
        height: auto;  
        color: #555;
    }
    
    ul {
        padding: 0;
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