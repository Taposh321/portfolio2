
export default function Contact(){
    const handler=(e)=>{

    }
return(<>
<div className="w-full h-full py-2 ">
    <div className="w-full max-w-[1200px] mx-auto flex justify-center">
       
  <div className="w-full max-w-[450px] md:max-w-full flex flex-col items-center gap-4">
        <div className=" relative py-1 text-xl text-white  flex flex-col ">  Contact form <div className="progressbar relative w-full h-[2px] bg-[#343436]"><div className="bar absolute w-[50px] h-[2px] left-0 top-0 bg-sky-900 " ></div> </div> </div>
       <div className="flex flex-col md:flex-row gap-10  w-full">     
     <div className="flex  h-full  text-white font-bold b items-center px-3">
      +1 (203) - 410 - 6674 <br />
        West Haven, Connecticut, USA <br />
       taposhbarman420@gmail.com
      </div>
      <div className=" flex flex-col gap-2 w-full px-3 ">
       <div className="text-xl text-white  mr-auto">Email me</div>
       <div className="flex flex-col md:flex-row items-start flex-1  gap-5 h-full">
       <div className="flex flex-col gap-5 w-full">
          <input className="p-1 border outline-none rounded-sm" type="text"  placeholder="Full name"/>
          <input className="p-1 border outline-none rounded-sm" type="email" placeholder="Email" />
          <input className="p-1 border outline-none rounded-sm" type="text" placeholder="Subject" />
       </div>

      <textarea className="w-full h-[9rem] p-2" name="" id="" placeholder="Your Massage"></textarea>

      </div>
     <input className="p-2 text-white bg-slate-600 rounded-md mr-auto w-[100px]" type="button" value="Send" />
    

      </div>
     
   </div>   
        </div>
  
    </div>
</div>

</>)
}