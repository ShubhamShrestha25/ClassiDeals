import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Search.css";

const Search = () => {
  const [show, setShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [cities, setCities] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://classibazaar.com.au/api/deal/products"
      );
      setCities(response.data.cities);
      setSearchProduct(response.data.products);
    };
    getData();
  }, []);

  return (
    <div className="search">
      <div className="searchBtns">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Location"
            onClick={() => setShow(!show)}
          />
          {show ? (
            <div className="dropDownMenuLocation">
              {cities.map((city, key) => {
                return (
                  <ul key={key}>
                    <li>{city.cityName}</li>
                  </ul>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="searchContainer">
          <input
            placeholder="Search here"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="searchBtn"
            onClick={() => setOpenModal(!openModal)}
          >
            Search
          </button>
          {openModal && (
            <div className="modal">
              <div className="overlay"></div>
              <div className="modalContent">
                {searchProduct
                  .filter((val) => {
                    if (search === "") {
                      return val;
                    } else if (
                      val.dealstitle
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return true;
                    }
                    return false;
                  })
                  .map((product, key) => {
                    return (
                      <div key={key} className="showSearch">
                        {product.dealstitle}
                      </div>
                    );
                  })}
                <button
                  className="closeModal"
                  onClick={() => setOpenModal(!openModal)}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
