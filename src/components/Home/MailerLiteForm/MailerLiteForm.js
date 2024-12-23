import React, { useEffect } from 'react';
import styles from './MailerLiteForm.module.css';

const MailerLiteForm = () => {
  useEffect(() => {
    // Load the MailerLite Universal script when the component mounts
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
      .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
      n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
      (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
      ml('account', '991576');
    `;
    document.head.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.mlFormContainer}>
      <div className="ml-embedded" data-form="m23mwn"></div>
    </div>
  );
};

export default MailerLiteForm;
