import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";

export default function Character (props){
        const style = {
            margin: '0 auto',
            background: 'var(--card-color)',
            width: '400px',
            padding: '20px',                    
          };
        return (
            <div style={style}>
               <div> 
                    <NavLink to={`/CharDetail/${props.id}`}>
                        <img src={props.photo}></img>
                        <p>{props.name} {props.lastname}</p>
                    </NavLink>
                </div> 
            </div>
        )
    

}