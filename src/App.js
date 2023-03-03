import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Home/>
      {/* <Routes>
        <Route path='/' exact component={Home}/>
      </Routes> */}
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
