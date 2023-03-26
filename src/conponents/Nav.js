import "./Nav.css"
import { Link } from 'react-router-dom';

const Nav = () => {
    return ( 
        <div className="Nav">
            <div className="container">
                <nav className="side-nav">
                    <ul className="nav-menu">
                        <Link to="/"><li className="nav-item"><span className="menu-text">Welcome</span></li></Link>
                        <Link to="/LoginPage.js"><li className="nav-item"><span className="menu-text">Gestionnaire</span></li></Link>
                        <Link to="/"><li className="nav-item"><span className="menu-text">Equipe</span></li></Link>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
 
export default Nav;