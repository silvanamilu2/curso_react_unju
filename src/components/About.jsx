import React from "react";
import { useState } from 'react';
import { Badge, Form, Button, Col, Row, Alert } from "react-bootstrap";


function validacion(input){
    let errors = {}
    if(!input.email){
        errors.email = "Debe ingresar el Email"
    } else if(!/\S+@\S+\.\S+/.test(input.email)){
        errors.email = "Debe ingresar un email valido"
    }
    if(!input.asunto){
        errors.asunto = "Debe ingresar el Asunto"
    } else if(input.asunto.length < 10){
        errors.asunto = "El asunto debe tener como mínimo 10 caracteres"
    }
    if(!input.mensaje){
        errors.mensaje = "Debe ingresar el mensaje"
    } else if(input.mensaje.length > 255 ){
        errors.mensaje = "El mensaje solo puede tener como máximo 255 caracteres"
    }
    if (errors.email === "" && errors.asunto === "" && errors.consulta === "") {
        errors = false;
      }
    return errors;
}


export default function About(){

    const [state, setState] = useState({
        email: '',
        asunto: '',
        mensaje: ''
    })

    const [fails, setFails] = useState({
            email: '',
            asunto: '',
            mensaje: ''
    })

    function onHandleChange(e) {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        });
    
        setFails(
          validacion({
            ...state,
            [e.target.name]: e.target.value,
          })
        );
      }
    
      function onSubmitForm(e) {
        e.preventDefault();
      }
    
   
        return (
            <div style={{ textAlign:'center', marginTop:'60px', }}>
                <h4>Silvana Fuentes</h4>
                <p>Tp. Curso React</p>

                <Row>
                <Form className="col-8 offset-2" onSubmit={(e) => onSubmitForm(e)}>
                    <h2 style={{marginTop:'40px'}}>Contacto</h2>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2} style={{textAlign:'right'}}>
                        Correo Electrónico:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                        value={state.email}
                        name="email"
                        type="text"
                        onChange={(e) => onHandleChange(e)}
                        placeholder="Ingrese el Email"
                        />
                    </Col>
                    {fails.email && (
                        <Form.Text className="text-danger">{fails.email}</Form.Text>
                    )}
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalAsunto">
                    <Form.Label column sm={2} style={{textAlign:'right'}}>
                        Asunto:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                        value={state.asunto}
                        name="asunto"
                        type="text"
                        onChange={(e) => onHandleChange(e)}
                        placeholder="Ingrese el Asunto"
                        />
                    </Col>
                    {fails.asunto && (
                        <Form.Text className="text-danger">{fails.asunto}</Form.Text>
                    )}
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalMensaje">
                    <Form.Label column sm={2} style={{textAlign:'right'}}>
                        Mensaje:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                        value={state.mensaje}
                        name="mensaje"
                        as="textarea"
                        onChange={(e) => onHandleChange(e)}
                        placeholder="Ingrese el Mensaje"
                        style={{ height: "100px" }}
                        />
                    </Col>
                    {fails.mensaje && (
                        <Form.Text className="text-danger">{fails.mensaje}</Form.Text>
                    )}
                    </Form.Group>

                    <Button disabled={fails.mensaje || fails.asunto || fails.email} variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Row>
        </div>
        )
    

}