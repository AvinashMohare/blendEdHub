

import React from "react";
import { Link } from "react-router-dom";
import "../styles/loginselection.css";

const LoginSelection = () => {
  return (
    <div className="login-selection">
      <h1>BlendEdHub</h1>
      <div>
        <Link to="/login/student">
          <button>Login as Student</button>
        </Link>
      </div>
      <div>
        <Link to="/login/teacher">
          <button>Login as Teacher</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginSelection;
