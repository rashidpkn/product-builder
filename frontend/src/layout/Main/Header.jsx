import React, { useState } from 'react'

export default function Header() {
  const [hover, setHover] = useState(true)
  return (
    <>
    <header className='hidden lg:flex justify-between relative z-50 bg-white' style={{fontFamily:'sans-serif Recoleta'}}>
      <div className="w-[185px] p-5">
        <a href="https://my-thread.com">
        <img src="/img/logo/logo.svg" alt="" />
        </a>
      </div>
      <div className="w-full">
        <div className="bg-[#e1999f] h-9 rounded-bl-lg flex justify-end items-center text-white gap-8 px-5 text-[15px] font-medium">
          <div className="w-full">
          {/* style="translate: none; rotate: none; scale: none; transform: translate3d(-58.0343px, 0px, 0px) width=100%" */}
          <marquee   direction="left" behavior="scroll" scrollamount="4">
                    Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours / Express Range / Free Consultation / Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours /
                    Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours / Express Range / Free Consultation / Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours /
                    Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours / Express Range / Free Consultation / Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours /
                    Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours / Express Range / Free Consultation / Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours /
                    Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours / Express Range / Free Consultation / Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours /
                    Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours / Express Range / Free Consultation / Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours /
                    Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours / Express Range / Free Consultation / Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours /
                </marquee>
          </div>
          <div className="shrink-0"><a href="https://my-thread.com/about">About us</a></div>
          <div className="shrink-0"><a href="https://my-thread.com/contact">Contact</a></div>
          
        </div>
        <div className="flex justify-between items-center px-5 h-[91px]">
          <div className=""></div>
          <ul className='flex gap-28 text-lg text-[#243029] font-medium h-full'  >
                <li onMouseEnter={()=>setHover(1)} onMouseLeave={()=>setHover(false)} className='hover:text-[#fec500] h-full flex justify-center items-center peer-[shop]'><a href="https://my-thread.com/curtains">Shop </a></li>
                <li onMouseEnter={()=>setHover(2)} onMouseLeave={()=>setHover(false)} className='hover:text-[#fec500] h-full flex justify-center items-center'><a href="https://my-thread.com/fabric">Fabric </a></li>
                <li className='hover:text-[#fec500] h-full flex justify-center items-center'><a href="https://my-thread.com">Our Works </a></li>
                <li className='hover:text-[#fec500] h-full flex justify-center items-center'><a href="https://my-thread.com/needhelp">Need Help </a></li>
                <li className='hover:text-[#fec500] h-full flex justify-center items-center'><a href="https://my-thread.com/free-sample">Free Sample </a></li>
          </ul>

          <div className="flex items-center">
              <a href="tel:+97154888737" className='text-[#243029] font-medium'>+971 54 888 1737</a>
              <img src="/icons/cart.png" alt="cart icon" />
          </div>
        </div>
      </div>
    </header>
          {/* <div onMouseEnter={()=>setHover(_=>_)} onMouseLeave={()=>setHover(false)} className={`fixed  top-[132px] left-0] ${hover !==0 ? 'h-[calc(100vh-132px)]' : "h-0"} w-full bg-[#e1999f] z-[100] duration-500`}>
            {hover ===1 && <div className="max-w-[1540px] mx-auto">Shop</div>}
            {hover ===2 && <div className="max-w-[1540px] mx-auto">Fabrics</div>}
            </div> */}

          

    </>
  )
}
