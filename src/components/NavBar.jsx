import React from "react";
import About from "./About";
import {Link, NavLink} from "react-router-dom";


export default class NavBar extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div>
                <h3>SimpsonApp</h3>
                <p><NavLink exact to="/" activeClassName="active">Home</NavLink></p>
                <p><NavLink exact to="/charDetail" activeClassName="active">Character Detail</NavLink></p>
                <p><NavLink exact to="/about" activeClassName="active">About</NavLink></p>
            </div>
        )
    }
}