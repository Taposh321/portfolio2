import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons"
import Item from './item'
export default function Portfolio(){
    return (<>
    <div className="w-full h-full py-5">
     <div className="wrapper w-full h-full max-w-[1200px] gap-10 flex flex-col justify-center items-center px-3  mx-auto">
     <div>
        <div className=" relative py-1 text-xl text-white  flex flex-col">  Portfolio <div className="progressbar relative w-full h-[2px] bg-[#343436]"><div className="bar absolute w-[50px] h-[2px] left-0 top-0 bg-sky-900 " ></div> </div> </div>
      <div className="w-full text-center text-sm text-[#625b5b]">A small selection of my works</div>
   </div>
     
     <div className="w-full h-full  max-w-[450px] md:max-w-full  grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 grid-rows-1">
        <Item img={"./car-services.png" } link={"http://car-services-rosy.vercel.app"} head={"Family Food Mart"} des={"A Russian car services website that offers online booking and various services"} />
        <Item img={'https://iamraufu.github.io/images/Inside%20Ev.png' } link={"http://car-services-rosy.vercel.app"} head={"Inside Ev"} des={" Developed a course platform for German Client"} />
        <Item img={'https://iamraufu.github.io/images/dcautomation.png' } link={"http://car-services-rosy.vercel.app"} head={"Shwapno's Distribution Center Automation"} des={"Developed the DC Automation Platform, which enabled efficient tracking of STO, SKUs, and vehicles, as well as other vital KPIs. "} />
        <Item img={'https://iamraufu.github.io/images/fotonoptix.png' } link={"http://car-services-rosy.vercel.app"} head={"Fotonoptix"} des={"Developed a Full Stack Product display with features for MIT USA Client"} />
        <Item img={'https://iamraufu.github.io/images/dcvehicle.png' } link={"http://car-services-rosy.vercel.app"} head={" Shwapno's Vehicle Tracker"} des={"  Developed a Vehicle Tracker web app for Shwapno Retail which is used for tracking delivery of products across outlets "} />

        <Item img={'https://iamraufu.github.io/images/eftykharrahman.png' } link={"http://car-services-rosy.vercel.app"} head={" Ed tech"} des={" Developed an Ed-Tech platform for Eftykhar Rahman to teach students, assess quiz, and watch class recordings"} />

     </div>
     <div className="text-gray-500 px-3 border border-[#343434]">Load more</div>
     
     </div>

     
    </div>
    </>)
}