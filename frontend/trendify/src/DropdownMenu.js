

import {React, useEffect, useState} from 'react';

export default function Drop() {
  
  function handleChange(e) {
    // Read the form data
    const form = e.target.selectedIndex;
    console.log(form);
  }
  

  const categories = ['Film & Animation', 'Autos & Vehicles', 'Music', 'Pets & Animals', 'Sports', 'Short Movies', 'Travel & Events', 'Gaming', 'Videoblogging', 'People & Blogs', 'Comedy', 'Entertainment', 'News & Politics', 'Howto & Style', 'Education', 'Science & Technology', 'Movies', 'Anime/Animation', 'Action/Adventure', 'Classics', 'Comedy', 'Documentary', 'Drama', 'Family', 'Foreign', 'Horror', 'Sci-Fi/Fantasy', 'Thriller', 'Shorts', 'Shows', 'Trailers'];
  
  return (
    <form onChange={handleChange}>
    <select class="form-select" aria-label="Default select example">
      <option selected value="0">All</option>

      {categories.map((category, index) =>   <option onChange={() => console.log(index + 1)}value={index + 1}>{category}</option>
    
    )}

  </select>
  </form>
  );
}