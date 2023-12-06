import logo from './logo.svg';
import './App.css';

import MainScreen from './MainScreen';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import TagRating from './TagRating';
import Navbar from './Navbar';



function App() {


  return (
    <>
    <div className='App'>

      <Navbar/>

      
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={ <MainScreen/> } />
          <Route path="/TagRating" element={ <TagRating/> } />
        </Routes>
      </BrowserRouter>
      
    </div>
    </>
  );

    
  }

export default App;
