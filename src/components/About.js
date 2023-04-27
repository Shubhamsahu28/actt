import React from 'react';
// import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
// import {MdOutlineMailOutline} from 'react-icons/md';
// import {FiPhoneCall} from 'react-icons/fi';

const About = () => {
  const margin = {
    marginTop: "38px",
  }
  const margin1 = {

  }
  return (
    <main className='w-full sm:mt-32 ' id='about'>
      <div className='w-full sm:mb-8 ' style={margin1}>
        <h1 className='text-3xl text-left  sm:text-5xl font-quicksand font-[400] sm:ml-2 sm:text-center text-center about'>About Meraqui</h1>
      </div>
      <section className='w-[95%] sm:flex sm:flex-row  h-fill py-10 mx-auto h-fill sm:mb-16 about_section'>
        <div className='w-full sm:w-[55%] sm:h-[55vh] sm:flex sm:flex-col sm:ml-12 sm:justify-center' >

          <div className='w-full about_parag'>
            <p className='text-left sm:w-[90%] font-poppins font-[300] sm:text-[1.2rem] leading-[35px]'>
              We are a SaaS-enabled workforce management platform specializing in employee lifecycle management, job and requisition management, and training and interview assessments.
              We link our expertise with your business demands and proactively begin HR procedures to meet your needs, harnessing the power of Artificial Intelligence.
              We have a robust pan-India presence in 23 states + 3 Union Territories and 120+ cities and are aiming to grow significantly in the times to come.
            </p>

          </div>
        </div>

        <div className='mx-auto w-[95%] sm:w-[55%] sm:relative sm:right-[%] image2'>
          <img className=' sm:w-[100%]' src="src/image/Aboutus" alt="" />
        </div>
      </section>
      <div className='w-full sm:mb-8 vision'>
        <h1 className='text-3xl text-left sm:text-5xl font-quicksand font-[400] sm:ml-2 sm:text-center'>Vision statement </h1>
      </div>
      <section className='w-[95%] sm:flex sm:flex-row  h-fill py-8 mx-auto h-fill sm:mb-16'>

        <div className='w-full sm:w-[55%] sm:h-[55vh] sm:flex sm:flex-col sm:ml-12 sm:justify-center' >

          <div className='w-full mt-3'>
            <p className='text-left sm:w-[90%] font-poppins font-[300] sm:text-[1.2rem] leading-[35px] vision_section'>
            To be amongst the top five leading workforce hire and manage technology platforms in five years that empower client organisations with flexible and scalable workforce, while providing equal opportunities to workers for quality work and upscaling.
            </p>

          </div>
        </div>

        {<div className='mx-auto w-[95%] sm:w-[55%] sm:relative sm:right-[] image3'>
          <img className=' sm:w-[100%] image3' src="image/vission.jpg" alt="" />
        </div>}
      </section>
      <div className='w-full sm:mb-8 '>
        <h1 className='text-3xl text-left sm:text-5xl font-quicksand font-[400] sm:ml-10 align-middle sm:text-center  mission'>Mission Statement</h1>
      </div>
      <section className='w-[95%] sm:flex sm:flex-row  h-fill py-8 mx-auto h-fill sm:mb-16 para'>

        <div className='w-full sm:w-[55%] sm:h-[55vh] sm:flex sm:flex-col sm:ml-12 sm:justify-center' >

          <div className='w-full mt-3'>
            <p className='text-left sm:w-[90%] font-poppins font-[300] sm:text-[1.2rem] leading-[35px]'>
              1.	To be an innovative and user-friendly hire and manage technology platform that provides our client organisations with effectively managed flexible and scalable workforce while, in turn, creating equal and quality work opportunities for job seekers.
              <br></br>
              2.	We are committed to delivering superior customer service and support for long-term relationship built on trust, integrity, and transparency.
              <br></br>
              3.	To empower workers with skills and knowledge needed to thrive in today’s rapidly evolving work environment.
              <br></br>
              4.	To be agile in improving our technology and services to meet the progressive needs of our clients and the workforce.
              <br></br>


            </p>

          </div>
        </div>

        {<div className='mx-auto w-[95%] sm:w-[55%] sm:relative sm:right-[] image'>
          <img className=' sm:w-[100%] image' src="image/Mission.jpg" alt="" />
        </div>}
      </section>
     

      <div className='w-full sm:mb-8 values '>
        <h1 className='text-3xl text-left sm:text-5xl font-quicksand font-[400] sm:ml-2 sm:text-center value-h'>Values</h1>
      </div>
      <section className='w-[95%] sm:flex sm:flex-row  h-fill py-8 mx-auto h-fill sm:mb-16 sm:mt-20 values_section'>
        <div className='w-full sm:w-[55%] sm:h-[55vh] sm:flex sm:flex-col sm:ml-12 sm:justify-center' style={margin}>

          <div className='w-full mt-5'>
            <p className='text-left sm:w-[90%] font-poppins font-[300] sm:text-[1.2rem] leading-[35px] '>
              1.	Customer focus: We are committed to putting our clients and workers at the centre of everything we do and delivering exceptional value through our technology and services.
              <br></br>
              2.	Transparency: Transparent communication and operations, fostering trust and building strong relationships with our clients and workers.
              <br></br>
              3.	Integrity: We conduct ourselves with the highest standards of ethics and professionalism, upholding our commitments and maintaining the trust of our clients and workers.
              <br></br>
              4.	Continuous learning: We are passionate about learning and continuously improving, both as individuals and as an organization, to stay ahead of the curve in the rapidly evolving field of workforce management.
              <br></br>
              5.	Accountability: We take ownership of our work and are accountable for delivering on our commitments to clients and workers.
              <br></br>


            </p>

          </div>
        </div>

        {<div className='mx-auto w-[95%] sm:w-[55%] sm:relative sm:right-[] image1'>
          <img className=' sm:w-[100%]' src="" alt="" />
        </div>}
      </section>
      <section className='w-full  '>
        <div className='w-full mb-4 sm:mb-16 philosophy'>
          <h2 className='text-3xl sm:text-4xl font-poppins font-[300] text-center'>Our Philosophy</h2>
        </div>

        <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1510146758428-e5e4b17b8b6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)" }} className='bg-cover bg-center w-full sm:h-[45vh]'>
          <div className='  flex flex-col w-full bg-black bg-opacity-[0.7] text-white sm:h-[45vh] sm:justify-center'>
            <div className='w-[95%] sm:w-[89%] mx-auto my-4'>
              {/* <h3 className='text-2xl sm:text-3xl text-left text-cyan-100 '>
              Our Philosophy
              </h3> */}
            </div>
            <div className='w-[95%] sm:w-[89%]  my-4'>
              <p className='text-center sm:w-[85%] font-poppins font-[300] line-spacing-[1.5] sm:ml-40 sm:mr-20 philosophy_para'>
                We believe that "The greatest asset of a company is its people”
                <br></br>
                <br></br>


                Meraqui will assist your employees to stay up-to-date with  our upskilling solutions <br></br><br></br>It also helps them comply with any tasks that technology and trends throw their way. <br></br>
                <br></br>
                Meraqui's mission is to assist and build an organization that people desire to be a part of.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='w-full mb-4 sm:mb-16 sm:mt-16 the_team'>
        <h2 className='text-3xl sm:text-5xl font-poppins font-[300]'>The Team</h2>
      </div>
      <section className='w-full sm:w-[100%] sm:mx-auto sm:mb-20 mb-4'>
        <div className=' staff sm:w-[95%]  sm:grid flex flex-col sm:ml-auto items-center'>
          <div className='flex flex-col   w-[90%] staff1'>
            <a href="	https://www.linkedin.com/in/lalit-singh-11a303a/
" ><img className='sm:w-[100%]' src={require('../image/staff/lalit.png')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8 '>Lalit Singh</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>Founder CEO</p>
            </div>
          </div>

          <div className='flex flex-col  w-[90%] staff1'>
            <a href="https://www.linkedin.com/in/shalin-maheshwari-aa2ba4226/
"><img className='sm:w-[100%]' src={require('../image/staff/shalin.png')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8'>Shalin Maheshwari</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>Co-founder</p>
            </div>
          </div>
          <div className='flex flex-col  w-[90%]'>
            <a href="https://www.linkedin.com/in/shaily-maheshwari-kajaria-3b3b8139/
 "><img className='sm:w-[100%]' src={require('../image/staff/shaily.png')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8'>Shaili Kajaria</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>Advisor</p>
            </div>
          </div>
          <div className='flex flex-col  w-[90%]'>
            <a href="https://www.linkedin.com/in/amit-duggal-57296043/
"><img className='sm:w-[100%]' src={require('../image/staff/amit.png')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8'>Amit Duggal</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>Chief Operating Officer</p>
            </div>
          </div>
          <div className='flex flex-col  w-[90%]'>
            <a href="https://www.linkedin.com/in/aniskazi1787/
"><img className='sm:w-[100%]' src={require('../image/staff/anis.png')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8'>Anis Kazi</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>CBO-Logistics & Ecommerce</p>
            </div>
          </div>
          <div className='flex flex-col  w-[90%]'>
            <a href="https://www.linkedin.com/in/sandeep-shevale/
"><img className='sm:w-[100%]' src={require('../image/staff/sandeep.png')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8'>Sandeep Shevale</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>CBO- Manufacturing</p>
            </div>
          </div>
          <div className='flex flex-col  w-[90%]'>
            <a href="https://www.linkedin.com/in/chiranjeev-jha-53370b35/
 "><img className='sm:w-[100%]' src={require('../image/staff/chiranjeev.png')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8'>Chiranjeev Jha</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>Business Head- Frontline Staffing</p>
            </div>
          </div>
          <div className='flex flex-col  w-[90%]'>
            <a href="https://www.linkedin.com/in/sachin-chavan-00060724/
 "><img className='sm:w-[100%]' src={require('../image/staff/sachin.png')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8'>Sachin Chavan</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>National Head- Recruitment Services</p>
            </div>
          </div>

          <div className='flex flex-col   w-[90%]'>
            <a href="https://www.linkedin.com/in/ajay-jha-b3a95264/
 "><img className='sm:w-[100%]' src={require('../image/staff/ajay.jpg')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8 '>Ajay Jha</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>Regional Business Head - North</p>
            </div>
          </div><div className='flex flex-col   w-[90%]'>
            <a href="https://www.linkedin.com/in/siva-kumar-8b3b62110/
 "> <img className='sm:w-[100%]' src={require('../image/staff/siva.jpg')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8 '>Sivakumar P</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>Regional Business Head - South</p>
            </div>
          </div><div className='flex flex-col   w-[90%]'>
            <a href=" https://www.linkedin.com/in/anil-prajapati-41ba8bb7/
"><img className='sm:w-[100%]' src={require('../image/staff/anil.jpg')} alt="photo1" /></a>
            <div className='flex flex-col items-center'>
              <h4 className=' font-poppins font-[400] sm:text-[26px] mt-8 '>Anil Prajapati</h4>
              <p className=' font-poppins font-[300] sm:text-[20px] opacity-60'>Regional Business Head - West</p>
            </div>
          </div>


        </div>
      </section>

      {/* </section> */}
    </main>
  )
}

export default About
