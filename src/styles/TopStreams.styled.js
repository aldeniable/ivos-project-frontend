import styled from 'styled-components'

export const TopStreamsContainer = styled.div`
   align-items: flex-start;
   margin: 50px;
   `

export const TopStreamsTitle = styled.div`
    display: flex;
    img {
      width: 65px;
      height: auto;
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
    font-size: 1.4rem;
    background-color: #F5F5F5;
    img {
      width: 30px;
      align-items: center;
      height: auto;
    }
`
export const TableRow = styled.tr`
  font-size: ${(props) => (props.isTopTen ? '20px' : 'initial')};
  indexcell {
    font-size: ${(props) => (props.isTopTen ? '75px' : 'initial')};
    font-weight: ${(props) => (props.isTopTen ? 'bold' : 'initial')};
    color: ${(props) => (props.isTopTen ? '#008080' : 'initial')};
  }
  plusstreams {
    font-weight:bold;
    color: green;
  }
  transition: background-color 0.6s ease;
  transition: color 0.3s, font-size 0.3s;
  &:hover {
    background-color: #FFF8DC;
    color: #008080;
    font-size: ${(props) => (props.isTopTen ? '35px' : '20px')}; 
  }
`

export const TableCell = styled.td`
  padding: 10px;
  text-align: left;

  img {
    width: 50px;
    height: auto;
  }
`