import React from "react";
import styles from "./HeaderTop.module.css";
import SearchProducts from "../SearchProducts/SearchProducts";
import englishFlag from "../../../public/english-flag.png";
import cartIcon from "../../../public/shopping-cart.png";

function Header() {
  return (
    <header className={styles.headerTop}>
      <div className={styles.container1}>
        <h3 className={styles.logo}> Logo</h3>
        <h3 className={styles.compTitle}>Rice-factory </h3>
      </div>
      <div className={styles.container2}>
        <SearchProducts />
        <img
          className={styles.englishFlag}
          src={englishFlag}
          alt="English Flag"
        />
        <img className={styles.cart} src={cartIcon} alt="Cart Icon" />
      </div>
    </header>
  );
}

export default Header;
