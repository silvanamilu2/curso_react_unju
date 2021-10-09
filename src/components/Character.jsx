import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import './navBar.css';
import { Card, Button} from 'react-bootstrap';

export default function Character (props){
        const style = {
            margin: '0 auto',
            background: 'var(--card-color)',
            width: '400px',
            padding: '20px',                    
          };
        return (
            <div  className="lista1">
               <div> 
                    <NavLink to={`/CharDetail/${props.id}`}>
                        <Card style={{ width: '18rem', height:'25rem', margin:'10px' }}>
                            <Card.Img style={{ width: '15rem', height:'auto',display:'block',margin:'auto' }} 
                            variant="top" src={props.photo} />
                            <Card.Body>
                                <Button variant="primary">{props.name} {props.lastname}</Button>
                            </Card.Body>
                        </Card>             
                    </NavLink>
                </div> 
            </div>
        )
    

}