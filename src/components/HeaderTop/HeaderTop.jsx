import React from "react";
import PageNav from "../PageNav/PageNav";
import styles from "./HeaderTop.module.css";
import SearchProducts from "../SearchProducts/SearchProducts";

function Header() {
  return (
    <header className={styles.headerTop}>
      <div className={styles.container1}>
        <h3 className={styles.logo}> Logo</h3>
        <h3 className={styles.compTitle}>Rice-factory </h3>
      </div>
      <div className={styles.container2}>
        <SearchProducts />
        <PageNav />
      </div>
    </header>
  );
}

export default Header;
