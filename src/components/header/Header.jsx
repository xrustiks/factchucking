import face from "../../assets/faceofmasculinity.jpg";
import Categories from "./Categories.jsx";
import Search from "./SearchField.jsx";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";

const Header = ({ chooseCategory }) => {
  const location = useLocation();
  const isFavoritesPage = location.pathname === "/favorites";
  const isSearchResultsPage = location.pathname === "/search";

  return (
    <>
      <div className = "logo">
        <img src={logo} alt="Chuck Norris logo" />
      </div>

      <nav>
        <Link to="/">Main page</Link>
        {!isFavoritesPage && !isSearchResultsPage && (
          <Categories chooseCategory={chooseCategory} />
        )}
        <Link to="/favorites">Favorites</Link>
      </nav>

      {!isFavoritesPage && <Search />}

      <div className="title">
        <h2>FactChucking</h2>
        <p>Chuck Norris facts generator</p>
      </div>

      <div className="chuck-picture">
        <img src={face} alt="Chuck Norris face" />
      </div>
    </>
  );
};

export default Header;
