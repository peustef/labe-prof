import styled from 'styled-components'

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 60%;
  height: 100%;
  h2 {
    font-size: 24px;
    font-weight: 600;
  }
  input {
    padding: 6px;
    border-radius: 5px;
  }
  @media(max-width: 700px){
    width: 100%;
  } 
`

export const FormLine = styled.div`
  display: flex; 
  justify-content: space-between ;   
  @media(max-width: 700px){
    display: flex;
    flex-direction: column;
  }     
`
export const FormInfo = styled.div`
  display: flex; 
  flex-direction: column;    

  textarea {
    padding: 6px;
    border-radius: 5px;
  } 
`

export const ContCheck = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  input{
      margin-left:0.1em;
      
  }
`