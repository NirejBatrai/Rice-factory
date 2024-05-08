/* import { useProps } from "../contexts/PropContext"; */
import SearchButton from "../SearchButton/SearchButton";
import styles from "./SearchProducts.module.css";

function SearchProducts() {
  /* const { searchQuery, setSearchQuery } = useProps(); */
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        /* value={searchQuery} */
        /* onChange={(e) => setSearchQuery(e.target.value)} */
        placeholder="  Search"
      />
      <SearchButton />
    </div>
  );
}

export default SearchProducts;
