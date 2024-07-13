import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("./registerform");
  };

  const loginHandle = () => {
    navigate("./loginform");
  };
  return (
    <div>
      <nav>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: " 20px",
            backgroundColor: "#C70039",
            width: "100%",
            objectFit: "cover",
          }}
        >
          <p style={{ margin: 0, marginRight: "auto", color: "#ffff" }}>LOGO</p>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: 0,
              padding: 0,
              color: "#ffff",
              flex: 1,
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <li style={{ margin: "0 20px" }}>Home</li>
            <li style={{ margin: "0 20px" }}>About</li>
            <li style={{ margin: "0 20px" }}>Contact</li>
            <li style={{ margin: "0 20px" }}>Career</li>
          </ul>
          <div style={{ marginLeft: "auto" }}>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              <button onClick={loginHandle}

                style={{
                  margin: "0 20px",
                  borderRadius: "5px",
                  backgroundColor: "green",
                  color: "#ffff",
                  padding: "10px",
                  width: "100px",
                }}
              >
                Login
              </button>
              <button
                onClick={handleRegister}
                style={{
                  margin: "0 20px",
                  borderRadius: "5px",
                  backgroundColor: "green",
                  color: "#ffff",
                  padding: "10px",
                  width: "100px",
                }}
              >
                Register
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
