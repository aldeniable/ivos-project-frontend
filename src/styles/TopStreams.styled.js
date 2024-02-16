import styled from 'styled-components'


export const TopStreamsContainer = styled.div`
  //  display: flex;
   // align-items: flex-start;
   // margin-top: 10px;

`
export const StyledTopStreams = styled.div`
   // font-family: 'Darker Grotesque';
    //background-color:#D3D3D3;
   // padding: 16px;
    //margin: 8px;
   // border-radius: 5px;

    `
export const List = styled.div`
    
   // width: 20%;
   // justify-content: space-between;
    
    `
export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`
export const TableHeader = styled.th`
    padding: 10px;
    border-bottom: 2px solid #ddd;
    text-align: left;
`
export const TableRow = styled.tr`
    &:nth-child(even) {
    background-color: #f9f9f9; /* Add alternate row background color if desired */
  }  
`
export const TableCell = styled.td`
  padding: 10px;
  text-align: left;
`