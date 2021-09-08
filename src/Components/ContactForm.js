import React from "react";
import {
  Nav,
  Navbar,
  Container,
  FloatingLabel,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import "./ContactForm.css";
function ContactForm() {
  return (
    <div>
      <h1 className="contact-header">Contact form</h1>
      <Form id="form">
        <Row className="g-2">
          <Col md>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Control
                type="text"
                name="fname"
                id="fname"
                placeholder="First Name"
                required
              />
            </Form.Group>
          </Col>
          <Col md>
            <Form.Group className="mb-3" controlId="validationCustom02">
              <Form.Control
                type="text"
                name="lname"
                id="lname"
                placeholder="Last Name"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <FloatingLabel controlId="floatingSelect" label="State">
            <Form.Select
              name="state"
              id="state"
              aria-label="Floating label select example"
            >
              <option value="1">NSW</option>
              <option value="2">QLD</option>
              <option value="3">SA</option>
              <option value="4">TAS</option>
              <option value="5">VIC</option>
              <option value="6">WA</option>
              <option value="7">NT</option>
              <option value="8">ACT</option>
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
