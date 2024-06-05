import styled from 'styled-components'

export const PostContainer = styled.div`

   align-items: flex-start;
   padding: 1em;
   background-color: #F0E68C;
   margin: .5em;
   border-radius: 1em;
   max-width: 900px;
   
   user {
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
   background-color: #FFF8DC;
   align-items: center;
   justify-content: center;
   display: grid;
   padding: 15px;
`
