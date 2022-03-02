import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    Form,
    Row,
    Col,
  } from "react-bootstrap";

function IndexCompany(){
    const [companies, setCompanies]= useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:3001/api/v1/companies')
            .then((res) => res.json())
            .then((companies) => setCompanies(companies))
            .catch((err) => console.log(`Error: ${err}`));
        }, []);
      
    return(
        <>
            <Col>
                {companies &&(
                    companies.map(company => (
                        <Row className="container">
                            <Card className="mx-4 my-4">
                                <Card.Header className="bg-dark text-white">
                                    <Card.Title as="h4">{company.name}</Card.Title>
                                </Card.Header>
                                <Card.Body className="mx-3 container">
                                    <h5>Email:</h5><p>{company.email}</p><hr/>
                                    <h5>Telefone:</h5><p>{company.telephone}</p><hr/>
                                    <h5>Website:</h5><p>{company.website}</p>
                                </Card.Body>
                            </Card>
                        </Row>
                    ))
                )}
            </Col>
        </>
    );
}

export default IndexCompany;