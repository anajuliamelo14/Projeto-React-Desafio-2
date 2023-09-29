import './index.css';

import { Link, useLocation } from 'react-router-dom';
import usuarioService from '../../service/usuario-service';

function Menu(){

    const logout = () =>{
        usuarioService.sairSistema();
    };

    if(useLocation().pathname !== '/login'){
        return (
            <ul className='menu'>
                <li><Link to='/clientes'>Alunos</Link></li>
                <li><Link to='/produtos'>Benefícios de Praticar</Link></li>
                <li><Link onClick={logout}>Sair</Link></li>
            </ul>
        )
    }else {
        return null;    
    }
}

export default Menu;