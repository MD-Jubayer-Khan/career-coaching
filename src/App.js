import { Route, Routes } from 'react-router-dom';
import Header from '../src/pages/shared/Header/Header';
import Home from '../src/pages/Home/Home/Home';
import Checkout from '../src/pages/Checkout/Checkout';
import Blogs from '../src/pages/Blogs/Blogs';
import About from './pages/About/About';
import NotFound from './pages/shared/NotFound/NotFound';
import Login from './pages/UserAuth/Login/Login';
import Register from './pages/UserAuth/Register/Register';
import RequireAuth from './pages/UserAuth/RequireAuth/RequireAuth';
import Booking from './pages/Checkout/Booking/Booking';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='/booking' element={<Booking></Booking>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
