import styled from 'styled-components'

export const PostContainer = styled.div`

   align-items: flex-start;
   padding: 1em;
   background-color: #FFD700;
   margin: 1.2em;
   border-radius: 2em;
   max-width: 600px;
   border-color: #8FBC8F;
   border-width: 10px;    
   border-style: solid;  
   
   user {
    font-style: italic;
    font-size: 0.85em;
    font-weight: normal;
    padding: 8px;
    border-radius: 5px;
   }
   likes {
      font-style: italic;
      font-size: 0.85em;
      font-weight: normal;
   }
 `

 export const PostsContainer = styled.div`
   align-items: center;
   justify-content: center;
   display: grid;
 `

export const PostInput = styled.div`
   buttondiv {
      display: flex;
      justify-content: center;
      align-items: center;
   }
   textarea {
      width: 350px;
      min-height: 120px;
      box-sizing: border-box;
   }

`

export const InputContainer = styled.div`
   margin-top: 50px;
   align-items: center;
   justify-content: center;
   display: grid;
   padding: 15px;
`
