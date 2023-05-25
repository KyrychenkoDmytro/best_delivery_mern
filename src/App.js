import { Routes, Route } from 'react-router-dom';
import Header from './Containers/Header/Header';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;