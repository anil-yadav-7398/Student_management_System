import { useNavigate } from "react-router-dom";
import Sidebaar from "../component/loginbar"
import axios from "axios";
import { useState } from "react";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const login = async (e) => {

    e.preventDefault();

    setloading(true);
    try {

      const response = await axios.post(
        "http://localhost:8080/api/login",
        {
          email: email,
          password: password
        }
      );
      await new Promise((resolve) => setTimeout(resolve, 3000));
      localStorage.setItem(
        "role",
        response.data.role
      );

      localStorage.setItem(
        "email",
        response.data.email
      );

      localStorage.setItem(
        "name",
        response.data.name
      );

      if (response.data.role === "USER") {

        navigate("/user");

      }

    } catch (error) {

      alert(
        error.response?.data ||
        "Login failed"
      );
    }
  };

  return (
    <>
      <Sidebaar>
        <div className="container">

          <div className="text-center">

            <h2
              style={{
                textAlign: "center",
                fontFamily: "serif",
                backgroundColor: "yellow",
                padding: "10px"
              }}
            >
              Student Login
            </h2>

          </div>


          <div className="d-flex justify-content-center align-items-center">

            <div
              style={{
                boxShadow: "0px 0px 10px black",
                borderRadius: "10px",
                margin: "30px",
                padding: "30px",
                width: "100%"
              }}
            >

              <form onSubmit={login}>
                <div className="mb-3">
                  <label>Email:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter the Email" required
                    className="form-control"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label>Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter the Password" required
                    className="form-control"
                    name="password"
                  />

                </div>
                <div className="mb-3">
                  <button type="submit" disabled={loading} className="btn btn-success form-control">
                    {loading ? "Logging in.........." : "login"}

                  </button>
                </div>
                <div className="mb-3">
                  <p style={{ textAlign: "center", justifyContent: "center", fontFamily: "serif", fontStyle: "bold" }}>
                    create one <a href="/register">SIGN UP</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>




      </Sidebaar>
    </>
  )
}

export default Login