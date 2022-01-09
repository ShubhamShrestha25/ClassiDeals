import React from "react";
import "./Payment.css";
import Navbar from "../../components/navbar/Navbar";

const Payment = () => {
  return (
    <>
      <Navbar />
      <div className="payment">
        <div className="paymentLeft">
          <h2>Payment Details</h2>
          <div className="paymentForm">
            <form>
              <h3>Credit Card Information</h3>
              <label>* Name on the card</label>
              <input type="text" placeholder="Name on the card"/>
              <label>Credit card number</label>
              <input type="number" placeholder="1234 1234 1234 1234"/>
              <div className="paymentFix">
                <div className="paymentFixChild">
                  <label>Expiration Date</label>
                  <input type="number" placeholder="MM / YY"/>
                </div>
                <div className="paymentFixChild">
                  <label>CVC</label>
                  <input type="number" placeholder="CVC"/>
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
                  <label>* First Name</label>
                  <input type="text" />
                </div>
                <div className="paymentFixChild">
                  <label>* Second Name</label>
                  <input type="text" />
                </div>
              </div>
              <div className="paymentFix">
                <div className="paymentFixChild">
                  <label>* Billing Address</label>
                  <input type="text" />
                </div>
                <div className="paymentFixChild">
                  <label>* Phone</label>
                  <input type="number" />
                </div>
              </div>
              <div className="paymentFix">
                <div className="paymentFixChild">
                <label>* City</label>
                <input type="text" />
                </div>
                <div className="paymentFixChild">
                <label>* Email</label>
                <input type="email" />
                </div>
              </div>
              <div className="paymentZIPCountry">
                <div className="paymentZIP">
                <label>* Zip</label>
                <input type="number" />
                </div>
                <div className="paymentCountry">
                <label>* Country</label>
                <input type="text" />
                </div>
              </div>
              <h3>Payment</h3>
              <div className="paymentIcons">
                <div className="paymentIcon">
                    <input type="radio" />
                    <label><img src="/images/paypal.png" alt=""/></label>
                </div>
                <div className="paymentIcon">
                    <input type="radio" />
                    <label><img src="/images/mastercard.png" alt=""/></label>
                </div>
                <div className="paymentIcon">
                    <input type="radio" />
                    <label><img src="/images/visa.png" alt=""/></label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="paymentRight">
          <h2>Order Summary</h2>
        </div>
        
      </div>
    </>
  );
};

export default Payment;
