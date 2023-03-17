import "./Nav.css"
import { Link } from 'react-router-dom';

const Nav = () => {
    return ( 
        <div className="Nav">
            <ul>
                <li>Changer les paramétres du profile</li>
                <Link to="/Date.js"><li>Modifier la tourner</li></Link>
                <Link to="/"><li>Acceuil</li></Link>
            </ul>
        </div>
    );
}
 
export default Nav;