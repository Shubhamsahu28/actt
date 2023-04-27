import React from 'react'
import { Link } from 'react-router-dom'

const MainPart3 = () => {
  return (
    <main className='w-full h-fill mt-2 sm:mt-20 sm:w-[75%] sm:mx-auto'>
      <section className='flex flex-col justify-center mt-20  sm:mt-0'>
        <div className='w-full'>
          <h2 className='text-3xl sm:text-5xl font-poppins font-[300]'>Featured blogs</h2>
        </div>
        {/* <div className='w-full mt-4 sm:mt-4'>
          <p className=' text-[1.2rem] sm:text-[1.2rem]  font-poppins font-[300]'>
            We are bridging the gap between employees and businesses since 2019!
          </p> */}
        {/* </div> */}
      </section>
      <section className='flex flex-col w-full mt-8 rounded sm:h-[32vh] shadow-md pb-8 IBM_power'>
        <div className='flex flex-col w-full sm:flex-row sm:justify-center sm:text-left sm:h-[32vh]'>
          <div className='w-full flex justify-center sm:w-[37%] sm:h-[25vh]  sm:inline sm:mr-8 sm:ml-4'>
            <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)" }} className=' bg-cover bg-center w-[65%] h-[25vh] bg-black sm:h-[30vh] sm:w-[100%]  sm:mt-2 '></div>
          </div>
          <div className='w-full flex flex-col justify-center sm:w-[80%] sm:h-[30vh]  mt-4 sm:text-left'>
            <h3 className=' text-[1.1rem] font-bold [300] font-poppins sm:w-[100%] '>IBM Power</h3>
            <div className='flex justify-center w-full mt-2'>
              <p className=' sm:h-[15vh] sm:w-[100%] sm:mr-8 sm:text-[1rem] sm:leading-[1.9]  font-poppins font-[500] IBM_para'>
                A recent blinded internal survey of IBM Power client CIOs, CTOs, IT directors, IT admins and developers tells us that their top business strategies revolve around improving business processes in real-time—using technology in more innovative ways
              </p>
            </div>
            <div className='w-full sm:text-right sm:w-[94%] sm:mt-8'>
              <a className='text-[0.8rem] border-b-[1px] border-cyan-400 sm:text-[1rem] font-poppins font-[500]' href="#main">Read more</a>
            </div>
          </div>
        </div>

      </section>
      <section className='flex flex-col w-full mt-6 rounded sm:h-[32vh] shadow-md pb-8 font-poppins font-[300] techno'>
        <div className='flex flex-col w-full sm:flex-row sm:justify-center sm:text-left sm:h-[32vh]'>
          <div className='w-full flex justify-center sm:w-[37%] sm:h-[25vh]  sm:inline sm:mr-8 sm:ml-4'>
            <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)" }} className=' bg-cover bg-center w-[65%] h-[25vh] bg-black sm:h-[30vh] sm:w-[100%]  sm:mt-2 '></div>
          </div>
          <div className='w-full flex flex-col justify-center sm:w-[80%] sm:h-[30vh]  mt-4 sm:text-left'>
            <h2 className=' text-[1.1rem] font-bold [300] sm:width-[100%]'>6G Technology</h2>
            <div className='flex justify-center w-full mt-2'>
              <p className=' sm:h-[15vh] sm:w-[100%]  sm:text-[1rem] sm-leading-[1.9] font-poppins font-[500] techno_para '>
                Designing a new generation mobile system is a very complicated engineering task involving thousands of researchers and developers. Their creativity comes up with novel concepts and they work on designing
              </p>
            </div>
            <div className='w-full sm:text-right sm:w-[94%] sm:mt-8'>
              <a className='text-[0.8rem] border-b-[1px] border-cyan-400 sm:text-[1rem] font-poppins font-[500]' href="#main">Read more</a>
            </div>
          </div>
        </div>

      </section>
      
       <section className='h-[4vh] w-full mb-10 flex flex-col justify-evenly sm:my-9'>
        {/* <a href="/viewall" width="102px">View All</a> */}
        {/* <div className='w-full sm:flex sm:flex-row'>
          <div className='w-full sm:w-[75%]'>
            <div className='w-full flex justify-center'>
              <h1 className=' text-2xl w-[90%] sm:text-left sm:text-[2.4rem] sm:leading-[1.3] font-poppins font-[300]'>
                Get to know about our
                Organization, Keep upto
                date with us through our
                newsletter
              </h1>
            </div>
          </div>
          <div className='w-full mt-8 sm:w-[65%]'>
            <div className='w-full flex justify-center sm:w-[90%]'>
              <p className=' sm:text-left  sm:w-[100%] sm:text-[1.2rem] font-poppins font-[300]'>
                Subscribe to our Newsletter to recieve updates about our organisation
              </p>
            </div>
            <div className='w-full mt-7 sm:flex sm:justify-start'>
              <input
                type="email"
                name=""
                placeholder='eg. xyz123@gmail.com'
                id=""
                className=' border-b-[1px] outline-none border-black  sm:w-[95%] sm:text-[1.2rem] font-poppins font-[500]'
              />
            </div>
          </div>
        </div> */}
      </section> 
    </main>
  )
}

export default MainPart3