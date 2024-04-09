import React from 'react'

import pxc2 from '../../assets/images/pxc2.png'
import CountUp from 'react-countup'

const Hero = () => {
    return (
        <section className=' pt-0' id='about'>

            <div className="container pt-14">
                <div className=' md:flex items-center justify-between sm:flex-col md:flex-row'>
                    {/* ==Hero left content===== */}

                    <div className="w-full md:basis-1/2">
                        <h5
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            className=' text-headingColor font-[600] text-[16px]'>Hello Wellcome
                        </h5>

                        <h1
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className=' text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'
                        >I'm Hakizimana Bahati <br /> Software developer
                        </h1>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1800"
                            className=' flex items-center gap-6 mt-7'
                        >
                            <a href="#contact" className='flex items-center gap-2'>
                                <button className=' bg-primaryColor text-white font-[500] py-2 px-4 rounded-[8px] hover:font-[500]
                             hover:bg-smallTextColor hover:text-white ease-in duration-700'>

                                    <i className="ri-mail-line"></i> Hire Me

                                </button>
                            </a>
                            <a href="#poetifolio"
                                className=' text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor'>
                                See portifolio
                            </a>
                        </div>
                        <p
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className='flex gap-2 mt-12 text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'
                        >
                            <span>
                                <i className="ri-apps-2-line"></i>
                            </span>
                            Builiding a project my client love have allways my passion.
                            Being i web development industry for over 4years and serving more than 7milion happy client worldwide.
                            I'm allways motivated to do more!
                        </p>
                        <div className=' flex gap-9 items-center mt-14'>
                            <span
                                className=' text-smallTextColor text-[16px] font-[500]'>
                                Follow me
                            </span>
                            <span >
                                <a href="" className=' text-smallTextColor text-[18px] font-[600]'>
                                    <i className="ri-github-fill"></i>
                                </a>
                            </span>
                            <span>
                                <a href="" className=' text-smallTextColor text-[18px] font-[600]'>
                                    <i className="ri-instagram-line"></i>
                                </a>
                            </span>
                            <span>
                                <a href="" className=' text-smallTextColor text-[18px] font-[600]'>
                                    <i className="ri-youtube-line"></i>
                                </a>
                            </span>
                            <span>
                                <a href="" className=' text-smallTextColor text-[18px] font-[600]'>
                                    <i className="ri-facebook-line"></i>
                                </a>
                            </span>

                        </div>
                    </div>
                    {/* ==  end Hero left===== */}
                    {/* == Hero image ======= */}
                    <div className=' basis-1/3 mt-10 sm:mt-0'>
                        <figure className=' flex items-center justify-center'>

                            <img src={pxc2} alt="" />

                        </figure>
                    </div>
                    {/* == Hero image end ======= */}
                    {/* == Hero content right ======= */}
                    <div
                        className=' md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                        <div className="mb-10">
                            <h2 className=' text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={6} duration={2} suffix='+' />
                            </h2>
                            <h4 className=' text-headingColor font-[600] text-[18px]'>Years of experience</h4>
                        </div>
                        <div className="mb-10">
                            <h2 className=' text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={100} duration={2} suffix='%' />
                            </h2>
                            <h4 className=' text-headingColor font-[600] text-[18px]'>Successful Rate</h4>
                        </div>
                        <div className="mb-10">
                            <h2 className=' text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={67} duration={2} suffix='+' />
                            </h2>
                            <h4 className=' text-headingColor font-[600] text-[18px]'>Project Completed</h4>
                        </div>
                        <div className="mb-10">
                            <h2 className=' text-headingColor font-[700] text-[32px]'>
                                <CountUp start={0} end={120} duration={2} suffix='+' />
                            </h2>
                            <h4 className=' text-headingColor font-[600] text-[18px]'>Happy Client</h4>
                        </div>
                    </div>
                    {/* == Hero content right end ======= */}

                </div>
            </div>

        </section>
    )
}

export default Hero
