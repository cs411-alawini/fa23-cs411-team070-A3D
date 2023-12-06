import SearchBar from './SearchBar';
import Drop from './DropdownMenu';
import { useEffect, useState, useQuery } from 'react';
import SearchResult from './Table';
import {BrowserRouter} from "react-router-dom"
import Checkboxes from './Checkboxes';
import axios from 'axios';

export function Go(input, setData, category, region) {
    console.log(category);
    if (category == -1) {
      category = 0;
    }
    console.log(region);
    console.log(input);
    var request = "http://localhost:8000/search/?tag=" + input + "&category=" + category + "&region=" + region;
   
    
    // console.log(request);
    fetch(request)
      .then((res) => res.json())
      .then((res) => {
        // props.data = res;
        console.log(JSON.parse(JSON.stringify(res)))
        setData(JSON.parse(JSON.stringify(res)));
        // result = res
      }).catch((e) => console.log(e))



    //   var result = "";
    // fetch("http://localhost:8000/search?tag=" + input)
    //   .then((res) => res.json())
    //   .then(function(res) {
    //     // props.data = res;
    //     setData(res);
    //     result = res
    //   });
    
    
   
  }
  

  function MainScreen() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState("0");
    const [region, setRegion] = useState("US");
    const [favorites, setFavorites] = useState([])


    
          // setLoading(false);
        // } catch (error) {
          // setError('Error fetching data. Please try again.');
          // setLoading(false);
        
      // };
      // fetchData();
      var request = "http://localhost:8000/favourites2"

      useEffect(() => {
        fetch(request)
          .then((res) => {
            if (!res.ok) {
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then((res) => {
            // Uncomment the line below to set state (assuming setFavorites is a state updater function)
            // setFavorites(JSON.parse(JSON.stringify(res)));
            console.log('Fetched data:', res);
            setFavorites(res)
          })
          .catch((error) => {
            console.error('Fetch error:', error);
          });
      }, []);
      
  
    
  
    
    return (
  
      
      <>
      
      {/* {data} */}
      
      <div className='container' style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 10 }}>
        <div className='table-card'> 
          <h1>Most Favorited</h1>
          <ol className='favorited-list'> 
          {favorites ? (
  <ol>
    {favorites.map((favorite, index) => {
      // console.log("Favorite:", favorite); // Add this line
      return <li className='favorite-tag' key={index}><p>{favorite.tag_name} </p> <span>{"("+favorite.rating+")"}</span></li> ;
    })}
  </ol>
) : (
  <p>No favorites available.</p>
)}
          
          </ol>
        </div>
        <div className='main-card'>
        <SearchBar GoFunc={(newVal) => {setLoading(true); Go(newVal, setData,category, region)}}></SearchBar>
  
  
        <SearchResult results={data} loading={loading}></SearchResult>   {/*results should be array of json data from search query*/}
        
  
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
        
      </>
    );
    
  }
  
  export default MainScreen;
  