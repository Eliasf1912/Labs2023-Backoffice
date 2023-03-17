import { Link } from 'react-router-dom';
import './Home.css'
import Nav from './Nav';

const Home = () => {
    let Isclick = true;

    return(
        <div className="Home">
            <Nav/>
            <div className="Main">
                <h1>Back office</h1>
                <Link to="/LoginPage.js"><button>Connexion</button></Link>
            </div>
        </div>
    );
}
 
export default Home;