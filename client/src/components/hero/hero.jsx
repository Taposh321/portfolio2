import { useContext,useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyContext } from "../../context/context";
import { faArrowRight,faClock } from "@fortawesome/free-solid-svg-icons"
import {faFacebook,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
export default function Hero (){
 const [loaded,setLoaded]=useState(false)
 useEffect(()=>{
   setLoaded(true)
 },[])
  const {inview } = useContext(MyContext);

    return(<>
  <div className={`${inview?"":"bottomBlur"} `}>
 <div className=" w-full max-w-[1200px]  mx-auto my-0 flex  items-center justify-center  relative">
  
   <div className=" px-5 md:mr-auto">
   
    
    <div className="flex flex-col justify-center  items-center text-white w-full gap-4 max-w-[520px]  min-h-[32rem] mx-auto my-0">
    <div className="w-[140px]  h-[140px] md:hidden  bg-white rounded-full overflow-hidden border-4">
    <img src="https://img.freepik.com/premium-photo/editor-white-background_1194579-2943.jpg?w=740" alt="" />
   </div>
    <div className="mainHeading text-center items-center md:items-start md:text-left text-3xl sm:text-4xl flex flex-col font-bold tracking-wider">
      <span>Transforming Concepts into seamless </span>
      <span className="text-[#af1d8d] overflow-hidden relative w-[320px]  flex h-[50px] md:justify-start  justify-center">
        <span className="relative overflow-hidden min-w-[75px] md:min-w-[90px] ">
          
           <span className={`absolute left-0 transition-[left] duration-[800ms] delay-[600ms] ${loaded?"left-0":"-left-[100%]"}`}>User</span>
            </span> 
            <span className=" relative min-w-[190px]  "><span className={`absolute  left-0 transition-[top] duration-[800ms] delay-[650ms] ${loaded?"top-0":"-top-[100%]"} `}>Experiences</span>
           </span>
           </span>
       </div>
    <div className="subHeading text-sm md:mr-auto text-center text-gray-400 md:text-left  max-w-[350px] md:max-w-[600px]">
      Hi ,This is Taposh a MERN stack developer based  on Bangladesh.
      With over 2 years of hands-on experience in the MERN stack (MongoDB, Express, React, Node.js).
      </div>
     <div className="flex gap-2  md:mr-auto "> 
      <div className=" transition-colors duration-500 cursor-pointer hover:bg-[#089fc9] px-5 py-2 border  rounded-md flex items-center gap-3">Date a meeting</div>
     <div className="  transition-colors duration-500 cursor-pointer hover:bg-[#089fc9] px-5 py-2 rounded-md  border flex items-center gap-3"> My works <FontAwesomeIcon  icon={faArrowRight} /></div>
     </div>
    <div className="flex items-center gap-5 pt-5  md:mr-auto">
     <FontAwesomeIcon  icon={faFacebook} size="xl" />
     <FontAwesomeIcon  icon={faGithub} size="xl"/>
     <FontAwesomeIcon  icon={faLinkedin} size="xl"/>

     </div>
    </div>

   </div>
   <div className="hidden md:flex bg-w flex-1 justify-center text-white font-bold text-3xl">
   <div className="w-[240px]  h-[240px]  bg-white rounded-full overflow-hidden border-4">
    <img src="https://img.freepik.com/premium-photo/editor-white-background_1194579-2943.jpg?w=740" alt="" />
   </div>
   </div>

    </div>
    </div>
    </>)
}