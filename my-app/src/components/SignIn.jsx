import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAuth, setUser } from "../redux/action";
export const SignIn = () => {
  const user = useSelector((store) => store.user);
  // console.log(user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [adminLogin, setAdminLogin] = useState({
    password: "",
    username: "",
  });

  const takeLogin = (event) => {
    const { id, value } = event.target;
    setAdminLogin({ ...adminLogin, [id]: value });
  };

  const loginAdmin = (event) => {
    event.preventDefault();
    axios
      .post("https://masai-api-mocker.herokuapp.com/auth/login", adminLogin)
      .then((res) => {
        if (res.data.error == false) {
          let username = adminLogin.username;
          let token = res.data.token;
          axios
            .get(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
              headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => {
              localStorage.setItem(
                "teacherName",
                JSON.stringify(res.data.name)
              );
            })
            .then(() => alert("Login Successful"))
            .then(() => {
              dispatch(setUser(true));
            })
            .then(() => navigate("/products"))
            .then(() => dispatch(setAuth(true)));
        }
      })
      .catch(() => {
        alert("wrong username or password");
      });
  };

  return (
    <div>
      <h1 style={{ marginLeft: "-73.5%" }}>Log in</h1>
      <div style={{ width: "50%", marginLeft: "10%" }}>
        <form
          onSubmit={loginAdmin}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <label
            style={{
              marginLeft: "-84%",
              marginBottom: "-15px",
              fontSize: "25px",
            }}
          >
            Username
          </label>
          <input
            id="username"
            onChange={takeLogin}
            type="text"
            placeholder="enter username"
            style={{
              height: "35px",
              border: "1px solid black",
              marginTop: "0px",
            }}
          />
          <label
            style={{
              marginLeft: "-84.5%",
              marginBottom: "-15px",
              fontSize: "25px",
            }}
          >
            Password
          </label>
          <input
            id="password"
            onChange={takeLogin}
            type="password"
            placeholder="enter password"
            style={{ height: "35px", border: "1px solid black" }}
          />
          <div style={{ marginLeft: "-84%" }}>
            <span>
              <input
                style={{ marginLeft: "-7%", cursor: "pointer" }}
                type="checkbox"
              ></input>
              <br />
            </span>
            Remember me
          </div>
          <input
            style={{
              border: "1px solid green",
              width: "60px",
              backgroundColor: "green",
              color: "white",
              textAlign: "center",
              borderRadius: "3px",
              paddingTop: "4px",
              cursor: "pointer",
              height: "40px",
              fontSize: "18px",
            }}
            type="submit"
            value="Login"
          />
        </form>
      </div>
      <div
        style={{
          color: "blue",
          marginLeft: "-75.8%",
          marginTop: "20px",
          cursor: "pointer",
        }}
        className="button registerr"
        onClick={() => navigate("/signup")}
      >
        Sign up
      </div>
    </div>
  );
};
