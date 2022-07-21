import {FiMenu} from "react-icons/fi";
import { RiCloseLine} from "react-icons/ri";
import{useState} from "react";
import Logo from "../img/cleverLogo .png"

const HeaderPage = () => {
 const [nav, setNav]=useState(false);

 const handleClick=()=>setNav(!nav);

 return ( 
  <div className="container">
   <div className="flex justify-between" >
    <div>
     <img src={Logo} className="w-[70px] " alt="Logo" />
    </div>
    <nav>
<ul className="hidden lg:flex  ">
 <li className="list-none mr-8 font-san font-extrabold">Home</li>
 <li className="list-none  mr-8 font-san font-extrabold">Contact</li>
 <li className="list-none  mr-8 font-san font-extrabold ">Chat</li>
 <li className="list-none  mr-8 font-san font-extrabold">Service</li>
 <li className="list-none mr-8 font-san font-extrabold ">Training</li>
</ul>
    </nav>
    <div className=" hidden lg:flex justify-around ">
<button className="ml-3 font-san font-bold">Login</button>
<button className="bg-red-200 ml-2 p-3 text-white font-bold  ">Get Started free</button>
    </div>
<div className=" lg:hidden" onClick={handleClick} >
 { !nav ? <FiMenu color="black" size={32}  />:  <RiCloseLine color="black" size={32}  />

 }

</div>




   </div>
<ul className={!nav ? "hidden": " container lg:flex text-center shadow-lg p-7  "}>
 <li className="list-none m-4 font-san font-extrabold">Home</li>
 <li className="list-none  m-4 font-san font-extrabold">Contact</li>
 <li className="list-none  m-4 font-san font-extrabold ">Chat</li>
 <li className="list-none  m-4 font-san font-extrabold">Service</li>
 <li className="list-none m-4 font-san font-extrabold ">Training</li>
</ul>
  </div>
  );
}
 
export default HeaderPage;