import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const TermsOfService = () => {
  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="content">
        <h1>Terms of Service</h1>
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Massive Theory. These terms and conditions outline the rules and regulations for the use of our website and services.
          </p>
        </section>
        <section>
          <h2>2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, Massive Theory and/or its licensors own the intellectual property rights for all material on Massive Theory. All intellectual property rights are reserved.
          </p>
        </section>
        <section>
          <h2>3. Restrictions</h2>
          <p>
            You are specifically restricted from all of the following:
          </p>
          <ul>
            <li>Publishing any website material in any other media without prior permission</li>
            <li>Selling, sublicensing, and/or otherwise commercializing any website material</li>
            <li>Publicly performing and/or showing any website material</li>
            <li>Using this website in any way that is or may be damaging to this website</li>
            <li>Using this website in any way that impacts user access to this website</li>
            <li>Using this website contrary to applicable laws and regulations</li>
            <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this website</li>
          </ul>
        </section>
        <section>
          <h2>4. Your Content</h2>
          <p>
            In these terms and conditions, “Your Content” shall mean any audio, video, text, images, or other material you choose to display on this website. By displaying Your Content, you grant Massive Theory a non-exclusive, worldwide irrevocable, sublicensable license to use, reproduce, adapt, publish, translate, and distribute it in any and all media.
          </p>
        </section>
        <section>
          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall Massive Theory, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. Massive Theory, including its officers, directors, and employees, shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
          </p>
        </section>
        <section>
          <h2>6. Indemnification</h2>
          <p>
            You hereby indemnify to the fullest extent Massive Theory from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these terms.
          </p>
        </section>
        <section>
          <h2>7. Severability</h2>
          <p>
            If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
          </p>
        </section>
        <section>
          <h2>8. Variation of Terms</h2>
          <p>
            Massive Theory is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis.
          </p>
        </section>
        <section>
          <h2>9. Assignment</h2>
          <p>
            The Massive Theory is allowed to assign, transfer, and subcontract its rights and/or obligations under these terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these terms.
          </p>
        </section>
        <section>
          <h2>10. Entire Agreement</h2>
          <p>
            These terms constitute the entire agreement between Massive Theory and you in relation to your use of this website and supersede all prior agreements and understandings.
          </p>
        </section>
        <section>
          <h2>11. Governing Law & Jurisdiction</h2>
          <p>
            These terms will be governed by and interpreted in accordance with the laws of the State of [Your State], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your State] for the resolution of any disputes.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
