import styled from 'styled-components'

export const HeaderArea = styled.div`
    height: 60px;
    background-color: #791E94;
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

            ul{
                display: flex;

                li{
                    list-style: none;
                    margin-left: 20px;
                }
            }
        }
`;

