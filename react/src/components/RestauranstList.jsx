import React, { Component } from "react";
import { Spinner, Table, Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
export default class RestauranstList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/restaurant").then((response) => {
      response.json().then((result) => {
        // console.log(result);
        this.setState({ list: result });
      });
    });
  }

  render() {
    return (
      <section className="mt-5">
        <Container>
          <Col className="mb-3 text-center">
            <h1>RestauranstList</h1>
          </Col>

          <Table bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Rating</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              {this.state.list ? (
                <>
                  {this.state.list.map((item, index) => {
                    const { id, name, address, rating, email } = item;
                    return (
                      <tr key={index}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{address}</td>
                        <td>{rating}</td>
                        <td>{email}</td>
                        <td>
                          <Link to={"/update/" + item.id}>
                            <Button variant="primary">
                              <FaEdit size={18} />
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <Spinner animation="border" variant="primary" />
              )}
            </tbody>
          </Table>
        </Container>
      </section>
    );
  }
}
