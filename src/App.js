import './App.css';
import {Route,Routes} from 'react-router-dom';
import About  from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Order from './Components/Order';
import NoMatch from './Components/NoMatch';
import Products from './Components/Products';
import FeaturedProduct from './Components/FeaturedProduct';
import NewProduct from './Components/NewProduct';
import Users from './Components/Users'
import { UserDetail } from './Components/UserDetail';
import Admin from './Components/Admin';
import Profile from './Components/Profile';
import { AuthProvider } from './Components/Auth';
import { Login } from './Components/Login';
import { RequireAuth } from './Components/RequireAuth';

function App() {
  return (
    <AuthProvider>
    <div className="App">
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='About' element={<About />} />
        <Route path='Order' element={<Order/>} />

        <Route path='Products' element={<Products/>}>
          <Route index element={<FeaturedProduct/>}/>
          <Route path='featured' element={<FeaturedProduct />}/>
          <Route path='new' element={<NewProduct />}/>
        </Route>

        <Route path='users' element={<Users/>}>
          <Route path=':userId' element={<UserDetail/>} />
          <Route path ='admin' element={<Admin />} />
        </Route>
        
        <Route path='profile' element={<RequireAuth><Profile /></RequireAuth> } />
        <Route path='login' element={<Login />} />

        <Route path='*' element={<NoMatch/>} />
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;