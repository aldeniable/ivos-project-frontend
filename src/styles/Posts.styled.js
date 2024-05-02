import styled from 'styled-components'


export const PostContainer = styled.div`

   align-items: flex-start;
   margin: 25px;
   padding:  10px 10px 10px 10px;
   background-color: #F0E68C;
   margin-left: 300px;
   margin-right: 300px;
   border-radius: 15px;
   
   user {
    font-style: italic;
    font-size: 0.85em;
    font-weight: normal;
   }

   `

export const PostInput = styled.div`
   margin: 30px;
   margin-left: 300px;
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