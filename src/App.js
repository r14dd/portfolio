import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Teaching from './components/Teaching';

function App() {
  return (
<>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/about" index element={<About />} />
    <Route path="/contact" index element={<Contact />} />
    <Route path="/catalog" index element={<Portfolio />} />
    <Route path="/teaching" index element={<Teaching />} />
  </Route>
</Routes>
</>
  );
}

export default App;
