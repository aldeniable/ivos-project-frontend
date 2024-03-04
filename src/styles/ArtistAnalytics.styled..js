import styled from 'styled-components'


export const TopStreamsContainer = styled.div`

   align-items: flex-start;
   margin: 50px;


   `

export const TopStreamsTitle = styled.div`
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

export const StyledTopStreams = styled.div`
  background-color:#D3D3D3;
  padding: 16px;
  margin: 20px;
  border-radius: 5px;

    `
export const List = styled.div`
    
   width: 20%;
   justify-content: space-between;
    
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
  font-size: ${(props) => (props.isTopTen ? '20px' : '20px')};
  indexcell {
    font-size: ${(props) => (props.isTopTen ? '75px' : '75px')};
    font-weight: ${(props) => (props.isTopTen ? 'bold' : 'bold')};
    color: ${(props) => (props.isTopTen ? '#008080' : '#008080')};
  }
  smol {
    font-size: 1rem;
  }

  transition: background-color 0.6s ease;
  transition: color 0.3s, font-size 0.3s;
  &:hover {
    background-color: #FFF8DC;
    
    font-size: ${(props) => (props.isTopTen ? '35px' : '20px')}; 
    font-weight: bold;
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