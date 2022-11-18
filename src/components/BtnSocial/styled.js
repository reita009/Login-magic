import styled from "styled-components";

export const BtnSocial = styled.button`
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 0px;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    transition: 0.4s;
    margin-top: 20px;

    &:hover{
        background-color: #ccc;
    }

    .center{
        text-align: center;
        width: 100%;
    }

    `;

export const BtnSubmit = styled(BtnSocial)`
    background-color: #7D2AE8;
    color: #fff;
    display: inline;

    &:hover{
        background-color: #4E129C;
    }
`;

