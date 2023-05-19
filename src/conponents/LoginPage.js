import "./LoginPage.css"
import { useState } from 'react';
import Error from '../firebase-usefull/error';
// eslint-disable-next-line no-unused-vars
import _ from '../firebase-usefull/init';
import authService from "../firebase-usefull/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [formObject, setFormObject] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();
    const error = new Error;

    const FormChange = (event) => {
        const {name, value} = event.target;
        const newFormOject = {...formObject};
        newFormOject[name] = value;
        setFormObject(newFormOject);  
    }

    const login = (event) => {
        event.preventDefault();
        authService.login(formObject.email,formObject.password).then(result => {
            if (result.error) {
                error.open(result.error.frenchMessage);
            }else{
               navigate("/DatesPage.js");
               console.log(result);
            }
        });
    }

    return (  
        <div className="a">
            <div className="LoginPage">
                {/* <input type="text" name="email" placeholder="email" value={formObject.value} onChange={FormChange}/>
                <input type="password" name="password" placeholder="mot de passe" value={formObject.value} onChange={FormChange}/>
                <input type="submit" name="submit" value="Envoyer" onClick={login}/>  */}
            </div>
        </div>
    );
}
 
export default LoginPage;