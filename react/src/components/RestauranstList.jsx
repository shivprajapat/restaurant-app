import React, { Component } from "react";
import { Spinner, Table, Container, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
export default class RestauranstList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }

  getData() {
    fetch("http://localhost:3000/restaurant").then((response) => {
      response.json().then((result) => {
        // console.log(result);
        this.setState({ list: result });
      });
    });
  }

  componentDidMount() {
    this.getData();
  }

  delete(id) {
    fetch("http://localhost:3000/restaurant/" + id, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        alert("Restaurant has heen Delete");
        this.getData();
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
                <th colSpan={3}>Email</th>
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
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => this.delete(item.id)}
                          >
                            <FaTrashAlt size={18} />
                          </Button>
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
