import {BsWhatsapp, BsFacebook, BsInstagram} from "react-icons/bs"

const FooterPage = () => {
 return ( 
  <div className="contianer ">

   <div className="block text-center lg:flex lg:justify-between">
    <div>
     <h4 className="m-3 font-mono font-bold text-purple-900 uppercase text-center">CleverTag</h4>
    </div>
    
     <nav>
      <ul className="flex  justify-center ">
       <li className="m-2 font-mono font-bold">Home</li>
       <li  className="m-2 font-mono font-bold">Community</li>
       <li className="m-2 font-mono font-bold">Contact</li>
       <li className="m-2 font-mono font-bold">About</li>
      </ul>
     </nav>

    <div className="flex justify-center mt-2">
      <BsInstagram color="purple" size={20} className="mx-4" />
      <BsWhatsapp  color="purple" size={20} className="mx-4"/>
      <BsFacebook  color="purple" size={21} className="mx-4"/>
   </div>

  </div>
  <br/>
  <div className="text-center">
   <h4 className="text-dark  font-roboto">Built by CleverTag  <span className="text-red-400">
    2022
    </span></h4>
  </div>
  <br/>
  <br/>
  </div>
  );
}
 
export default FooterPage ;