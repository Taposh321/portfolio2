export default function Certificates(){
    return (<>
    <div className="flex flex-col w-full max-w-[1200px] mx-auto ">

        <div className="Heading text-xl  text-white gap-2 flex flex-col justify-center items-center py-5 ">
     <div className=" relative py-1  flex flex-col">  Certificates <div className="progressbar relative w-full h-[2px] bg-[#343436]"><div className="bar absolute w-[50px] h-[2px] left-0 top-0 bg-sky-900 " ></div> </div> </div>
        <div className="flex flex-col md:flex-row w-full px-3 items-center gap-3">
            <div className="certificate flex p-5 border-[#242323] border-[1px] rounded-lg md:flex-row w-full max-w-[450px] md:max-w-[600px]  h-[130px] overlay">
                <div className=" w-[100px] h-auto  flex items-center">
                <img className="w-[60px] h-[40px] " src="https://iamraufu.github.io/images/aws.png" alt="" srcset=""  />
                </div>
                <div className="certificate-des  flex flex-col text-sm border-gray-700 rounded">
                    <div className="text-white ">AWS Fundamentals</div>
                    <div className="text-gray-500 ">Amazon Web Services</div>
                    <div className="text-gray-500">May 13, 2020</div>
                    <div className="text-gray-500 py-3 ">View Certificate</div>

                </div>
            </div>
            <div className="certificate flex p-5 border-[#242323] border-[1px] rounded-lg md:flex-row w-full max-w-[450px] md:max-w-[600px] h-[130px] overlay">
                <div className=" w-[100px] h-auto  flex items-center">
                <img className="w-[60px] h-[40px] " src="https://iamraufu.github.io/images/gcp.png" alt="" srcset=""  />
                </div>
                <div className="certificate-des  flex flex-col text-sm border-gray-700 rounded">
                    <div className="text-white ">Google Cloud Fundamentals: Core Infrastructure</div>
                    <div className="text-gray-500 ">Google Cloud Platform</div>
                    <div className="text-gray-500">April 30, 2020</div>
                    <div className="text-gray-500 py-2 ">View Certificate</div>

                </div>
            </div>
           
        </div>
        <div className="flex flex-col md:flex-row w-full px-3 items-center gap-3">
            <div className="certificate flex p-5 border-[#242323] border-[1px] rounded-lg md:flex-row w-full max-w-[450px] md:max-w-[600px]  h-[130px] overlay">
                <div className=" w-[100px] h-auto  flex items-center">
                <img className="w-[60px] h-[40px] " src="https://iamraufu.github.io/images/deeplearningai.png" alt="" srcset=""  />
                </div>
                <div className="certificate-des  flex flex-col text-sm border-gray-700 rounded">
                    <div className="text-white ">Interactivecares -MERN stack course</div>
                    <div className="text-gray-500 ">A top leading virtual IT platform</div>

                    <div className="text-gray-500">April 6, 2020</div>
                    <div className="text-gray-500  py-2">View Certificate</div>

                </div>
            </div>
            <div className="certificate flex p-5 border-[#242323] border-[1px] rounded-lg md:flex-row w-full max-w-[450px] md:max-w-[600px] h-[130px] overlay">
                <div className=" w-[100px] h-auto  flex items-center">
                <img className="w-[60px] h-[40px] " src="https://iamraufu.github.io/images/johnhopkingsuni.png" alt="" srcset=""  />
                </div>
                <div className="certificate-des  flex flex-col text-sm border-gray-700 rounded">
                    <div className="text-white "> The Data Scientist’s Toolbox</div>
                    <div className="text-gray-500 ">John Hopkings University</div>
                    <div className="text-gray-500">April 1, 2020</div>
                    <div className="text-gray-500 py-3 ">View Certificate</div>

                </div>
            </div>
           
        </div>
        </div>


    </div>
    
    
    </>)
}