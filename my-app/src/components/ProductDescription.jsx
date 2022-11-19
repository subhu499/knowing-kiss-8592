import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const ProductDescription = () => {
  const Div = styled.div`
    display: flex;
    width: 80%;
    height: 600px;
    /* border: 1px solid black; */
    margin-left: 10%;
    gap: 20px;

    #div1 {
      width: 35%;
      height: 100%;
      /* border: 1px solid red; */

      #imgDiv {
        width: 100%;
        height: 70%;
        border: 1px solid grey;
        border-radius: 5px;
      }
      #belowImg {
        width: 100%;
        height: 30%;
        /* border: 1px solid teal; */
      }
    }
    #div2 {
      width: 65%;
      height: 100%;
      /* border: 1px solid yellow; */
      #descri {
        width: 100%;
        height: 60%;
        /* border: 1px solid red; */
        text-align: left;
        height: auto;
        border: 1px solid grey;
        border-radius: 4px;
        background-color: #ebebeb;
      }
    }
  `;
  const [showData, setShowData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ideakart-clone.herokuapp.com/products/${id}`)
      .then(({ data }) => {
        setShowData(data);
      });
  }, []);

  const handleClick = () => {
    window.location.href = `https://www.amazon.com/s?k=${showData.name}&crid=3UL1PKPVZJYBZ&sprefix=${showData.name}%2Caps%2C564&ref=nb_sb_noss_2`;
  };

  return (
    <div style={{ marginTop: "4%", marginBottom: "30%" }}>
      <Div>
        <div id="div1">
          <div id="imgDiv">
            <img
              style={{ width: "92%", height: "93%", marginTop: "4%" }}
              src={showData.image_url}
              alt="Show Here"
            />
          </div>
          <div id="belowImg">
            <p style={{ textAlign: "left" }}>
              Buy it at <b>best price</b> from here
            </p>
            <h1 style={{ textAlign: "left" }}>
              Rs. {showData.price} &ensp; &ensp; &ensp; &ensp; &ensp;
              <button
                style={{
                  backgroundColor: "#f0ad4e",
                  color: "white",
                  borderColor: "#f0ad4e",
                  width: "80px",
                  height: "40px",
                  border: "none",
                  fontSize: "16px",
                  paddingTop: "3%",
                  cursor: "pointer",
                }}
                onClick={handleClick}
              >
                Buy Now
              </button>{" "}
            </h1>
            <h1 style={{ textAlign: "left" }}>Book Specification</h1>
            <hr />
            <p style={{ textAlign: "left" }}>
              <b>Binding</b> &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;
              &ensp; <span>Paperback Bunko</span>
            </p>
            <hr />
            <p style={{ textAlign: "left" }}>
              <b>Language</b> &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;{" "}
              <span>Hindi/English</span>
            </p>
            <hr />
            <p style={{ textAlign: "left" }}>
              <b>Number Of Pages</b>
            </p>
            <hr />
            <p style={{ textAlign: "left" }}>
              <b>Author</b>
            </p>
            <hr />
            <p style={{ textAlign: "left" }}>
              <b>Publisher</b>
            </p>
          </div>
        </div>
        <div id="div2">
          <h1>{showData.name}</h1>
          <div id="descri">
            <h1 style={{ paddingLeft: "15px" }}>{showData.description1}</h1>
            <p style={{ paddingLeft: "15px", paddingRight: "15px" }}>
              {showData.description2}
            </p>
          </div>
          <div style={{ marginTop: "5%" }}>
            <div style={{ textAlign: "left" }}>
              <span>Store</span> &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;
              &ensp;&ensp; &ensp; &ensp; &ensp; &ensp;&ensp; &ensp; &ensp;
              &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp; &ensp;&ensp;
              &ensp;&ensp;<span>Price</span> &ensp; &ensp; &ensp; &ensp; &ensp;
              &ensp;&ensp;&ensp; &ensp; &ensp; &ensp; &ensp;&ensp;&ensp; &ensp;
              &ensp; &ensp; &ensp;&ensp;&ensp; &ensp;
              <span>Buy Now</span>
            </div>
            <hr />
            <div
              style={{
                textAlign: "left",
                backgroundColor: "#ebebeb",
                height: "60px",
                marginTop: "-1%",
              }}
            >
              <span>Amazon, Paperback Bunko </span> &ensp; &ensp; &ensp; &ensp;
              &ensp; &ensp; &ensp;&ensp; &ensp; &ensp; &ensp; &ensp;&ensp;{" "}
              <span>{showData.price}</span> &ensp; &ensp; &ensp; &ensp; &ensp;
              &ensp; &ensp;&ensp; &ensp; &ensp; &ensp; &ensp;&ensp;&ensp; &ensp;
              &ensp; &ensp; &ensp;&ensp;&ensp; &ensp;
              <button style={{ cursor: "pointer" }} onClick={handleClick}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </Div>
    </div>
  );
};
