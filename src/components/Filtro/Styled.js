import styled from "styled-components";

export const ContainerFiltro = styled.div`
    select {
        padding: 7px;
        border-radius: 5px;
        outline: none;
    }

    @media(max-width: 700px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        input {
            width: 95vw;
        }
    }
    
`

export const Pesquisa = styled.div`
    @media(max-width: 700px){
        width: 95vw;
        margin-bottom: 3px;

        input {
            width: 100%;
        }
    }
`