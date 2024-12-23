import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const ReturnPolicy = () => {
  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="content">
        <h1>Return Policy</h1>
        <section>
          <h2>1. Return Conditions</h2>
          <p>
            Items can be returned within 30 days of receiving your shipment. Please ensure that the items are unworn, unwashed, and in their original condition.
          </p>
        </section>
        <section>
          <h2>2. Return Process</h2>
          <p>
            To initiate a return, please contact our customer service at [email address]. Provide your order number and the reason for the return. We will guide you through the process.
          </p>
        </section>
        <section>
          <h2>3. Refunds</h2>
          <p>
            Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within a certain amount of days.
          </p>
        </section>
        <section>
          <h2>4. Exchanges</h2>
          <p>
            We only replace items if they are defective or damaged. If you need to exchange it for the same item, contact us at [email address].
          </p>
        </section>
        <section>
          <h2>5. Shipping</h2>
          <p>
            You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ReturnPolicy;
