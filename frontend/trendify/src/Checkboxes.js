import React, { useState} from 'react';
import { MDBCheckbox } from 'mdb-react-ui-kit';


export default function Checkboxes(props) {
  const [checked, setChecked] = useState(false);

      
      
  return (
    <>


    <ul className='checkbox-list'>
    
      <li>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked/>   {/*default value*/}
        <label class="checkbox" for="flexRadioDefault1"> United States </label>
      </div>
      </li>
      <li>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label class="checkbox" for="flexRadioDefault1"> Brazil </label>
      </div>
      </li>
      <li>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
        <label class="checkbox" for="flexRadioDefault1"> India </label>
      </div>
      </li>


      

      
    

    </ul>



    
    </>  
  );

}

