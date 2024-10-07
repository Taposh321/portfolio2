 import { useState } from "react"
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose,faBars } from "@fortawesome/free-solid-svg-icons";
  export default function Nevigation(){
    const [clicked,setClicked]=useState(false);
    const handler =()=>{
        setClicked((pre)=>{
            return pre?false:true
        })
    }

    return(<>
    <div className=" nev w-full max-w-[1200px]  mx-auto my-0 flex h-[90px] items-center text-white sticky top-0 z-[100] bg-[rgb(0,3,25)] ">
        <div className="logo w-full max-w-[150px] flex justify-center items-center font-bold  ">
            Taposh Barman
        </div>
        <div className="bar flex-1 flex items-center justify-end h-full  pe-5 md:hidden ">
        <FontAwesomeIcon onClick={handler}  icon={faBars} />

        </div>
    <div className={`cursor-pointer z-[100] md:px-5  bg-[#0c0c0c] md:bg-transparent
    flex flex-1 md:py-5 gap-4 md:gap-10 fixed md:relative
     top-0 md:top-auto  ${ clicked?"right-0":"right-[-100%]" }  md:right-auto
     flex-col md:flex-row h-screen md:h-auto w-[150px] md:w-auto
     items-center justify-center md:justify-end
     transition-all md:transition-none
      `}>
<FontAwesomeIcon onClick={handler} className=" absolute md:hidden top-5" icon={faClose} />
     <a className={`w-full p-1  opacity-0 md:opacity-100 md:w-auto text-center transition-all duration-300 md:transition-none  delay-[100ms]  ${clicked?'mr-0 opacity-100':'mr-[-100%] md:mr-0  '}`} href="#">About</a>
     <a className={`w-full p-1  opacity-0 md:opacity-100 md:w-auto text-center transition-all duration-300 md:transition-none delay-[200ms] ${clicked?'mr-0 opacity-100':'mr-[-100%] md:mr-0 '}`}  href="#">Certifications</a>
     <a className={`w-full p-1  opacity-0 md:opacity-100 md:w-auto text-center transition-all duration-300 md:transition-none delay-[250ms] ${clicked?'mr-0 opacity-100':'mr-[-100%] md:mr-0 '}`}  href="#">skills</a>
     <a className={`w-full p-1  border-gray-700 opacity-0 md:opacity-100 md:w-auto text-center transition-all duration-300 md:transition-none delay-[300ms] ${clicked?'mr-0 opacity-100':'mr-[-100%] md:mr-0  '}`} href="#">Portfolio</a>
     <a className={`w-full p-1  border-gray-700 opacity-0 md:opacity-100 md:w-auto text-center transition-all duration-300 md:transition-none delay-[350ms] ${clicked?'mr-0 opacity-100':'mr-[-100%] md:mr-0 '}`}  href="#">Contact</a>
        </div>
    </div>
    </>)
 }