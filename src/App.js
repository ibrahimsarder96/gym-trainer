import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Checkout from './Pages/Checkout/Checkout/Checkout';

function App() {
  return (
    <div>
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/service/:serviceId' element={<Checkout></Checkout>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/checkout' element={
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
