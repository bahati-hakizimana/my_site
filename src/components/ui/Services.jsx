import React from 'react'
import project1 from '../../assets/images/project1.png'
import project4 from '../../assets/images/project4.png'
import project3 from '../../assets/images/project3.png'
import project2 from '../../assets/images/project2.png'

const Services = () => {
    return (
        <section id="services">
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className=' text-headingColor font-[800] text-[2.4rem] mb-5'>What do I help</h2>
                    <p className=' lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet aliquam illo sint ipsum at ipsa dolores molestiae,
                        repellat nihil dolor? Nisi recusandae velit earum soluta.
                    </p>
                </div>
                <div className='flex flex-col justify-center sm:py-12'>
                    <div className='w-full py-3 px-2 sm:mx-w-xl sm:mx-auto sm:px-0'>
                        <div className="ralative text-gray-700 antialiased text-sm font-semibold">
                            {/* ============== Vertical Line running through the middle=============== */}
                            <div className=' hidden absolute w-1 sm:block bg-indigo-300 h-[850px] left-1/2 transform -translate-x-1/2'></div>
                            {/* =============LeftCard================================ */}
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className=' flex items-center flex-col sm:flex-row'>
                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className=' w-full sm:w-1/2 sm:pr-8'>
                                            <div data-aos="fade-right" data-aos-duration="1200" className=' bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className=' text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                                                    Frontend Development
                                                </h3>
                                                <p className=' text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7 '>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Eveniet aliquam illo sint ipsum at ipsa dolores molestiae,
                                                    repellat nihil dolor? Nisi recusandae velit earum soluta.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-0 flex items-center justify-center'>
                                        <figure>
                                            <img src={project1} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* ================== Right card========================================== */}

                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className=' flex items-center flex-col sm:flex-row'>
                                    <div className='flex justify-end w-full mx-auto items-center'>
                                        <div className=' w-full sm:w-1/2 sm:pl-8'>
                                            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1300" className=' bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className=' text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                                                    Backend Development
                                                </h3>
                                                <p className=' text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7 '>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Eveniet aliquam illo sint ipsum at ipsa dolores molestiae,
                                                    repellat nihil dolor? Nisi recusandae velit earum soluta.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-0 flex items-center justify-center'>
                                        <figure>
                                            <img src={project4} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className=' flex items-center flex-col sm:flex-row'>
                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className=' w-full sm:w-1/2 sm:pr-8'>
                                            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1400" className=' bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className=' text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                                                    Ui/Ux Development
                                                </h3>
                                                <p className=' text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7 '>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Eveniet aliquam illo sint ipsum at ipsa dolores molestiae,
                                                    repellat nihil dolor? Nisi recusandae velit earum soluta.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-0 flex items-center justify-center'>
                                        <figure>
                                            <img src={project1} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* ================== Right card========================================== */}

                            <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className=' flex items-center flex-col sm:flex-row'>
                                    <div className='flex justify-end w-full mx-auto items-center'>
                                        <div className=' w-full sm:w-1/2 sm:pl-8'>
                                            <div data-aos="fade-right" data-aos-duration="1500" className=' bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className=' text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                                                    Networking & Linux
                                                </h3>
                                                <p className=' text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7 '>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Eveniet aliquam illo sint ipsum at ipsa dolores molestiae,
                                                    repellat nihil dolor? Nisi recusandae velit earum soluta.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-0 flex items-center justify-center'>
                                        <figure>
                                            <img src={project4} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* ========== ui card ========================== */}

                            {/* <div className='mt-6 sm:mt-0 sm:mb-12'>
                                <div className=' flex items-center flex-col sm:flex-row'>
                                    <div className='flex justify-start w-full mx-auto items-center'>
                                        <div className=' w-full sm:w-1/2 sm:pr-8'>
                                            <div data-aos="fade-right" data-aos-duration="1200" className=' bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                                <h3 className=' text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-2xl'>
                                                    UI Development
                                                </h3>
                                                <p className=' text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7 '>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Eveniet aliquam illo sint ipsum at ipsa dolores molestiae,
                                                    repellat nihil dolor? Nisi recusandae velit earum soluta.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-0 flex items-center justify-center'>
                                        <figure>
                                            <img src={project2} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div> */}

                            {/* ======== Mobile Apps development card ========== */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
