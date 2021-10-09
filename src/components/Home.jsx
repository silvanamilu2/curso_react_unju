import React from "react";
import Data from "../data/data.json";
import Character from "./Character";
import './navBar.css';
import { Card, Button} from 'react-bootstrap';

export default class Home extends React.Component{
    constructor(){
        super()
    }

    
    render(){
        return (
            <div name='name' className="personajes">
                <h2>Personajes</h2>
                
                {Data.Characters.map((element)=>(
                  <div className="lista">  <Character
                    
                    id={element.id}
                    name={element.name}
                    lastname={element.lastname}
                    photo={element.photo}
            
                   
                /> 
                     </div>
                ))}
                
            </div>
        )
    }

}