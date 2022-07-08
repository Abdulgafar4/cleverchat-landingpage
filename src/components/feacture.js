import {SiSmartthings} from "react-icons/si";
import {FiSettings} from "react-icons/fi";
import {MdOutlineViewInAr} from "react-icons/md";


const FeaturePage = () => {
 return (
  <div className="container">
   <div>

    <div className="text-center ">
     <h4 className="font-extrabold mt-14 text-[1.2rem] lg:text-[25px]">Features of a proficient programmer</h4>
    </div>
<div className="block lg:flex lg:justify-around lg:mt-12">
 
    <div className="text-center  mx-auto  mt-8 lg:flex lg:text-justify  ">
     <div className="rounded-full bg-yellow-400 p-4  w-[60px] mx-auto">
     <SiSmartthings color="orange" size={30} />
     </div>
     <div className="block  w-50  lg:ml-8">
     <h4 className="font-bold text-lg">Problem Solver </h4> 
     <p className="text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Liberoasperiores explicabo aperiam unde est. </p>
     </div>
    </div>

    <div className="text-center  mx-auto mt-8  lg:flex lg:text-justify ">
   <div className="rounded-full bg-blue-400 p-4 align-self-center w-[60px] mx-auto">
   <MdOutlineViewInAr color="blue" size={30} />
   </div>
   <div className="block w-50 lg:ml-8">
   <h4 className="font-bold text-lg">Problem Solver </h4> 
   <p className="text-sm">Lorem ipsum dolor sit amet consectetur 
adipisicing elit. <br/> Liberoasperiores explicabo aperiam unde est. </
p>
   </div>
  </div>

  <div className="text-center  mx-auto  mt-8 lg:flex lg:text-justify ">
   <div className="rounded-full bg-black p-4 align-self-center w-[60px] mx-auto">
   <FiSettings color="white" size={30} />
   </div>
   <div className="block w-50 lg:ml-8">
   <h4 className="font-bold text-lg">Problem Solver </h4> 
   <p className="text-sm">Lorem ipsum dolor sit amet consectetur 
adipisicing elit. <br/> Liberoasperiores explicabo aperiam unde est. </
p>
   </div>
  </div>

  </div>


   </div>
  </div>
   );
}
 
export default FeaturePage;