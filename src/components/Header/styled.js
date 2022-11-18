import styled from 'styled-components'

export const HeaderArea = styled.div`
    height: 60px;
    background-image: linear-gradient(to right, #fe5d26, #370D44);
    color: #fff;
    

    .container{
        height: 60px;
        padding: 5px 20px;
        display: flex;
        align-items: center;
        
    }
        .logo{
            flex:1;

            img{
                height: 50px;
            }
        }
        nav{
            display: flex;
            align-items: center;
            ul{
                display: flex;

                li{
                    list-style: none;
                    margin-left: 20px;

                    a{
                        text-decoration: none;
                        color: #fff;

                        &:hover{
                            color: #F5B000;
                        }
                    }
                }
            }

            .user{
                margin-left: 20px;
                display: flex;
                align-items: center;
            }
        }
`;

export const Avatar = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`;

export const NameUser = styled.h1`
    font-size: 27px;
    margin-right: 20px;
`;
