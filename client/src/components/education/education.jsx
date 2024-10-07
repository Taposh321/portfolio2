

export default ()=> {
    return(<>
      <div className="w-full h-full mt-5">
        <div className="flex flex-col gap-3 items-center justif w-full max-w-[1200px] mx-auto md:px-3 px-3">
         
         <div className="text-xl ">
         <div className=" relative py-1 text-xl  text-white  flex flex-col"> My Education and Experiences  <div className="progressbar relative w-full h-[2px] bg-[#343436]"><div className="bar absolute w-[50%] h-[2px] left-0 top-0 bg-sky-900 " ></div> </div> </div>
         </div>

         <div className=" w-full h-full max-w-[28.125rem] md:max-w-full flex flex-col md:flex-row  gap-3">
            <div className="w-full flex  flex-col gap-3">
                 <div className=" flex flex-1 p-3 overlay ">
                <div className="w-[60px] min-h-full ">
                 <img  className='w-full h-full' src="./group.svg" alt="" />
                </div>
                <div className="w-full p-3 min-h-full ">
                    <div className="text-white font-bold">
                      FrontEnd Engineer
                    </div>
                    <div className="text-sm text-gray-500">
                    Assisted in developing a robust web-based platform using React.js, creating interactive user interfaces. Contributed by implementing dynamic, reusable components, optimizing performance, and leveraging React hooks for smooth transitions. Collaborated with cross-functional teams to integrate real-time data, enhancing overall functionality and responsiveness.
                    </div>     
              </div>
                </div> 
                <div className=" flex flex-1  p-5  overlay">
                <div className="w-[60px] min-h-full">
                 <img  className='w-full h-full' src="./freelanceProjects.svg" alt="" />
                </div>
                <div className="w-full p-2" >
                    <div className="text-white font-bold">
                        Freelancing Platforms

                    </div>
                    <div className="text-gray-500 text-sm">
                    Worked on various freelancing platforms, delivering responsive websites and web applications using React.js, JavaScript, and CSS. Tailored solutions to client needs, focusing on performance optimization, cross-browser compatibility, and high-quality design                     </div>
                </div>
               </div> 
            </div>
            <div className="w-full flex  flex-col md:flex-row gap-3 ">
                 <div className=" flex flex-1 overlay p-5 ">
                
                <div className="w-full flex flex-col items-center ">
                    <div className="text-white text-lg font-bold  mr-auto bg-gray-800/50 px-3 rounded-lg">
                    Education
                    </div>
                    <div className="w-full border-l-2 border-gray-800/50  h-96 ml-1 -mt-1 pt-5 flex flex-col gap-5  ">
                     <div className="edu-item relative  w-full h-[100px]  pl-10 flex gap-2  flex-col items-start"><div className="p-3 text-sm text-center text-white rounded-full bg-black">Jan 1,2017 -2021</div> <div className=" text-white font-bold  flex flex-col">Roverpalli Degre College <span className="text-gray-700 font-normal">BBA</span></div></div>
                     <div className="edu-item relative  w-full h-[100px]  pl-10 flex gap-2  flex-col items-start"><div className="p-3 text-sm text-center text-white rounded-full bg-black">Jan 1,2015 -2017</div> <div className=" text-white font-bold  flex flex-col">Roverpalli Degre College <span className="text-gray-700 font-normal">H.S.C</span></div></div>
                     <div className="edu-item relative  w-full h-[100px]  pl-10 flex gap-2  flex-col items-start"><div className="p-3 text-sm text-center text-white rounded-full bg-black">Sept 23 2007 -2015</div> <div className=" text-white font-bold  flex flex-col">Roverpalli High school <span className="text-gray-700 font-normal">School</span></div></div>

                    </div> 
                </div>
                </div> 
               
            </div>
         
         </div>
        
        </div>

      </div>
        </>)
}