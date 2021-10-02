import React , {useState} from "react";
import Data from "../data/data.json";
import { useParams } from "react-router";

export default function CharacterDetail (props){
   
    const [dato, setState] = useState(Data.Characters[0])

    const onChangeInput = (event) => {
        setState(Data.Characters.find((elemento)=>elemento.id === event.target.value))
      };

        return (
            <>
            <select
              onChange={(event) => {
                onChangeInput(event);
              }}
            >
              {Data.Characters.map((char) => (
                <option value={char.id}>
                  {char.name + " " + char.lastname}
                </option>
              ))}
            </select>
            <div>
              <h3>
                {dato.name +
                  " " +
                  dato.lastname}
              </h3>
              <div>
                <img src={dato.photo}></img>
              </div>
              <h3>Información:</h3>
              <p>Nombre: {dato.name}</p>
              <p>Apellido: {dato.lastname}</p>
              <p> Edad: {dato.age + " años"}</p>
              <p>Madre: {dato.mother}</p>
              <p>Padre: {dato.father}</p>
              <p>Amigos:   {dato.Friends.map((frend) => (
              <ul>
                  <li>{frend}</li>
              </ul>
          ))}</p>
            </div>
          </>
        );
      
    }
    