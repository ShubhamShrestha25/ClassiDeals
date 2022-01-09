import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { Rate } from "antd";
import Navbar from "../../components/navbar/Navbar";
import {
  TagsOutlined,
  HomeOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import axios from "axios";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const getProductDetails = async () => {
      const response = await axios
        .get("https://classibazaar.com.au/api/deal/featured_deals/")
        .catch((err) => {
          console.log(err);
        });
      setProductDetails(response.data);
    };
    getProductDetails();
  }, []);

  return (
    <>
      <Navbar />
      <div className="productDetails">
        <div className="productDesc">
          <div className="productUp">
            <h2>LG Television</h2>
            <p>
              4.0 <Rate /> 95 rating
            </p>
          </div>
          <div className="productDown">
            <p>
              <TagsOutlined /> Have fon by watching television
            </p>
            <p>
              <HomeOutlined /> Shop 112 Joplin Lane Opposite to Club lime Pool,
              Kambri ANU, ACTON, 2601
            </p>
          </div>
        </div>
        <div className="productDetailInfo">
          <div className="productLeft">
            <div className="productImg">
              <img src="./images/cake.jpg" alt="" />
            </div>
            <div className="productHightlight">
              <h3>Highlights</h3>
              <li>⦾ Mini LED display</li>
              <li>⦾ Quantum NanoCell Color Technology</li>
              <li>⦾ Available in 86-inch</li>
              <li>⦾ LG α9 Gen 4 Intelligent Processor 8K</li>
              <li>⦾ Dolby Vision | Dolby Atmos</li>
            </div>
            <div className="productAboutDeal">
              <h3>About This Deal</h3>
              <li>⦾ Mini LED display</li>
              <li>⦾ Quantum NanoCell Color Technology</li>
              <li>⦾ Available in 86-inch</li>
              <li>⦾ LG α9 Gen 4 Intelligent Processor 8K</li>
              <li>⦾ Dolby Vision | Dolby Atmos</li>
            </div>
            <div className="productAditionalInfo">
              <h3>Aditional Information</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                blandit pellentesque amet sed dui. Tristique quis magna
                vestibulum, consectetur enim ultrices. At eu eget et id. Id eu
                mi diam faucibus rhoncus tincidunt. Ut lectus urna viverra
                tristique massa fermentum netus rutrum. Tellus adipiscing sit
                amet, ac, imperdiet pellentesque faucibus elit. Posuere in
                imperdiet egestas leo. Libero, venenatis consequat risus
                ultrices consequat porta tincidunt. Vestibulum neque sit nisl
                faucibus sit magnis placerat platea aliquam.
              </p>
            </div>
            <div className="productFinePrint">
              <h3>Fine Print</h3>
              <li>⦾ Mini LED display</li>
              <li>⦾ Quantum NanoCell Color Technology</li>
              <li>⦾ Available in 86-inch</li>
              <li>⦾ LG α9 Gen 4 Intelligent Processor 8K</li>
              <li>⦾ Dolby Vision | Dolby Atmos</li>
            </div>
            <div className="productRedeem">
              <h3>How TO Redeem</h3>
              <li>⦾ Mini LED display</li>
              <li>⦾ Quantum NanoCell Color Technology</li>
              <li>⦾ Available in 86-inch</li>
              <li>⦾ LG α9 Gen 4 Intelligent Processor 8K</li>
              <li>⦾ Dolby Vision | Dolby Atmos</li>
            </div>
            <div className="productAbout">
              <h3>About The Company</h3>
              <p>
                About the company Firescreen television is the online news
                portal site, where you can see the latest news and your favorite
                news. It helps to make the world more digital. FSTV plays a
                vital role in educating and informing Mass with the latest
                updates, current happenings around the globe. People don’t have
                much more time to read the Printed newspaper with yesterday’s
                happening, so they always follow web portals or Electronic Media
                for getting the latest News. User can access their mobile,
                social sites, Whatsapp, Facebook, and keep themself updated very
                fast with less time-consuming methods. Hence FSTV provides the
                fastest news Updates. Vvv Okay lets check this issues.......
              </p>
            </div>
          </div>
          <div className="productRight">
            <div className="productRightContainer">
              <div className="productRightUp">
                <h1>USE CODE</h1>
                <h2 style={{ color: "#dc8b2e" }}>UWBF20</h2>
                <h2>
                  Get <span style={{ color: "#0dd078" }}>0% discount</span>
                </h2>
                <h3 style={{ color: "#dc8b2e" }}>Use it or lose it</h3>
                <h3 style={{ color: "#ff0000" }}>Ends 12:45:00</h3>
              </div>
              <div className="productRightDown">
                <div className="productDownButtons">
                  Quality
                  <div className="rectangle">
                    <PlusOutlined />
                  </div>
                  <div className="rectangle">
                    2
                  </div>
                  <div className="rectangle">
                    <MinusOutlined />
                  </div>
                  <button>Add To Wishlist</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;