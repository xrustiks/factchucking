import { useState } from 'react';

import Footer from './components/footer/Footer.jsx';
import Main from './components/main/Main.jsx';
import Header from './components/header/Header.jsx';

import './App.css';

function App() {
  const [category, setCategory] = useState('');

  return (
    <>
      <Header chooseCategory={setCategory} />

      <Main category={category} />

      <Footer />
    </>
  );
}

export default App;