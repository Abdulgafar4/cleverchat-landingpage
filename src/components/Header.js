const HeaderPage = () => {
 return ( 
  <div className="container">
   <div className="flex justify-between" >
    <div>
     <img src="./img/cleverLogo .png" className="w-14 " alt="Logo" />
    </div>
    <nav>
<ul className="flex ">
 <li className="list-none mr-8 font-san font-extrabold">Home</li>
 <li className="list-none  mr-8 font-san font-extrabold">Contact</li>
 <li className="list-none  mr-8 font-san font-extrabold ">Chat</li>
 <li className="list-none  mr-8 font-san font-extrabold">Service</li>
 <li className="list-none mr-8 font-san font-extrabold ">Training</li>
</ul>
    </nav>
    <div className=" flex justify-around  ">
<button className="ml-3 font-san font-bold">Login</button>
<button className="bg-red-200 ml-2 p-2 rounded-lg  ">Get Started free</button>

    </div>


   </div>
  </div>
  );
}
 
export default HeaderPage;