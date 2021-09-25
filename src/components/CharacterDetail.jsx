import React from "react";
import Data from "../data/data.json";


export default class CharacterDetail extends React.Component{
    constructor(){
        super();
        this.state = {
            currentElement: Data.Characters[0]
        };
    }
    onChangeInput = (event) => {
        this.setState(() => {
          return {
            currentElement: Data.Characters.find(
              (element) => element.id == event.target.value
            ),
          };
        });
      };
    render() {
        return (
          <div className="container">
            <select
              onChange={(event) => {
                this.onChangeInput(event);
              }}
            >
              {Data.Characters.map((element) => (
                <option value={element.id}>
                  {element.name + " " + element.lastname}
                </option>
              ))}
            </select>
            <div>
              <h3>
                {this.state.currentElement.name +
                  " " +
                  this.state.currentElement.lastname}
              </h3>
              <div>
                <img src={this.state.currentElement.photo}></img>
              </div>
              <h3>Información:</h3>
              <p>Nombre: {this.state.currentElement.name}</p>
              <p>Apellido: {this.state.currentElement.lastname}</p>
              <p> Edad: {this.state.currentElement.age + " años"}</p>
              <p>Madre: {this.state.currentElement.mother}</p>
              <p>Padre: {this.state.currentElement.father}</p>
              <p>Amigos:   {this.state.currentElement.Friends.map((frend) => (
              <ul>
                  <li>{frend}</li>
              </ul>
          ))}</p>
            </div>
          </div>
        );
      }
    }
    