
import './App.css';
import All from './Components/All';
import Create from './Components/Create';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import Update from './Components/Update';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Create/>}/>
        <Route path='/all' element={<All/>}/>
        <Route path='/:id' element={<Update/>}/>


      </Routes>

        
      </BrowserRouter>
    </div>
  );
}

export default App;
