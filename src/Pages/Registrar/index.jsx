import * as C from "../Login/styled"
import { BtnSocial,BtnSubmit } from "../../components/BtnSocial/styled";

//icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Registrar = () =>{

    return(
        <>
            <C.AreaLogin>
                <C.TitleRegister>
                 <a href="/"><ArrowBackIosIcon /></a>  
                  Crie sua Conta
                </C.TitleRegister>
                
             <C.ParagraphRegister>Crie sua conta. é grátis</C.ParagraphRegister>

             <form action="">

                    <div className="form-input">
                        <label >Nome</label>
                        <input type="text" />
                    </div>

                    <div className="form-input">
                        <label >E-mail</label>
                        <input type="email" />
                    </div>

                    <div className="form-input">
                        <label >Senha</label>
                        <input type="text" />
                    </div>

                    <BtnSubmit>Comece Agora!</BtnSubmit>

                    <div className="footer-login">
                        jatem uma conta? 
                        <a href="/registrar" >Fazer login</a>
                    </div>

                  
                </form>
            </C.AreaLogin>
        </>
    )
}

export default Registrar;