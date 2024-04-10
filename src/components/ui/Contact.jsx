import React from 'react'

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <h2 className=' text-headingColor font-[700] text-[2.5rem] mb-8'>Get in tourch</h2>
                <div className=' md:flex justify-between items-center'>
                    <div className="w-full md:w-1/2 h-[300] sm:h-[450px]">
                        <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4571352307635!2d30.110902173116333!3d-1.9712763367545463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7b359f3f591%3A0x16e55033eb3bab8!2sNiboye%20Cell%20Office!5e0!3m2!1sen!2srw!4v1712744386896!5m2!1sen!2srw"
                            className=' w-full border-0 h-full'
                            allowFullcSreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>

                    <div className=' w-full mt-8 md:mt-0 md:w-1/2 
                    sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
                        <form className=' w-full' action="">
                            <div className="mb-5">
                               <input 
                               type="text"
                                name="" id=""
                                 placeholder='Enter your name'
                                 className=' w-full p-3 focus:outline-none rounded-[5px]'
                                  /> 
                            </div>
                            <div className="mb-5">
                               <input 
                               type="email"
                                name="" id=""
                                 placeholder='Enter your Email'
                                 className=' w-full p-3 focus:outline-none rounded-[5px]'
                                  /> 
                            </div>
                            <div className="mb-5">
                               <input 
                               type="text"
                                name="" id=""
                                 placeholder='Subject'
                                 className=' w-full p-3 focus:outline-none rounded-[5px]'
                                  /> 
                            </div>
                            <div className="mb-5">
                               <textarea 
                               type="text"
                               rows={3}
                                name="" id=""
                                 placeholder='Write you message'
                                 className=' w-full p-3 focus:outline-none rounded-[5px]'
                                  /> 
                            </div>
                            <button className='flex items-center justify-center gap-1 w-full p-3 focus:outline-none rounded-[5px] bg-primaryColor text-white
                             hover:bg-headingColor ease-linear duration-150'>
                                <i class="ri-mail-send-line text-2xl"></i>Send Message</button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact
