import React from 'react'
import portfolios from '../../assets/data/PortifolioData';

const Model = ({activeID, setShowModel}) => {

    const portifolio = portfolios.find(portifolio=> portifolio.id === activeID)
  return (
    <div className=' w-full h-full fixed  top-0 left-0 z-10 bg-headingColor bg-opacity-40'>

    <div className='max-w-[400px] bg-white rounded-[8px] absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 p-5 mt-5'>
        <div>
        <figure>
            <img className=' rounded-[8px]' src={portifolio.imgUrl} alt="" />
        </figure>

        </div>
        <div>
            <h2 className='text-2xl text-headingColor font-[700] my-5'>{portifolio.title}</h2>
            <p className=' text-[15px] leading-7 text-smallTextColor'>{portifolio.description}</p>
        </div>

        <div className=' mt-5 flex items-center gap-3 flex-wrap'>
            <h4 className=' text-headingColor text-[18px] text-[700]'>Technologies: </h4>
            {
                portifolio.technologies.map((item, index) =>(
                    <span
                    key={index}
                    className=' bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0'
                    >
                        {item}
                    </span>
                ))
            }
        </div>
        <a href={portifolio.siteUrl}>
            <button className=' bg-primaryColor text-white my-8 font-[500] py-2 px-4 rounded-[8px] hover:bg-headingColor ease-in duration-300'>Live site</button>
        </a>
    </div>
  
</div>

  )
}

export default Model
