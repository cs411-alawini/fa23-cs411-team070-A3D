import SearchBar from './SearchBar';
import Drop from './DropdownMenu';
import { useEffect, useState } from 'react';
import SearchResult from './Table';
import {BrowserRouter} from "react-router-dom"
import Checkboxes from './Checkboxes';

export function Go(input, setData, category, region) {
    // const [data, setData] = useState("");
    console.log(category);
    console.log(region);
    console.log(input);
    var result = "";
    fetch("http://localhost:8000/search?tag=" + input)
      .then((res) => res.json())
      .then(function(res) {
        // props.data = res;
        setData(res);
        result = res
      });
      // .then(setData(res))
    
    //implement
    if (input == "hello") {
      console.log("hi here")
    }
  }
  

  function MainScreen() {
    const [data, setData] = useState("");
    const [category, setCategory] = useState("All");
    const [region, setRegion] = useState("USA");


    useEffect(() => {
      fetch("http://localhost:8000/search?tag=flop")
        .then((res) => res.json())
        // .then(setData(res))
        .then((data) => setData(data));
    }, []);
  

  
    
    return (
  
      
      <>
      <div className='App'> 
      
      
      
      
      <div className='container' style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 10 }}>
        <div className='table-card'> 
          <h3>Most Favorited</h3>
          <ol className='favorited-list'> 
          
          <li>here</li>     {/*get this asynchronously with useeffect, fetch, axios */}
          <li>lol</li> 
          <li>{data}</li>
          
          </ol>
        </div>
        <div className='main-card'>
        <SearchBar GoFunc={(newVal) => Go(newVal,setData, category, region)}></SearchBar>
  
  
        <SearchResult results={[data]}></SearchResult>   {/*results should be array of json data from search query*/}
        <li>{data}</li>
  
        </div>
        

        <div className='dropdown-card'>
        <div className='region'>
            <h1 className='region'>Region: </h1>

            <Checkboxes setRegion={setRegion}></Checkboxes>
            <div className='category'>

            <h1> Category: </h1>
            <Drop setCategory={setCategory}></Drop>

            </div>

        </div>
        
        
        
        </div>
  
  
        
        </div>
        
      </div>
      </>
    );
    
  }
  
  export default MainScreen;
  