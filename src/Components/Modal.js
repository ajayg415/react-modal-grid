import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import Grid from './Grid'

const CustomModal = () =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getPrint = () => {
    const con = document.querySelector('.modal-body').innerHTML;
    document.querySelector('.printable').innerHTML = con;
    window.print();
    window.onafterprint = function(){ //This won't work if user clicks on cancel on print window.
      document.querySelector('.printable').innerHTML ='';
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading <span className="small" onClick={getPrint}><a href="#">Print</a></span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomModal;