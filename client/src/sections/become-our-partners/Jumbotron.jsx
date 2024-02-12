import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Row,
} from "reactstrap";

const styles = {
  root: {
    minHeight: "80vh",
    backgroundColor: "#77C7CE",
  },
  h1: {
    color: "#FFFFFF",
    fontSize: "48px",
    fontWeight: "bold",
  },
  h2: {
    color: "#77C7CE",
    fontSize: "28",
    fontWeight: "bold",
  },
  input: {
    height: "64px",
    marginTop: "16px",
  },
  button: {
    backgroundColor: "#FD6801",
    color: "#FFFFFF",
    fontSize: "24px",
    marginTop: "18px",
    height: "64px",
  },
};
const Jumbotron = () => {
  const [formData, setFormData] = useState({
    restaurant: "",
    zip: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.restaurant) {
      newErrors.restaurant = "Restaurant name can't be empty.";
    }

    if (!formData.zip) {
      newErrors.zip = "Zip Code can't be empty.";
    }

    if (!formData.firstName) {
      newErrors.firstName = "First Name can't be empty.";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last Name can't be empty.";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone can't be empty.";
    }

    if (!formData.email) {
      newErrors.email = "E-mail Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid E-mail Address.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // form is valid
      console.log("Form data:", formData);

      // reset fields
      setFormData({
        restaurant: "",
        zip: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
      });

      // clear errors
      setErrors({});

      setSubmitted(true);
    }
  };
  return (
    <div id="explore-the-menu" style={styles.root}>
      <Container className="py-5">
        <Row className="gx-4">
          <Col className="mt-5" xs={12} md={6}>
            <img
              className="img-fluid"
              alt="become-partners-jumbotron-image"
              src="/images/become-partners-jumbotron-image.png"
            />
          </Col>
          <Col className="mt-5" xs={12} md={6}>
            <h1 style={styles.h1}>
              Grow your Business
              <br /> with Chow.{" "}
            </h1>
            <Card className="my-5">
              <CardBody className="py-5">
                {submitted ? (
                  <>
                    <Alert>
                      Thank you for filling out the form. We'll get back to you
                      as soon as we can.
                    </Alert>
                  </>
                ) : (
                  <>
                    <h2 style={styles.h2}>Get Started</h2>
                    <Form onSubmit={handleSubmit}>
                      <Input
                        style={styles.input}
                        type="text"
                        name="restaurant"
                        value={formData.restaurant}
                        onChange={handleChange}
                        placeholder="Restaurant"
                      />
                      {errors.restaurant && (
                        <Container className="form-text text-danger">
                          <strong>{errors.restaurant}</strong>
                        </Container>
                      )}
                      <Input
                        style={styles.input}
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        placeholder="Zip Code"
                      />
                      {errors.zip && (
                        <Container className="form-text text-danger">
                          <strong>{errors.zip}</strong>
                        </Container>
                      )}
                      <Row>
                        <Col>
                          <Input
                            style={styles.input}
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                          />
                          {errors.firstName && (
                            <Container className="form-text text-danger">
                              <strong>{errors.firstName}</strong>
                            </Container>
                          )}
                        </Col>
                        <Col>
                          <Input
                            style={styles.input}
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                          />
                          {errors.lastName && (
                            <Container className="form-text text-danger ">
                              <strong>{errors.lastName}</strong>
                            </Container>
                          )}
                        </Col>
                      </Row>
                      <Input
                        style={styles.input}
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                      />
                      {errors.phone && (
                        <Container className="form-text text-danger">
                          <strong>{errors.phone}</strong>
                        </Container>
                      )}
                      <Input
                        style={styles.input}
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mail Address"
                      />
                      {errors.email && (
                        <Container className="form-text text-danger">
                          <strong>{errors.email}</strong>
                        </Container>
                      )}

                      <Button className="w-100" style={styles.button}>
                        Become our Partner
                      </Button>
                    </Form>
                  </>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jumbotron;
