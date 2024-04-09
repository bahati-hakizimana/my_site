import React from 'react';
import portfolios from '../../assets/data/PortifolioData';

const Portifolio = () => {
  return (
    <section id="portifolio">
        <div className="container">
            <div className="flex items-center justify-between  flex-wrap ">
                <div className="mb-7 sm:mb-0">
                    <h3 className="text-headingColor text-[2.4rem] font-[700]">
                        My Projects
                    </h3>
                </div>
                {/* ======== Project Selection ========== */}

                <div className="flex gap-3">
                    <button className=' text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>All</button>
                    <button className=' text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>Web design</button>
                    <button className=' text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>Ui/Ux</button>
                    <button className=' text-smallTextColor border border-solid border-smallTextColor py-2 px-4 rounded-[8px]'>Linux/Network</button>
                </div>
            </div>

            <div className=' flex items-center gap-4 flex-wrap mt-12'>
                {
                    portfolios.map((portfolio, index) => (
                        <div key={index} data-aos="fade-zoom-in" data-aos-delay="50" data-aos-duration="1000" className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                            <figure>
                                <img className=' rounded-[8px]' src={portfolio.imgUrl} alt="" />
                            </figure>

                            <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                                <div className='flex w-full h-full items-center justify-center '>
                                    <button className=' text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in divide-neutral-200' >See details</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="text-center mt-6">

            <button className=' text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in divide-neutral-200' >Load More</button>

            </div>
        </div>
    </section>
  );
};

export default Portifolio;
