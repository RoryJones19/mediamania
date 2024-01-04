import {Link} from "react-router-dom";
import './styles/Header.css';

function Header () {
    return (
        <div className='headerRow'>
            <Link to="/"> Home </Link>
            <Link to="/About"> About </Link>
            <Link to="/Blog"> Blog </Link>
            <Link to="/Post"> Post </Link>
        </div>
    );
}

export default Header;