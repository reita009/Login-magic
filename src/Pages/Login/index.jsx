import * as C from "./styled";
import { Link,BrowserRouter } from "react-router-dom";
import { BtnSocial,BtnSubmit } from "../../components/BtnSocial/styled";

//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () =>{

    return(
        <>
        <BrowserRouter>
            <C.AreaLogin>
                <C.TitleLogin>Faça login em sua conta</C.TitleLogin>
                <BtnSocial>
                    <FacebookIcon />
                    <div className="center">
                     Fazer login com FaceBook
                    </div>
                </BtnSocial>

                <BtnSocial>
                    <GoogleIcon />
                    <div className="center">
                     Fazer login com Google
                    </div>
                </BtnSocial>

                <p>Ou</p>

                <form action="">
                    <div className="form-input">
                        <label >E-mail</label>
                        <input type="email" />
                    </div>

                    <div className="form-input">
                        <label >Senha</label>
                        <input type="password" />
                    </div>

                    <BtnSubmit>Entrar</BtnSubmit>

                    <div className="footer-login">
                        não tem uma conta? 
                        <Link to="/registrar">Registre-se</Link>
                    </div>
                </form>
            </C.AreaLogin>
        </BrowserRouter>
        </>
    )
}

export default Login;