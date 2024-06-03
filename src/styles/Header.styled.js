import styled from 'styled-components'

export const StyledHeader = styled.header`
    background: #ffa500;
    transition: background-color 0.3s ease;
`;

export const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 100%;
`

export const ImageContainer = styled.div`
    max-width: 15%;
    img {
    border-radius: 50%;
    padding: .5em;
    transition: border-radius 0.3s, width 0.3s;
    margin-left: 1em;
    max-width: 60%;
    }
`
export const TitleContainer = styled.h1`
    max-width: 20%;
    h1 {
        font-size: 1.5em;
        font-family: 'Arial';
        transition: font-size .3s;
        margin-left: .5em;
        max-width: 100%;
    }
    h1:hover {
        font-size: 1.8em;
    }
`

export const ListContainer = styled.ul`
    max-width: 50%;
    ul {
        list-style: none;
        flex-wrap: wrap;
        max-width:100%;
    }

    buttons {
        flex-wrap: wrap;
        
    }
    bigdiv {
        color: gray;
        background: #D2691E;
        border-radius: 1em;
        padding: .2em;
        display:flex;
        flex-wrap:wrap;
    }
    meddiv {
        color: gray;
        background: #ff8c00;
        border-radius: 1em;
        padding: .2em;
        display:flex;
        flex-wrap:wrap;
    }
    smoldiv {
        color: gray;
        font-size: .90em; 
        background: #FFD700;
        border-radius: 1em;
        padding: .2em;
        display:flex;
        flex-wrap:wrap;
    }

    button {
        transition: transform 1s ease;
        transition: background 1s ease;
        font-size: 1.2em;
        margin: .3em;
        font-family: Arial;
        background-color: transparent;
        border: none;
        border-radius: .6em;
    }
    button:hover {
        background: #FFDEAD;
        width: auto;
        border: none;
        font-weight: bold;
        border-radius: .8em;
        transform: scale(1.34);
        padding: .3em;
    }
    li:hover {
        color: #FFFFFF;
    }
`