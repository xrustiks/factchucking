import face from '../../assets/faceofmasculinity.jpg';
import Categories from './Categories.jsx';

const Header = ({ chooseCategory }) => {
  return (
    <>
      <Categories chooseCategory={chooseCategory} />

      <nav>
        <a href="/">Main page</a>
        <a href="/favorites">Favorites</a>
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