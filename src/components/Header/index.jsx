import * as C from './styled'

import Logo from '../../assets/Logo.png';

const Header = () =>{

    return(
        
            <C.HeaderArea>
                <div className="container">
                    <div className="logo">
                        <img src={ Logo } alt="" />
                    </div>

                    <nav>
                        <ul>
                            <li>Configurações</li>
                            <li>Sair</li>
                        </ul>
                    </nav>
                </div>
            </C.HeaderArea>
    )
}

export default Header;