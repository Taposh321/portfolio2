

import { Virtual,Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO, Company1',
    content: 'This service is fantastic! It has greatly improved our business.',
    img:"https://img.freepik.com/free-photo/close-up-portrait-young-man-isolated-black-studio-background-photoshot-real-emotions-male-model-crying-throught-laughting-smiling-facial-expression-human-emotions-concept_155003-25587.jpg?t=st=1728296735~exp=1728300335~hmac=0556d343098cdd59c09a14d569afd49a72dcf61dcf6636787fe3cd381c900689&w=740"
  },
  {
    name: 'Jane Smith',
    title: 'CTO, Company2',
    content: 'I love the ease of use and the customer service is exceptional.',
    img:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1728296651~exp=1728300251~hmac=05af23dafb0b42e7ee63673abb3197ea1c9f4eb51cf2b02f0300ab8ce8dfdbf8&w=740"

  },
  {
    name: 'Alex Johnson',
    title: 'Founder, Startup3',
    content: 'We couldn’t be happier with the results we’ve seen.',
    img:"https://img.freepik.com/free-photo/porait-cute-boy-cafe_23-2148436119.jpg?ga=GA1.1.1056734282.1727878560&semt=ais_hybrid"
  },
  {
    name: 'John Doe',
    title: 'CEO, Company1',
    content: 'This service is fantastic! It has greatly improved our business.',
    img:"https://img.freepik.com/premium-photo/man-with-glasses-beard-is-smiling_1257811-8573.jpg?w=740"
  },
  {
    name: 'Jane Smith',
    title: 'CTO, Company2',
    content: 'I love the ease of use and the customer service is exceptional.',
    img:"https://img.freepik.com/free-photo/smiling-handsome-man-jacket-posing_171337-19811.jpg?ga=GA1.1.1056734282.1727878560&semt=ais_hybrid"
  },
  {
    name: 'Alex Johnson',
    title: 'Founder, Startup3',
    content: 'We couldn’t be happier with the results we’ve seen.',
    img:"https://img.freepik.com/free-photo/front-view-handsome-corporate-man_23-2148336855.jpg?ga=GA1.1.1056734282.1727878560&semt=ais_hybrid"
  }
];
export default () => {
  
  return (
    <>
    <div className='w-full py-10  '>
        <div className='w-full max-w-[1200px] mx-auto overflow-hidden flex flex-col gap-2  items-center'>
       
       <div className=''>
       <div className=" relative text-xl text-white gradient-text flex flex-col font-bold">  Tetimonials <div className="progressbar relative w-full h-[2px] bg-[#343436]"><div className="bar absolute w-[50px] h-[2px] left-0 top-0 bg-sky-900 " ></div> </div> </div>
       <div className='text-sm text-white'>What my clients say</div>
       
       </div>
       <div className='relative flex ml-auto w-[100px] h-[50px]'>
       <div  className='swiper-button-next'></div>
       <div className='swiper-button-prev  '></div>
       </div>


       

<Swiper className=' w-full mx-auto h-[15rem] px-3   '
 modules={[Virtual,Navigation]} spaceBetween={20} slidesPerView={1} virtual 
 navigation={{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}}
 breakpoints={{
  // When window width is >= 640px
  580: {
    slidesPerView: 2,
    spaceBetween: 2,
  },
  // When window width is >= 768px
850: {
    slidesPerView: 3,
    spaceBetween: 3,
  },
  // When window width is >= 1024px
  1204: {
    slidesPerView: 3,
    spaceBetween: 4,
  },
}}
>

  {testimonials.map((slideContent, index) => (
    <SwiperSlide key={slideContent} virtualIndex={index} >
     <div className='flex  text-white flex-col justify-center items-center  gap-10 p-5 overlay mx-auto  max-w-[450px] md:max-w-[600px]'>
     
     <div className='flex  flex-col'>
      <div className='font-bold  text-center'>"{slideContent.content}"</div>
     </div>
     <div className='w-full text-sm flex justify-center  items-center flex-col gap-3'>
     <div className=' h-[60px] w-[60px] object-cover bg-white rounded-full overflow-hidden'>
      <img src={slideContent.img} className='w-full h-full object-cover' alt="" srcset="" />
     </div>
     <div className=' my-auto text-center'>
     <div className=' font-bold'>{slideContent.name}</div>
     <div className='text-gray-500'>CEO, Company A</div>
     </div>
  
     </div>
    
     </div>
     
    </SwiperSlide>
  ))}
</Swiper>
<div className='trustedBrands flex w-full '>

  
</div>
        </div>
        

    </div>
   
    </>
   
  );
};
