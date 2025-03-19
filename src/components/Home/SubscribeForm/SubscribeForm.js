"use client";

import { useState } from "react";
import "../SubscribeForm/SubscribeForm.css"; // Keep your original styles

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus("invalid");
      return;
    }

    setIsSubmitting(true);
    setStatus("loading");

    try {
      const response = await fetch(
        "https://w73f1is6sc.execute-api.us-east-1.amazonaws.com/subscribeUser",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="ml-embedded">
      <h4>Massive Theory Show Newsletter</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Subscribe"}
        </button>
      </form>
      {status === "invalid" && <p className="status-error">❌ Please enter a valid email.</p>}
      {status === "loading" && <p className="status-loading">Submitting...</p>}
      {status === "success" && <p className="status-success">✅ Subscription successful!</p>}
      {status === "error" && <p className="status-error">❌ Subscription failed. Try again.</p>}
      <div>
        <p>After subscribing, you'll receive a <strong>confirmation email</strong>. Click the link inside to activate your subscription. No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  );
};

export default SubscribeForm;
