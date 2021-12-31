import React, { Component } from "react";
import { Button, Row, Card, Col, Container, Form } from "react-bootstrap";

export default class RestaurantCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      rating: null,
      address: null,
    };
  }

  create() {
    fetch("http://localhost:3000/restaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((reseult) => {
      reseult.json().then((resp) => {
        alert("Restaurant Created");
      });
    });

    this.setState("");
  }
  render() {
    return (
      <section className="mt-5">
        <Container>
          <Card>
            <Card.Body>RestaurantCreate</Card.Body>
          </Card>
          <Card className="shadow">
            <Card.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Restaurant Name</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Restaurant Email</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Restaurant Rating</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) =>
                        this.setState({ rating: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Restaurant Address</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) =>
                        this.setState({ address: e.target.value })
                      }
                    />
                  </Form.Group>
                </Row>
                <Form.Group className="text-center">
                  <Button
                    variant="primary"
                    onClick={() => this.create()}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </section>
    );
  }
}
