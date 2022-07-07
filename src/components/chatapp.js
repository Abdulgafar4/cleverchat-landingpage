import {BsThreeDots} from "react-icons/bs";


const CommunityPage = () => {
 return ( 
  <div className="container mt-20  mb-6 ">
   <br/>
   <br/>
<div className="block lg:flex lg:justify-around">

<div className="mt-[7rem] lg:mt-[1rem]">
  <div className="w-[20rem] h-[24.7rem]  mx-auto shadow-2xl 
shadow-black-900  rounded border relative">

 <div className="absolute w-[17.4rem] flex justify-between ml-5 mt-3  ">
   <h3 className="text-sm text-purple-600 font-Roboto font-bold">Community</h3>
  <BsThreeDots color="gray" size={30} className="-mt-1"/>
  </div>

  <div className="absolute -ml-7 mt-[6rem] "> 
  <img src="./img/img4.jpg" className="  rounded-full w-12 h-12 object-cover" 
  alt="logo" />
  </div>

  <div className="absolute ml-[10rem] mt-[23rem] "> 
<img src="./img/img2.png" className="  rounded-full w-12 h-12" 
alt="logo" />
</div>


<div className="absolute ml-[17rem] mt-[12rem] "> 
<img src="./img/img5.jpg" className="  rounded-full w-12 h-12 object-cover" 
alt="logo" />
</div>


  <div className="  bg-gray-200 w-[18rem] h-[21.5rem] mx-auto mt-9 rounded-lg">



  <div className="flex absolute top-12 bg-gray-100 rounded-lg shadow-lg ml-[19px] w-[15.8rem] p-2 ">
   <img src="./img/img3.jpg" className=" mr-4 rounded-full w-10 h-10 object-cover" 
   alt="logo" />
   <div className="inline-block  rounded p-2">
    <h4 className=" font-bold text-[.7rem]">John Johnny!</h4>
    <p className="text-[.7rem] ">Programming is a luractive Skill</p>
    </div>
  </div>


  
  <div className="flex absolute top-[8.2rem] bg-gray-100 rounded-lg shadow-lg ml-[19px] w-[15.8rem] p-2 ">
   <img src="./img/img2.png" className=" mr-4 rounded-full w-10 h-10 " 
   alt="logo" />
   <div className="inline-block  rounded p-2">
    <h4 className=" font-bold text-[.7rem]">Zhulikifili Olayinka!</h4>
    <p className="text-[.7rem] ">I started it as joke, but now i am  </p>
    </div>
  </div>



  
  <div className="flex absolute top-[13.3rem] bg-gray-100 rounded-lg shadow-lg ml-[19px] w-[15.8rem] p-2 ">
   <img src="./img/img4.jpg" className=" mr-4 rounded-full w-10 h-10 object-cover" 
   alt="logo" />
   <div className="inline-block  rounded p-2">
    <h4 className=" font-bold text-[.7rem]">Abdulgafar Abdulsalam</h4>
    <p className="text-[.7rem] ">I love programming  </p>
    </div>
  </div>


  
  <div className="flex absolute top-[18.6rem] bg-gray-100 rounded-lg shadow-lg ml-[19px] w-[15.8rem] p-2 ">
   <img src="./img/img5.jpg" className=" mr-4 rounded-full w-10 h-10 object-over" 
   alt="logo" />
   <div className="inline-block  rounded p-2">
    <h4 className=" font-bold text-[.7rem]">Deborah Olayinka!</h4>
    <p className="text-[.7rem] ">I want to learn how to code!</p>
    </div>
  </div>


  </div>





 </div>
</div>


<div className="w-[23rem] mx-auto mt-14 text-center lg:mt-0 lg:mx-0 lg:text-left lg:w-[30rem] lg:mt-[4rem]">
 <h4 className="text-[1.7rem] mb-2 font-extrabold capitalize">A community where developers are outnumber can easly  help when stuck</h4>
 <p className="text-justify tracking-tighter">
  This CleverTag community is one of the perfect platfrom that will get you connected to developer oversea and neighbour and the best place to ask for help when stuck and contribute on a project.
</p>

<div className="flex justify-around text-center">
 <h4 className="text-[3rem] lg:text-[4rem]">4.3k<span className="text-sm font-bold">chats</span></h4>
 <h4 className="text-[3rem] lg:text-[4rem]">3k<span className="text-sm font-bold ">user</span></h4>

</div>
 </div>




</div>
  </div>
  );
}
 
export default CommunityPage;