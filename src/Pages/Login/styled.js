import styled from "styled-components";



export const AreaLogin = styled.div`
    background-color: #FFF;
    padding: 30px;
    max-width: 350px;
    margin: auto;
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #CCC;

    

    p{
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .form-input{
        text-align: left;
    }

    label{
        display: block;
        
    }
    input{
        margin-bottom: 20px;
        padding: 10px;
        font-size: 16px;
        outline: none;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 280px;
        transition: 0.3s;

        &:hover{
            border: 1px solid #7D2AEB;
        }
    }
    .footer-login{
        font-size: 13px;  
        text-align:center ;

        a{
            font-weight: bold;
            margin-left: 5px;
            color: #4E129C;
            transition:  0.4s;
            cursor: pointer;

            &:hover{
                color: #7D2AE8;
            }
        }
    }
`;

export const TitleLogin = styled.h1`
    font-size: 24px;
`;

//css Registre


export const TitleRegister = styled.h1`
    font-size: 24px;
    text-align: center;
`;

export const ParagraphRegister = styled.p`
    color:#9c9c9c ;
`;