import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons"
import { useInView } from 'react-intersection-observer';
import { MyContext } from "../../context/context";
import { useEffect ,useContext} from "react";
export default function About(){
   const {setInview } = useContext(MyContext);
   const { ref, inView } = useInView({
      threshold: 0, // Trigger when 10% of the section is visible
    }); 
useEffect(()=>{
inView?setInview(true):setInview(false)
},[inView])

   return (<>
    <div ref={ref} className="w-full pt-5">


     <div className="wrapper px-3 w-full max-w-[1200px] mx-auto gap-10 h-full flex flex-col md:flex-row items-center ">
    <div className=" flex w-full justify-center items-center">
 <div className="rounded-xl relative overflow-hidden w-full max-w-[450px] md:max-w-[600px] h-[300px]">
    <div className=" absolute top-0 text-xl font-bold  left-0 z-10 w-full h-full flex justify-start items-end  text-white p-5 ">
   Your setisfaction is my first Goal
    </div>
 <img className="w-full h-full object-cover" src="neonLaptop.jpg" alt="" srcset="" />
 </div>
    </div>
    <div className=" w-full flex flex-col gap-2 z-0 items-center  ">
<div className="flexAbleTimeZone bg-[rgb(0,3,25)] relative max-h-[150px]  w-full max-w-[450px] md:max-w-[600px]  overflow-hidden rounded-xl ">
<div className="overlay absolute gap-2 items-center top-0 lg:text-xl  font-bold left-0 z-10 w-full h-full flex justify-start  text-white p-5 ">
  <FontAwesomeIcon icon={faClock} /> I am very flexiable with world time zone
    </div>
    <div className="absolute cursor-pointer  z-10  bg-[#164692] text-white hover:text-white animate-bounce top-[20%] left-[50%] px-2 rounded-xl  text-sm">Netherlands</div>
    <div className="absolute cursor-pointer z-10 hover:bg-[#164692] hover:text-white hover:animate-bounce top-[60%] left-[70%] px-2 rounded-xl bg-white text-black text-sm">India</div>

    <div className="absolute  cursor-pointer z-10 hover:bg-[#164692] hover:text-white hover:animate-bounce top-5 left-5 px-2 rounded-xl bg-white text-black text-sm">United State</div>
<img className="w-full h-auto object-auto " src="/location.svg" alt="" srcset="" />
</div>
<div className="flexAbleTime overlay flex   relative h-[150px] w-full max-w-[450px] md:max-w-[600px] bg-[rgb(0,3,25)]   overflow-hidden rounded-xl ">
<div className="w-[50%] flex items-center justify-center font-bold lg:text-xl h-full text-white my-auto">
MY TECH STACK
</div>

 <div className="w-[50%] relative text-white flex gap-2 text-sm justify-end pe-2  ">

<div className=" w-fit flex  flex-col justify-between pt-1 h-full  ">
  <div className="p-2 text-center rounded-md bg-[#0b1244]">ReactJS </div>
<div className="p-2 text-center rounded-md bg-[#0b1244]">Tailwind</div>
<div className="p-2 text-center rounded-md bg-[#0b1244]">TypeScript</div>
<div className="p-2 text-center  bg-[#0b1244]"></div>

</div>
<div className=" w-fit  flex flex-col justify-between pb-1 h-full ">
<div className=" p-2 text-center  bg-[#0b1244]"></div>
<div className=" p-2 text-center rounded-md bg-[#0b1244]">NodeJS</div>
<div className=" p-2 text-center rounded-md bg-[#0b1244]">MongoBD</div>
<div className=" p-2 text-center rounded-md bg-[#0b1244]">ExpressJs</div>
</div>


</div>
</div>


    </div>
     </div>
    </div>

    </>)
}