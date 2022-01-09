import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import Navbar from "../../components/navbar/Navbar";
import {
  TagsOutlined,
  HomeOutlined,
  PlusOutlined,
  MinusOutlined,
  HeartOutlined,
  TagOutlined
} from "@ant-design/icons";
import axios from "axios";
import "antd/dist/antd.css";
import { useParams } from "react-router-dom";

const PopularProductDetails = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [counter, setCounter] = useState(1);
  const {productId} = useParams()

  const incCounter = () => {
    setCounter(counter + 1)
  }

  const decCounter = () => {
    setCounter(counter - 1)
  }

  useEffect(() => {
    const getProductDetails = async () => {
      const response = await axios
        .get("https://classibazaar.com.au/api/deal/popular_deals/")
        .catch((err) => {
          console.log(err);
        });
      setProductDetails(response.data);
    };
    getProductDetails();
  }, [productId]);
  
 const singleProductDetail = productDetails.filter(element => {
   return element.id === productId
 })

 console.log(singleProductDetail)

  return (
    <>
      <Navbar />
      {singleProductDetail.map((product) =>(
        <div className="productDetails" key={product.id} >
        <div className="productDesc">
          <div className="productUp">
            <h2>{product.dealstitle}</h2>
            <p>
              4.0 <Rate /> 95 rating
            </p>
          </div>
          <div className="productDown">
            <p>
              <TagsOutlined /> {product.subtitle}
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
              <img src={product.image.thumbnail} alt="" />
            </div>
            <div className="productHightlight">
              <h3>Highlights</h3>
              <li>⦾ Mini LED display</li>
              <li>⦾ Quantum NanoCell Color Technology</li>
              <li>⦾ Available in 86-inch</li>
              <li>⦾ LG α9 Gen 4 Intelligent Processor 8K</li>
              <li>⦾ Dolby Vision | Dolby Atmos</li>
            </div>
            <div className="productHightlight">
              <h3>About This Deal</h3>
              <li>⦾ Mini LED display</li>
              <li>⦾ Quantum NanoCell Color Technology</li>
              <li>⦾ Available in 86-inch</li>
              <li>⦾ LG α9 Gen 4 Intelligent Processor 8K</li>
              <li>⦾ Dolby Vision | Dolby Atmos</li>
            </div>
            <div className="productHightlight">
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
            <div className="productHightlight">
              <h3>Fine Print</h3>
              <li>⦾ Mini LED display</li>
              <li>⦾ Quantum NanoCell Color Technology</li>
              <li>⦾ Available in 86-inch</li>
              <li>⦾ LG α9 Gen 4 Intelligent Processor 8K</li>
              <li>⦾ Dolby Vision | Dolby Atmos</li>
            </div>
            <div className="productHightlight">
              <h3>How To Redeem</h3>
              <li>⦾ Mini LED display</li>
              <li>⦾ Quantum NanoCell Color Technology</li>
              <li>⦾ Available in 86-inch</li>
              <li>⦾ LG α9 Gen 4 Intelligent Processor 8K</li>
              <li>⦾ Dolby Vision | Dolby Atmos</li>
            </div>
            <div className="productHightlight">
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
                    <PlusOutlined onClick={incCounter}/>
                  </div>
                  <div className="rectangle">
                    {counter}
                  </div>
                  <div className="rectangle">
                    <MinusOutlined onClick={decCounter}/>
                  </div>
                  
                </div>
                <div className="addToBtns">
                  <button style={{backgroundColor:"#dc8b2e", color:"#fff"}}><HeartOutlined /> Add To Wishlist</button>
                  <button style={{backgroundColor:"#40b566", color:"#fff"}}><TagOutlined /> {counter} + Brought</button>
                  </div>
                  <div className="productPriceDescount">
                    <p>{product.discount}% off</p>
                    <div>
                    <p><del>${product.product_price}</del></p>
                    <p>${product.actual_price}</p>
                    </div>
                  </div>
                  <div className="productDetailsRadio"> 
                  <input type="radio" />
                  <label>LG TV</label>
                  </div>
                  <div className="limitedTime">
                  <p>Limited time remaining</p>
                  <h2>12:12:12</h2>
                  </div>
              </div>
              <div className="productDetailsCheckoutBtn">
              <button style={{backgroundColor:"#40b566", color:"#fff"}}>Continue To CheckOut</button>
              <button style={{backgroundColor:"#dc8b2e", color:"#fff"}}>Give as a Gift</button>
              </div>
            </div>
            <p style={{marginTop:"25px"}}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.1522162302053!2d149.11846281512146!3d-35.277341550957004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164d448f9b3033%3A0xa086b01912baf60a!2s112%20Joplin%20Ln!5e0!3m2!1sen!2snp!4v1641706509775!5m2!1sen!2snp" width="275" height="300"  style={{border:0}} allowfullscreen="true" loading="lazy" title="map"></iframe></p>
          <div className="shareDeals">
              <h2>Share This Deals</h2>
              <div className="dealsIcon">
                <img src="/images/facebook.png" alt=""/>
                <img src="/images/twitter.png" alt=""/>
                <img src="/images/pininterest.png" alt=""/>
              </div>
          </div>
          </div>
        </div>
      </div>
      ))}
        
    </>
  );
};

export default PopularProductDetails;