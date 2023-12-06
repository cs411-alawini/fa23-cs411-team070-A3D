import React, { useState} from 'react';
import { MDBCheckbox } from 'mdb-react-ui-kit';


export default function Checkboxes(props) {

  function handleChange(e) {
    // Read the form data
    const region = e.target.value;
    props.setRegion(region);
  }
  
  return (
    <>


    <ul className='checkbox-list'>
    <form>

      <li>

      <div class="form-check">
        <input  class="form-check-input" value="US" onChange={handleChange} type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked/>   {/*default value*/}
        <label class="checkbox" for="flexRadioDefault1" > United States </label>
      </div>
      </li>
      <li>
      <div class="form-check">
        <input class="form-check-input" value="BR"  onChange={handleChange} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label class="checkbox" for="flexRadioDefault1"> Brazil </label>
      </div>
      </li>
      <li>
      <div class="form-check">
        <input class="form-check-input" value="IN" onChange={handleChange} type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label class="checkbox" for="flexRadioDefault1"> India </label>
      </div>
      </li>

      </form>

      

      
    

    </ul>



    
    </>  
  );

}

