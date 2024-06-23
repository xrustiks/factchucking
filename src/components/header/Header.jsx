import face from '../../assets/faceofmasculinity.jpg';
import Categories from './Categories.jsx';
import { Link } from 'react-router-dom';

const Header = ({ chooseCategory }) => {
  return (
    <>
      <nav>
        <Link to="/">Main page</Link>
        <Categories chooseCategory={chooseCategory} />
        <Link to="/favorites">Favorites</Link>
      </nav>

      <h2>Chuck Norris facts generator</h2>

      <div>
        <a href="./assets/faceofmasculinity.jpg" target="_blank">
          <img src={face} className="logo" alt="Chuck Norris face" />
        </a>
      </div>
    </>
  )
}

export default Header;