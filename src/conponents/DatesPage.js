import Nav from './Nav';
import './DatesPage.css';
import { useState, useEffect} from 'react';
import _ from '../firebase-usefull/init.js';
import databaseService from '../firebase-usefull/database.js';
import authService from '../firebase-usefull/auth';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    
    const [datesTab, setDatesTab] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        databaseService.readData("dates", (data) => {
            let tab = [];
            console.log(data)
            for(const key in data){
                const newdate = {...data[key], id: key}
                tab.push(newdate)
                
            }
            console.log(tab)
            setDatesTab(tab)
        })

    },[])

    const [formObject, setFormObject] = useState({
        date: "",
        pays: "",
        ville: "",
        adresse: "",
        salle: ""
    })

    const [formEdit,setFormEdit] = useState({
        date: "",
        pays: "",
        ville: "",
        adresse: "",
        salle: ""
    })

    const FormChangeEdit = (event) => {
        const {name, value} = event.target;
        const newFormOject = {...formEdit};
        newFormOject[name] = value;
        setFormEdit(newFormOject);  
    }


    const [Isclicked , setIsClicked] = useState(false)

    const FormChange = (event) => {
        const {name, value} = event.target;
        const newFormOject = {...formObject};
        newFormOject[name] = value;
        setFormObject(newFormOject);  
    }

    const addDates = () => {
        const data = {
            date: formObject.date,
            pays: formObject.pays,
            ville: formObject.ville,
            adresse: formObject.adresse,
            salle : formObject.salle
        }
        databaseService.writeData(data);
        let newFormOject_= {...formObject};
        newFormOject_= {
            date: "",
            pays: "",
            ville: "",
            adresse: "",
            salle: ""
        }
        setFormObject(newFormOject_);
    }

    const removeDates = (id) => {
        const newdatesTab = datesTab.filter(date => date.id !== id)
        setDatesTab(newdatesTab);
        const url = `dates/` + id;
        databaseService.removeData(url);   
    }

    const modifyDates = (id,date) => {
        setIsClicked(true);
        let formEdit_ = {...formEdit}
        formEdit_ = {
            date: date.date,
            pays: date.pays,
            ville: date.ville,
            adresse: date.adresse,
            salle: date.salle
        }
        setFormEdit(formEdit_)
    }

    const validDates = (id,date) => {
        if( formEdit.date !==  date.date || formEdit.pays !==  date.pays || formEdit.ville !==  date.ville || formEdit.adresse !==  date.adresse ||  formEdit.salle !==  date.salle){
            const url = "dates/" + id;
            let updates = {
                date: formEdit.date,
                pays: formEdit.pays,
                ville: formEdit.ville,
                adresse: formEdit.adresse,
                salle: formEdit.salle
            }
            databaseService.updateData(url, updates)
            setIsClicked(false);
            console.log("succes");
        }else{
            setIsClicked(false);
        }
    }

    return (  
        <div className='TournePage'>
            <Nav/>
            <div className='Dates-modify'>
                <h1>Ajoutez des dates à la tourner</h1>
                <input type="date" name="date" value={formObject.date} onChange={FormChange}/>                   
                <input type="text" name="pays" value={formObject.pays} placeholder='Pays' onChange={FormChange}/>
                <input type="text" name="ville" value={formObject.ville}  placeholder="Ville"onChange={FormChange}/>                     
                <input type="text" name="adresse" value={formObject.adresse} placeholder='adresse' onChange={FormChange}/>
                <input type="text" name="salle" value={formObject.salle} placeholder='salle' onChange={FormChange}/>                    
                <input type="submit" name="submit" value='Ajouter' onClick={() =>{addDates()}}/>                
            </div>
            <table className="dataTable">
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>PAYS</th>
                        <th>VILLE</th>
                        <th>ADRESSE</th>
                        <th>SALLE</th>
                        <th>EDITE</th>
                        <th>SUPRIMER</th>
                    </tr>
                </thead>
                
                <tbody >
                {datesTab.map((date) =>(
                    <tr className={(Isclicked === true)?"hidden" : "reveal"} key={date.id}>
                        <td>{date.date}</td>
                        <td>{date.pays}</td>
                        <td>{date.ville}</td>
                        <td>{date.adresse}</td>
                        <td>{date.salle}</td>
                        <td>
                            <button class="button action" onClick={()=>{modifyDates(date.id,date)}}>modifier</button>
                        </td>
                        <td>
                            <button class="button action" onClick={()=>{removeDates(date.id)}}>Supprimer</button>
                        </td>
                    </tr>
                    ))}   

                    {/* <tr className={(Isclicked === true)?"reveal" : "hidden"}>
                        <td><input type="date" name="date" value={formEdit.date} onChange={FormChangeEdit}/></td>
                        <td><input type="text" name="pays" value={formEdit.pays} placeholder='Pays' onChange={FormChangeEdit}/></td>
                        <td><input type="text" name="ville" value={formEdit.ville} placeholder="Ville" onChange={FormChangeEdit}/></td>
                        <td><input type="text" name="adresse" value={formEdit.adresse} placeholder='adresse' onChange={FormChangeEdit}/></td>
                        <td><input type="text" name="salle" value={formEdit.salle} placeholder='salle' onChange={FormChangeEdit}/></td>
                        <td><button onClick={()=>{validDates(date.id,date)}}>Validez</button></td>
                </tr> */}
                 </tbody>    
                 
                
            </table>
        </div>
    );
}
 
export default Main;