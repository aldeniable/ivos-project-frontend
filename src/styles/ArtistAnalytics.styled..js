import styled from 'styled-components'

export const ArtistAnalyticsContainer = styled.div`
   align-items: flex-start;
   margin-top: 60px;
   `

export const ArtistAnalyticsTitle = styled.div`
    display: flex;
    margin-bottom: 30px;
    img {
      width: 50px;
      height: auto;
      margin-right: 5px;
      border-radius: 200px;
    }
    h1 {
      font-size: 1.5rem;
    }
`

export const Table = styled.table`
    width: 100%;
    margin: 10px;
    border-collapse: collapse;
`

export const TableHeader = styled.th`
    padding: 10px;
    border-bottom: 2px solid #ddd;
    text-align: left;
    font-size: ${(props) => (props.sorted ? '1.3rem' : '1.1rem')};
    background-color: ${(props) => (props.sorted ? '#FFA500' : '#F5F5F5')};
    transition: background-color .6s;
    cursor: default;
    img {
      width: 20px;
      align-items: center;
      height: auto;
    }
    &:hover {
      font-size: 1.19rem;
      transition: font-size .5s;
    }
`

export const TableRow = styled.tr`
  font-size: ${(props) => (props.isTopTen ? '17px' : '15px')};
  indexcell {
    font-size: ${(props) => (props.isTopTen ? '35px' : '35px')};
    font-weight: ${(props) => (props.isTopTen ? 'bold' : 'bold')};
    color: ${(props) => (props.isTopTen ? '#FF8C00' : '#FF8C00')};
  }
  smol {
    font-size: 1rem;
  }

  transition: background-color 0.6s ease;
  transition: color 0.3s, font-size 0.3s;
  &:hover {
    background-color: #FFF8DC;
    transition :background-color .6s ease;
    font-size: ${(props) => (props.isTopTen ? '17px' : '17px')}; 
  }
`

export const TableCell = styled.td`
  padding: 10px;
  text-align: left;

  img {
    width: 80px;
    height: auto;
    border-radius: 7px;
  }

`

export const Modal = styled.div`
  position: fixed;
  top: 40%;
  left: 23%;
  transform: translate(-50%, -50%);
  width: 200px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
  opacity: 0.85;

  text {
    font-size: .85rem;
    font-weight: light;
    color: black;
  }
`