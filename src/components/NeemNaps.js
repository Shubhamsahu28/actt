import React from 'react'
// import T from '../image/whyChooseUs/Temporary.jpg'

// import P from '../image/whyChooseUs/Permanent.jpg'
// import L from '../image/whyChooseUs/3PL.jpg'
import NAPS from '../image/whyChooseUs/NAPS.jpg'
// import G from '../image/whyChooseUs/GIG.jpg'

const neemNaps = () => {
  return (
    <main className='sm:w-[100%] sm:mx-auto'>
      <div className='w-full sm:mb-8 sm:mt-24 py-10'>
        <h1 className='text-3xl text-left sm:text-5xl font-quicksand font-[400] sm:ml-2 sm:text-center nats'>NAPS AND NATS</h1>
      </div>
      <section className='sm:mt- sm:flex sm:w-[90%] sm:mx-auto'>

        <div className="  sm:mt-0 sm:mb-8 sm:w-[55%] sm:flex sm:flex-col">
          {/* <h1 className='font-quicksand font-[400] text-4xl text-left sm:text-5xl w-[75%] sm:w-[95%] sm:leading-[1.4] sm:mb-8'>
              Temporary
              Staffing
            </h1> */}
          <div className=' ml-2  flex flex-col sm:justify-between sm:h-[30vh] '>

            <p className='text-left sm:w-[90%]   font-poppins sm:text-[1.2rem] font-[300] leading-[35px] nats_para'>

              NAPS(NAPS is a scheme of the Government of India to promote apprenticeship. Apprenticeship Training consists of Basic Training and On-The-Job Training at the workplace in the industry. Meraqui helps to promote apprenticeship training and increase the engagement of apprentices so that they could later join the mainstream workforce.)
              <br></br>
              <br></br>
              NATS(National Apprenticeship Training Scheme offers an opportunity for students to get trained in some of the best organizations in the Central, State and Private Sector. The National Apprenticeship Training Scheme in India is a one year programme equipping technically qualified youth with practical knowledge and skills required in their field of work)
            </p>
          </div>
        </div>
        <div className='sm:relative sm:right-[-2%] sm:w-[60%]'>
          <img className='w-[100%] h-auto' src={NAPS} alt="" />
        </div>

      </section>

     
      <section className='w-full my-12 sm:mt-20'>
        <div className='w-full mb-4 sm:mb-16'>
          <h2 className='text-3xl sm:text-5xl font-quicksand font-[400] naps_about'>About service</h2>
        </div>
        <div className='sm:flex sm:w-full sm:mt-12 mb-12 sm:mb-0'>
          <div className='sm:w-[60%] ml-2 sm:ml-20'>
            <div className='w-full flex justify-start'>
              <h3 className='sm:text-4xl text-2xl font-poppins font-[300] naps_head'>NAPS</h3>
            </div>
            <p className='text-left sm:w-[84%]  font-poppins font-[300] mt-2 sm:mt-8 leading-[35px] sm:text-[1.2rem] sm:mr-4 naps_para'>NAPS is a scheme launched by the Government of India to promote apprenticeship. Apprenticeship Training consists of Basic Training and On-The-Job Training at the workplace in the industry.

              It has been observed that organizations face issues like charting annual apprenticeship plans, mobilization of eligible candidates under designated and optional trades, determining the applicability of Basic Training, and registering or aligning Basic Training Providers.
            </p>
          </div>
          <div className='sm:relative sm:right-[2%] sm:w-[60%]'>
            <img src={require('../image/Naps/Naps.jpg')} alt="" />
          </div>
        </div>
        <div className='sm:flex sm:w-full sm:mt-12 mb-12 sm:mb-0'>
          <div className='sm:w-[60%] ml-2 sm:ml-20'>
            <div className='w-full flex justify-start'>
              <h3 className='sm:text-4xl text-2xl font-poppins  font-[300] agree'>MERAQUI AS THIRD PARTY <br></br>AGGREGATOR </h3>
            </div>
            <p className='text-left sm:w-[84%] font-poppins font-[300] mt-2 sm:mt-8 leading-[35px] sm:text-[1.2rem] sm:mr-4 agree_para'>•	To Facilitate registration of Establishment, Basic Training Centre, or mapping of Basic Training Provider
              <br></br>
              •	Facilitate employers in setting up the curriculum, assessment, and certification for apprentices in optional trades
              <br></br>
              •	Comply with the provisions of the Apprentices Act 1961 and applicable rules made there under
              <br></br>

              {/* •	MERAQUI will also comply with the formalities required for trade apprentices to appear in All India Trade Tests (NCVT) for Apprentices as and when required
•	MERAQUI would be processing all the compliances, and grievances according to */}
              •	Apprentices Act 1961
              <br></br>
              •	Processing and Payment of stipends to apprentices
              <br></br>

            </p>
          </div>
          <div className='sm:relative sm:right-[2%] sm:w-[60%]'>
            <img src={require('../image/Naps/Meraqui.jpg')} alt="" />
          </div>
        </div>
        <div className='sm:flex sm:w-full sm:mt-12 mb-12 sm:mb-0'>
          <div className='sm:w-[60%] ml-2 sm:ml-20'>
            <div className='w-full flex justify-start'>
              <h3 className='sm:text-4xl text-2xl font-poppins font-[300] benefit'>BENEFITS TO YOUR ORGANIZATION</h3>
            </div>
            <p className='text-left sm:w-[84%] font-poppins font-[300] mt-2 sm:mt-8 leading-[35px] sm:text-[1.2rem] sm:mr-4 benefit_para'>•	Address the skill gap for the establishment
              <br></br>
              •	Freedom to design and run apprenticeships in
              <br></br>
              •	Customized courses
              <br></br>
              •	Build talent pipelines
              <br></br>
              •	Reduce attrition
              <br></br>
              •	Reduce expenditure on the recruitment process
              <br></br>
              •	No statutory compliances and exemption from Labour law
            </p>
          </div>
          <div className='sm:relative sm:right-[2%] sm:w-[60%]'>
            <img src={require('../image/Naps/Benefits.jpg')} alt="" />
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
          </div> */}
        {/* <div className='sm:flex sm:w-full sm:mt-12 mb-0 sm:mb-0'>
            <div className='sm:w-[60%] ml-2 sm:ml-20'>
              <div className='w-full flex justify-start'>
                <h3 className='sm:text-4xl text-2xl font-poppins font-[300]'>HOW WILL MERAQUI HELP?</h3>
              </div>
              <p className='text-left font-poppins font-[300] mt-2 sm:mt-8 leading-[35px] sm:text-[1.2rem] sm:mr-4'>Meraqui offers one of the most advanced and professional hiring processes for temporary and regular employees, especially during critical moments, without interfering with your present initiatives. Skilled and experienced personnel are employed on a temporary/contractual basis to work at a client firm for a set period or a specific project. This will alleviate the strain of staff training and onboarding.</p>
            </div>
            <div>
              <img src={require('../image/laptop.png')} alt="" />
            </div>
          </div>
          
          */}

      </section>
    </main>
  )
}

export default neemNaps