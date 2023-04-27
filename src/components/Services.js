import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import T from '../image/whyChooseUs/Temporary.jpg'
import P from '../image/whyChooseUs/Permanent.jpg'
import L from '../image/whyChooseUs/3PL.jpg'
import NAPS from '../image/whyChooseUs/NAPS.jpg'
import G from '../image/whyChooseUs/GIG.jpg'
// import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


const Services = () => {

  
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [err, setErr] = useState("");

  const formSubmitHandler = (e) => {
      // console.log(data);
      e.preventDefault();
      if (!errors.name || !errors.designation || !errors.organization || !errors.org_email || !errors.org_number || !errors.enquiry ) {
          alert("Form Submitted Successfully!");
      }
      else {
          setErr("Please Fix");
      }
  }

  const margin = {
    marginLeft: "",
  }
  // const margin1 = {
  //   marginLeft: "280px",
  // }
  
  return (
    <main className='w-[95%] sm:w-[100%] mx-auto sm:mx-auto h-fill my-12 sm:mt-32' id='#services'>
      
      <section className='w-[95%] mx-auto mt-6 sm:mt-32 font-poppins font-[300]'>
       
        <h2 className=' text-center text-4xl sm:text-5xl font-quicksand font-[400] w-full sm:text-center sm:ml-2 mb-14'>
          Our Services
        </h2>
        <div className='sm:flex sm:flex-row sm:w-[93%] sm:mx-auto'>
          <div className='w-full mt-4 sm:w-[60%] sm:flex sm:flex-col sm:justify-center' style={margin}>
            <div className='w-full text-left sm:w-[100%]'>
              <h3 className='text-2xl sm:text-3xl font-quicksand font-medium'>Temporary staffing</h3>
            </div>
            <div className='w-full mt-2 sm:w-[87%] sm:mt-8'>
              <p className='text-left sm:w-full sm:text-[1.2rem]'>
                A temporary workforce may result in cost savings and increased production for your company. Meraqui provides dependable temporary staffing solutions that allow you to increase your staff strength without taking on full-time personnel, support overburdened employees at important moments, and keep projects going.
              </p>
            </div>
            <div className='w-[100%] text-left mt-4 sm:mt-10'>
              <Link to="/services/tempStaff">
                {/* <button className='read_more'>Know more</button> */}
                <input type="button" value="Know More" className='Button' style={{ marginTop: "10px", width: "120px", height: "35px", background: "#26695c", color: "#FFFFFF", fontSize: "18px", borderRadius: "3px", border: "none", cursor: "pointer" }} />

                </Link>
            </div>
          </div>
          <div className='mt-4 sm:w-[60%] sm:relative sm:right-[]'>
            <img className=' sm:w-[100%] ' src={T} alt="" />
          </div>
        </div>
      </section>
      <section className='w-[95%] mx-auto mt-16 sm:mt-24   font-poppins font-[300]'>

<div className='sm:flex sm:flex-row sm:w-[93%] sm:mx-auto'>
          <div className='w-full mt-4 sm:w-[60%] sm:flex sm:flex-col sm:justify-center' style={margin}>
            <div className='w-full text-left sm:w-[100%]'>
              <h3 className='text-2xl sm:text-3xl font-quicksand font-medium'>Permanent staffing</h3>
            </div>
            <div className='w-full mt-2 sm:w-[87%] sm:mt-8'>
              <p className='text-left sm:w-full sm:text-[1.2rem]'>
              Permanent staff onboarding and integration into a <br></br> single company is a vital commitment. These commitments are made to trusted and qualified <br></br>individuals solutions.
              </p>
            </div>
            <div className='w-[100%] text-left mt-4 sm:mt-10'>
              <Link to="/services/warehousing" className='sm:w-[65%%] text-[0.9rem] font-bold border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] rounded'>
                {/* <button className='sm:w-[25%] text-[0.9rem] font-poppins font-[500] border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] read_more'>Know more</button> */}
                <input type="button" value="Know More" className='Button' style={{ marginTop: "10px", width: "120px", height: "35px", background: "#26695c", color: "#FFFFFF", fontSize: "18px", borderRadius: "3px", border: "none", cursor: "pointer" }} />

                </Link>
            </div>
          </div>
          <div className='mt-4 sm:w-[60%] sm:relative sm:right-[]'>
            <img className=' sm:w-[100%] ' src={P} alt="" />
          </div>
        </div>
      </section>
      <section className='w-[95%] mx-auto mt-16 sm:mt-24 font-poppins font-[300]'>

        <div className='sm:flex sm:flex-row sm:w-[93%] sm:mx-auto'>
          <div className='w-full mt-4 sm:w-[60%] sm:flex sm:flex-col sm:justify-center'>
            <div className='w-full text-left sm:w-[100%]'>
              <h3 className='text-2xl sm:text-3xl font-quicksand font-medium'>NAPS AND NATS</h3>
            </div>
            <div className='w-full mt-2 sm:w-[86%] sm:mt-8'>
              <p className='text-left sm:w-full sm:text-[1.2rem]'>
                NAPS(NAPS is a scheme of the Government of India to promote apprenticeship. Apprenticeship Training consists of Basic Training and On-The-Job Training at the workplace in the industry. Meraqui helps to promote apprenticeship training and increase the engagement of apprentices so that they could later join the mainstream workforce.)
                <br></br>
                <br></br>

                NATS(National Apprenticeship Training Scheme offers an opportunity for students to get trained in some of the best organizations in the Central, State and Private Sector. The National Apprenticeship Training Scheme in India is a one year programme equipping technically qualified youth with practical knowledge and skills required in their field of work)
              </p>
            </div>
            <div className='w-full text-left mt-4 sm:mt-10'>
              <Link to="/services/neemNaps" className='sm:w-[65%%] text-[0.9rem] font-bold border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] rounded'>
                {/* <button className=' font-poppins font-[500] sm:w-[25%] text-[0.9rem]  border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] rounded'>Know more</button> */}
                <input type="button" value="Know More" className='Button' style={{ marginTop: "10px", width: "120px", height: "35px", background: "#26695c", color: "#FFFFFF", fontSize: "18px", borderRadius: "3px", border: "none", cursor: "pointer" }} />

                </Link>
            </div>
          </div>
          <div className='mt-4 sm:w-[60%] sm:relative sm:right-[]'>
            <img className=' sm:w-[100%] ' src={NAPS} alt="" />
          </div>
        </div>
      </section>
      <section className='w-[95%] mx-auto mt-16 sm:mt-24 font-poppins font-[300]'>

        {/* <div className='w-full sm:flex sm:flex-row-reverse sm:justify-center sm:w-[90%] sm:mx-auto'>
          <div className='w-full mt-4 sm:w-[45%] sm:flex-col sm:flex sm:justify-center'>
            <div className='w-full text-left'>
              <h3 className='text-2xl sm:text-3xl sm:text-right font-quicksand font-medium'>3PL Warehousing</h3>
            </div>
            <div className='w-full mt-2'>
              <p className='text-left sm:text-right sm:text-[1.2rem]'>
                <br></br>
                We will pick, pack, and ship your items. Our 3PL<br></br> services will connect your goods from your factories <br></br>to your customers.
                As the third-party logistics market<br></br> expands, several 3PL providers are emerging. A <br></br>company seeking supply chain outsourcing should <br></br> request a combination of old-world expertise and <br></br>experience, as well as new-world energy.
              </p>
            </div>
            <br></br>
            <div className='w-full text-left mt-4 sm:text-right '>
              <Link to="/services/warehousing" className='sm:w-[65%%] text-[0.9rem] font-bold border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] rounded'><button className=' font-poppins font-[500] sm:w-[25%] text-[0.9rem]  border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] rounded'>Know more</button></Link>
            </div>
          </div>
          <div className='mt-4 sm:w-[55%] sm:relative sm:left-[-2%]'>
            <img className=' sm:w-full' src={L} alt="" />
          </div>
        </div> */}

<div className='sm:flex sm:flex-row sm:w-[93%] sm:mx-auto'>
          <div className='w-full mt-4 sm:w-[60%] sm:flex sm:flex-col sm:justify-center'>
            <div className='w-full text-left sm:w-[100%]'>
              <h3 className='text-2xl sm:text-3xl font-quicksand font-medium'>3PL Warehousing</h3>
            </div>
            <div className='w-full mt-2 sm:w-[86%] sm:mt-8'>
              <p className='text-left sm:w-full sm:text-[1.2rem]'>
              <br></br>
                We will pick, pack, and ship your items. Our 3PL<br></br> services will connect your goods from your factories <br></br>to your customers.
                As the third-party logistics market<br></br> expands, several 3PL providers are emerging. A <br></br>company seeking supply chain outsourcing should <br></br> request a combination of old-world expertise and <br></br>experience, as well as new-world energy.
              </p>
            </div>
            <div className='w-full text-left mt-4 sm:mt-10'>
              <Link to="/services/warehousing" className='sm:w-[65%%] text-[0.9rem] font-bold border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] rounded'>
                {/* <button className=' font-poppins font-[500] sm:w-[25%] text-[0.9rem]  border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] read_more'>Know more</button> */}
                <input type="button" value="Know More" className='Button' style={{ marginTop: "10px", width: "120px", height: "35px", background: "#26695c", color: "#FFFFFF", fontSize: "18px", borderRadius: "3px", border: "none", cursor: "pointer" }} />

                </Link>
            </div>
          </div>
          <div className='mt-4 sm:w-[60%] sm:relative sm:right-[]'>
            <img className=' sm:w-[100%] ' src={L} alt="" />
          </div>
        </div>
      </section>
      <section className='w-[95%] mx-auto mt-16 mb-8  sm:mt-24 font-poppins font-[300]'>

        <div className='sm:flex sm:flex-row sm:w-[93%] sm:mx-auto'>
          <div className='w-full mt-4 sm:w-[60%] sm:flex sm:flex-col sm:justify-center'>
            <div className='w-full text-left sm:w-[100%]'>
              <h3 className='text-2xl sm:text-3xl font-quicksand font-medium'>Workforce Management (GIG)</h3>
            </div>
            <div className='w-full mt-2 sm:w-[85%] sm:mt-8'>
              <p className='text-left sm:w-full sm:text-[1.2rem]'>
                Project management involves managing and supervising the transfer of goods from manufacturing to retail to customers or business partners. Meraqui meticulously satisfies client requirements, schedules and manages a company's or organization's supply chain management.
              </p>
            </div>
            <div className='w-full text-left mt-4 sm:mt-10'>
              <Link to="/services/workforce" className='sm:w-[65%%] text-[0.9rem] font-bold border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] rounded'>
                {/* <button className='font-poppins font-[500] sm:w-[25%] text-[0.9rem]  border-[1px] border-cyan-400 bg-cyan-100 w-[40%] h-[5vh] read_more'>Know more</button> */}
                <input type="button" value="Know More" className='Button' style={{ marginTop: "10px", width: "120px", height: "35px", background: "#26695c", color: "#FFFFFF", fontSize: "18px", borderRadius: "3px", border: "none", cursor: "pointer" }} />

                </Link>
            </div>
          </div>
          <div className='mt-4 sm:w-[60%] sm:relative sm:right-[2%]'>
            <img className=' sm:w-[100%] ' src={G} alt="" />
          </div>
        </div>
      </section>

      <section className='sm:flex sm:flex-row sm:mt-12 sm:w-full font-poppins font-[300]'>
        <div className='sm:relative sm:left-[-9%] h-fill sm:w-[60%] sm:h-[65vh]'>
          <div className='sm:relative sm:left-[23%] sm:h-[65vh] sm:w-[90%] bg-getInTouch h-[40vh] bg-center bg-cover w-[100%]'>
            <div className='w-full sm:flex sm:flex-col sm:justify-center sm:h-[65vh] h-[40vh] bg-black bg-opacity-[0.6] sm:bg-opacity-[0.5] text-white'>
              <div className='w-full sm:flex sm:justify-end sm:pr-16 py-4'>
                <h2 className=' text-2xl sm:text-3xl sm:text-right sm:w-[85%] mr'>Get in touch with us. Let's talk!</h2>
              </div>
              <div className='w-full  sm:flex sm:justify-end sm:pr-16 py-4'>
                <p className='w-[95%] text-[0.9rem] text-left pl-2  sm:text-left sm:w-[60%] sm:leading-[1.8]'>
                  We align our understanding according to your business needs and proactively initiate the HR processes to suit your requirements leveraging the power of Artificial Intelligence. We have a robust pan India presence in over 23 states + 3 Union Territories and 120+ cities and are aiming to grow significantly in the times to come.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className=' my-8 w-full sm:w-[37%] '>
          <div className='w-full sm:w-[88%] flex justify-center mt-4 '>
            <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-poppins font-[500] h-[5vh] border-[1px] border-black' type="text" placeholder='Name' name="" id="" />
          </div>
          <div className='w-full flex justify-center mt-4 sm:w-[88%]'>
            <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-poppins font-[500] h-[5vh] border-[1px] border-black' type="text" placeholder='Designation' name="" id="" />
          </div>
          <div className='w-full flex justify-center mt-4 sm:w-[88%]'>
            <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-poppins font-[500] h-[5vh] border-[1px] border-black' type="text" placeholder='Organization' name="" id="" />
          </div>
          <div className='w-full flex justify-center mt-4 sm:w-[88%]'>
            <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-poppins font-[500] h-[5vh] border-[1px] border-black' type="email" placeholder='Official Email Id' name="" id="" />
          </div>
          <div className='w-full flex justify-center mt-4  sm:w-[88%]'>
            <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-poppins font-[500] h-[5vh] border-[1px] border-black' type="number" placeholder='Contact no.' name="" id="" />
          </div>
          <div className='w-full flex justify-center mt-4 sm:w-[88%]'>
            <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-poppins font-[500] h-[5vh] border-[1px] border-black' type="text" placeholder='Enquiry type' name="" id="" />
          </div>
          <div className='w-[93%] mt-4 flex justify-end sm:justify-start'>
            <button className='w-[40%] h-[5vh] bg-cyan-200 font-poppins font-[500] rounded' type='submit' >Submit</button>
          </div>
        </div> */}
         <div className=' my-8 w-full sm:w-[37%] '>
                    <form onSubmit={handleSubmit(formSubmitHandler)}>
                    <div className='w-full sm:w-[88%] flex justify-center mt-4 '>
                        <input 
                        className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-poppins font-[500] h-[5vh] border-[1px] border-black' 
                        type="text" 
                        placeholder='Name' 
                        name="name" 
                        id="name"
                        { ...register("name", {
                            required: true,
                            minLength: 2,
                        }) }  
                        />
                      
                    </div>
                    <span>
                  {errors.name?.type === "required" && "Name is Required"}
                  {errors.name?.type === "minLength" && "Name must be more than 2 character"}
                </span>
                    <div className='w-full flex justify-center mt-4 sm:w-[88%]'>
                        <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-poppins font-[500] h-[5vh] border-[1px] border-black' 
                        type="text" 
                        placeholder='Designation' 
                        name="designation" 
                        id="designation"
                        { ...register("designation", {
                            required: true,
                            minLength: 2,
                        }) }
                        />
                       
                    </div>
                    <span>
                  {errors.designation?.type === "required" && "Designation is Required"}
                  {errors.designation?.type === "minLength" && "Designation must be more than 2 character"}
                </span>
                    <div className='w-full flex justify-center mt-4 sm:w-[88%]'>
                        <input 
                        className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-poppins font-[500] h-[5vh] border-[1px] border-black' 
                        type="text" 
                        placeholder='Organization' 
                        name="organization" 
                        id="organization" 
                        { ...register("organization", {
                            required: true,
                            minLength: 2,
                        }) }
                        />
                        
                    </div>
                    <span>
                  {errors.organization?.type === "required" && "Organization is Required"}
                  {errors.organization?.type === "minLength" && "Organization must be more than 2 character"}
                </span>
                    <div className='w-full flex justify-center mt-4 sm:w-[88%]'>
                        <input 
                        className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-poppins font-[500] h-[5vh] border-[1px] border-black' 
                        type="email" 
                        placeholder='Official Email Id' 
                        name="org_email"
                        id="org_email" 
                        {...register("org_email", {
                            required: true,
                            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
                          })}
                        />
                      
                    </div>
                    <span>
                  {errors.org_email?.type === "required" && "Email is Required"}
                  {errors.org_email?.type === "pattern" && "Organization Email Must Contain Letters, and special Character @"}
                </span>
                    <div className='w-full flex justify-center mt-4  sm:w-[88%]'>
                        <input 
                        className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-poppins font-[500] h-[5vh] border-[1px] border-black' 
                        type="number" 
                        placeholder='Contact no.' 
                        name="org_number"
                        id="org_number" 
                        {...register("org_number", {
                            required: true,
                            pattern: /^([+]\d{2})?\d{10}$/i,
                          })}
                        />
                        
                    </div>
                    <span>
                  {errors.org_number?.type === "required" && "Number is Required"}
                  {errors.org_number?.type === "pattern" && "Number Must Contain 10 Digit"}
                </span>
                    <div className='w-full flex justify-center mt-4 sm:w-[88%]'>
                        <input className='sm:w-[100%] rounded outline-none w-[85%] p-2 text-black font-poppins font-[500] h-[5vh] border-[1px] border-black' 
                        type="text" 
                        placeholder='Enquiry type' 
                        name="enquiry" 
                        id="enquiry" 
                        {...register("enquiry", {
                            required: true,
                            minLength: 2,
                          })}
                        />
                       
                    </div>
                    <span>
                  {errors.enquiry?.type === "required" && "Enquiry is Required"}
                  {errors.enquiry?.type === "minLength" && "Enquiry must be more than 2 character"}
                </span>
                    <div className='w-[93%] mt-4 flex justify-end sm:justify-start'>
                        {/* <button className='w-[40%] h-[5vh] bg-cyan-200 font-poppins font-[500] ' type='submit' >Submit</button> */}
                        <input type="submit" className='Button' style={{ marginTop: "10px", width: "120px", height: "35px", background: "#26695c", color: "#FFFFFF", fontSize: "18px", borderRadius: "3px", border: "none" }} />

                        {err && (
              <span style={{ marginTop: "0", color: "red", fontWeight: "200" }}>{err}</span>
            )}
                    </div>
                    </form>
                </div>
      </section>
    </main>
  )
}

export default Services
