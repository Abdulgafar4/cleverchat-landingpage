import {SiSmartthings} from "react-icons/si"

const FeaturePage = () => {
 return (
  <div className="container">
   <div>

    <div className="text-center">
     <h4 className="font-extrabold text-[25px]">Features of a proficient programmer</h4>
    </div>
<div className="block lg:flex lg:justify-around lg:mt-12">
 
    <div className="text-center  mt-8 lg:flex lg:text-justify  ">
     <div className="rounded-full bg-yellow-400 p-4  w-[60px] mx-auto">
     <SiSmartthings color="orange" size={30} />
     </div>
     <div className="block ml-8 w-50">
     <h4 className="font-bold text-lg">Problem Solver </h4> 
     <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Liberoasperiores explicabo aperiam unde est. </p>
     </div>
    </div>

    <div className="text-center mt-8  lg:flex lg:text-justify ">
   <div className="rounded-full bg-blue-400 p-4 align-self-center w-[60px] mx-auto">
   <SiSmartthings color="blue" size={30} />
   </div>
   <div className="block ml-8 w-50">
   <h4 className="font-bold text-lg">Problem Solver </h4> 
   <p className="text-sm">Lorem ipsum dolor sit amet consectetur 
adipisicing elit. <br/> Liberoasperiores explicabo aperiam unde est. </
p>
   </div>
  </div>

  <div className="text-center mt-8 lg:flex lg:text-justify ">
   <div className="rounded-full bg-black p-4 align-self-center w-[60px] mx-auto">
   <SiSmartthings color="white" size={30} />
   </div>
   <div className="block ml-8 w-50">
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