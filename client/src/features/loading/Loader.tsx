import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loader(): any {
  return (
    <Spinner
      as="span"
      animation="grow"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
        color:'#e1c9b4'
      }}
    >
      {/* <span className="visually-hidden">Loading...</span> */}
    </Spinner>
  );
}
