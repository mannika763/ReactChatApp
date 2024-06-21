import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import "./ChatList.css";
import { CgProfile } from "react-icons/cg";
import { BiColor } from 'react-icons/bi';


function ChatList() {

  const [add, setAdd] = useState("false");



  return (
    <div className='chatlist'>
      <div className='search'>
      <div className='searchbar'>
        <span className='fasearch'><FaSearch/></span>
        <input type='text' placeholder='Search' className='search-input'/>
        </div>
        <div  className='add-minus'>
        <span onClick={()=>setAdd((prev)=>!prev)}>{add?<FaMinus/>:<MdAdd/>}</span>
        </div>
         </div>


         <div className='item'>
          <div className='profile-user'><CgProfile style={{color: "white"}}/></div>
          <div className='texts'>
            <span className='user-name'>Mannika Ver</span>
            <p>Hello</p>
          </div>
         </div>

         <div className='item'>
          <div className='profile-user'><CgProfile style={{color: "white"}}/></div>
          <div className='texts'>
            <span className='user-name'>Mannika Ver</span>
            <p>Hello</p>
          </div>
         </div>

         <div className='item'>
          <div className='profile-user'><CgProfile style={{color: "white"}}/></div>
          <div className='texts'>
            <span className='user-name'>Mannika Ver</span>
            <p>Hello</p>
          </div>
         </div>

         <div className='item'>
          <div className='profile-user'><CgProfile style={{color: "white"}}/></div>
          <div className='texts'>
            <span className='user-name'>Mannika Ver</span>
            <p>Hello</p>
          </div>
         </div>
    </div>
  )
}

export default ChatList
