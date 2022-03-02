import React from "react";
import {
    Button,
    Card,
    Form,
    Row,
    Col,
  } from "react-bootstrap";

function DeleteCompany(){

    const handleSubmit = (() => {
        fetch(`http://127.0.0.1:3001/api/v1/companies/1`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
        })
    });

    
    return(
        <>
            <Card className="m-4">
                <Card.Header>
                    <Card.Title as="h4">Deletando Empresa</Card.Title>
                </Card.Header>
                <Card.Body className="mx-3 container">
                    <h4>Tem certeza que deseja deletar essa empresa?</h4>
                </Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Button
                        className="m-4 btn-fill btn-dark pull-right"
                        type="submit"
                        variant="info"
                    >
                        Enviar
                    </Button>
                </Form>
            </Card>
        </>
    );
}

export default DeleteCompany;