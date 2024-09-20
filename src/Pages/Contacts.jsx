import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Contact from '../components/Contact';
import Catogery from '../components/Catogery';

function Contacts() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
<>
<h3 className='text-center mt-3'>Welcome swalih manage your contacts</h3>
<div className='bg-primary container-fluid justify-content-center d-flex align-items-center p-3'>
<i onClick={handleShow} className="fa-solid fa-square-plus fa-xl" style={{color: "#FFD43B",}} />


</div>
<div className='container mt-5'>
<Row>
<Col sm={12} md={8}>
<Contact/>
</Col>
<Col sm={12} md={4}>
<Catogery/>
</Col>


</Row>


</div>
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingTextarea" label="Name"className="mb-3">
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Email"className="mb-3">
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Phone Number"className="mb-3">
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Phone Url"className="mb-3">
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>

</>

  )
}

export default Contacts