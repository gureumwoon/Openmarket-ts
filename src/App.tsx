import './App.css';
import { Routes, Route } from "react-router-dom";
// import { useSelector } from 'react-redux';

// routes
import Main from './pages/Main';


function App() {

  // const itemCount = useSelector((state) => state.product.count)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
