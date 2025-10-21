import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaInstagram ,FaLinkedinIn} from "react-icons/fa";


function Leftsidebar() {
  return (
    
      <ul className=' w-20 ml-3 fixed flex  bottom-0 flex-col justify-center'>
        <li className='flex justify-center m-6  text-stone-400'>
          <a href='https://github.com/atharva0773' className=' hover:text-blue-400 transition-colors' target='_blank'>
            <FaGithub  size={24}/>

          </a>
        </li>
        <li className='flex justify-center m-6  text-stone-400'>
          <a href='https://www.instagram.com/atharva0773/' className=' hover:text-blue-400 transition-colors' target='_blank'>
            <FaInstagram  size={24}/>
          </a>
        </li>
        <li className='flex justify-center m-6 mb-15 text-stone-400'>
          <a href='https://www.linkedin.com/in/atharva-s-963425221/' className=' hover:text-blue-400 transition-colors' target='_blank'>
            <FaLinkedinIn   size={24}/>
          </a>
        </li>
      <li>
         <div className="w-px  mt-0 ml-10 h-40 bg-stone-400"></div>
      </li>
        
      </ul>
    
  )
}

export default Leftsidebar