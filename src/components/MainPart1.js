import React from 'react'
import '../App.css'
import { Navigation, Pagination, Mousewheel, EffectCreative, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'react-gsap';
// import { ScrollTrigger } from 'gsap/all';
// import ScrollTrigger from 'react-scroll-trigger';



const MainPart1 = () => {
    const slides1 = [
        {
            url: require('../image/whyChooseUs/Requirements.jpg'),
            header: " 1000 workers required for your new plant? ",
            body: "We can source and deploy in jiffy through our Pan India Node network on portal.",
            sub_header: "Requirements Received "
        },
        {
            url: require('../AutomationNodes.mp4'),
            // header:" 1000 workers required for your new plant? 2",
            // body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "Automation RE to Nodes "
        },
        {
            url: require('../image/whyChooseUs/Line.png.png'),
            // header:" 1000 workers required for your new plant? 3",
            // body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "Line up on WMP"
        },
        {
            url: require('../image/whyChooseUs/MEngine2.jpg'),
            // header:" 1000 workers required for your new plant? 4",
            // body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "M Engine run for shortlisting "
        },
        {
            url: require('../image/whyChooseUs/EHandholding.jpg'),
            // header:" 1000 workers required for your new plant? 5",
            // body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "e-Handholding "
        },
        {
            url: require('../image/whyChooseUs/Logic.jpeg'),
            // header:" 1000 workers required for your new plant? 6",
            // body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "Logistics at destination",
        },
    ]
    const slides2 = [
        {
            url: require('../image/workers_required.jpg'),
            header: "Cutting Edge Technology",
            body: "With new-age technologies that just work, and a passionate team in place, Meraqui is fully equipped to onboard and manage hundreds of workers in no time! 'Engage' technologies help arrest attrition.",
            sub_header: "OCR-enabled Paperless",
        },
        {
            url: require('../image/Cutting_Edge.jpg'),
            // header:" 1000 workers required for your new plant? 2",
            // body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "Geo Fenced / Facial Recognition ",
        },
        {
            url: require('../image/30M_Happy.jpg'),
            // header:" 1000 workers required for your new plant? 3",
            // body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "Automated Payroll, Compliance",
        },
        {
            url: require('../image/National_player.jpg'),
            // header:" 1000 workers required for your new plant? 4",
            // body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "Real-time Client Dashboard ",
        }
        // {
        //     url:require('../image/whyChooseUs/Jobtraining.webp'),
        //     header:" 1000 workers required for your new plant? 5",
        //     body:"We can source and deploy in jiffy through our Pan India Node network on portal",
        //     sub_header:"On-The-Job Training ",
        // },
        // {
        //     url:require('../image/whyChooseUs/Unique.webp'),
        //     header:" 1000 workers required for your new plant? 6",
        //     body:"We can source and deploy in jiffy through our Pan India Node network on portal",
        //     sub_header:"Unique Referral Programs ",
        // },
    ]
    const slides3 = [
        {

            url: require('../image/30M_Happy.jpg'),
            header: "30M+ Happy Man Hours managed till date ",
            body: "We can source and deploy in jiffy through our Pan India Node network on portal.",
            sub_header: "On-The-Job Training ",
        },
        {
            url: require('../image/whyChooseUs/Unique.jpg'),
            // header:" 1000 workers required for your new plant? 2",
            // body:"We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "Unique Referral Programs ",
        },
        {

            url: require('../image/whyChooseUs/CuratedContent.png'),
            // header:"1000 workers required for your new plant?3",
            // body:"With initiatives like funds in their account within 30 mins whenever needed, Meraqui is proud of 24% lesser attrition of our workforce",
            sub_header: "Curated Content for Growth"
        },
        {
            url: require('../image/whyChooseUs/Insurance coverage.jpg'),
            header: " 1000 workers required for your new plant? 4",
            body: "We can source and deploy in jiffy through our Pan India Node network on portal.",
            sub_header: "Insurance coverage "
        },
        {
            url: require('../image/whyChooseUs/Salary.jpg'),
            header: " 1000 workers required for your new plant? 5",
            body: "We can source and deploy in jiffy through our Pan India Node network on portal.",
            sub_header: "Salary Advances & Mini Loans "
        },
        {
            url: require('../image/whyChooseUs/Credit.jpg'),
            header: " 1000 workers required for your new plant? 6",
            body: "We can source and deploy in jiffy through our Pan India Node network on portal.",
            sub_header: "Credit Profiling "
        },
        {
            url: require('../image/whyChooseUs/Nano.jpg'),
            header: " 1000 workers required for your new plant? 6",
            body: "We can source and deploy in jiffy through our Pan India Node network on portal.",
            sub_header: "Nano Investments "
        },
        // {
        //     url:require('../image/whyChooseUs/NanoInvestments2.jpg'),
        //     header:" 1000 workers required for your new plant? 5",
        //     body:"We can source and deploy in jiffy through our Pan India Node network on portal",
        //     sub_header: "Some Statistics"
        // },
        // {
        //     url:require('../image/whyChooseUs/SomeMarquee.jpg'),
        //     header:" 1000 workers required for your new plant? 6",
        //     body:"We can source and deploy in jiffy through our Pan India Node network on portal",
        //     sub_header: "Some Marquee Clients"
        // },
    ]
    const slides4 = [
        {
            url: require('../image/whyChooseUs/Map1.jpg'),
            header: " National player | Local flair",
            body: "With our end-to-end sourcing till deployment low code platform and transparent portal to clients and candidates, we are more than happy to customize our offerings to suit YOUR needs.",
            sub_header: "300+ Marquee Clients"
        },
        {
            url: require('../image/whyChooseUs/Map2.png'),
            // header: " 1000 workers required for your new plant? 2",
            // body: "We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "2M+ Man hours managed "
        },
        {
            // url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            url: require('../image/whyChooseUs/Map3.png'),
            // header: " 1000 workers required for your new plant? 3",
            // body: "We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "23 States across Nation"
        },
        {
            // url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            url: require('../image/whyChooseUs/Map4.png'),
            // header: " 1000 workers required for your new plant? 4",
            // body: "We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "150+ locations covered"
        },
        {
            // url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            url: require('../image/whyChooseUs/Map5.png'),
            // header: " 1000 workers required for your new plant? 5",
            // body: "We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "0.5M+ sq. ft. warehouse space "
        },
        {
            // url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            url: require('../image/whyChooseUs/Maps.png'),
            // header: " 1000 workers required for your new plant? 6",
            // body: "We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "Pan India presence "
        },
        {
            // url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            url: require('../image/whyChooseUs/Somemarquee (2).jpg'),
            // header: " 1000 workers required for your new plant? 6",
            // body: "We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "Some Marquee Clients "
        }, {
            // url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            url: require('../image/whyChooseUs/SomeMarquee.jpg'),
            // header: " 1000 workers required for your new plant? 6",
            // body: "We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "Man Hours "
        }, {
            // url:"https://images.unsplash.com/photo-1521401415461-83e7162b8e64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            url: require('../image/whyChooseUs/3PL.jpg'),
            // header: " 1000 workers required for your new plant? 6",
            // body: "We can source and deploy in jiffy through our Pan India Node network on portal",
            sub_header: "3 PL Workforce Management "
        },
    ]

    return (
        <main className='flex flex-col w-full mx-2 font-bold sm:w-[100%] sm:mx-auto'>
            <section className='w-full  font-thick'>
                <h3 className='text-[1.5rem] sm:text-5xl sm:py-10 font-quicksand font-sans'>Why choose Meraqui?</h3>
            </section>

            {/* Carousel */}

            <section className='sm:flex sm:flex-row w-[100%]  mx-auto  font-poppins font-[300] hidden '>

                <Swiper
                    className=' w-[100%] sm:w-[100%] sm:h-[80vh]'

                    modules={[Navigation, Mousewheel, Autoplay, EffectCreative, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    direction="vertical"
                    slidesPerView={1}
                    mousewheel={
                        {
                            forceToAxis: true,
                            sensitivity: 1,
                            releaseOnEdges: true,
                        }
                    }
                    pagination={{ clickable: true, hide: true }}
                    scrollbar={{ draggable: true, hide: true }}

                    effect={"creative"}
                    creativeEffect={{
                        prev: {
                            shadow: false,
                            translate: [0, 0, -450],
                            opacity: 0.6
                        },
                        next: {
                            translate: [0, "100%", 0],
                        },
                    }}

                >

                    <SwiperSlide className='sm:flex sm:flex-row w-[90%] mx-auto    '>

                        <section className=' sm:flex sm:w-[76%] sm:flex-row w-[90%] mx-auto   bg-[#E5FBFF]'>
                            <div className=' sm:w-[81%] h-[10vh] sm:h-auto my-auto  flex flex-col justify-center'>
                                <div className='flex w-[95%]'>
                                    <p className='w-[100%] sm:w-[70%] text-left sm:text-4xl font-quicksand font-[400] p-8'>
                                        {slides1[0].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-0'>
                                    <p className=' w-[85%] text-left sm:text-xl  font-poppins font-[300] text-[0.6rem] p-8'>
                                        {slides1[0].body}
                                    </p>
                                </div>
                            </div>
                            <Swiper
                                className=' w-[100%] sm:w-[80%] sm:h-[80vh] flex flex-col justify-center pic'
                                modules={[Navigation, Mousewheel, Autoplay, EffectCreative, Pagination, Scrollbar, A11y]}
                                spaceBetween={30}
                                direction="horizontal"
                                slidesPerView={1}
                                mousewheel={false}
                                autoplay
                                pagination={{ clickable: false, hide: false }}
                                scrollbar={{ draggable: false, hide: true }}

                                effect={"creative"}
                                creativeEffect={{
                                    prev: {
                                        shadow: false,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        translate: ["100%", 0, 0],
                                    },
                                }}

                            >
                                <SwiperSlide className=' '>
                                    <div className='w-[100%] sm:w-[110%]   relative right-[%] bg-[#E5FBFF] '>
                                        <img src={slides2[0].url} alt="photo1" className=' ' />
                                        {/* <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[400] z-[99] sm:text-2xl'>{slides1[0].sub_header}</p> */}
                                    </div>
                                </SwiperSlide>


                            </Swiper>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide className='sm:flex sm:flex-row w-[95%] sm:-[100%] mx-auto     '>

                        <section className='sm:flex sm:w-[76%] sm:flex-row w-[90%] mx-auto     bg-[#FAEBFF] '>
                            <div className=' sm:w-[81%] h-[30vh] sm:h-auto my-auto  flex flex-col justify-center'>
                                <div className='flex w-[95%]'>
                                    <p className='w-[100%] sm:w-[65%] text-left sm:text-4xl font-quicksand font-[400] p-8'>
                                        {slides2[0].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-0'>
                                    <p className=' w-[85%] text-left sm:text-xl  font-poppins font-[300] text-[0.6rem] p-8'>
                                        {slides2[0].body}
                                    </p>
                                </div>
                            </div>
                            <Swiper
                                className=' w-[100%] sm:w-[80%] sm:h-[80vh] flex flex-col justify-center pic'
                                modules={[Navigation, Mousewheel, Autoplay, EffectCreative, Pagination, Scrollbar, A11y]}
                                spaceBetween={30}
                                direction="horizontal"
                                slidesPerView={1}
                                mousewheel={false}
                                autoplay
                                pagination={{ clickable: false, hide: false }}
                                scrollbar={{ draggable: false, hide: true }}

                                effect={"creative"}
                                creativeEffect={{
                                    prev: {
                                        shadow: false,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        translate: ["100%", 0, 0],
                                    },
                                }}

                            >
                                <SwiperSlide className=''>
                                    <div className='w-[100%] sm:w-[110%]   relative right-[%] bg-[#FAEBFF] '>
                                        <img src={slides2[1].url} alt="photo1" className='  ' />
                                        {/* <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[400] z-[99] sm:text-2xl'>{slides2[0].sub_header}</p> */}
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide className='sm:flex sm:flex-row w-[95%] sm:-[100%] mx-auto     '>

                        <section className='sm:flex sm:w-[76%] sm:flex-row w-[90%] mx-auto     bg-[#FAFFEE]'>
                            <div className=' sm:w-[81%] h-[30vh] sm:h-auto my-auto  flex flex-col justify-center'>
                                <div className='flex w-[95%]'>
                                    <p className='w-[100%] sm:w-[80%] text-left sm:text-4xl font-quicksand font-[400] p-8'>
                                        {slides3[0].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-0'>
                                    <p className=' w-[85%] text-left sm:text-xl  font-poppins font-[300] text-[0.6rem] p-8'>
                                        {slides3[0].body}
                                    </p>
                                </div>
                            </div>
                            <Swiper
                                className=' w-[100%] sm:w-[80%] sm:h-[55vh] flex flex-col justify-center pic'
                                modules={[Navigation, Mousewheel, Autoplay, EffectCreative, Pagination, Scrollbar, A11y]}
                                spaceBetween={30}
                                direction="horizontal"
                                slidesPerView={1}
                                mousewheel={false}
                                autoplay
                                pagination={{ clickable: false, hide: false }}
                                scrollbar={{ draggable: false, hide: true }}

                                effect={"creative"}
                                creativeEffect={{
                                    prev: {
                                        shadow: false,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        translate: ["100%", 0, 0],
                                    },
                                }}

                            >
                                <SwiperSlide className=''>
                                    <div className='w-[100%] sm:w-[110%]   relative right-[%] bg-[#FAFFEE]'>
                                        <img src={slides2[2].url} alt="photo1" className=' ' />
                                        {/* <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[400] z-[99] sm:text-2xl'>{slides3[0].sub_header}</p> */}
                                    </div>
                                </SwiperSlide>


                            </Swiper>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide className='sm:flex sm:flex-row w-[95%] sm:-[100%] mx-auto     '>

                        <section className='sm:flex sm:w-[76%] sm:flex-row w-[90%] mx-auto       bg-[#FFE9E9]'>
                            <div className=' sm:w-[81%] h-[30vh] sm:h-auto my-auto  flex flex-col justify-center'>
                                <div className='flex w-[95%]'>
                                    <p className='w-[100%] sm:w-[65%] text-left sm:text-4xl font-quicksand font-[400] p-8'>
                                        {slides4[0].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-0'>
                                    <p className=' w-[85%] text-left sm:text-xl  font-poppins font-[300] text-[0.6rem] p-8'>
                                        {slides4[0].body}
                                    </p>
                                </div>
                            </div>
                            <Swiper
                                className=' w-[100%] sm:w-[80%] sm:h-[55vh] flex flex-col justify-center pic'
                                modules={[Navigation, Mousewheel, Autoplay, EffectCreative, Pagination, Scrollbar, A11y]}
                                spaceBetween={30}
                                direction="horizontal"
                                slidesPerView={1}
                                mousewheel={false}
                                autoplay
                                pagination={{ clickable: false, hide: false }}
                                scrollbar={{ draggable: false, hide: true }}

                                effect={"creative"}
                                creativeEffect={{
                                    prev: {
                                        shadow: false,
                                        translate: [0, 0, -400],
                                    },
                                    next: {
                                        translate: ["100%", 0, 0],
                                    },
                                }}

                            >
                                <SwiperSlide className=''>
                                    <div className='w-[100%] sm:w-[110%]  relative right-[%] bg-[#FFE9E9] '>
                                        <img src={slides2[3].url} alt="photo1" className='  ' />
                                        {/* <p className='w-[95%] text-[1rem] relative top-[2%] text-left text-black left-[3%] sm:top-[3%] sm:left-[3%] font-poppins font-[400] z-[99] sm:text-2xl'>{slides4[0].sub_header}</p> */}
                                    </div>
                                </SwiperSlide>


                            </Swiper>
                        </section>
                    </SwiperSlide>




                </Swiper>
            </section>


            {/* mobile view */}
            <section className='sm:hidden flex flex-row w-[95%] mx-auto font-poppins font-[300]  '>

                <Swiper
                    className=' w-[100%] sm:w-[100%] sm:h-[70vh]'
                    // install Swiper modules
                    modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                    spaceBetween={1}
                    slidesPerView={1}
                    pagination={{ clickable: true, hide: false }}
                    scrollbar={{ draggable: true, hide: false }}
                    loop={true}
                    autoplay

                >

                    <SwiperSlide className='flex flex-row w-[95%] sm:-[100%] mx-auto  mt-4'>
                        <section className='flex sm:w-[100%] flex-col h-[65vh] w-[95%] mx-auto  mt-4 '>
                            <div className='w-[100%] sm:w-[100%] h-[35vh]'>
                                <img src={slides1[0].url} alt="photo1" className='mt-2   w-[100%] flex  h-[30vh] sm:h-[50vh] sm:w-[100%] mr-2 opacity-[0.7] rounded' />

                            </div>
                            <div className=' w-[100%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[100%] sm:w-[65%] text-left  sm:text-4xl font-quicksand font-[500] text-[1.2rem]'>
                                        {slides1[0].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[98%] text-left  font-poppins font-[300] text-[1rem]'>
                                        {slides1[0].body}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-row w-[95%] sm:-[100%] mx-auto  mt-4'>
                        <section className='flex sm:w-[100%] flex-col h-[55vh] w-[95%] mx-auto  mt-4 '>
                            <div className='w-[100%] sm:w-[100%] h-[35vh]'>
                                <img src={slides2[1].url} alt="photo1" className='mt-2   w-[100%] flex  h-[30vh] sm:h-[50vh] sm:w-[100%] mr-2 opacity-[0.7] rounded' />

                            </div>
                            <div className=' w-[100%] flex flex-col justify-center mt-8'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[100%] sm:w-[65%] text-left  sm:text-4xl font-quicksand font-[500] text-[1.2rem]'>
                                        {slides2[0].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[98%] text-left  font-poppins font-[300] text-[1rem]'>
                                        {slides2[0].body}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-row w-[95%] sm:-[100%] mx-auto  mt-4'>
                        <section className='flex sm:w-[100%] flex-col h-[55vh] w-[95%] mx-auto  mt-4 '>
                            <div className='w-[100%] sm:w-[100%] h-[35vh]'>
                                <img src={slides3[0].url} alt="photo1" className='mt-2   w-[100%] flex  h-[30vh] sm:h-[50vh] sm:w-[100%] mr-2 opacity-[0.7] rounded' />

                            </div>
                            <div className=' w-[100%] flex flex-col justify-center'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[100%] sm:w-[65%] text-left  sm:text-4xl font-quicksand font-[500] text-[1.2rem]'>
                                        {slides3[0].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[98%] text-left  font-poppins font-[300] text-[1rem]'>
                                        {slides1[0].body}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-row w-[95%] sm:-[100%] mx-auto  mt-4'>
                        <section className='flex sm:w-[100%] flex-col h-[55vh] w-[95%] mx-auto  mt-4 '>
                            <div className='w-[100%] sm:w-[100%] h-[35vh]'>
                                <img src={slides4[0].url} alt="photo1" className='mt-2   w-[100%] flex  h-[30vh] sm:h-[50vh] sm:w-[100%] mr-2 opacity-[0.7] rounded' />

                            </div>
                            <div className=' w-[100%] flex flex-col justify-center mt-8'>
                                <div className='flex w-[100%]'>
                                    <p className='w-[100%] sm:w-[65%] text-left  sm:text-4xl font-quicksand font-[500] text-[1.2rem]'>
                                        {slides4[0].header}
                                    </p>
                                </div>
                                <div className='w-full mt-4 sm:mt-8'>
                                    <p className=' w-[98%] text-left  font-poppins font-[300] text-[1rem]'>
                                        {slides4[0].body}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>

                </Swiper>
            </section>
        </main>
    )
}

export default MainPart1
