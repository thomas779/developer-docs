import React from "react";
// import logo from '../../../static/img/logo-dark.png';
import styles from "./banner.module.css";

// component banner and css written by walletconnect docs
const Banner = () => {
  return (
    <div className={styles.banner__container}>
      <div className={styles.banner__text}>
        <h2>Atelier</h2>
        <p>
          Candide provides toolkits to build and leverage smart
          wallets. Build on robust Account Infrastructure on all EVM.
        </p>
        {/* <a href="./wallet/guides/getting-started">
          Get started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </a> */}
      </div>
      <div className={styles.banner__backdrop} />
      {/* <img className={styles.banner__image} src={logo} alt="Candide Logo" /> */}
    </div>
  );
};

export default Banner;
