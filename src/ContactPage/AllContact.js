/* eslint-disable jsx-a11y/alt-text */
import { Component } from "react";
import Navebar from "../AllHome/Navebar";
import Footers from "../AllHome/Footers";
import React from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";

class AllContact extends Component {
  state = {
    person: [],
  };
  componentDidMount() {
    axios
      .get("/js/Api.json")
      .then((result) => {
        this.setState({
          person: result.data.recipes,
        });
      });
  }
  render() {
    return (
      <div>
        <Navebar />
        <Footers />

        <Container>
          <Row>
            {this.state.person.map((items) => (
              <Col md="4" className="text-center mb-3" key={items.recipe_id}>
                <img
                  src={items.image_url}
                  className="w-100 pb-3"
                  style={{ height: "300px" }}
                />
                <h6>{items.recipe_id}</h6>
                <h5>{items.title}</h5>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default AllContact;
