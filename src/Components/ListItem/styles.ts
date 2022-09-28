import styled from "styled-components";

type ContainerProps = {
    feito: boolean
}

export const Container = styled.div(({feito}: ContainerProps ) => (
    `
    display: flex;
    align-items:center;
    background-color: #0a1d42;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: #EFF7FF;
        text-decoration: ${feito ? 'line-through' : 'initial'};
    }
    `
));