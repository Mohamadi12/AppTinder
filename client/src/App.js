import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Dasboard from './pages/Dasboard';
import Onbording from './pages/Onbording';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/dasboard' element={<Dasboard/>}/> */}
      <Route path='/onbording' element={<Onbording/>}/>
    </Routes>
  );
}

export default App;
