import logo from './logo.svg';
import './App.css';

import {React, location} from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MDBSpinner } from 'mdb-react-ui-kit';




function LikeButton() {
  return (
    <button className='like-button'><svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9 4.5C15.9 3 14.418 2 13.26 2c-.806 0-.869.612-.993 1.82-.055.53-.121 1.174-.267 1.93-.386 2.002-1.72 4.56-2.996 5.325V17C9 19.25 9.75 20 13 20h3.773c2.176 0 2.703-1.433 2.899-1.964l.013-.036c.114-.306.358-.547.638-.82.31-.306.664-.653.927-1.18.311-.623.27-1.177.233-1.67-.023-.299-.044-.575.017-.83.064-.27.146-.475.225-.671.143-.356.275-.686.275-1.329 0-1.5-.748-2.498-2.315-2.498H15.5S15.9 6 15.9 4.5zM5.5 10A1.5 1.5 0 0 0 4 11.5v7a1.5 1.5 0 0 0 3 0v-7A1.5 1.5 0 0 0 5.5 10z" fill="#000000"/></svg></button>
  )
}




export default function SearchResult(props) {



  return (
    <>

    <MDBTable align='middle'>
      <MDBTableHead style={{position: "sticky" }}>
        <tr>
          <th scope='col'>Tag</th>
          <th scope='col'>Total Views</th>
          <th scope='col'>Total Likes</th>
          <th scope='col'>Total Videos</th>
          <th scope='col'>Grade</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {props.results.length > 0 ? props.results.map((tag) => {
        return (<tr>
          <td>
          
            {/* <div className='d-flex align-items-center'>
              <div onClick={() => window.open('https://www.youtube.com/watch?v=DnY5xz11lR0')} className='top-video'>
                <img
                  src='https://img.youtube.com/vi/DnY5xz11lR0/0.jpg'
                  alt=''
                  
                  className='thumbnail'
                />
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
              
              
            </div> */}
            <div className='ms-3'>
                <p className='tag-name'>{tag.TagName}</p>
            
              </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{tag.Total_views}</p>
            <p className='text-muted mb-0'>In thousands</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              {tag.Total_likes}
            </MDBBadge>
          </td>
          <td>{tag.Total_videos}</td>
          <td>
            
          <MDBBtn color={tag.Rating === 'A' ? 'green' : tag.Rating === 'B' ? 'yellow' : tag.Rating === 'C' ? 'orange' : 'red'} rounded size='sm'>
              {tag.Rating}
          </MDBBtn>
            
          </td>
        </tr>
        
        )} 
)  :  (props.loading ? 
  
  <MDBSpinner role='status'>
    <span className='visually-hidden'></span>
  </MDBSpinner> : ""
  
)}
      
      </MDBTableBody>
    </MDBTable>
    
  {/* <Chart></Chart> */}
  </>
  );
}