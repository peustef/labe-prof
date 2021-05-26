import React from 'react'
import styled from 'styled-components'

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 60%;
  height: 100%;
`

export const FormLine = styled.div`
  display: flex; 
  justify-content: space-between ;        
`
export const FormInfo = styled.div`
  display: flex; 
  flex-direction: column;    
`

export const ContCheck = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;

  input{
      margin-left:0.1em;
      
  }
`
