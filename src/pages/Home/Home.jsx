import React from "react";
import { useProps } from "../../contexts/PropContext";
import styles from "./Home.module.css";
import Product from "../../components/Product/Product";

function Home() {
  const { products, dispatch } = useProps();
  console.log(products);

  return (
    <ul className={styles.main}>
      {products.map((product) => (
        <Product product={product} key={product.id} dispatch={dispatch} />
      ))}
    </ul>
  );
}

export default Home;
