import face from '../../assets/faceofmasculinity.jpg';
import Categories from './Categories.jsx';

const Header = () => {
  return (
    <>
      <Categories />

      <h1>Chuck Norris facts generator</h1>

      <div>
        <a href="./assets/faceofmasculinity.jpg" target="_blank">
          <img src={face} className="logo" alt="Chuck Norris face" />
        </a>
      </div>
    </>
  )
}

export default Header;