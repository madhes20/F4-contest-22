import {Routes,Route} from 'react-router-dom'
import Profile from './Components/Profile';
import Login from './Components/Login';

import './App.css';
// import Profile from './Components/Profile';

function App() {
  return (
    <div className='App'>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='Profile' element={<Profile/>}/>
     </Routes>
    </div>
  );
}

export default App;
