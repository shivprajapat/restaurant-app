import React, { Component } from "react";
import { Container, Col, Form, Button, Card } from "react-bootstrap";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
    };
  }
  login() {
    console.warn(this.state);
    fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
      data.json().then((resp) => {
        console.warn("resp", resp);
        if (resp.length > 0) {
          localStorage.setItem("login", JSON.stringify(resp));
          console.warn(this.props.history.push("list"));
        } else {
          alert("Pelase check username and password");
        }
      });
    });
  }
  render() {
    return (
      <section className="mt-5">
        <Container>
          <Col className="mb-3 text-center">
            <h1>Login</h1>
          </Col>

          <Card className="shadow-sm border-0 bg-info p-3">
            <Form>
              <Form.Group controlId="validationCustom02">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="user"
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </Form.Group>
              <Form.Group controlId="validationCustom02">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  placeholder="Enter Password"
                  type="password"
                  name="password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mt-3">
                <Button variant="primary" onClick={() => this.login()}>
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Card>
        </Container>
      </section>
    );
  }
}
