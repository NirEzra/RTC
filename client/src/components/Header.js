import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
import { FaBars } from "react-icons/fa";
import { useAuth } from "./contexts/AuthContext";
import Button from 'react-bootstrap/Button'
import ModalMenu from "./ModalMenu"

function Header() {

  const [modalShow, setModalShow] = React.useState(false);

  const { currentUser } = useAuth();
  // console.log(currentUser && currentUser.email);



  return (
    <div className="MainHeader" >
      <div className="headerUl">

        <div className="logoHeader">
          <Link to="/"><img src="/pictures/logo1.png" alt="" /></Link>
        </div>

        <Link to="/about" className="diver">
          About
        </Link>

        <Link to="/shop" className="diver">
          Shop
        </Link>

        <Link to="/gallery" className="diver">
          Gallery
        </Link>

        <Link to="/contact" className="diver">
          Connect us
        </Link>

        <div className="cartIcon icons">
          <Link to={`/cart/`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </Link>
        </div>

        <div className="barIcon icons">
        <FaBars variant="primary" onClick={() => setModalShow(true)}>
       
      </FaBars>

      <ModalMenu
        show={modalShow}
        onHide={() => setModalShow(false)}
      
      />
          {/* {currentUser && currentUser.email} */}
        </div>
      </div>
    </div>
  );
}

export default Header;
