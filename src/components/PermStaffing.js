import React from 'react'
import T from '../image/whyChooseUs/Temporary.jpg'
import P from '../image/whyChooseUs/Permanent.jpg'
import L from '../image/whyChooseUs/3PL.jpg'
import NAPS from '../image/whyChooseUs/NAPS.jpg'
import G from '../image/whyChooseUs/GIG.jpg'

const permStaffing = () => {
  return (
    <main className='sm:w-[100%] sm:mx-auto'>
        <section className='sm:mt-32 sm:flex sm:w-[90%] sm:mx-auto'>
          
              <div className="sm:justify-center mt-12 sm:mt-0 sm:mb-8 sm:w-[65%] sm:flex sm:flex-col">
                    <div className=' ml-2  flex flex-col sm:justify-between sm:h-[30vh] '>
                        <h1 className='font-quicksand font-[400] text-4xl text-left sm:text-5xl w-[75%] sm:w-[95%] sm:leading-[1.4] sm:mb-8'>
                            Permanent Staffing
                        </h1>
                        <p className='text-left sm:w-[98%] mt-4 sm:mt-0 font-poppins font-[300] sm:text-[1.2rem] leading-[35px]'>
                        
                        Permanent staff onboarding and integration into a single company is a vital commitment. These commitments are made to trusted and qualified individuals thanks to our permanent employment solutions. 

                        </p>
                    </div>
              </div>
              <div className='sm:relative sm:right-[-15%] sm:w-[90%]'>
                  <img className='w-[100%] h-auto' src={P} alt="" />
              </div>
            
        </section>
        <section className='w-full my-12 sm:mt-20'>
          <div className='w-full mb-4 sm:mb-16'>
            <h2 className='text-3xl sm:text-5xl font-quicksand font-[400]'>About service</h2>
          </div> 
          <div className='sm:flex sm:w-full sm:mt-4 mb-12 sm:mb-0'>
            <div className='sm:w-[60%] ml-2 sm:ml-20'>
              <div className='w-full flex justify-start'>
                <h3 className='sm:text-4xl text-2xl font-poppins font-[300]'>WHY MERAQUI? </h3>
              </div>
              <p className='text-left font-poppins font-[300] mt-2 sm:mt-8 leading-[35px] sm:text-[1.2rem] sm:mr-4'>You are losing time, money, and energy if you are knee-deep in resumes from people that do not fulfil the needs of your project or business. Leave employment issues to the specialists so you can devote your time and energy to do what truly counts.

At Meraqui, we are devoted to establishing the right job connections for our customers. With us as your permanent staffing providers, you can be confident that you will receive the best personnel that are eager to work hard and remain loyal to you.
</p>
            </div>
            <div>
              <img src={require('../image/Perm/Why.jpg')} alt="" />
            </div>
          </div>
          <div className='sm:flex sm:w-full sm:mt-12 mb-12 sm:mb-0'>
            <div className='sm:w-[60%] ml-2 sm:ml-20'>
              <div className='w-full flex justify-start'>
                <h3 className='sm:text-4xl text-2xl font-poppins font-[300]'>OUR PROCESS</h3>
              </div>
              <p className='text-left font-poppins font-[300] mt-2 sm:mt-8 leading-[35px] sm:text-[1.2rem] sm:mr-4'>Before we begin looking for individuals, we thoroughly examine your needs, do extensive market research, and generate buzz about your organization to attract the greatest number of people.
              No other permanent employment agency can compete with the caliber of candidates we find using our tried-and-true techniques. We will tailor our talent search to your specific needs to identify the individuals or teams most capable of tackling the unique problems that they will experience at the organization.

Our permanent staffing experience and network of recruitment professionals employ client-specific and consultative tactics to find the best fit for your company's culture and business goals. 
</p>
            </div>
             <div>
              <img src={require('../image/Perm/Our.jpg')} alt="" />
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

export default permStaffing