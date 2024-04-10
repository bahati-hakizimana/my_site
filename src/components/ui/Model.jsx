import React from 'react'
import portfolios from '../../assets/data/PortifolioData';

const Model = ({activeID, setShowModel}) => {

    const portifolio = portfolios.find(portifolio=> portifolio.id === activeID)
  return (
    <div className=' w-full h-full fixed  top-0 left-0 z-10 bg-headingColor bg-opacity-40'>

    <div className=' w-11/12 md:max-w-[600px] max-w-[400px] md:w-full bg-white rounded-[8px] absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 p-5 mt-5'>
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
        <div>
        <a href={portifolio.siteUrl}>
            <button className=' bg-primaryColor text-white my-8 font-[500] py-2 px-4 rounded-[8px] hover:bg-headingColor ease-in duration-300'>Live site</button>
        </a>

        </div>

         <button onClick={() => setShowModel(false)} className=' flex items-center justify-center rounded-[3px] leading-0 cursor-pointer w-[1.8rem] h-[1.8rem] bg-[black] text-white absolute top-[1.5rem] right-[1.7rem] text-[25px]'>&times;</button>
        

    </div>
  
</div>

//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.975096336962!2d30.085668927940382!3d-1.9559207527874414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6f9a9f85475%3A0x81d16dcc3c7b2f4b!2sAUCA%20Gishushu%20Campus!5e0!3m2!1sen!2srw!4v1712754924507!5m2!1sen!2srw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  )
}

export default Model
