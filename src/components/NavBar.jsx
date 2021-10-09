import React from "react";
import About from "./About";
import {Link, NavLink} from "react-router-dom";
import './navBar.css';
import { Button} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavBar extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="fondo">
                <h3>SimpsonApp</h3>
                <div className="class_navbar">
                    <p><NavLink exact to="/" activeClassName="active"><Button variant="dark">Home</Button></NavLink></p>
                    <p><NavLink exact to="/charDetail" activeClassName="active"><Button variant="dark">Character Detail</Button></NavLink></p>
                    <p><NavLink exact to="/about" activeClassName="active"><Button variant="dark">About</Button></NavLink></p>
                    

                </div>
            </div>
        )
    }
}