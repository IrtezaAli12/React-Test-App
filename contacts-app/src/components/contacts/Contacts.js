import { Amplify } from 'aws-amplify';

import { useState } from "react";
import { uploadData, getUrl, remove, } from '@aws-amplify/storage';

import { createContact  } from '../../graphql/mutations';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {v4 as uuid} from 'uuid';

import { generateClient } from 'aws-amplify/api';
const client = generateClient();

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [contactData, setContactData] = useState({name: "", email: "", cell: ""});
    const [profilePic, setProfilePic] = useState("");
    const [profilePicPaths, setProfilePicPaths] = useState([]);

    const addNewContact = async () => {
        const { name, email, cell } = contactData;

        // Upload the pic to S3
        const { key } = await uploadData(`${uuid()}.png`, profilePic, {contentType: 'image/png'});
        console.log(key);
        
        const newContact = {
            id: uuid(),
            name,
            email,
            cell,
            // profilePicPath: key
        };

        // Persist new Contact
        await client.graphql((createContact, {input: JSON.stringify(newContact)}));
    }
    return (
        <Container>
            <Row className="px-4 my-5">
                <Col><h1>Contacts</h1></Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img
                            src="/img/contact_1.png"
                            variant="top"  />
                        <Card.Body>
                            <Card.Title>Irteza Ali</Card.Title>
                            <Card.Text>
                                irteza@test.com
                                <br />555.123.4567
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="px-4 my-5">
                <Col sm={3}>
                    <h2>Add New Contact</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Contact name"
                                          value={contactData.name}
                                          onChange={evt => setContactData({...contactData, name:evt.target.value})}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Contact email"
                                          value={contactData.email}
                                          onChange={evt => setContactData({...contactData, email:evt.target.value})}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Cell</Form.Label>
                            <Form.Control type="text" placeholder="nnn-nnn-nnnn"
                                          value={contactData.cell}
                                          onChange={evt => setContactData({...contactData, cell:evt.target.value})}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Profile Pic</Form.Label>
                            <Form.Control type="file" accept="image/png"
                                          onChange={evt => setProfilePic(evt.target.files[0])}  />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={addNewContact}>Add Contact &gt;&gt;</Button>&nbsp;                        
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contacts;