import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Category from './Category';
import About from './About';
import Error from './Error';
import CategoryDescription from './CategoryDescription';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const navProps = {
  nav: [
    { "link": "/", "text": "Главная" },
    { "link": "/about", "text": "О сайте" },
    { "link": "/cat", "text": "Категории" },
  ],
  nav2: [
    { "link": "/cat/notebook", "text": "Ноутбуки" },
    { "link": "/cat/cellphone", "text": "Телефоны" },
    { "link": "/cat/monitor", "text": "Мониторы" }
  ]
}

function App() {
  return (
    <>
      <Router>
        <Header data={navProps} />


        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/cat" element={<Category data={navProps} />} />
          <Route exact path="/cat/:catDes" element={<CategoryDescription />} />
          <Route path="*" element={<Error />} />
        </Routes>

      </Router>
      <Footer />
    </>
  );
}

export default App;
