import HeaderPage from "./Header";

const HomePage = () => {
 return ( 

  <div  className="container mx-auto bg-white p-8 ">
<HeaderPage/>

   <div className=" container inline-flex justify-around sm:inline-block md:inline-block lg:inline-flex md:mx-auto  px-4 ">

   <div className="  mt-28" style={{width: 450}}>
    <h3 className="font-bold text-[35px] ">It's too late, <br/>
    You can still have a high pay tech skill. </h3 >
    <p className="text-sm mt-5" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non praesentium eligendi reprehenderit facilis vitae odit ipsum fugiat eos id aperiam?</p>
    <div className="mt-3">
     <button className="bg-purple-800  text-white p-3 mr-3 rounded-lg w-64"> Get in touch</button>
   </div>







<br/>
<br/>

<div className="flex">

    <div class="flex -space-x-3 overflow-hidden">
    <img src="./img/img2.png"
     className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
   alt="logo" />
    <img src="./img/img2.png"
  className="inline-block h-10 w-10  rounded-full ring-2 ring-white"
alt="logo" /> <img src="./img/img2.png"
className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
alt="logo" />

</div>
<div className="mx-2">
 <h4 className="font-bold " >+200 STUDENTS</h4>
 <p className="text-sm text-center">Join now!</p>
</div>
<div className="w-1 h-10 bg-black">

</div>
<div>
 <h4 className="font-bold ml-3" >4.0/4 Rating</h4>
 <p className="text-sm text-center">oooooo</p>
</div>

    </div>
   </div>



   <br></br>
   <br></br>
   <br></br>

   <div className=" relative">
    <img src="./img/img2.png" className=" sm:mx-auto" 
    style={{width: 400}} alt="logo" />

<div className="flex absolute top-80   left-50 mt-16 rounded-lg shadow-lg bg-white shadow-lg shadow-black-900 p-2">
<img src="./img/img2.png" className=" mr-4 rounded-full w-10" 
alt="logo" />
<div className="inline-block">
<h4 className="font-mono font-bold text-[.9rem]">Zhulikifili Olayinka!</h4>
<p className="text-[.7rem] ">I started it as joke, but now i am the <br/>one of 
the top student at CleverTag </p>
</div>

</div>

<div className="flex absolute top-40 right-0 mt-12 rounded-lg bg-white-500 shadow-lg shadow-black-900
bg-white p-2">
<img src="./img/img2.png" className="mr-4 rounded-full w-10" 
alt="logo" />
<div className="inline-block">
<h4 className="font-mono font-bold text-[.9rem]">Abdulazeez sodiq!</h4>
<p className="text-[.7rem] ">I started it as joke, but now i am the <br/>one of the top student at CleverTag </p>
</div>
</div>

   </div>

  </div>
  </div>

  );
}
 
export default HomePage;