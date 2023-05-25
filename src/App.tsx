import './App.css';
import { Routes, Route } from "react-router-dom";
// import { useSelector } from 'react-redux';

// routes
import Main from './pages/Main';
import Login from './pages/LogIn';
import SignUp from './pages/SingUp';
import Upload from './pages/Upload';
import ProductDetail from './pages/ProductDetail';


function App() {

  // const itemCount = useSelector((state) => state.product.count)

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/edit/:id" element={<Upload />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
