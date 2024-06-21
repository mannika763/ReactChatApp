import React, { useEffect, useRef, useState } from 'react'
import "./Chat.css";
import { CgProfile } from "react-icons/cg";
import { IoVideocam } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

function Chat() {

const [text, setText] = useState("");

const endRef = useRef(null);


// this is for smooth scrolling
useEffect(()=>{
   endRef.current?.scrollIntoView({behavior: "smooth"})
},[])

 function handleText(e){
    setText(e.target.value);
          console.log(text)
}




  return (
    <div className='chat'>
     <div className='top'>
        <div className="user">
            <div className="user-icon"><CgProfile/></div>
            <div className="chat-texts">
                <span>Mannika Vv</span>
                <p>Lorem ipsum, dolor sit amet consectetur  elit. </p>
            </div>
        </div>
        <div className="chaticons">
         <IoVideocam className='chat-icons'/>
         <FaPhone className='chat-icons'/>
         <FaInfo className='chat-icons'/>
        </div>
     </div>
     <div className='centre'>
      <div className="message">
         <div className="her-message"><CgProfile/></div>
         <p className="text-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorum, illum.
         </p>
         <span>1 min ago</span>
      </div>
      <div className="message-own">
        
      <p className="text-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorum, illum.
         </p>
         <span>1 min ago</span>
      </div>
      <div className="message">
         <div className="her-message"><CgProfile/></div>
         <p className="text-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorum, illum.
         </p>
         <span>1 min ago</span>
      </div>
      <div className="message-own">
         
      <p className="text-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorum, illum.
         </p>
         <span>1 min ago</span>
      </div>
      <div className="message">
         <div className="her-message"><CgProfile/></div>
         <p className="text-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorum, illum.
         </p>
         <span>1 min ago</span>
      </div>
      <div className="message-own">
         
      <p className="text-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorum, illum.
         </p>
         <span>1 min ago</span>
      </div>
      <div className="message">
         <div className="her-message"><CgProfile/></div>
         <p className="text-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorum, illum.
         </p>
         <span>1 min ago</span>
      </div>
      <div className="message-own">
         
      <p className="text-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorum, illum.
         </p>
         <span>1 min ago</span>
      </div>
      <div className="message">
         <div className="her-message"><CgProfile/></div>
         <p className="text-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorum, illum.
         </p>
         <span>1 min ago</span>
      </div>
      <div className="message-own">
         
      <p className="text-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorum, illum.
         </p>
         <span>1 min ago</span>
      </div>
      <div className="message">
         <div className="her-message"><CgProfile/></div>
         <p className="text-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorum, illum.
         </p>
         <span>1 min ago</span>
      </div>
      <div className="message-own">
         
      <p className="text-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorum, illum.
         </p>
         <span>1 min ago</span>
      </div>
      <div className="message">
         <div className="her-message"><CgProfile/></div>
         <p className="text-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorum, illum.
         </p>
         <span>1 min ago</span>
      </div>
      <div className="message-own">
         
      <p className="text-message">Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Dolorum, illum.
         </p>
         <span>1 min ago</span>
      </div>
      <div ref={endRef}></div>
     </div>
     <div className='bottom'>
        <div className="bottom-icons">
<FaImage className='bottom-icons-1'/>
<FaCamera className='bottom-icons-1'/>
<FaMicrophone className='bottom-icons-1'/>
        </div>
        <input className="bottom-input" type='text' placeholder='Type a message...' onChange={handleText}/>
        <div className="emoji">
<MdOutlineEmojiEmotions className='emoji1'/>
        </div>
        <button className='sendbtn'>Send</button>
     </div>
    </div>
  )
}

export default Chat
