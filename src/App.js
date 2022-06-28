import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import PastLaunches from './components/Home/PastLaunches';
import Page404 from './components/Home/Page404';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/pastLaunches' element={<PastLaunches />} />
          <Route exact path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
