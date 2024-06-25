import face from "../../assets/faceofmasculinity.jpg";
import Categories from "./Categories.jsx";
import Search from "./SearchField.jsx";
import { Link, useLocation } from "react-router-dom";

const Header = ({ chooseCategory }) => {
  const location = useLocation();
  const isFavoritesPage = location.pathname === "/favorites";
  const isSearchResultsPage = location.pathname === "/search";

  return (
    <>
      <nav>
        <Link to="/">Main page</Link>
        {!isFavoritesPage && !isSearchResultsPage && (
          <Categories chooseCategory={chooseCategory} />
        )}
        <Link to="/favorites">Favorites</Link>
      </nav>

      {!isFavoritesPage && <Search />}

      <h2>Chuck Norris facts generator</h2>

      <div>
        <img src={face} className="logo" alt="Chuck Norris face" />
      </div>
    </>
  );
};

export default Header;
