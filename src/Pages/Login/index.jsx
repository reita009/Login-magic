import * as C from "./styled";
import { Link,BrowserRouter,Routes,Route } from "react-router-dom";
import { BtnSocial,BtnSubmit } from "../../components/BtnSocial/styled";
import { useState } from "react";


//fireBase
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../FireBaseConfig';

//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
//Pages

import Registrar from "../Registrar";

const Login = ({onReceiveGoogle}) =>{

    const [active, setAactive] = useState(true)

    const handleActive = () =>{
        setAactive(false)
    }
    const handleGoogleSignIn = () =>{
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result)=>{
            onReceiveGoogle(result.user)
            console.log(result);
        }).catch((error)=>{
            console.log(error);
        })

        
    }

    

    return(
        <>
        <BrowserRouter>
            {active === true &&

                <C.AreaLogin>
                <C.TitleLogin>Faça login em sua conta</C.TitleLogin>
                <BtnSocial>
                    <FacebookIcon />
                    <div className="center">
                    Fazer login com FaceBook
                    </div>
                </BtnSocial>

                <BtnSocial onClick={ handleGoogleSignIn } >
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
                        <Link to="/registrar"
                         onClick={ handleActive }
                        >Registre-se</Link>
                    </div>
                </form>
                </C.AreaLogin>
            }

        {active === false &&
            <Routes>
            <Route path='/registrar' element={ <Registrar/> }/>
            </Routes>
        }

        </BrowserRouter>
        </>
    )
}

export default Login;