import React, { Component } from "react";
import { Button, Row, Card, Col, Container, Form } from "react-bootstrap";

export default class RestaurantUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      address: null,
      rating: null,
      id: null,
    };
  }
  componentDidMount() {
    fetch(
      "http://localhost:3000/restaurant/" + this.props.match.params.id
    ).then((response) => {
      response.json().then((result) => {
        console.warn(result);
        this.setState({
          name: result.name,
          email: result.email,
          id: result.id,
          rating: result.rating,
          address: result.address,
        });
      });
    });
  }

  update() {
    fetch("http://localhost:3000/restaurant/" + this.state.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        alert("Restaurant has heen Update");
      });
    });
  }
  render() {
    console.log(this.props.match.id);
    return (
      <section className="mt-5">
        <Container>
          <Card>
            <Card.Body>Restaurant Update</Card.Body>
          </Card>
          <Card className="shadow">
            <Card.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Restaurant Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Restaurant Email</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Restaurant Rating</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.rating}
                      onChange={(e) =>
                        this.setState({ rating: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Restaurant Address</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.address}
                      onChange={(e) =>
                        this.setState({ address: e.target.value })
                      }
                    />
                  </Form.Group>
                </Row>
                <Form.Group className="text-center">
                  <Button
                    variant="primary"
                    onClick={() => {
                      this.update();
                    }}
                    type="submit"
                  >
                    Update
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
