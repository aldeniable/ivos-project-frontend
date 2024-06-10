
import styled from 'styled-components'

export const BodyContainer = styled.div`
justify-content: center;
display: grid;
            buttondiv {
         display: flex;
         justify-content: center;
         align-items: center;
      }
         postdiv {
                  display: flex;
         justify-content: center;
         align-items: center;
         font-size: 1.5em;
         font-weight: bold;
         }
`

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    border-radius: 40px;
    h1{
        font-size: 1.2rem;
        border-radius: 30px;
    }
`

export const ProfileContainer = styled.div`
    background-color: #FFF8DC;
    border-radius: 40px;
    padding: 20px;
    border-color: #8FBC8F;
    border-width: 20px;    
    border-style: solid;  
    p {
        margin-bottom: 2px;
    }
    stronger {
        font-size: 1.5em;
        font-weight: bold;
    }

`

export const ButtonContainer = styled.div`
`

export const FormContainer = styled.div`
      background-color: #FFF8DC;
      padding: 1.3em;
      border-radius: 2em;
      align-items: center;
          border-color: #8FBC8F;
    border-width: 20px;    
    border-style: solid;  

            buttondiv {
         display: flex;
         justify-content: center;
         align-items: center;
      }

      label {
      display: flex;
      align-items: center;
      }
`
