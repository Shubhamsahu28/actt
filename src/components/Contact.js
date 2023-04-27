import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {

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


    return (
        <main className='w-full sm:mt-24 ' id='about'>
            <div className='w-full sm:mb-8 let_head'>
                <h1 className='text-3xl text-left sm:text-5xl font-quicksand font-[400] sm:ml-2 sm:text-center'>Let's Get in touch</h1>
            </div>
            <section className='w-[95%] sm:flex sm:flex-row  h-fill my-8 mx-auto h-fill sm:mb-16'>
                <div className='w-full sm:w-[55%] sm:h-[55vh] sm:flex sm:flex-col sm:ml-12 sm:justify-center'>

                    <div className='w-full mt-3'>
                        <p className='text-left sm:w-[88%] font-poppins font-[300] sm:text-[1.2rem] leading-[35px]'>
                            {/* We are a SaaS-enabled workforce management platform specializing in employee lifecycle management, job and requisition management, and training and interview assessments.
              <br></br> <br></br>We link our expertise with your business demands and proactively begin HR procedures to meet your needs, harnessing the power of Artificial Intelligence.
              <br></br><br></br>We have a robust pan-India presence in 23 states + 3 Union Territories and 120+ cities and are aiming to grow significantly in the times to come.
              <br></br><br></br> */}
                            Workforce planning can help an organization better prepare for the future and forecast potential challenges. Connect with us to find the workforce that fits your business.
                        </p>
                    </div>
                </div>
                {/* <div className='w-full flex justify-center sm:w-[50%] sm:justify-end sm:relative sm:right-[-10%] '> */}
                <div className='mx-auto w-[95%] sm:w-[55%] sm:relative sm:right-[-2%]'>
                    <img className='w-[95%]' src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" alt="" />
                </div>
            </section>
            <section className='bg-cyan-100 w-full h-fill pt-10 sm:flex sm:flex-row sm:h-[40vh]'>
                <div className=' w-full sm:w-[40%] flex justify-start contact_div '>
                    <div className=' flex flex-row w-[90%]'>
                        <div className=' w-[45%] sm:w-[20%] ml-10'>
                            <img className='w-[100%] home_img' src={require('../image/img/home.png')} alt="" />
                        </div>

                        <div className='ml-2 w-[80%] sm:ml-10 mt-3 '>
                            <div className='w-full add_head'>
                                <h2 className=' text-xl   text-left sm:text-[1rem] font-poppins font-[500]'>ADDRESS:</h2>
                            </div>
                            <div className='w-full mt-2 flex address'>
                                <p className='text-left font-poppins font-[300]'>
                                    
                                    Meraqui Ventures Pvt. Ltd.,<br /> Pranik Chambers, B-125, <br></br>1st Floor, Saki Vihar Road, <br /> Near Saki Naka Metro <br /> Station, Sakinaka, Andheri (E), Mumbai – 400072, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-full sm:w-[40%] flex justify-center call_section '>
                    <div className=' flex flex-row w-[90%]'>
                        <div className=' w-[45%] sm:w-[18%] ml-10'>
                            <img className='w-[100%] call_img' src={require('../image/img/call.png')} alt="" />
                        </div>
                        <div className='ml-2 w-[100%] sm:ml-10 mt-3'>
                            <div className='w-full call_head'>
                                <h2 className=' font-poppins font-[500] text-xl   text-left sm:text-[1rem]'>PHONE:</h2>
                            </div>
                            <div className='w-full mt-2 flex call_para'>
                                <p className='text-left font-poppins font-[300]'>
                                    +91-9560772719
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-full sm:w-[40%] flex justify-center work_section'>
                    <div className=' flex flex-row w-[90%] '>
                        <div className=' w-[45%] sm:w-[20%] ml-13'>
                            <img className='w-[100%] work_img' src={require('../image/img/workhour.png')} alt="" />
                        </div>
                        <div className='ml-2 w-[70%] sm:ml-10 mt-3'>
                            <div className='w-full work_head'>
                                <h2 className=' font-poppins font-[500] text-xl   text-left sm:text-[1rem]'>WORK HOURS:</h2>
                            </div>
                            <div className='w-full mt-2 flex'>
                                <p className='text-left font-poppins font-[300] work_para'>
                                    Monday - Saturday <br />
                                    10.00 AM - 6:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            <section className='sm:flex sm:flex-row sm:w-full font-poppins font-[300] py-8 form_section'>
                <div className='sm:relative sm:left-[-9%] h-fill sm:w-[60%] sm:h-[65vh]'>
                    <div className='sm:relative sm:left-[23%] sm:h-[65vh] sm:w-[90%] bg-getInTouch h-[40vh] bg-center bg-cover w-[100%]'>
                        <div className='w-full sm:flex sm:flex-col sm:justify-center sm:h-[65vh] h-[40vh] bg-black bg-opacity-[0.6] sm:bg-opacity-[0.5] text-white '>
                            <div className='w-full sm:flex sm:justify-end sm:pr-16 py-4 form_head'>
                                <h2 className=' text-2xl sm:text-3xl sm:text-right sm:w-[85%] mr'>Get in touch with us. Let's talk!</h2>
                            </div>
                            <div className='w-full  sm:flex sm:justify-end sm:pr-16 py-4'>
                                <p className='w-[95%] text-[0.9rem] text-left pl-2  sm:text-left sm:w-[60%] sm:leading-[1.8] form_para'>
                                    We align our understanding according to your business needs and proactively initiate the HR processes to suit your requirements leveraging the power of Artificial Intelligence. We have a robust pan India presence in over 23 states + 3 Union Territories and 120+ cities and are aiming to grow significantly in the times to come.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' my-8 w-full sm:w-[40%] '>
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


export default Contact