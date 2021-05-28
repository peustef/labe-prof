import styled from "styled-components";

export const ContainerCard = styled.div`
    @media(max-width: 700px){
        display: flex;
        flex-direction: column;
    }
`

export const Card = styled.div`
    height: 440px;
    justify-content: space-evenly;
    align-content: space-between;

    /* faz quebrar a linha com ... */
    flex-wrap: wrap;
    min-width: 0;

    p{
        /* para não ter barra de rolagem */
        overflow: hidden;
        /* para não quebrar linha */
        white-space: nowrap;
        /* faz ... parecer quando passar do min width do container acima */
        text-overflow: ellipsis;
        margin: 0;
    }
    @media(max-width: 700px){
        width: 80%;
        margin-left: 0;
    }
`