import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, Input, Row, Col } from "reactstrap";
import Auth from "../utils/auth";

const Logout = () => {
    Auth.logout();


    return (
        <div>logged out</div>
    );
}


export default Logout;