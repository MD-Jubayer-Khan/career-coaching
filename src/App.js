import { Route, Routes } from 'react-router-dom';
import Header from '../src/pages/shared/Header/Header';
import './App.css';
import Home from '../src/pages/Home/Home/Home';
import Checkout from '../src/pages/Checkout/Checkout';
import Blogs from '../src/pages/Blogs/Blogs';
import About from './pages/About/About';
import NotFound from './pages/shared/NotFound/NotFound';
import Footer from '../src/pages/shared/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
