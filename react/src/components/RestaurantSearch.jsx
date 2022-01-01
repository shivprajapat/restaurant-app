import React, { Component } from "react";
import { Form, Table, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default class RestaurantSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      noData: false,
      lastSearch: "",
    };
  }
  search(key) {
    console.warn(key);
    this.setState({ lastSearch: key });
    fetch("http://localhost:3000/restaurant?q=" + key).then((data) => {
      data.json().then((resp) => {
        console.warn("resp", resp);
        if (resp.length > 0) {
          this.setState({ searchData: resp, noData: false });
        } else {
          this.setState({ noData: true, searchData: null });
        }
      });
    });
  }
  delete(id) {
    fetch("http://localhost:3000/restaurant/" + id, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        alert("Restaurant has heen Delete");
        this.search(this.state.lastSearch);
      });
    });
  }

  render() {
    return (
      <section className="mt-5">
        <Container>
          <h1>Restaurant Search</h1>

          <Form.Control
            type="text"
            onChange={(event) => this.search(event.target.value)}
            placeholder="Search restaurant"
          />
          <div>
            {this.state.searchData ? (
              <div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Rating</th>
                      <th>Location</th>
                      <th>Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.searchData.map((item) => (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.rating}</td>
                        <td>{item.address}</td>
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
                    ))}
                  </tbody>
                </Table>
              </div>
            ) : (
              ""
            )}
            {this.state.noData ? <h3>No Data Found</h3> : null}
          </div>
        </Container>
      </section>
    );
  }
}
