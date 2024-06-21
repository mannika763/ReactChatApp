import React from 'react';
import "./UserInfo.css";
import { IoVideocam } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

function UserInfo() {
  return (
    <div className='userinfo'>
      <div className='user'>
        <div className='profile'><CgProfile className='cgprofile'/></div>
        <h2>Mannika V</h2>
      </div>
      <div className='icons'>
        <span className='icons-1'><IoIosMore/></span>
        <span className='icons-1'><IoVideocam/></span>
        <span className='icons-1'><MdModeEditOutline/></span>
      </div>
    </div>
  )
}

export default UserInfo
