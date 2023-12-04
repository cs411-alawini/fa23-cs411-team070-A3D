import logo from './logo.svg';
import './App.css';

import MainScreen from './MainScreen';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import TagRating from './TagRating';



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainScreen/> } />
        <Route path="/TagRating" element={ <TagRating/> } />
      </Routes>
    </BrowserRouter>
  );

    
  }

export default App;
