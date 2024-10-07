import { useEffect ,useState} from "react"
import { useInView } from 'react-intersection-observer';

export default function Skills(){
    const [viewAble,setViewAble]=useState(false)
    const { ref, inView } = useInView({
        threshold: .5, // Trigger when 10% of the section is visible
      }); 
  
      useEffect(()=>{
        if(inView){
            setViewAble(true)
        }else{
            setViewAble(false)
        }
      },[inView])
    return(<>
    <div className="w-full">
      <div className="w-full max-w-[1200px]  mx-auto  ">
        <div className="flex flex-col gap-10 justify-center items-center sm:max-w-[450px]  md:max-w-full mx-auto">
       <div  className=" relative py-1 text-xl text-white  flex flex-col ">  Skills and tools <div className="progressbar relative w-full h-[2px] bg-[#343436]"><div className="bar absolute w-[50px] h-[2px] left-0 top-0 bg-sky-900 " ></div> </div> </div>
        
        <div className="w-full overflow-hidden gap-10 grid text-white  grid-cols-1 md:grid-cols-2">
         
         <div ref={ref} className={`flex animate-flicker ${viewAble?"animation-running":"animation-paused"} grid-lines2  px-3 justify-between  `}>
            <div className={`font-bold text-xl transition-all duration-700 ${viewAble?"ml-[0px]":"ml-[-100px]"} my-auto`}>Fontend</div>
            
            <div>  
                <div className="w-full flex flex-col py-3 text-sm  gap-2">
                  <div className="w-full flex" > React JS <span  className="ml-auto text-gray-500"  >90%</span></div>
                  <div style={{"--i":"90%"}} className="item-bar flex"></div> 
                </div>
                <div className="w-full flex flex-col py-3 text-sm  gap-2">
                  <div className="w-full flex gap-2" > CSS framework -Tailwind and others<span  className="ml-auto text-gray-500"  >99%</span></div>
                  <div style={{"--i":"99%"}} className="item-bar flex"></div> 
                </div>
                <div className="w-full flex flex-col py-3 text-sm  gap-2">
                  <div className="w-full flex" > React Router<span  className="ml-auto text-gray-500"  >99%</span></div>
                  <div style={{"--i":"99%"}} className="item-bar flex"></div> 
                </div>
                <div className="w-full flex flex-col py-3 text-sm  gap-2">
                  <div className="w-full flex" >Vanila  JS <span  className="ml-auto text-gray-500"  >95%</span></div>
                  <div style={{"--i":"95%"}} className="item-bar flex"></div> 
                </div>
        
            </div>
         </div>
          
         <div className={`flex px-3 animate-flicker ${viewAble?"animation-running":"animation-paused"} grid-lines3 justify-between  flex-row-reverse`}>
            <div className={`font-bold text-xl transition-all duration-700 my-auto ${viewAble?"mr-0":"mr-[-100px]"}`}>Backend</div>
            
            <div>  
                <div className="w-full flex flex-col py-3 text-sm  gap-2">
                  <div className="w-full flex" > Node JS <span  className="ml-auto text-gray-500"  >90%</span></div>
                  <div style={{"--i":"90%"}} className="item-bar flex"></div> 
                </div>
                <div className="w-full flex flex-col py-3 text-sm  gap-2">
                  <div className="w-full flex gap-2" > React frameworks -Next JS <span  className="ml-auto text-gray-500"  >99%</span></div>
                  <div style={{"--i":"99%"}} className="item-bar flex"></div> 
                </div>
                <div className="w-full flex flex-col py-3 text-sm  gap-2">
                  <div className="w-full flex" > Socket.io <span  className="ml-auto text-gray-500"  >80%</span></div>
                  <div style={{"--i":"80%"}} className="item-bar flex"></div> 
                </div>
                <div className="w-full flex flex-col py-3 text-sm  gap-2">
                  <div className="w-full flex" >Expess JS <span  className="ml-auto text-gray-500"  >95%</span></div>
                  <div style={{"--i":"95%"}} className="item-bar flex"></div> 
                </div>
                <div className="w-full flex flex-col py-3 text-sm  gap-2">
                  <div className="w-full flex" >MongoDM <span  className="ml-auto text-gray-500"  >90%</span></div>
                  <div style={{"--i":"90%"}} className="item-bar flex"></div> 
                </div>
        
            </div>
         </div>
       
        </div>
        <div className=" w-full flex  text-sm py-5 overlay px-3" >
          <div className="text-white"> <span className="font-bold">Tools :</span> For fast project building and development, I rely on Vite. Its lightning-fast bundling speeds and optimized development server enhance productivity. All my code is managed with Git for version control, and I use GitHub to collaborate and share my projects. GitHub also serves as my go-to platform for deployment and continuous integration.</div>
        </div>
        </div>
      </div>
    </div>
    
    </>)
}