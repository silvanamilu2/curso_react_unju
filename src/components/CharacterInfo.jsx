import React from "react";
import { useParams , useHistory, useLocation} from "react-router";
import Data from  "../data/data.json";
import { Card, Button} from 'react-bootstrap';
import './navBar.css';

export default function CharacterInfo(props){
    const parametro = useParams();
    
    const elemento = Data.Characters.find((pers)=> pers.id == parametro.id);

    return(
        <div className='personajes'>
             <h3>
                {elemento.name +
                  " " +
                  elemento.lastname}
              </h3>
              <div>
                <img src={elemento.photo}></img>
              </div>
              <p>Nombre: {elemento.name}</p>
              <p>Apellido: {elemento.lastname}</p>
              <p> Edad: {elemento.age + " años"}</p>
              <p>Madre: {elemento.mother}</p>
              <p>Padre: {elemento.father}</p>
              <p>Amigos:   {elemento.Friends.map((frend) => (
              <ul >
                  <li >{frend}</li>
              </ul>
               ))}</p>

        </div>
        )

}