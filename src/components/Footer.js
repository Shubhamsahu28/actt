import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
// import {AiTwotoneMail} from 'react-icons/ai';
// import {BiMapAlt} from 'react-icons/bi';
// import { BiConversation } from 'react-icons/bi';
// import { BiPhoneCall } from 'react-icons/bi';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../App.css'

const Footer = () => {
    return (
        <footer className=' bg-[#0d0d0d] text-white w-[100%] sm:h-fit pb-2  sm:pb-0 flex flex-col  sm:pt-8  font-poppins '>
            <div className='flex flex-col sm:flex-row sm:w-[80%]  sm:mx-auto sm:justify-center sm:mb-8 sm:pb-8'>
                <div className='w-full sm:flex sm:flex-row sm:justify-around sm:w-[73%] contact_s_footer'>
                    <div className=' flex flex-col w-full sm:w-[100%] sm:justify-between sm:h-[35vh] sm:text-left'>
                        <div className='w-[80%] ml-[20px] sm:ml-8  flex justify-start mt-4 sm:w-[40%] '>
                            <img className='w-[60%] flex justify-center  sm:w-[40%] text-white' src={require('../image/meraquiLogo.png')} alt="" />
                        </div>
                        <div className='flex flex-row justify-center w-full mt-12 sm:w-[76%] sm:mt-8 px-4'>
                            <span className='sm:mt-2 w-[10%] sm:w-[10%]  text-[2rem] text-cyan-400 mr-2 sm:text-[2.8rem] sm:h-fill'><img className='lg:w-[65%] location_img' src={require("../image/location.png")} alt="" /></span>
                            <div>
                                <p className='max-w-full sm:w-[100%] text-left sm:leading-[1.8] font-poppins font-[400] sm:text-[13px]  sm:flex sm:justify-center sm:flex-col location_footer_para'>
                                   <p> Meraqui Ventures Pvt. Ltd.,</p>
        
                                    Pranik Chambers,
                                </p>
                                <p className=" max-w-full sm:w-[100%] text-left sm:leading-[1.8] font-poppins font-[400] sm:text-[13px]  sm:flex sm:justify-center sm:flex-col location_footer_para">
                                    B-125, 1st Floor, Saki Vihar Road, Near Saki Naka Metro Station, Andheri
                                    Sakinaka,
                                </p>
                                
                                <p className='max-w-full sm:w-[100%] text-left sm:leading-[1.8] font-poppins font-[400] sm:text-[13px]  sm:flex sm:justify-center sm:flex-col location_footer_para'>(E), Mumbai – 400072, India</p>
                            </div>
                        </div>
                        {/* <div className='text-left w-[93%]'> */}
                        <div className='flex flex-row justify-start w-full mt-4 sm:w-[66%] sm:mt-8 px-4'>
                            
                            <span className='sm:w-[10%] lg:mt-2 text-[2rem] text-cyan-400 mr-2 sm:text-[2.8rem] sm:h-fill'><img className='lg:w-[65%] phone_img' src={require("../image/phone.png")} alt="" /></span>
                            <p className="max-w-full sm:w-[100%] text-left sm:leading-[1.8] font-poppins font-[400] sm:text-[13px]  sm:flex sm:justify-center sm:flex-col mt-2 phone_para">+91-9560772719</p>
                        </div>
                        {/* <div className='flex flex-row justify-center w-full sm:w-[100%] sm:mt-4 mt-4 relative left-[-14%] sm:left-0'> */}
                        <div className='flex flex-row justify-start w-full mt-4 sm:w-[66%] sm:mt-8 px-4'>
                            
                            <span className='lg:mt-1 sm:w-[10%] text-[2rem] text-cyan-400 mr-2 sm:text-[2.8rem] sm:h-fill'><img className='lg:w-[65%] email_img' src={require("../image/letter.png")} alt="" /></span>
                            <p className="max-w-full sm:w-[100%] text-left sm:leading-[1.8] font-poppins font-[400] sm:text-[13px] sm:ml-1  sm:flex sm:justify-center sm:flex-col email_p">contact@meraqui.com</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-row mt-8 justify-evenly   sm:w-[85%] sm:mt-12'>
                    <div className='w-[30%] Quicks '>
                        <div className='w-[100%] text-[0.85rem] sm:w-[80%] sm:flex sm:flex-col sm:justify-center' >
                            <h3 className='w-fit ml-4  border-b-[3px] border-cyan-500 sm:text-[1.3rem] font-poppins font-[400]'>Quick Links</h3>
                            <ul className="items-left sm:leading-[40px] mt-[8px] flex flex-col justify-evenly h-40 font-poppins font-[300]  sm:text-left sm:ml-4 sm:mt-[21px] quick_list">
                                <li ><Link to="/services">Services</Link></li>
                                <li><Link to="/engine">karam.ai</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-[33%] servi'>
                        <div className='w-[100%] text-[0.85rem] sm:w-[80%] sm:flex sm:flex-col sm:justify-center' >
                            <h3 className='w-fit ml-6  border-b-[3px] border-cyan-500 sm:text-[1.3rem] font-poppins font-[400]'>Services</h3>
                            <ul className="items-left sm:leading-[40px] mt-[8px] flex flex-col justify-evenly h-40 font-poppins font-[300]  sm:text-left sm:ml-4 sm:mt-[21px] services_list">
                                <li><Link to="/services/tempStaff">Temp Staffing</Link></li>
                                <li><Link to="/services/neemNaps">NAPS</Link></li>
                                <li><Link to="/services/permStaffing">Perm Staffing</Link></li>
                                <li><Link to="/services/neemNaps">NATS</Link></li>
                            </ul>
                        </div>
                    </div>


                    <div className='w-[30%] sm:w-[35%]'>
                        <div className='w-[100%] sm:w-[60%] sm:flex sm:flex-col sm:justify-center text-[0.85rem]' >
                            {/* <div className='ml-2 flex justify-center  border-b-[3px] border-cyan-500 w-[75%]'>
                            <h3 className='w-fit  sm:mr-2   sm:text-[1.3rem] font-poppins font-[400]'>Services</h3>
                        </div> */}
                            <ul className="sm:w-[100%] sm:mt-[20px] items-left mt-[28px] flex flex-col justify-center h-40 font-poppins font-[300]  sm:text-left sm:ml-4 werehouse">

                                <li className='sm:mb-[10px] mb-[10px]' ><Link to="/services/warehousing">3PL Warehousing</Link></li>
                                <li className=' mb-[30px] sm:mb-1'><Link to="/services/workforce">Workforce Mangement (GIG)</Link></li>

                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className='sm:h-fill h-fill'>
                {/* <div className='w-full sm:mt-16 mt-16'>
                <h2 className='text-4xl font-poppins font-[300]  sm:mb-14 '>Follow our socials</h2>
            </div> */}
                <div className=' flex flex-row w-full justify-evenly mt-2 sm:mt-12  sm:w-[40%] sm:mx-auto social'>
                    <div className="ml-8">
                        <a href='https://www.instagram.com/meraqui_solutions/' target="blank"> <BsInstagram className='text-[3rem] w-[60%] text-cyan-400' /></a>
                    </div>
                    <div className="">
                        <a href='https://www.facebook.com/meraquisolutions' target="blank"><BsFacebook className='text-[3rem] w-[60%] text-cyan-400' /></a>
                    </div>
                    <div className="">
                        <a href=' https://www.linkedin.com/company/meraquii' target='blank'><FaLinkedin className='text-[3rem] w-[60%] text-cyan-400' /></a>
                    </div>
                    <div className="">
                        <a href='https://www.linkedin.com/company/meraquii' target='blank'><BsTwitter className='text-[3rem] w-[60%] text-cyan-400' /></a>
                    </div>
                </div>
            </div>
            <div className='bg-cyan-100 w-full sm:h-fill text-black sm:mt-4'>
                <div className='my-4 sm:my-2  flex flex-row w-full justify-evenly   sm:w-[60%] sm:mx-auto  font-poppins font-[500]' >
                    <p>Copyright©2022 MERAQUI.-All rights reserved.</p>
                </div>
            </div>





            {/* <div><li className='sm:mb-[25px] mb-[30px]'>© @meraqui.com</li></div> */}
            {/* <p>&copy;@Meraqui.com</p> */}

        </footer>
    )
}

export default Footer
