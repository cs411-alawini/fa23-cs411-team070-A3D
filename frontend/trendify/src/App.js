import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import Drop from './DropdownMenu';

function App() {
  return (
    <div className='App'> 
    <div className='NavBar'>
      <a href="Trendify">Trendify</a>
    </div>
    
    <div className='container' style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 10 }}>
      <div className='table-card'> 
        <h3>Most Favorited</h3>
        <ol className='favorited-list'> 
        <li>hey</li> 
        <li>test</li>  
        <li>here</li>     {/*get this asynchronously with useeffect, fetch, axios */}
        <li>lol</li> 
        
        </ol>
      </div>
      <div className='main-card'>
      <SearchBar></SearchBar>
      

      </div>

      <div className='dropdown-card'>
        <Drop/>
      
      
      </div>


        

    


   
      </div>
    </div>
  );
}

export default App;
