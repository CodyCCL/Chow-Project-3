import React from "react";
import { Card, CardBody, CardTitle, CardText, Col } from "reactstrap";

const Project = (props) => {
  const { id, name, description, url } = props;

  return (
    <Col key={id} sm="3">
      <Card className="mb-4 border-0">
        <img alt="project-screen-shot" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardText>{description}</CardText>
          <a className="btn btn-secondary" href={url} role="button">
            Github
          </a>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Project;
