import * as C from './styled'

import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
import { ContactsOutlined } from '@mui/icons-material';

const Header = (props) =>{
        
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

                        <div className="user">
                                 <C.NameUser>{ props.user.name }</C.NameUser>
                                <C.Avatar src={props.user.avatar} />
                        </div>
                    </nav>
                </div>
            </C.HeaderArea>
    )
}

export default Header;