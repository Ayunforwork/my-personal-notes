import React from "react";
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div style={{ textAlign: "center",  }}>
        NotFound
        <br />
        <Link to="/" style={{ textAlign: "center" }}>
            <p>Back to home</p>
        </Link>
      </div>
    );
  };

export default NotFound;