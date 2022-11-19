import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Input } from "./Input";
import { useSelector, useDispatch } from "react-redux";
import { setAuth, setUser, showSearch } from "../redux/action";

export const Navbar = () => {
  const user = useSelector((store) => store.user);
  const search = useSelector((store) => store.search);
  const isAuth = useSelector((store) => store.isAuth);
  // console.log(user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const teacher = JSON.parse(localStorage.getItem("teacherName"));

  const Nav = styled.div`
    display: flex;
    gap: 30px;
    font-size: 16px;
    width: 100%;
    height: 50px;
    background: #2874f0;
    font-family: "Roboto";

    input {
      width: 380px;
      height: 32px;
      margin-top: 8px;
      border-radius: 3px;
      border: none;
      padding-left: 15px;
      margin-left: 1.2%;
    }

    button {
      width: 60px;
      height: 34px;
      margin-top: 8px;
      margin-left: -0.5%;
      background-color: white;
      border: none;
      border-left: 1px solid black;
      border-radius: 2px;
      :hover {
        background-color: #e0e0e0;
      }
    }
  `;

  const logout = () => {
    alert(`${teacher} logging out`);
    localStorage.removeItem("teacherName");
    dispatch(setUser(false));
    dispatch(setAuth(false));
  };
  const ideaKart = () => {
    navigate("/products");
    dispatch(showSearch(false));
  };

  return (
    <div>
      <Nav>
        <Link
          onClick={ideaKart}
          style={{
            color: "yellow",
            textDecoration: "none",
            marginTop: "15px",
            marginLeft: "7%",
            fontSize: "19px",
          }}
          to="/"
        >
          IDEAKART
        </Link>

        <Input />

        <Link
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "15px",
            marginLeft: "19%",
          }}
          to="/about"
        >
          About
        </Link>
        <Link
          style={{ color: "white", textDecoration: "none", marginTop: "15px" }}
          to="/contact"
        >
          Contact
        </Link>

        {user === false ? (
          <div style={{ display: "flex", gap: "20px" }}>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                marginTop: "15px",
              }}
              to="/signin"
            >
              SignIn
            </Link>

            <Link
              style={{
                color: "white",
                textDecoration: "none",
                marginTop: "15px",
              }}
              to="/signup"
            >
              SignUp
            </Link>
          </div>
        ) : (
          <div style={{ display: "flex", gap: "20px" }}>
            <p style={{ marginTop: "10px", color: "white" }}>
              Welcome! <br />
              {teacher}
            </p>
            <button
              style={{
                height: "20px",
                borderRadius: "5px",
                marginTop: "15px",
                cursor: "pointer",
              }}
              onClick={logout}
            >
              Logout
            </button>{" "}
          </div>
        )}
      </Nav>
    </div>
  );
};
