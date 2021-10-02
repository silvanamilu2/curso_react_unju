import React from "react";
import Data from "../data/data.json";
import Character from "./Character";

export default class Home extends React.Component{
    constructor(){
        super()
    }

    
    render(){
        return (
            <div>
                {Data.Characters.map((element)=>(
                    <Character
                    id={element.id}
                    name={element.name}
                    lastname={element.lastname}
                    photo={element.photo}
                />
                ))}
                
            </div>
        )
    }

}