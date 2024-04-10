import React,{useRef,useEffect} from 'react'

const Header = () => {
    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () =>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky_header')
            }else{
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }
    useEffect(() =>{
        stickyHeaderFunc()
        return window.removeEventListener('scroll', stickyHeaderFunc)
    },[]);

    const handleClick = e =>{
        e.preventDefault();
        const targetAttr = e.target.getAttribute("href")
        const location = document.querySelector(targetAttr).offsetTop;
        window.scrollTo({
            top: location - 80,
            left: 0,
        });
    };

    const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')
    return (

        <header ref={headerRef} className=" w-full h-[80px] shadow-xl leading-[80px] flex items-center">

            <div className="container">
                <div className="flex items-center justify-between">
                    {/*----------------Logo--------------------------------- */}
                    <div className="flex items-center gap-[10px]">
                        <span className="w-[35] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full py-2 px-2 flex items-center justify-center">
                            B
                        </span>

                        <div className="leading-[20px]">
                            <h2 className='text-xl text-smallTextColor font-[700]'>Bahati</h2>
                            <p className=' text-smallTextColor font-[500] text-[16px]'>Personal</p>
                        </div>
                    </div>

                    {/* ------------------Logo End------------- */}

                    {/* ===================Start Menu=================== */}
                    <div className="menu" ref={menuRef} onClick={toggleMenu}>
                        <ul  className=' flex items-center gap-10'>
                            <li><a onClick={handleClick} className=' text-smallTextColor font-[600]'  href="#about">About</a></li>
                            <li><a onClick={handleClick} className=' text-smallTextColor font-[600]' href="#services">Services</a></li>
                            <li><a onClick={handleClick} className=' text-smallTextColor font-[600]' href="#portifolio">projects</a></li>
                            <li><a onClick={handleClick} className=' text-smallTextColor font-[600]' href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    {/* ===================End Menu=================== */}
                    {/* ===================Menu right=================== */}
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/bahati-hakizimana/" target='blank'>
                        <button className='flex items-center bg-primaryColor gap-2 text-smallTextColor font-[600] border border-solid border-white
                         py-2 px-4 rounded-[80px] max-h-[40px] hover:bg-primaryColor hover:text-white hover:font-[500] ease-in duration-300'>
                        <i class="ri-github-line"></i> Git profile
                        </button>
                        </a>
                        <span onClick={toggleMenu} className='text-2xl text-smallTextColor md:hidden cursor-pointer'><i class="ri-menu-line"></i></span>
                        
                    </div>
                    {/* ===================End Menu=================== */}


                </div>
            </div>

        </header>

    )
}

export default Header
