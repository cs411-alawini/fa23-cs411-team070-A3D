

import {React, useEffect, useState} from 'react';

export default function Drop(props) {
  const categories = ['All', 'Film & Animation', 'Autos & Vehicles', 'Music', 'Pets & Animals', 'Sports', 'Short Movies', 'Travel & Events', 'Gaming', 'Videoblogging', 'People & Blogs', 'Comedy', 'Entertainment', 'News & Politics', 'Howto & Style', 'Education', 'Science & Technology', 'Movies', 'Anime/Animation', 'Action/Adventure', 'Classics', 'Comedy', 'Documentary', 'Drama', 'Family', 'Foreign', 'Horror', 'Sci-Fi/Fantasy', 'Thriller', 'Shorts', 'Shows', 'Trailers'];

  
  function handleChange(e) {
    // Read the form data
    const index = e.target.selectedIndex;
    console.log(index);
    console.log(categories[index - 1])
    props.setCategory(index - 1);

  }
  

  
  return (
    <form onChange={handleChange}>
    <select class="form-select" aria-label="Default select example" defaultValue="All">
      {/* <option selected value="0">All</option> */}

      {categories.map((category, index) =>  <option value={index}>{category}</option>
    
    )}

  </select>
  </form>
  );
}