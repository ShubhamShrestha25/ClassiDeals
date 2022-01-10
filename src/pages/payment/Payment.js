import React, { useEffect, useState } from "react";
import "./Payment.css";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Payment = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const { productId } = useParams();
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
  }, [productId]);

  const singleProductDetail = productDetails.filter((element) => {
    return element.id === productId;
  });

  console.log(singleProductDetail)

  return (
    <>
      <Navbar />
      {singleProductDetail.map((product) => (
        <div className="payment" key={product.id}>
          <div className="paymentLeft">
            <h2>Payment Details</h2>
            <div className="paymentForm">
              <form>
                <h3>Credit Card Information</h3>
                <label><span style={{color:"red"}}>*</span> Name on the card</label>
                <input type="text" placeholder="Name on the card" />
                <label>Credit card number</label>
                <input type="number" placeholder="1234 1234 1234 1234" />
                <div className="paymentFix">
                  <div className="paymentFixChild">
                    <label>Expiration Date</label>
                    <DatePicker selected={startDate} open={false} onChange={(date) => setStartDate(date)} dateFormat="MM/yy"/>
                  </div>
                  <div className="paymentFixChild">
                    <label>CVC</label>
                    <input type="number" placeholder="CVC" />
                  </div>
                </div>
                <h3>Billing Information</h3>
                <div className="paymentPromo">
                  <div className="paymentCode">
                    <label>Promo Code</label>
                    <input type="text" />
                  </div>
                  <button>Apply</button>
                </div>
                <div className="paymentFix">
                  <div className="paymentFixChild">
                    <label><span style={{color:"red"}}>*</span> First Name</label>
                    <input type="text" />
                  </div>
                  <div className="paymentFixChild">
                    <label><span style={{color:"red"}}>*</span> Second Name</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="paymentFix">
                  <div className="paymentFixChild">
                    <label><span style={{color:"red"}}>*</span> Billing Address</label>
                    <input type="text" />
                  </div>
                  <div className="paymentFixChild">
                    <label><span style={{color:"red"}}>*</span> Phone</label>
                    <input type="number" />
                  </div>
                </div>
                <div className="paymentFix">
                  <div className="paymentFixChild">
                    <label><span style={{color:"red"}}>*</span> City</label>
                    <input type="text" />
                  </div>
                  <div className="paymentFixChild">
                    <label><span style={{color:"red"}}>*</span> Email</label>
                    <input type="email" />
                  </div>
                </div>
                <div className="paymentZIPCountry">
                  <div className="paymentZIP">
                    <label><span style={{color:"red"}}>*</span> Zip</label>
                    <input type="number" />
                  </div>
                  <div className="paymentCountry">
                    <label><span style={{color:"red"}}>*</span> Country</label>
                    <input type="text" />
                  </div>
                </div>
                <h3>Payment</h3>
                <div className="paymentIcons">
                  <div className="paymentIcon">
                    <input type="radio" />
                    <label>
                      <img src="/images/paypal.png" alt="" />
                    </label>
                  </div>
                  <div className="paymentIcon">
                    <input type="radio" />
                    <label>
                      <img src="/images/mastercard.png" alt="" />
                    </label>
                  </div>
                  <div className="paymentIcon">
                    <input type="radio" />
                    <label>
                      <img src="/images/visa.png" alt="" />
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="paymentRight">
            <h3>Order Summary</h3>
            <div className="reviewBox">
              <h3>Review Order</h3>
              <div className="paymentReview">
                <div className="reviewLeft">
                  <h3>ITEM</h3>
                  <img src={product.image.thumbnail} alt="" className="paymentImg" />
                  <h3>{product.dealstitle}</h3>
                  <p>{product.subtitle}</p>
                  <div className="paymentGrandTotal">
                    <h3>Subtotal</h3>
                    <h3>${product.product_price}</h3>
                  </div>
                  <div className="paymentGrandTotal">
                    <h3>Discount</h3>
                    <h3>-${product.discount}</h3>
                  </div>
                  <div className="paymentGrandTotal">
                    <h3 style={{ fontWeight: "bold" }}>Grand Total</h3>
                    <h3>${product.actual_price}</h3>
                  </div>
                </div>
                <div className="reviewRight">
                  <div className="paymentQty">
                    <h3>QTY</h3>
                    <p>1</p>
                  </div>
                  <div className="paymentTotal">
                    <h3>TOTAl</h3>
                    <p>100</p>
                  </div>
                </div>
              </div>
              <div className="paymentReviewBtns">
                <button style={{ backgroundColor: "#40b566" }}>
                  PROCEED ORDER
                </button>
                <button style={{ backgroundColor: "#ea4335" }}>
                  CANCEL ORDER
                </button>
              </div>
            </div>
            <div className="paymentReviewBtns">
              <button style={{ backgroundColor: "#dc8b2e" }}>
                Give as a Gift
              </button>
              <button
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  border: "1px solid #40b566",
                }}
              >
                Make thise item as a gift
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Payment;
