import { Link } from "react-router-dom";
import styles from "./PageNav.module.css";
import cartIcon from "../../../public/shopping-cart.png";
import englishFlag from "../../../public/english-flag.png";

function PageNav() {
  return (
    <div className={styles.container}>
      <div>
        <img
          className={styles.englishFlag}
          src={englishFlag}
          alt="English Flag"
        />
      </div>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <img className={styles.image} src={cartIcon} alt="Cart Icon" />
    </div>
  );
}

export default PageNav;
