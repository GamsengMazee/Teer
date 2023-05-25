import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import classes from './toastComp.module.css'

function DismissibleExample(props) {

  

  return (
    <Row className={classes.main}>
      <Col md={6} className="mb-2">
        <Toast  show={props.toastState}>
          <Toast.Header>
            <strong className="me-auto success"></strong>
          </Toast.Header>
          <Toast.Body className=' text-center h3 bg-success text-white'>Results successfully updated</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default DismissibleExample;