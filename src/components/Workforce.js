import React from 'react'
// import T from '../image/whyChooseUs/Temporary.jpg'
// import P from '../image/whyChooseUs/Permanent.jpg'
// import L from '../image/whyChooseUs/3PL.jpg'
// import NAPS from '../image/whyChooseUs/NAPS.jpg'
import G from '../image/whyChooseUs/GIG.jpg'

const WorkF = () => {
  return (
    <main className='sm:w-[100%] sm:mx-auto'>
      <div className='w-full sm:mb-8 sm:mt-20 py-10'>
        <h1 className='text-3xl text-left sm:text-5xl font-quicksand font-[400] sm:ml-2 sm:text-center'>Workforce Management(GIG)
        </h1>
      </div>
      <section className='sm:mt- sm:flex sm:w-[90%] sm:mx-auto'>

        <div className="sm:justify-center mt-12 sm:mt-0 sm:mb-8 sm:w-[65%] sm:flex sm:flex-col">
          {/* <h1 className='font-quicksand font-[400] text-4xl text-left sm:text-5xl w-[75%] sm:w-[95%] sm:leading-[1.4] sm:mb-8'>
              Temporary
              Staffing
            </h1> */}
          <div className=' ml-2  flex flex-col sm:justify-between sm:h-[30vh] '>

            <p className='text-left sm:w-[90%] mt-4 sm:mt-0 font-poppins sm:text-[1.2rem] font-[300] leading-[35px] work_paragraph'>

              Project management involves managing and supervising the transfer of goods from manufacturing to retail to customers or business partners. Meraqui meticulously satisfies client requirements, schedules and manages a company's or organization's supply chain management.

            </p>
          </div>
        </div>
        <div className='sm:relative sm:right-[-2%] sm:w-[60%]'>
          <img className='w-[100%] h-auto' src={G} alt="" />
        </div>

      </section>


      <section className='w-full my-12 sm:mt-20'>
        <div className='w-full mb-4 sm:mb-16'>
          <h2 className='text-3xl sm:text-5xl font-quicksand font-[400] workforce_about'>About service</h2>
        </div>
        <div className='sm:flex sm:w-full sm:mt-4 mb-12 sm:mb-0'>
          <div className='sm:w-[60%] ml-2 sm:ml-20'>
            <div className='w-full flex justify-start'>
              <h3 className='sm:text-4xl text-2xl font-poppins font-[300] workforce_about_head'>Our Process</h3>
            </div>
            <p className='text-left sm:w-[83%] font-poppins font-[300] mt-2 sm:mt-8 leading-[35px] sm:text-[1.2rem] sm:mr-4 workforce_about_para'>Meraqui does this through human resource management, which includes recruiting, staffing, training, remuneration, and benefits. We integrate into your existing business and run alongside you, handling your day-to-day workforce needs so you can focus on what you do best... managing your business.
              We also discuss performance management, employee engagement, absence reduction, and other topics.
            </p>
          </div>
          <div className='sm:relative sm:right-[2%] sm:w-[51%]'>
            <img src={require('../image/Work/OurP.jpg')} alt="" />
          </div>
        </div>
        <div className='sm:flex sm:w-full sm:mt-12 mb-12 sm:mb-0'>
          <div className='sm:w-[60%] ml-2 sm:ml-20'>
            <div className='w-full flex justify-start'>
              <h3 className='sm:text-4xl text-2xl font-poppins font-[300]'>Why Meraqui?</h3>
            </div>
            <p className='text-left font-poppins sm:w-[83%] font-[300] mt-2 sm:mt-8 leading-[35px] sm:text-[1.2rem] sm:mr-4'>Our effective Workforce Management reduces expenses while increasing production. It enhances flexibility and aids in the development of a robust, scalable firm. Improving flexibility and planning will lead to more production and, eventually, higher revenues.
              The primary purpose of workforce management is to keep labour expenditures under control by estimating how many workers you will require on a daily, monthly, or seasonal basis.
              Meraqui also excels in providing on-demand gig workforce for your business with no minimum time commitment.
            </p>
          </div>
          <div  className='sm:relative sm:right-[2%] sm:w-[51%]'>
            <img src={require('../image/Work/Why.jpg')} alt="" />
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

export default WorkF