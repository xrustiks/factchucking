import face from '../../assets/faceofmasculinity.jpg';
import Categories from './Categories.jsx';
import Search from './SearchField.jsx';
import { Link } from 'react-router-dom';

const Header = ({ chooseCategory }) => {
  return (
    <>
      <nav>
        <Link to="/">Main page</Link>
        <Categories chooseCategory={chooseCategory} />
        <Link to="/favorites">Favorites</Link>
      </nav>

      <Search />

      <h2>Chuck Norris facts generator</h2>

      <div>
        <img src={face} className="logo" alt="Chuck Norris face" />
      </div>
    </>
  )
}

export default Header;