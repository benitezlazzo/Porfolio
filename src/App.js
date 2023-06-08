import Body from './Componentes/Main/Body';
import Footer from './Componentes/Footer/Footer';
import Present from './Componentes/Header/Present';
import Carta from './Componentes/Main/Carta';
import Carru from "../src/Componentes/Main/Carru";
import Contacto from '../src/Componentes/Main/Contacto';
import Cart from "./Componentes/Cart/Cart";
import Retrato from "./Componentes/Main/Retrato";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './Pages/Projects';
import About from './Pages/About';

function App() {
  return (
    <BrowserRouter>
      <div class="fondo">
        <Carta />
        <Present />
        <Body />
        <Routes>
          <Route path='/' element={<Cart />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/About' element={<About />} />
        </Routes>
        <Retrato />
        <Carru />
        <Contacto />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;