import logo from './logo.svg';
import './App.css';
import { MDBCol } from "mdbreact";
import { useId, useState } from 'react';


function Go(input) {
  //implement
  if (input == "hello") {
    console.log("hi here")
  }
}


function SearchBar(props) {
  const id = useId();
  const [input, setInput] = useState(props?.value ?? '');
    return (
      
      <div className='search-card'>
        <MDBCol md="10">
          <div className="active-pink-3 active-pink-4 mb-4">
            <input value ={input} onInput={e => setInput(e.target.value)} className="form-control" type="text" placeholder="Search" aria-label="Search" />
          </div>
        </MDBCol>
      <button onClick={() => Go(input)}className='search-button'> Go! </button>
      </div>
    );
      
  
  }
  
  export default SearchBar;
  