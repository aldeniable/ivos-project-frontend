import styled from 'styled-components'

export const StyledHeader = styled.header`
    background: #ffa500;
    transition: background-color 0.3s ease;
`;

export const ImageContainer = styled.div`
max-width: 20%;
img {
  border-radius: 50%;
  padding: .5em;
  transition: border-radius 0.3s, width 0.3s;
  margin-left: 1em;
  max-width: 50%;
}
`
export const TitleContainer = styled.h1`
    max-width: 20%;
    h1 {
        font-size: 1.5em;
        font-family: 'Arial';
        font-color: blue;
        transition: font-size .3s;
        margin-left: .5em;
        max-width: 100%;
    }
    h1:hover {
        font-size: 2.5em;
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
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    button {
        transition: transform 1s ease;
        transition: background 1s ease;
        font-size: 1.1em;
        margin: .3em;
        font-family: Arial;
        background-color: transparent;
        border: none;
    }
    button:hover {
        background: #FFDEAD;
        width: auto;
        border: none;
        font-weight: bold;
        border-radius: .6em;
        transform: scale(1.2);
    }

    li:hover {
        color: #FFFFFF;
    }
`

export const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`