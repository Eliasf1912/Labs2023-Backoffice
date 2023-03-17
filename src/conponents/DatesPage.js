import Nav from './Nav';
import './DatesPage.css';
import { useState, useEffect } from 'react';
import _ from '../firebase-usefull/init.js';
import databaseService from '../firebase-usefull/database.js';

const Main = () => {
    
    const [datesTab, setDatesTab] = useState([]);

    useEffect( () => {
        let tab = [];
        databaseService.readData("dates", (data) => {
            for(const date in data){
                tab.push(data[date])
                console.log(date.key);
            }
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

    const FormChange = (event) => {
        const {name, value} = event.target;
        const newFormOject = {...formObject};
        newFormOject[name] = value;
        setFormObject(newFormOject);  
    }

    const addDates = () => {
        const url = "dates/" + formObject.date;
        const data = {
            date: formObject.date,
            pays: formObject.pays,
            ville: formObject.ville,
            adresse: formObject.adresse
        }
        databaseService.writeData(url, data);
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

    const removeDates = (index) => {
        const newdatesTab = datesTab.filter(date => date.index !== index)
        setDatesTab(newdatesTab);
    }

    return (  
        <div className='TournePage'>
            <Nav/>
            <div className='Dates-modify'>
                <h1>Ajoutez des dates à la tourner</h1>
                <input type="date" name="date" value={formObject.date} onChange={FormChange}/>                   
                <input type="text" name="pays" value={formObject.pays} placeholder='Pays' onChange={FormChange}/>
                <input type="text" name="salle" value={formObject.salle} onChange={FormChange} placeholder="salle"/>                     
                <input type="text" name="ville" value={formObject.ville} placeholder='Ville' onChange={FormChange}/>
                <input type="text" name="adresse" value={formObject.adresse} placeholder='adresse' onChange={FormChange}/>                    
                <input type="submit" name="submit" value='Ajouter' onClick={addDates}/>               
            </div>
            <div>
                {datesTab.map((date,index) =>
                    <div className='date-display' key={date.date}>
                        <p>{date.date}</p>
                        <p>{date.pays}</p>
                        <p>{date.ville}</p>
                        <p>{date.salle}</p>
                        <p>{date.adresse}</p>
                        <div className='div-button'>
                            <button>modifier</button>
                            <button onClick={()=>removeDates(index)}>Supprimer</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default Main;