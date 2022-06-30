import {AiOutlineSend} from "react-icons/ai"
import {BsThreeDots} from "react-icons/bs";
import {FiPhoneCall} from "react-icons/fi";
import {HiPhoneMissedCall} from "react-icons/hi";



const ContactReview = () => {
 return ( 
  <div className="container mt-10 ">
  <div className="block lg:flex lg:justify-around">

   <div className="w-[23rem] mx-auto  text-center lg:mx-0 lg:text-left lg:w-[30rem] lg:mt-[4rem]">
   <h4 className="text-[1.7rem] mb-2 font-extrabold capitalize">Get the required skill that will make you standout of the crowd</h4>
   <p className="text-justify tracking-tighter">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime aperiam minima et ducimus dolorem sequi libero, corporis, tempore ipsa minima et ducimus dolorem sequi libero, corporis, tempore ipsa.</p>
   </div>

   
   <div className="mt-[7rem] lg:mt-[1rem]">
    <div className="w-[20rem] h-[23.5rem] bg-white mx-auto shadow-2xl shadow-black-900  rounded  relative">
    <div className="flex absolute top-5  ml-[10px]  p-2 ">
     <img src="./img/img2.png" className=" mr-4 rounded-full w-12 h-12" alt="logo" />
     <div className="inline-block bg-gray-200 rounded p-2">
      <h4 className=" font-bold text-[.7rem]">Zhulikifili Olayinka!</h4>
      <p className="text-[.7rem] ">I started it as joke, but now i am too  </p>
      </div>

    </div>

    <div className="flex absolute top-[6.8rem]  ml-[1.3rem]   p-2 ">
    <div className="inline-block bg-purple-200 rounded p-2">
     <h4 className=" font-bold text-[.7rem]">Zhulikifili Olayinka!</h4>
     <p className="text-[.7rem] ">I started it as joke, but now i am too <br/> how are yout doonf for u and him. 
</p>
     </div>

     <img src="./img/img2.png" className=" ml-[1rem] mt-2 rounded-full w-12 h-12" 
    alt="logo" />
   </div>


   <div className="flex absolute top-[13rem]  ml-[10px]  p-2 ">
    <img src="./img/img2.png" className=" mr-4 rounded-full w-12 h-12" 
    alt="logo" />
    <div className="inline-block bg-gray-200 rounded p-2">
     <h4 className=" font-bold text-[.7rem]">Zhulikifili Olayinka!</h4>
     <p className="text-[.7rem] ">I started it as joke, but now i am too  
</p>
     </div>
   </div>
   
   <div className=" absolute bg-gray-200 w-[3.5rem] px-3 rounded-lg  top-[17.4rem] left-[5rem]">
   <BsThreeDots size={32}/>
   </div>
   

   <div className=" absolute w-[19.9rem] h-10 bg-white-200  border top-[20.5rem]">
<AiOutlineSend color="white" size={36}  className="bg-purple-500 p-2 ml-[17.5rem] "/>

   </div>
<div className="absolute top-[21rem] ml-4">
<h4 className="text-sm">Programming is fun..|</h4>
</div>


 <div className=" absolute w-[6.8rem] bg-white shadow-2xl  p-3 rounded top-[-4rem] ml-[13.5rem] lg:top-[10.5rem] lg:ml-[17.6rem]">
<img src="./img/img2.png" className="  rounded-full w-12 h-12 m-auto" 
  alt="logo" />
  <div className="text-center">
   <h4 className="font-bold text-[.6rem]">Rome Deborah</h4>
   <p className="text-[.4rem]">calling.....</p>
  </div>
  <div className="flex justify-around">
  <HiPhoneMissedCall color="white" size={14} className="rounded-full bg-green-600 p-1 " />
  <FiPhoneCall color="white" size={14} className="rounded-full bg-red-600 p-1"/>
  </div>
</div>

<div className=" absolute w-[8.8rem] bg-purple-600 shadow-2xl top-[23rem] lg:top-[17.5rem] lg:ml-[-6rem]
  p-3 rounded" >
 <div>
   <h4 className="text-[.4rem] text-white"> how thing dey go is waw and this dor we all  how are iyu  jjfj yiu to</h4>

   <div className="w-25 h-2 bg-white mt-2 " >
    <div className="w-20 h-2 bg-green-600">
    </div>
   </div>

   <div className="w-25 h-2 bg-white mt-3 " >
  <div className="w-12 h-2 bg-green-600">
  </div>
 </div>


  </div>
</div>

   </div>

  </div>


  </div>
  </div>
  
 );
};
 
export default ContactReview;
