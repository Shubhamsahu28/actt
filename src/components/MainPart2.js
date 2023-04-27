import React from 'react';
import { useState } from 'react';
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube'





const MainPart2 = () => {
  
  const slides = [
  //   {url: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //   title:"Retail"
  // },
    //  {url: "https://images.unsplash.com/photo-1606964212858-c215029db704?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",title:"Industries"},
      {url:"https://images.unsplash.com/photo-1521111756787-d2f69136cedf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnVmYWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",title:"Manufacture"},
      {url: require("../image/img/eighth.jpeg"),
    title:"Logistics"
  },
  {url: require("../image/img/tenth.png"),
  title:"E-commerce"
},
{url: require("../image/img/third.jpg"),
title:"FMCG"
},
{url: require("../image/img/fourth.jpg"),
    title:"FMCD"
  },
      {url: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title:"Retail"
  },
  
  
  
  {url: require("../image/img/fifth.jpg"),
    title:"Healthcare"
  },
  {url: require("../image/img/seventh.jpg"),
    title:"Pharma"
  },
  {url: require("../image/img/sixth.jpg"),
    title:"Telecom"
  },
  // {url: require("../image/img/eighth.jpeg"),
  //   title:"Logistics"
  // },
  {url: require("../image/img/ninth.webp"),
    title:"Warehousing"
  },
  // {url: "https://images.unsplash.com/photo-1521111756787-d2f69136cedf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnVmYWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   title:"Retail"
  // },
  // {url: "https://images.unsplash.com/photo-1521111756787-d2f69136cedf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnVmYWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   title:"Retail"
  // },
  // {url: "https://images.unsplash.com/photo-1521111756787-d2f69136cedf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnVmYWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   title:"Retail"
  // },

  ];
  // const postInfo = [
  //     {url:'https://images.unsplash.com/photo-1593733925160-6f78dc0be8b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //     caption:"Linkedin",
  //     content:"We are a SaaS-enabled platform for effective grey and blue-collar workforce management specializing in employee lifecycle management, jobs and requisition management, and training and/or interview assessments",
  //     date:"02/06/23",
  //     publication:"publication"
  //   },
  //     {url:'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //     caption:"Linkedin",
  //     content:"Workforce management becomes extremely easy & smooth with Meraqui's Mera Verse App. By allowing self-onboarding, we make the process quick & ensure organizations stay compliant! Along with this, our app ",
  //     date:"02/06/23",
  //     publication:"publication"
  //   },
  //     {url:'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //     caption:"Linkedin",
  //     content:"We align our understanding according to your business needs and proactively initiate the HR processes to suit your requirements leveraging the power of Artificial Intelligence.",
  //     date:"02/06/23",
  //     publication:"publication"
  //   },
  //     {url:'https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //     caption:"Linkedin",
  //     content:"Timely employee on-boarding is essential for employee morale and the blue-collar workforce This article talks about how organizations can manage to onboard better! Or you could work with Meraqui to enable self-onboarding!",
                  
  //     date:"02/06/23",
  //     publication:"publication"
  //   }
  // ]
  const newsInfo = [
      {url:require('../image/whyChooseUs/Lalit.jpg'),
      caption:"The Future of HR",
      content:"Lalit is an engineer,he did his masters from NITIE Mumbai with IT major. Worked with tech giants like i2 Technologies, ITC InfoTech, and Unilever IT. ",
      date:"02/06/23",
      publication:"publication",
      links:"https://www.cxooutlook.com/the-future-of-hr-and-hiring-in-the-post-pandemic-era/"
    },
      {url:require('../image/whyChooseUs/work.webp'),
      caption:"WaaS startup",
      content:"India has approximately 70 million enterprises, of which about a fifth of them have offices and a GST number, as per staffing solutions provider TeamLease’s 2020 annual report estimates.",
      date:"02/06/23",
      publication:"publication",
      links:'https://yourstory.com/2022/04/waas-startup-meraqui-blue-collar-workforce-relevant-gigs'
    },
      {url:require('../image/img/meraqui.jpg'),
      caption:"Helping workforce",
      content:"Automation, digital platforms, numerous innovations, and technological advancements are all transforming the fundamental essence of employment in the corporate sector",
      publication:"publication",
      links:"https://startuptalky.com/technology-in-blue-collar-workforce-management-shalin-maheshwari-meraqui/"
    },
      {url:require('../image/img/9.jpg.jpg'),
      caption:"Workforce Management Platform",
      content:"The system has a full-fledged ENGAGE ecosystem for all the stakeholders. The clients have a portal with a single window, which gives transparent view", 
      publication:"publication",
      links:"https://www.londonchannelnews.com/news/co-founders-shalin-maheshwari-lalit-singh-setting-new-benchmark-for-helping-blue-collar-workforce-through-their-startup-meraqui20220520185127/"
    }
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const [postIndex, setPostIndex] = useState(0);
  const [newsIndex, setNewsIndex] = useState(0);
  // const[slidesIndex,setSlidesIndex]=useState(0)
  
  const prevSlide = () => {
    const isFirstSlide  = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex) 
  }
  
  // const prevPost = () => {
  //   const isFirstPost  = postIndex === 0;
  //   const newIndex = isFirstPost ? postInfo.length - 1 : postIndex - 1;
  //   setPostIndex(newIndex)
  // }
  // const nextPost = () => {
  //   const isLastPost = postIndex === postInfo.length - 1;
  //   const newIndex = isLastPost ? 0 : postIndex + 1;
  //   setPostIndex(newIndex) 
  //   // console.log(postIndex);
  //   // console.log(postInfo[postIndex].url);
  // }
  const prevNews = () => {
    const isFirstSlide  = newsIndex === 0;
    const newIndex = isFirstSlide ? newsInfo.length - 1 : newsIndex - 1;
    setNewsIndex(newIndex)
  }
  const nextNews = () => {
    const isLastSlide = newsIndex === newsInfo.length - 1;
    const newIndex = isLastSlide ? 0 : newsIndex + 1;
    setNewsIndex(newIndex) 
  }

  return (
    <main className='w-full mt- sm:mt- font-bold sm:w-[85%] sm:mx-auto sm:font-normal sm:h-full'>
      <section className='hidden sm:block'>
        <div className='flex flex-col '>
        <section className='w-full  font-thick'>
                <h3 className='align-content: flex-start;font-quicksand  text-[1.5rem] font-[400] w-full sm:text-5xl  font-sans'>We have worked across all industries</h3>
              </section>
              {/* <div className='w-full flex justify-center mt-2 sm:mt-4'> 
                <p className=' text-[1rem] sm:text-[1.3rem] w-[75%] font-poppins font-[300]'>We are bridging the gap between employees and businesses since 2019!</p>
              </div> */}
        </div>
        <Swiper 
        className='sm:w-[100%] sm:h-[70vh] slide1'
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={4.5}
        navigation
        pagination={{ clickable: true,hide:true }}
        scrollbar={{ draggable: true ,hide:true}}
        
      >
        <SwiperSlide>
          
          <div className=' mt-10  h-[30vh] w-full m-auto px- relative group sm:h-[40vh] sm:font-normal'>
              <div style={{backgroundImage:`url(${slides[0].url})`}} className='  bg-center bg-cover bg-no-repeat w-[100%] h-[25vh] sm:h-full duration-500'>
                {/* <div className= ' align-bottom flex justify-center self-center  text-white w-full h-[25vh] sm:h-[40vh] bg-opacity-[0.6] bg-black'>
                   <h3 className='text-center absolute top-[45%] text-3xl font-poppins font-[300] sm:text-3xl  ' >{slides[0].title}</h3> 
                </div> */}
              </div>
          </div>    
          <h3 className=' text-2xl font-poppins font-bold-[300] sm:text-2xl pt-120 mt-2 ' >{slides[0].title}</h3> 
        </SwiperSlide>
        
        <SwiperSlide>
          
          <div className=' mt-10  h-[30vh] w-full m-auto px- relative group sm:h-[40vh] sm:font-normal'>
              <div style={{backgroundImage:`url(${slides[1].url})`}} className='  bg-center bg-cover bg-no-repeat w-[100%] h-[25vh] sm:h-full duration-500'>
                {/* <div className= '  flex justify-center self-center  text-white w-full h-[25vh] sm:h-[40vh] bg-opacity-[0.6] bg-black'>
                  <h3 className='text-center absolute top-[45%] text-3xl font-poppins font-[300] sm:text-3xl  ' >{slides[1].title}</h3>
                </div> */}
              </div>
          </div>  
          <h3 className='  text-2xl font-poppins font-bold-[300] sm:text-2xl pt-120 mt-2  ' >{slides[1].title}</h3>  
        </SwiperSlide>
        <SwiperSlide>
          
          <div className=' mt-10  h-[30vh] w-full m-auto px- relative group sm:h-[40vh] sm:font-normal'>
              <div style={{backgroundImage:`url(${slides[2].url})`}} className='  bg-center bg-cover bg-no-repeat w-[100%] h-[25vh] sm:h-full duration-500 '>
                {/* <div className= ' pt-90 text-white w-full h-[25vh] sm:h-[40vh] bg-opacity-[0.6] bg-black'> */}
                  {/* <h3 className='   text-3xl font-poppins font-[300] sm:text-3xl pt-60 ' >{slides[2].title}</h3> */}
                {/* </div> */}
              </div>
          </div>    
          {/* <div className= ' pt-120 text-white w-full h-[25vh] sm:h-[40vh] bg-opacity-[0.6]'>  */}
                  <h3 className='   text-2xl font-poppins font-bold-[300] sm:text-2xl pt-120 mt-2 ' >{slides[2].title}</h3>
                
                  
        </SwiperSlide>
        <SwiperSlide>
          
          <div className=' mt-10  h-[30vh] w-full m-auto px- relative group sm:h-[40vh] sm:font-normal'>
              <div style={{backgroundImage:`url(${slides[3].url})`}} className='  bg-center bg-cover bg-no-repeat w-[100%] h-[25vh] sm:h-full duration-500'>
                {/* <div className= ' relative flex justify-center self-center  text-white w-full h-[25vh] sm:h-[40vh] bg-opacity-[0.6] bg-black'>
                  <h3 className='text-center absolute top-[45%] text-3xl font-poppins font-[300] sm:text-3xl  ' >{slides[3].title}</h3>
                </div> */}
              </div>
          </div>   
          <h3 className='  text-2xl font-poppins font-bold-[300] sm:text-2xl pt-120 mt-2 ' >{slides[3].title}</h3> 
        </SwiperSlide>
        <SwiperSlide>
          
          <div className=' mt-10  h-[30vh] w-full m-auto px- relative group sm:h-[40vh] sm:font-normal'>
              <div style={{backgroundImage:`url(${slides[4].url})`}} className='  bg-center bg-cover bg-no-repeat w-[100%] h-[25vh] sm:h-full duration-500'>
                {/* <div className= ' relative flex justify-center self-center  text-white w-full h-[25vh] sm:h-[40vh] bg-opacity-[0.6] bg-black'>
                  <h3 className='text-center absolute top-[45%] text-3xl font-poppins font-[300] sm:text-3xl  ' >{slides[4].title}</h3>
                </div> */}
              </div>
          </div>    
          <h3 className=' text-2xl font-poppins font-bold-[300] sm:text-2xl pt-120 mt-2 ' >{slides[4].title}</h3>
        </SwiperSlide>
        <SwiperSlide>
          
          <div className=' mt-10  h-[30vh] w-full m-auto px- relative group sm:h-[40vh] sm:font-normal'>
              <div style={{backgroundImage:`url(${slides[5].url})`}} className='  bg-center bg-cover bg-no-repeat w-[100%] h-[25vh] sm:h-full duration-500'>
                {/* <div className= ' relative flex justify-center self-center  text-white w-full h-[25vh] sm:h-[40vh] bg-opacity-[0.6] bg-black'>
                  <h3 className='text-center absolute top-[45%] text-3xl font-poppins font-[300] sm:text-3xl  ' >{slides[5].title}</h3>
                </div> */}
              </div>
          </div>    
          <h3 className=' text-2xl font-poppins font-bold-[300] sm:text-2xl  pt-120 mt-2' >{slides[5].title}</h3>
        </SwiperSlide>
        <SwiperSlide>
          
          <div className=' mt-10  h-[30vh] w-full m-auto px- relative group sm:h-[40vh] sm:font-normal'>
              <div style={{backgroundImage:`url(${slides[6].url})`}} className='  bg-center bg-cover bg-no-repeat w-[100%] h-[25vh] sm:h-full duration-500'>
                {/* <div className= ' relative flex justify-center self-center  text-white w-full h-[25vh] sm:h-[40vh] bg-opacity-[0.6] bg-black'>
                  <h3 className='text-center absolute top-[45%] text-3xl font-poppins font-[300] sm:text-3xl  ' >{slides[6].title}</h3>
                </div> */}
              </div>
          </div>   
          <h3 className=' text-2xl font-poppins font-bold-[300] sm:text-2xl pt-120 mt-2 ' >{slides[6].title}</h3> 
        </SwiperSlide>
        <SwiperSlide>
          
          <div className=' mt-10  h-[30vh] w-full m-auto px- relative group sm:h-[40vh] sm:font-normal'>
              <div style={{backgroundImage:`url(${slides[7].url})`}} className='  bg-center bg-cover bg-no-repeat w-[100%] h-[25vh] sm:h-full duration-500'>
                {/* <div className= ' relative flex justify-center self-center  text-white w-full h-[25vh] sm:h-[40vh] bg-opacity-[0.6] bg-black'>
                  <h3 className='text-center absolute top-[45%] text-3xl font-poppins font-[300] sm:text-3xl  ' >{slides[7].title}</h3>
                </div> */}
              </div>
          </div>    
          <h3 className=' text-2xl font-poppins font-bold-[300] sm:text-2xl pt-120 mt-2 ' >{slides[7].title}</h3>
        </SwiperSlide>
        <SwiperSlide>
          
          <div className=' mt-10  h-[30vh] w-full m-auto px- relative group sm:h-[40vh] sm:font-normal mb-2'>
              <div style={{backgroundImage:`url(${slides[8].url})`}} className='  bg-center bg-cover bg-no-repeat w-[100%] h-[25vh] sm:h-full duration-500'>
                {/* <div className= ' relative flex justify-center self-center  text-white w-full h-[25vh] sm:h-[40vh] bg-opacity-[0.6] bg-black'>
                  <h3 className='text-center absolute top-[45%] text-3xl font-poppins font-[300] sm:text-3xl  ' >{slides[8].title}</h3>
                </div> */}
              </div>
          </div>    
          <h3 className=' text-2xl font-poppins font-bold-[300] sm:text-2xl' >{slides[8].title}</h3>
        </SwiperSlide>
        <SwiperSlide>
          
          <div className=' mt-10  h-[30vh] w-full m-auto px relative group sm:h-[40vh] sm:font-normal mb-2'>
              <div style={{backgroundImage:`url(${slides[9].url})`}} className='  bg-center bg-cover bg-no-repeat w-[100%] h-[25vh] sm:h-full duration-500'>
                {/* <div className= ' relative flex justify-center self-center  text-white w-full h-[25vh] sm:h-[40vh] bg-opacity-[0.6] bg-black'>
                  <h3 className='text-center absolute top-[45%] text-3xl font-poppins font-[300] sm:text-3xl  ' >{slides[9].title}</h3>
                </div> */}
              </div>
          </div>    
          <h3 className=' text-2xl font-poppins font-bold-[300] sm:text-2xl' >{slides[9].title}</h3>
        </SwiperSlide>
        {/* <h3 className='font-bold text-2xl font-poppins font-bold-[300] sm:text-2xl pt-120 mt-2 ' >{slides[9].title}</h3> */}
      </Swiper>
      </section>
      
      

      <section className='hidden sm:block mt-12 sm:h-[90vh]'>
        <div className='w-full flex flex-col sm:h-[6vh] h-[0vh]'>
            <div className='w-full'>
              <h3 className='w-full text-3xl  sm:text-5xl font-poppins font-[300]'>Meraqui in news</h3>
            </div>
            {/* <div className='w-full flex justify-center mt-2 sm:mt-4'> 
              <p className='text-[1rem] font-poppins font-[300] sm:text-[1.3rem] w-[75%]'>We are bridging the gap between employees and businesses since 2019!</p>
            </div> */}
        </div>
        <Swiper
          className='h-[90vh] slide2'
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={3.5}
          navigation
          pagination={{ clickable: true, }}
          scrollbar={{ draggable: true ,hide:true}}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
         
        >
          <SwiperSlide className=''>
              <div className=' mt-10  h-full pb-8 sm:pb-0 mx-auto relative   group shadow-md w-[95%] sm:flex sm:flex-col  sm:h-[60vh]'>
                  <div style={{backgroundImage:`url(${newsInfo[0].url})`}} className='  bg-cover  w-[100%] h-[15vh]  sm:w-[%] sm:h-[45vh] '>
                  </div>
                  <div className='w-full flex flex-col justify-evenly sm:h-[25vh] mt-8 sm:w-[100%] sm:justify-evenly sm:mx-auto px-2'>
                    <div className='text-left text-[1.1rem] font-poppins  font-bold [300] sm:w-[100%]'>
                      <h3>{newsInfo[0].caption}</h3>
                    </div>
                    <div className='text-left text-[0.8rem] mt-4  '>
                      <p className='font-poppins font-[500] sm:h-[15vh] overflow-y-auto overflow-x-hidden leading-[1.9] text-justify  pr-2 duration-500'>{newsInfo[0].content}</p>
                    </div>
                    <div className='text-right flex flex-row justify-end w-full sm:justify-none sm:mb-4 sm:text-right'>
                    {/* <a href='https://www.aninews.in/news/business/business/co-founders-shalin-maheshwari-lalit-singh-setting-new-benchmark-for-helping-blue-collar-workforce-through-their-startup-meraqui20220520185135/' target='blank'><FaLinkedin className='text-[4rem]  w-[50%] text-cyan-300' /></a> */}
                      {/* <FaLinkedin className='text-4xl mb-2 w-[20%] text-cyan-300'   a href=" https://www.linkedin.com/company/meraquii"/> */}
                      <a className='text-[0.8rem] border-b-[1px] border-cyan-400 sm:text-[1rem] font-poppins font-[500]' href="https://www.cxooutlook.com/the-future-of-hr-and-hiring-in-the-post-pandemic-era/">Read more</a>
                    </div>
      
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className=' mt-10  h-full pb-8 sm:pb-0 mx-auto relative    group shadow-md w-[95%] sm:flex sm:flex-col   sm:h-[60vh]'>
                  <div style={{backgroundImage:`url(${newsInfo[1].url})`}} className='  bg-cover  w-[100%] h-[25vh]  sm:w-[100%] sm:h-[90vh] '>
                  </div>
                  <div className='w-full flex flex-col justify-evenly sm:h-[25vh] mt-8 sm:w-[100%] sm:justify-evenly sm:mx-auto px-2'>
                    <div className='text-left text-[1.1rem] font-poppins font-bold [300] sm:w-[100%]'>
                      <h3>{newsInfo[1].caption}</h3>
                    </div>
                    <div className='text-left text-[0.8rem] mt-4  '>
                      <p className='font-poppins font-[500] sm:h-[15vh] overflow-y-auto overflow-x-hidden text-justify leading-[1.9]  pr-2 duration-500'>{newsInfo[1].content}</p>
                    </div>
                    <div className='text-right flex flex-row justify-end w-full sm:justify-none sm:mb-4 sm:text-right'>
                     {/* <a href='https://www.englandnewsportal.com/news/co-founders-shalin-maheshwari-lalit-singh-setting-new-benchmark-for-helping-blue-collar-workforce-through-their-startup-meraqui20220520185127/' target='blank'><FaLinkedin className='text-[4rem]  w-[50%] text-cyan-300' /></a> */} 
                      {/* <FaLinkedin className='text-4xl mb-2 w-[20%] text-cyan-300' a href=" https://www.linkedin.com/company/meraquii" /> */}
                      <a className='text-[0.8rem] border-b-[1px] border-cyan-400 sm:text-[1rem] font-poppins font-[500]' href="https://yourstory.com/2022/04/waas-startup-meraqui-blue-collar-workforce-relevant-gigs">Read more</a>
                    </div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='  mt-10  h-full pb-8 sm:pb-0 mx-auto relative    group shadow-md w-[95%] sm:flex sm:flex-col  sm:h-[60vh]'>
                  <div style={{backgroundImage:`url(${newsInfo[2].url})`}} className='  bg-cover  w-[100%] h-[25vh]  sm:w-[100%] sm:h-[90vh] '>
                  </div>
                  <div className='w-full flex flex-col justify-evenly sm:h-[25vh] mt-8 sm:w-[100%] sm:justify-evenly sm:mx-auto px-2'>
                    <div className='text-left text-[1.1rem] font-poppins font-bold [300] sm:w-[100%]'>
                      <h3>{newsInfo[2].caption}</h3>
                    </div>
                    <div className='text-left text-[0.8rem] mt-4 '>
                      <p className='font-poppins font-[500] sm:h-[15vh] overflow-y-auto overflow-x-hidden leading-[1.9] text-justify  pr-2 duration-500'>{newsInfo[2].content}</p>
                    </div>
                    <div className='text-right flex flex-row justify-end w-full sm:justify-none sm:mb-4 sm:text-right'>
                    {/* <a href='https://www.zee5.com/articles/co-founders-shalin-maheshwari-lalit-singh-setting-new-benchmark-for-helping-blue-collar-workforce-through-their-startup-meraqui' target='blank'><FaLinkedin className='text-[4rem]  w-[50%] text-cyan-300' /></a> */}
                      {/* <FaLinkedin className='text-4xl mb-2 w-[20%] text-cyan-300' a href="  https://www.linkedin.com/company/meraquii" /> */}
                      <a className='text-[0.8rem] border-b-[1px] border-cyan-400 sm:text-[1rem] font-poppins font-[500]' href="https://startuptalky.com/technology-in-blue-collar-workforce-management-shalin-maheshwari-meraqui/">Read more</a>
                    </div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className='  mt-10  h-full pb-8 sm:pb-0 mx-auto relative    group shadow-md w-[95%] sm:flex sm:flex-col sm:h-[60vh]'>
                  <div style={{backgroundImage:`url(${newsInfo[3].url})`}} className=' bg-cover  w-[100%] h-[25vh]  sm:w-[100%] sm:h-[90vh] '>
                  </div>
                  <div className='w-full flex flex-col justify-evenly sm:h-[25vh] mt-8 sm:w-[100%] sm:justify-evenly sm:mx-auto px-2'>
                    <div className='text-left text-[1.1rem] font-poppins  font-bold [300] sm:w-[100%]'>
                      <h3>{newsInfo[3].caption}</h3>
                    </div>
                    <div className='text-left text-[0.8rem] mt-4 '>
                      <p className='font-poppins font-[500] sm:h-[15vh] overflow-y-auto overflow-x-hidden leading-[1.9] text-justify  pr-2 duration-500'>{newsInfo[3].content}</p>
                    </div>
                    <div className='text-right flex flex-row justify-end w-full sm:justify-none sm:mb-4 sm:text-right'>
                    {/* <a href='https://www.londonchannelnews.com/news/co-founders-shalin-maheshwari-lalit-singh-setting-new-benchmark-for-helping-blue-collar-workforce-through-their-startup-meraqui202205201851' target='blank'><FaLinkedin className='text-[4rem]  w-[50%] text-cyan-300' /></a> */}
                       {/* <FaLinkedin className='text-4xl mb-2 w-[20%] text-cyan-300' a href=" https://www.linkedin.com/company/meraquii"/> */} 
                      {/* <a href="">Read More</a> */}
                      <a className='text-[0.8rem] border-b-[1px] border-cyan-400 sm:text-[1rem] font-poppins font-[500]' href="https://www.londonchannelnews.com/news/co-founders-shalin-maheshwari-lalit-singh-setting-new-benchmark-for-helping-blue-collar-workforce-through-their-startup-meraqui20220520185127/">Read more</a>
                    </div>
                  </div>
              </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className=' sm:hidden w-full flex flex-col sm:mb-4 sm:h-full'>
        <div className='flex flex-col'>
          <div className='w-full'>
            <h3 className='w-full text-3xl  sm:text-[2.9rem] font-poppins font-[300] mb-2'>We have worked across all industries</h3>
          </div>
           {/* <div className='w-full flex justify-center mt-2 sm:m-6'> 
            <p className=' text-[1rem]  sm:text-[1.3rem] w-[75%] font-poppins font-[300]'>We are bridging the gap between employees and businesses since 2019!</p>
          </div>  */}
        </div>
        <div className=' mt-8  h-[30vh] w-full m-auto px-4 relative group sm:h-[60vh] sm:font-normal'>
            <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className=' rounded bg-center bg-cover bg-no-repeat w-[100%] h-[25vh] sm:h-full duration-500'>
              <div className= ' relative flex justify-center self-center rounded text-white w-full h-[25vh] sm:h-[60vh] bg-opacity-[0.6] bg-black'>
                <h3 className='text-center absolute top-[45%] text-3xl font-poppins font-[300] font-bold sm:text-5xl  ' >{slides[currentIndex].title}</h3>
              </div>
            </div>
            {/* left arrow */}
            <div className='bg-opacity-[0.1] sm:hidden sm:group-hover:block absolute top-[45%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white text-cyan-400 cursor-pointer sm:top-[50%] sm:text-[4xl] sm:left-[2%]'>
              <BsChevronCompactLeft onClick={() => prevSlide()} className="sm:hidden" size={30}/>
              <BsChevronCompactLeft onClick={() => prevSlide()} className="hidden sm:block" size={50}/>
            </div>
            <div className=' bg-opacity-[0.1] sm:hidden sm:group-hover:block absolute top-[45%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white text-cyan-400 cursor-pointer sm:top-[50%] sm:right-[2%]'>
              <BsChevronCompactRight onClick={() => nextSlide()}  className='sm:hidden' size={30}t/>
              <BsChevronCompactRight onClick={() => nextSlide()}  className='hidden sm:block' size={50}t/>
            </div>
          </div>
      </section>
      
      <section className=' sm:hidden w-full mt-12 h-fill sm:mt-36 sm:h-[80vh]'>
      <div className='w-full flex flex-col '>
         
            <h3 className='w-full text-3xl  sm:text-5xl font-poppins font-[300] flex flex-col space-y-4'>Meraqui in News</h3>
          </div>
      
        <div className=' relative lg:bottom-[45%] mt-0 h-[85vh] mx-auto     group shadow-md w-[90%] sm:flex sm:flex-row sm:h-[55vh]'>
            <div style={{backgroundImage:`url(${newsInfo[newsIndex].url})`}} className=' bg-center bg-cover bg-no-repeat w-[100%] h-[25vh] duration-500 sm:w-[40%] sm:h-full'>
            </div>
            <div className='w-full flex flex-col justify-evenly h-[55vh] mt-8 sm:w-[50%] sm:justify-evenly sm:mx-auto sm:h-full px-2'>
              <div className='text-left w-[100%] text-[1.55rem] sm:text-[1.8rem] h-[25vh]  font-poppins font-[300] flex justify-center flex-col mt-4'>
                <h3 className='w-full h-[10vh]'>{newsInfo[newsIndex].caption}</h3>
              </div>
              <div className='text-left text-[1rem] mt-4 sm:font-semibold'>
                <p className='sm:h-[30vh] sm:overflow-y-auto overflow-y-auto  sm:overflow-x-hidden overflow-x-hidden h-[25vh] text-justify font-poppins font-[500]'>{newsInfo[newsIndex].content}</p>
              </div>
              <div className='mb-8 mt-2   flex flex-row justify-start w-full sm:justify-none sm:text-right sm:mb-8'>
                <a href={newsInfo[newsIndex].links}>Read more</a>
                
              </div>
              <div className='mb-4  text-right flex flex-row justify-end w-full sm:justify-none sm:text-right sm:mb-8'>
                <FaLinkedin className='text-5xl w-[20%] text-cyan-300 sm:m-1' /> 
              </div>
            </div>
            {/* left arrow */}
            <div className='bg-opacity-[0.9] sm:hidden sm:group-hover:block absolute top-[50.5%] sm:top-[70%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white text-cyan-400 cursor-pointer'>
              <BsChevronCompactLeft onClick={() => prevNews()} className="sm:hidden" size={30}/>
              <BsChevronCompactLeft onClick={() => prevNews()} className=" hidden sm:block" size={50}/>
            </div>
            <div className=' bg-opacity-[0.9] sm:hidden sm:group-hover:block absolute top-[29.5%] sm:top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white text-cyan-400 cursor-pointer'>
              <BsChevronCompactRight onClick={() => nextNews()}  className='sm:hidden' size={30}t/>
              <BsChevronCompactRight onClick={() => nextNews()}  className='hidden sm:block' size={50}t/>
            </div>
            
          </div>
      </section>
    </main>
  )
}

export default MainPart2
