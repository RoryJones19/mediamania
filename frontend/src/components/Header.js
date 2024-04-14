import {Link} from "react-router-dom";
import './Header.css';

function Header () {
    return (
        <div className='headerRow'>
            <Link to="/"> Home </Link>
            {/*<Link to="/Blog"> Blog </Link>*/}
            <Link to="/Post"> Post </Link>
            <Link to="/Library"> Library </Link>
            <Link to="/About"> About </Link>
        </div>
    );
}

export default Header;