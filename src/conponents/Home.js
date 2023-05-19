import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    let Isclick = true;

    return(
        <div className="Home">
            <div className="Main">
                <h1>Back office</h1>
                <Link to="/LoginPage.js"><button>Connexion</button></Link>
            </div>
        </div>
    );
}
 
export default Home;