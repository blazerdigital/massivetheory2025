import React from 'react';
import "./globals.css"; // Ensure the path is correct
import Footer from "../components/Footer/Footer"; // Correct import path
import Navbar from "../components/Navbar/Navbar"; // Correct import path

export const metadata = {
  title: "Massive Theory - All Episodes",
  description: "...",
};
const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;