import { useState } from 'react';
import { Form, Button, Input, Row, Col, Container } from 'reactstrap';

import { createUser } from '../utils/API';
import Auth from '../utils/auth';

const backgroundImg =
"/images/mix-vegetables-food-isolated-grey-background.png";

const styles = {
  root: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "120vh",
  },
  h1: {
    fontSize: "45px",
    fontWeight: "bold",
    color: "#2A9DB8",
  },
  box: {
    backgroundColor: "#ffffffcc",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
    maxWidth: "960px",
  },
  input: {
    height: "83px",
    // borderRadius: "20px",
    marginTop: "32px",
    marginBottom: "32px",
    fontSize: "24px",
  },
  loginBtn: {
    // borderRadius: "50px",
    backgroundColor: "#FD6801",
    color: "#FFFFFF",
    marginTop: "18px",
    paddingLeft: "4rem",
    paddingRight: "4rem",
    width: "auto",
    height: "72px",
    fontSize: "18px",
    fontWeight: "700",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  subText: {
    fontSize: "18px",
    color: "#666666",
  },
  textLink: {
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "700",
    color: "#2A9DB8",
  },
};


const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.password) {
      newErrors.password = "Passwords can't be empty.";
    }

    if (!formData.email) {
      newErrors.email = "E-mail Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid E-mail Address.";
    }

    const response = await createUser(formData);
      
            if (!response.ok) {
              throw new Error('something went wrong!');
            }
      
            const { token, user } = await response.json();
            console.log(user);
            Auth.login(token);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // form is valid
      console.log("Form data:", formData);
      
      // reset fields
      setFormData({
        email: "",
        password: "",
      });

      // clear errors
      setErrors({});
    }
  };

  return (
    <div style={styles.root}>
      <div style={{ height: "96px" }}></div>
      <Container style={styles.box} >
        <Row className="justify-content-center align-items-center">
          <Col className="py-5" xs={12} md={7}>

            <h1 className="text-center mt-5" style={styles.h1}>
              New Customer Sign-Up Form
            </h1>

            <Form onSubmit={handleSubmit}>

              <Input
                style={styles.input}
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Add your E-mail Address"
              />

              {errors.email && (
                <Container className="form-text text-danger">
                  <strong>{errors.email}</strong>
                </Container>
              )}

              <Input
                style={styles.input}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Create your Password"
              />

              {errors.email && (
                <Container className="form-text text-danger">
                  <strong>{errors.password}</strong>
                </Container>
              )}

              <Button size="lg" style={styles.loginBtn}>
                Sign Up
              </Button>

              
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;

