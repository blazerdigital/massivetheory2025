import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="content">
        <h1>Privacy Policy</h1>
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to our Privacy Policy page! When you use our web services, you trust us with your information. This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it. When you share information with us, we can improve our services to give you a better experience. As you use our services, we want you to be clear how we’re using information and the ways in which you can protect your privacy. This is important; we hope you will take time to read it carefully. Remember, you can find controls to manage your information and protect your privacy and security. We’ve tried to keep it as simple as possible.
          </p>
        </section>
        <section>
          <h2>2. Information We Collect</h2>
          <p>
            We collect information to provide better services to all our users. We collect information in the following ways:
            <ul>
              <li><strong>Information you give us.</strong> For example, many of our services require you to sign up for a Massive Theory account. When you do, we’ll ask for personal information, like your name, email address, telephone number or credit card to store with your account.</li>
              <li><strong>Information we get from your use of our services.</strong> We collect information about the services that you use and how you use them, like when you visit our website or interact with our content. This information includes:
                <ul>
                  <li>Device information</li>
                  <li>Log information</li>
                  <li>Location information</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </li>
            </ul>
          </p>
        </section>
        <section>
          <h2>3. How We Use Information We Collect</h2>
          <p>
            We use the information we collect from all our services for the following purposes:</p>
            <ul>
              <li>To provide, maintain, protect, and improve our services</li>
              <li>To develop new services</li>
              <li>To protect Massive Theory and our users</li>
              <li>To offer you tailored content</li>
            </ul>
            <p>We may use the name you provide for your Massive Theory profile across all the services we offer that require a Massive Theory account. If you have a Massive Theory account, we may display your Profile name, Profile photo, and actions you take on Massive Theory or on third-party applications connected to your Massive Theory account (such as +1s, reviews you write, and comments you post) in our services, including displaying in ads and other commercial contexts.
          </p>
        </section>
        <section>
          <h2>4. Cookies</h2>
          <p>
            Our site may use "cookies" to enhance user experience. Users' web browsers place cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser</p>
        </section>
    </div>
    <Footer />
  </div>
);
};

export default PrivacyPolicy;

