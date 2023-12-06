import logo from './logo.svg';
import './App.css';

import MainScreen from './MainScreen';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import TagRating from './TagRating';
import Navbar from './Navbar';
import TagCrudPage from './TagInputPage';



function App() {


  return (
    <>
    <div className='App'>

      <Navbar/>

      
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={ <MainScreen/> } />
          <Route path="/TagUpdate" element={ <TagCrudPage/> } />
        </Routes>
      </BrowserRouter>
      
    </div>
    </>
  );

    
  }

export default App;
