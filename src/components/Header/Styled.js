import styled from "styled-components";

export const ContainerHeader = styled.div`
    @media(max-width: 700px){
        display: flex;
        flex-direction: column;
    }
`

export const ContainerMenu = styled.div`
    @media(max-width: 700px){
        align-items: center;
        justify-content: center;
        
        button{
            font-size: 22px;
        }
    }
`