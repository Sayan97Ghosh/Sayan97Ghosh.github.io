import React,{useState} from  'react'
import  {FaBars,FaTimes} from "react-icons/fa"
function Navbar() {
    const [nav,setNav] = useState(false)
    const links = [
      { id:1,
        link:"Home"
      },
      { id:2,
        link:"About"
       },
      { id:3,
        link:"Skills"
       },
      { id:4,
        link:"Projects"
       },
      { id:5,
        link:"Contract"
       },
       { id:6,
        link:"Resume"
       },

    ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black  sticky top-0">
   <div className="text-4xl font-signature ml-2">Sayan</div>
     <ul className='hidden md:flex'>
        {links.map(({id,link})=>(
           <li key = {id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-350'>{link}</li>
        ))}
     </ul>
     {/* For mobile look */}

<div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z10 text-gray-500 md:hidden'>
    {nav ? <FaTimes size = {30}/> : <FaBars size = {30}/>}
</div>

{nav  && (
    
    <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
    {links.map(({id,link})=>(
           <li key = {id} className="px-4 cursor-pointer capitalize py-6 text-4xl">{link}</li>
        ))}
    </ul>
    )}

    </div>
  )
}

export default Navbar