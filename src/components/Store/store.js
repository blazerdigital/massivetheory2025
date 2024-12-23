// src/components/Store/store.js
import React, { useEffect } from 'react';

const EcwidStore = () => {
  useEffect(() => {
    const initializeEcwid = () => {
      if (window.xProductBrowser) {
        window.xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-66578708");
      }
    };

    const loadEcwidScript = () => {
      const existingScript = document.getElementById('ecwid-script');
      if (existingScript) {
        initializeEcwid();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://app.ecwid.com/script.js?66578708&data_platform=code&data_date=2024-07-06';
      script.async = true;
      script.charset = 'utf-8';
      script.id = 'ecwid-script';
      script.onload = initializeEcwid;
      document.body.appendChild(script);
    };

    loadEcwidScript();

    return () => {
      const script = document.getElementById('ecwid-script');
      if (script) {
        script.remove();
      }
      const storeDiv = document.getElementById('my-store-66578708');
      if (storeDiv) {
        storeDiv.innerHTML = '';
      }
    };
  }, []);

  return <div id="my-store-66578708"></div>;
};

export default EcwidStore;
