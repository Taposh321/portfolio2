import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { faReact,faNodeJs,faCss3 } from "@fortawesome/free-brands-svg-icons";

export default function Item({img,head,des,link}){
  
    const moveHandler =(e) => {
      const textRect =   e.target.getBoundingClientRect();
      const textX = e.clientX - textRect.left;
      const textY = e.clientY - textRect.top;

      const centerX = textRect.width / 2;
      const centerY = textRect.height / 2;

      const rotateX = (centerY - textY) / 12;
      const rotateY = (textX - centerX) / 12;
      e.target.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;    
}
const leaveHandler= (e) => {
  e.target.style.transform = `rotateX(0) rotateY(0)`;
 };

    return (<>
     <div  className=" w-full item  max-w-[650px] overflow-hidden  ">
        <div onMouseMove={moveHandler} onMouseLeave={leaveHandler} className="w-full h-full   rounded-lg border-[#343434] border flex flex-col item-3d"> 
           <div className="w-full h-[60%] pointer-events-none ">
          <img className="w-full h-full object-cover" src={img} alt="photo" srcset="" />
         </div>
         <div className="flex-1 pointer-events-none flex overlay flex-col items-start gap-2 text-white text-sm p-3">
            <div className="text-white font-bold">
           {head}
            </div>
            <div className="text-gray-500">
           {des}
            </div>
            <div className="flex w-full justify-between items-center mt-auto">
            <div className="  pointer-events-auto px-2 border border-gray-700 rounded-sm text-gray-500 mt-auto hover:bg-[#115e9d] hover:text-white  ">
                <a href={link} target="_blank" rel="noopener noreferrer">Live link <FontAwesomeIcon  icon={faLink} size="sm"/></a>
            </div>
            <div className="flex items-center gap-5 ">
            <FontAwesomeIcon  icon={faReact} size="lg"/>
            <FontAwesomeIcon  icon={faNodeJs} size="lg"/>
            <FontAwesomeIcon  icon={faCss3} size="lg"/>

            </div>
            </div>
            

         </div></div>
       
        </div>
    </>)
  }