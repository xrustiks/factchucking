import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isFavoritesPage = location.pathname === "/favorites";
  const isSearchResultsPage = location.pathname === "/search";

  return (
    <div className="footer-container">
      <div className="footer-spacer"></div>
      <div className="footer">
        {!isFavoritesPage && !isSearchResultsPage && (
          <p className="press-r">Click "R" to recieve new fact</p>
        )}

        <div className="copychuck">
          All rights belong to Chuck Norris and he lets you use them. Be
          grateful.
        </div>

        <div className="subscribe">
          <input
            className="subscribe-input"
            type="text"
            placeholder="Enter your email"
          />

          <div class="subscribe-button">Subscribe</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
