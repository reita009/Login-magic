import * as C from './styled'

import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

const Header = () =>{

    return(
        
            <C.HeaderArea>
                <div className="container">
                    <div className="logo">
                        <img src={ Logo } alt="" />
                    </div>

                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/config">Configurações</Link></li>
                            <li><Link to="/logout">Sair</Link></li>
                        </ul>
                    </nav>
                </div>
            </C.HeaderArea>
    )
}

export default Header;