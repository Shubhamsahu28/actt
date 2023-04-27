import React from 'react'
import T from '../image/whyChooseUs/Temporary.jpg'

const TempStaffing = () => {
  return (
    <main className='sm:w-[100%] sm:mx-50'>
      <div className='w-full sm:mb-8 sm:mt-20 py-10'>
        <h1 className='text-3xl text-left sm:text-5xl font-quicksand font-[400] sm:ml-2 sm:text-center'>Temporary
          Staffing</h1>
      </div>
      <section className='sm:mt- sm:flex sm:w-[90%] sm:mx-auto'>

        <div className="sm:justify-center mt-12 sm:mt-0 sm:mb-8 sm:w-[65%] sm:flex sm:flex-col">
          <div className=' ml-2  flex flex-col sm:justify-between sm:h-[30vh] '>
            <p className='text-left sm:w-[90%] mt-4 sm:mt-0 font-poppins sm:text-[1.2rem] font-[300] leading-[35px] temp_para'>
              A temporary workforce may result in cost savings and increased production for your company. Meraqui provides dependable temporary staffing solutions that allow you to increase your staff strength without taking on full-time personnel, support overburdened employees at important moments, and keep projects going.
            </p>
          </div>
        </div>
        <div className='sm:relative sm:left-[-2%] sm:w-[60%]'>
          <img className='w-[100%] h-auto' src={T} alt="" />
        </div>

      </section>
      <section className='w-full my-12 sm:mt-20'>
        <div className='w-full mb-4 sm:mb-16'>
          <h2 className='text-3xl sm:text-5xl font-quicksand font-[400] about_service'>About service</h2>
        </div>
        <div className='sm:flex sm:w-full sm:mt-4 mb-12 sm:mb-0'>
          <div className='sm:w-[60%] ml-2 sm:ml-20'>
            <div className='w-full flex justify-start'>
              <h3 className='sm:text-4xl text-2xl font-poppins font-[300]'>Hire quickly </h3>
            </div>
            <p className='text-left sm:w-[90%] font-poppins font-[300] mt-5 sm:mt-15 leading-[35px] sm:text-[1.2rem] sm:mr-4 about_service_para'>
              The Temporary Staffing procedure has eliminated the time-consuming and stressful formalities of interviewing and CV shortlisting. The emerging trend in such temporary services is direct hiring by signing a contract with a staffing agency.
            </p>
          </div>
          <div className='sm:relative sm:right-[3%] sm:w-[50%]'>
            <img src={require('../image/Temp/Hire.jpg')} alt="" />
          </div>
        </div>
        <div className='w-full mb-4 sm:mb-16 sm:mt-20'>
          <h2 className='text-3xl sm:text-5xl font-quicksand font-[400] work_flex'>Work flexibility</h2>
        </div>
        <div className='sm:flex sm:w-full sm:mt-4 mb-12 sm:mb-0'>
          <div className='sm:w-[60%] ml-2 sm:ml-20'>

            <p className='text-left sm:w-[90%] font-poppins font-[300] mt-5 sm:mt-20 leading-[35px] sm:text-[1.2rem] sm:mr-4'>
              Candidates are free to work around their schedules. In such temporary jobs, there is no room for a demanding timetable.
            </p>
          </div>
          <div className='sm:relative sm:right-[3%] sm:w-[50%]'>
            <img src={require('../image/Temp/Work.jpg')} alt="" />
          </div>
        </div>
        <div className='w-full mb-4 sm:mb-16 sm:mt-20'>
          <h2 className='text-3xl sm:text-5xl font-quicksand font-[400] text_drive'>Test Drive</h2>
        </div>
        <div className='sm:flex sm:w-full sm:mt-12 mb-12 sm:mb-0'>

          <div className='sm:w-[60%] ml-2 sm:ml-20'>

            <p className='text-left sm:w-[85%] font-poppins font-[300] mt-2 sm:mt-20 leading-[35px] sm:text-[1.2rem] sm:mr-4'>Exercising an employee's abilities with certain demo services allows you to have a better understanding of the employee's productivity before hiring them permanently. Temporary staffing allows the company to monitor the person for a set amount of time before making a decision.</p>
          </div>
          <div className='sm:relative sm:right-[3%] sm:w-[50%]'>
            <img src={require('../image/Temp/Test.jpg')} alt="" />
          </div>
        </div>
        <div className='w-full mb-4 sm:mb-16 sm:mt-20'>
          <h2 className='text-3xl sm:text-5xl font-quicksand font-[400] helpp'>HOW WILL MERAQUI HELP?</h2>
        </div>
        <div className='sm:flex sm:w-full sm:mt-12 mb-0 sm:mb-0'>
          <div className='sm:w-[60%] ml-2 sm:ml-20'>

            <p className='text-left sm:w-[85%] font-poppins font-[300] mt-2 sm:mt-8 leading-[35px] sm:text-[1.2rem] sm:mr-4'>Meraqui offers one of the most advanced and professional hiring processes for temporary and regular employees, especially during critical moments, without interfering with your present initiatives. Skilled and experienced personnel are employed on a temporary/contractual basis to work at a client firm for a set period or a specific project. This will alleviate the strain of staff training and onboarding.</p>
          </div>
          <div className='sm:relative sm:right-[3%] sm:w-[50%]'>
            <img src={require('../image/Temp/How.jpg')} alt="" />
          </div>
        </div>



      </section>
    </main>
  )
}

export default TempStaffing