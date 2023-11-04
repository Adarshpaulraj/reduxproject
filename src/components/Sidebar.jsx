 import { Scale } from '@mui/icons-material'
import React from 'react'
 import { BsFileEarmarkText } from "react-icons/bs"
 import { Link } from 'react-router-dom'
  function Sidebar() {
    return (
   <>
   <div className='containerfluid'>
       <div className='row'>
           <div className='col-auto min-vh-100 bg-light'>
             <ul>
              <li>
                 <h3 className='notes'>Notes App</h3>
              </li>
              <li>
                <Link to='./notes'style={{textDecoration:'none'}}>
                 <a className='nav-link px-2 active' >
                 <BsFileEarmarkText size={20}/>&nbsp;&nbsp;&nbsp;Notes 
                 </a>
                 </Link>
              </li>
              
             </ul>
           </div>
       </div>
   </div>
   </>)
 }
 
 export default Sidebar