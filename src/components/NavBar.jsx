import React from "react";
import About from "./About";


export default class NavBar extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div>
                <h3>SimpsonApp</h3>
                <li><a href="#">Character Detail</a></li>
                <li><a href="#">About</a></li>
            </div>
        )
    }
}