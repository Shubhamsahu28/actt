import React from 'react'
// import T from '../image/whyChooseUs/Temporary.jpg'

import P from '../image/whyChooseUs/Permanent.jpg'
// import L from '../image/whyChooseUs/3PL.jpg'
// import NAPS from '../image/whyChooseUs/NAPS.jpg'
// import G from '../image/whyChooseUs/GIG.jpg'

const Guio = () => {
  return (
    <main className='sm:w-[100%] sm:mx-auto'>
        <div className='w-full sm:mb-8 sm:mt-20 py-10'>
        <h1 className='text-3xl text-left sm:text-5xl font-quicksand font-[400] sm:ml-2 sm:text-center'>Permanent
          Staffing</h1>
      </div>
      <section className='sm:mt- sm:flex sm:w-[90%] sm:mx-auto'>

        <div className="sm:justify-center mt-12 sm:mt-0 sm:mb-8 sm:w-[65%] sm:flex sm:flex-col">
          {/* <h1 className='font-quicksand font-[400] text-4xl text-left sm:text-5xl w-[75%] sm:w-[95%] sm:leading-[1.4] sm:mb-8'>
              Temporary
              Staffing
            </h1> */}
          <div className=' ml-2  flex flex-col sm:justify-between sm:h-[30vh] '>

            <p className='text-left sm:w-[90%] mt-4 sm:mt-0 font-poppins sm:text-[1.2rem] font-[300] leading-[35px] permanent_para'>

            Permanent staff onboarding and integration into a  single company is a vital commitment. These commitments are made to trusted and qualified individuals solutions.

            </p>
          </div>
        </div>
        <div className='sm:relative sm:right-[-2%] sm:w-[60%]'>
          <img className='w-[100%] h-auto' src={P} alt="" />
        </div>

      </section>
        {/* <section className='sm:mt-32 sm:flex sm:w-[90%] sm:mx-auto'>
          
              <div className="sm:justify-center mt-12 sm:mt-0 sm:mb-8 sm:w-[65%] sm:flex sm:flex-col">
                    <div className=' ml-2  flex flex-col sm:justify-between sm:h-[30vh] '>
                        <h1 className='font-quicksand font-[400] text-4xl text-left sm:text-5xl w-[75%] sm:w-[95%] sm:leading-[1.4] sm:mb-8'>
                          3 PL Warehousing
                        </h1>
                        <p className='text-left sm:w-[98%] mt-4 sm:mt-0 font-poppins font-[300] sm:text-[1.2rem] leading-[35px]'>
                        
                        We will pick, pack, and ship your items. Our 3PL services will connect your goods from your factories to your customers. 
                        As the third-party logistics market expands, several 3PL providers are emerging. A company seeking supply chain outsourcing should request a combination of old-world expertise and experience, as well as new-world energy and innovation, at this time.

                        </p>
                    </div>
              </div>
              <div className='sm:relative sm:right-[-15%] sm:w-[90%]'>
                  <img className='w-[100%] h-auto' src={L} alt="" />
              </div>
            
        </section> */}
        <section className='w-full my-12 sm:mt-20'>
          <div className='w-full mb-4 sm:mb-16'>
            <h2 className='text-3xl sm:text-5xl font-quicksand font-[400] abo_services'>About service</h2>
          </div> 
          <div className='sm:flex sm:w-full sm:mt-4 mb-12 sm:mb-0'>
            <div className='sm:w-[60%] ml-2 sm:ml-20'>
              <div className='w-full flex justify-start'>
                <h3 className='sm:text-4xl text-2xl font-poppins font-[300] abo_services_head'>OUR 3PL STRENGTHS INCLUDE </h3>
              </div>
              <p className='text-left font-poppins font-[300] mt-2 sm:mt-8 leading-[35px] sm:text-[1.2rem] sm:mr-4 abo_services_para'>•	Inventory Management<br></br>
•	Kitting
<br></br>
•	FIFO and FEFO Management
<br></br>
•	Real-Time Visibility Over Web
<br></br>
•	Location Management
<br></br>
•	Real-Time Reports/Dashboards
<br></br>
•	Transportation Management
<br></br>
</p>
            </div>
            <div className='sm:relative sm:right-[2%] sm:w-[52%]'>
              <img src={require('../image/Ware/Our3.jpg')} alt="" />
            </div>
          </div>
          <div className='sm:flex sm:w-full sm:mt-12 mb-12 sm:mb-0'>
            <div className='sm:w-[60%] ml-2 sm:ml-20'>
              <div className='w-full flex justify-start'>
                <h3 className='sm:text-4xl text-2xl font-poppins font-[300] verticals'>OUR WAREHOUSING VERTICALS</h3>
              </div>
              <p className='text-left font-poppins font-[300] mt-2 sm:mt-8 leading-[35px] sm:text-[1.2rem] sm:mr-4 verticals_para'>•	Central Processing Centre (CPC)<br></br>
•	Distribution Centre
<br></br>
•	Fulfilment Centre
<br></br>
•	Delivery Hubs
<br></br>
•	Cold Storage
<br></br>
•	Dark Storage
<br></br>
</p>
            </div>
            <div className='sm:relative sm:right-[2%] sm:w-[52%]'>
              <img src={require('../image/Ware/Our.jpg')} alt="" />
            </div>
          </div>
          {/* <div className='sm:flex sm:w-full sm:mt-12 mb-12 sm:mb-0'>
            <div className='sm:w-[60%] ml-2 sm:ml-20'>
              <div className='w-full flex justify-start'>
                <h3 className='sm:text-4xl text-2xl font-poppins font-[300]'>Test Drive</h3>
              </div>
              <p className='text-left font-poppins font-[300] mt-2 sm:mt-8 leading-[35px] sm:text-[1.2rem] sm:mr-4'>Exercising an employee's abilities with certain demo services allows you to have a better understanding of the employee's productivity before hiring them permanently. Temporary staffing allows the company to monitor the person for a set amount of time before making a decision.</p>
            </div>
            <div>
              <img src={require('../image/laptop.png')} alt="" />
            </div>
          </div>
          <div className='sm:flex sm:w-full sm:mt-12 mb-0 sm:mb-0'>
            <div className='sm:w-[60%] ml-2 sm:ml-20'>
              <div className='w-full flex justify-start'>
                <h3 className='sm:text-4xl text-2xl font-poppins font-[300]'>HOW WILL MERAQUI HELP?</h3>
              </div>
              <p className='text-left font-poppins font-[300] mt-2 sm:mt-8 leading-[35px] sm:text-[1.2rem] sm:mr-4'>Meraqui offers one of the most advanced and professional hiring processes for temporary and regular employees, especially during critical moments, without interfering with your present initiatives. Skilled and experienced personnel are employed on a temporary/contractual basis to work at a client firm for a set period or a specific project. This will alleviate the strain of staff training and onboarding.</p>
            </div>
            <div>
              <img src={require('../image/laptop.png')} alt="" />
            </div>
          </div> */}
          
         
        
      </section>
      </main>
  )
}

export default Guio