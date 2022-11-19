import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
export const Products = () => {
  const search = useSelector((store) => store.search);
  const input = useSelector((store) => store.input);
  const isAuth = useSelector((store) => store.isAuth);

  const [pop, setPop] = useState(true);
  const [filterValue, setFilterValue] = useState("");
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [inputsearch, setInputSearch] = useState([]);

  useEffect(() => {
    if (search === false) {
      getData();
    } else {
      searchData();
    }
  }, [search]);

  const getData = () => {
    axios
      .get("https://ideakart-clone.herokuapp.com/products")
      .then(({ data }) => {
        setProducts(data);
      });
  };

  const searchData = () => {
    axios
      .get(`https://ideakart-clone.herokuapp.com/products?name=${input}`)
      .then(({ data }) => {
        setInputSearch(data);
      });
  };

  const handleSort = () => {
    if (pop === true) {
      let newData = products.sort((a, b) => {
        return b.price - a.price;
      });
      setProducts(newData);
      setPop(false);
    }
    if (pop === false) {
      let newData = products.sort((a, b) => {
        return a.price - b.price;
      });
      setProducts(newData);
      setPop(true);
    }
  };

  const handleChange = (event) => {
    setFilterValue(event.target.value);
    let value1 = event.target.value;
    let value2 = event.target.value * 2;
    console.log("value1" + value1);
    console.log("value2" + value2);
    axios(
      `https://ideakart-clone.herokuapp.com/products?price_gte=${value1}&price_lte=${value2}`,
      {
        method: "GET",
      }
    ).then((res) => setProducts(res.data));
  };

  const Layout = styled.div`
    display: grid;
    width: 90%;
    height: auto;
    gap: 2%;
    grid-template-columns: repeat(4, 23%);
    margin-left: 6%;
    row-gap: 1%;
  `;
  const P = styled.p`
    text-align: left;
    margin-left: 6%;
    font-size: 24px;
    font-family: "Roboto";
  `;

  return (
    <div style={{ marginBottom: "50%" }}>
      {search === true ? (
        <div>
          <div>
            <P>Searched Product</P>
          </div>
          {inputsearch.length < 1 ? (
            <img
              style={{ width: "300px", height: "300px", marginTop: "20px" }}
              src="https://crocadigital.com/wp-content/uploads/2019/04/product-currently-unavailable.png"
              alt="Product Not Available"
            />
          ) : (
            <Layout>
              {inputsearch.map((pro) => (
                <Link
                  style={{ textDecoration: "none" }}
                  key={pro.id}
                  to={isAuth ? `/products/${pro.id}` : "/signin"}
                >
                  <div
                    style={{
                      border: "1px solid grey",
                      height: "550px",
                      borderRadius: "3px",
                    }}
                  >
                    <div>
                      <img
                        style={{
                          width: "93%",
                          height: "300px",
                          marginTop: "4%",
                        }}
                        src={pro.image_url}
                      />
                    </div>
                    <div>
                      <p
                        style={{
                          textAlign: "left",
                          marginLeft: "12px",
                          color: "black",
                        }}
                      >
                        {pro.name}
                      </p>
                      <p
                        style={{
                          textAlign: "left",
                          marginLeft: "12px",
                          color: "teal",
                        }}
                      >
                        Rs. {pro.price}
                      </p>
                      <hr style={{ width: "90%", color: "gray" }} />
                      <div style={{ marginTop: "20px" }}>
                        <span style={{ color: "blue", marginRight: "5%" }}>
                          <img
                            src="https://img.icons8.com/material-rounded/344/shopping-cart-loaded.png"
                            style={{ width: "15px", height: "15px" }}
                          />{" "}
                          View Now
                        </span>{" "}
                        |{" "}
                        <span style={{ color: "blue", marginLeft: "5%" }}>
                          <img
                            src="https://img.icons8.com/ios-filled/344/view-details.png"
                            style={{ width: "15px", height: "15px" }}
                          />{" "}
                          More Details{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </Layout>
          )}
        </div>
      ) : (
        <div>
          <div style={{ display: "flex", gap: "10%" }}>
            <P>Top Reads</P>
            <div style={{ marginTop: "25px" }}>
              <button style={{ cursor: "pointer" }} onClick={handleSort}>
                {pop === true
                  ? "Sort By Price High to Low"
                  : "Sort By Price Low to High"}{" "}
              </button>
            </div>
            <div style={{ marginTop: "10px" }}>
              <select
                value={filterValue}
                onChange={handleChange}
                style={{
                  width: "290px",
                  cursour: "pointer",
                  marginLeft: "-8.4%",
                  marginTop: "2%",
                  height: "40px",
                }}
              >
                <option>Filter By Price</option>
                <option value={40}>₹40-₹100</option>
                <option value={100}>₹100-₹200</option>
                <option value={250}>₹250-₹500</option>
                <option value={500}>₹500-₹1000</option>
                <option value={1000}>₹1000-₹2000</option>
                <option value={2000}>₹2000-₹4000</option>
                <option value={4000}>₹4000-₹8000</option>
              </select>
            </div>
          </div>
          <Layout>
            {products.map((pro) => (
              <Link
                style={{ textDecoration: "none" }}
                key={pro.id}
                to={isAuth ? `/products/${pro.id}` : "/signin"}
              >
                <div
                  style={{
                    border: "1px solid grey",
                    height: "550px",
                    borderRadius: "3px",
                  }}
                >
                  <div>
                    <img
                      style={{ width: "93%", height: "300px", marginTop: "4%" }}
                      src={pro.image_url}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        textAlign: "left",
                        marginLeft: "12px",
                        color: "black",
                      }}
                    >
                      {pro.name}
                    </p>
                    <p
                      style={{
                        textAlign: "left",
                        marginLeft: "12px",
                        color: "teal",
                      }}
                    >
                      Rs. {pro.price}
                    </p>
                    <hr style={{ width: "90%", color: "gray" }} />
                    <div style={{ marginTop: "20px" }}>
                      <span style={{ color: "blue", marginRight: "5%" }}>
                        <img
                          src="https://img.icons8.com/material-rounded/344/shopping-cart-loaded.png"
                          style={{ width: "15px", height: "15px" }}
                        />{" "}
                        View Now
                      </span>{" "}
                      |{" "}
                      <span style={{ color: "blue", marginLeft: "5%" }}>
                        <img
                          src="https://img.icons8.com/ios-filled/344/view-details.png"
                          style={{ width: "15px", height: "15px" }}
                        />{" "}
                        More Details{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Layout>
        </div>
      )}
    </div>
  );
};
