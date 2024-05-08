import styles from "./HeaderBottom.module.css";
import PageNav from "../PageNav/PageNav";

function HeaderBottom() {
  return (
    <div className={styles.header}>
      <div>
        <select className={styles.select} defaultValue="">
          <option value="" disabled hidden>
            Categories
          </option>
          <option>Product 1</option>
          <option>Product 2</option>
          <option>Product 3</option>
        </select>
      </div>
      <PageNav />
    </div>
  );
}

export default HeaderBottom;
