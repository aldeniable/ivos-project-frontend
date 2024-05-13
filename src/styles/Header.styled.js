import styled from 'styled-components'

export const StyledHeader = styled.header`
    background: #ffa500;
    width: 100%;
    transition: background-color 0.3s ease;
`;

export const ImageContainer = styled.div`
img {
  border-radius: 50%;
  padding: .5rem;
  transition: border-radius 0.3s, width 0.3s;
  height: auto;
  max-width: 30%;
  margin-left: 1rem;
}
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
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
        font-size: 1.1rem;
        margin: .3rem;
        font-family: Arial;
        background-color: transparent;
        border: none;
    }
    button:hover {
        background: #FFDEAD;
        width: auto;
        border: none;
        font-weight: bold;
        border-radius: .6rem;
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