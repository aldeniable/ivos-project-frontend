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
    font-size: ${(props) => (props.sorted ? '1.6rem' : '1.4rem')};
    background-color: ${(props) => (props.sorted ? '#FFDEAD' : '#F5F5F5')};
    transition: background-color .6s;
    cursor: help;
    img {
      width: 20px;
      align-items: center;
      height: auto;
    }
    &:hover {
      font-weight: bold;
      color: #008080;
      font-size: 1.6rem;
      transition: font-size .5s;
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

export const Modal = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 200px;
padding: 10px;
background-color: #fff;
border: 1px solid #ccc;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
z-index: 2;

text {
  font-size: .85rem;
  font-weight: light;
  color: black;
}
`