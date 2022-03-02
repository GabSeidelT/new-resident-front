import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    Form,
    Row,
    Col,
  } from "react-bootstrap";

function ShowCompany(){
    const [company, setCompany]= useState(0);

    useEffect(() => {
        fetch('http://127.0.0.1:3001/api/v1/companies/6')
            .then((res) => res.json())
            .then((company) => setCompany(company))
            .catch((err) => console.log(`Error: ${err}`));
        }, []);

    return(
        <>
            <Card className="m-4">
                <Card.Header>
                    <Card.Title as="h4">Empresa {company.name}</Card.Title>
                </Card.Header>
                <Card.Body className="mx-3 container">
                    <h5>Empresa:</h5><p>{company.name}</p><hr/>
                    <h5>Email:</h5><p>{company.email}</p><hr/>
                    <h5>Telefone:</h5><p>{company.telephone}</p><hr/>
                    <h5>Website:</h5><p>{company.website}</p>
                </Card.Body>
            </Card>
        </>
    );

}

export default ShowCompany;