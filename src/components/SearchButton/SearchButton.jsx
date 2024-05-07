import Button from "../Button/Button";
import styles from "./SearchButton.module.css";
import magnifyingGlassIcon from "../../../public/1200px-Magnifying_glass_icon.svg.png";

function SearchButton() {
  return (
    <Button type="search">
      <img
        className={styles.mgniGlass}
        src={magnifyingGlassIcon}
        alt="Magnifying Glass"
      />
    </Button>
  );
}

export default SearchButton;
