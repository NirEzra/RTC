import React from 'react'
import "../style/ModalMenu.css"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";



function ModalMenu(props) {

    return (
        
           <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modalHeaderStyle">
        <Modal.Title id="contained-modal-title-vcenter">
          Menu
        </Modal.Title>

        
      </Modal.Header>

      <Modal.Body className="modalBodyStyle">
      <Link to="/">
         Home
        </Link>

        <Link to="/shop">
          Shop
        </Link>

        <Link to="/gallery">
          Gallery
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/contact">
          Connect us
        </Link>
      </Modal.Body>

      <Modal.Footer className="modalFooterStyle">
        <Button onClick={props.onHide} className="modalButtonStyle">Close</Button>
      </Modal.Footer>
    </Modal>



     
    )
}

export default ModalMenu
