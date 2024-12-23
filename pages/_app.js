import React from 'react';
import { useRouter } from 'next/router';
import '../src/app/globals.css'; // Ensure this file exists and the path is correct
import Footer from '../src/components/Footer/Footer'; // Correct import path
import Navbar from '../src/components/Navbar/Navbar'; // Correct import path
import Wrapper from '../src/components/common/Wrapper/Wrapper'; // Correct import path

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isMerchPage = router.pathname === '/merch';

  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="content">
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </div>
      <Footer specialFooter={isMerchPage} />
    </div>
  );
}

export default MyApp;
