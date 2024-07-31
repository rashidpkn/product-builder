import React, { useState } from 'react'
import corner from './corner.svg'
import { Icon } from '@iconify/react/dist/iconify.js'

import './header.css'

export default function Header() {
  const [shopArrow, setShopArrow] = useState(false)
  return (
    <>
      <header className='hidden lg:flex justify-between relative z-50 bg-white' >
        <div className="w-[185px] p-5">
          <a href="https://my-thread.com">
            <img src="/img/logo/logo.svg" alt="" />
          </a>
        </div>
        <div className="w-full">
          <div className="bg-[#e1999f] h-9 rounded-bl-lg flex justify-end items-center text-white gap-8 px-5 text-[15px] font-medium">
            <div className="w-full">
              {/* style="translate: none; rotate: none; scale: none; transform: translate3d(-58.0343px, 0px, 0px) width=100%" */}
              <marquee direction="left" behavior="scroll" scrollamount="4">
                Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours / Express Range / Free Consultation / Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours /
                Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours / Express Range / Free Consultation / Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours /
                Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours / Express Range / Free Consultation / Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours /
                Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours / Express Range / Free Consultation / Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours /
                Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours / Express Range / Free Consultation / Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours /
                Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours / Express Range / Free Consultation / Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours /
                Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours / Express Range / Free Consultation / Free Consultation /  50<span className='free-consultation'>%</span> OFF On Selected Fabric / Custom Made In 24 Hours /
              </marquee>
            </div>
            {/* <div className="shrink-0"><a href="https://my-thread.com/about">About us</a></div>
          <div className="shrink-0"><a href="https://my-thread.com/contact">Contact</a></div> */}

          </div>
          <div className="flex justify-between items-center px-5 h-[91px]">
            <div className=""></div>
            <ul className='flex gap-28 text-lg text-[#243029] font-[500] h-full'>

              <li className=' h-full flex justify-center gap-1 items-center group overflow-hidden'><a className='hover:text-[#fec500]' href="https://my-thread.com/curtains">Shop </a><Icon onClick={() => setShopArrow(_ => !_)} className={`${shopArrow && 'rotate-180'} `} icon={'iconoir:nav-arrow-up'} />
                <div className="absolute overflow-hidden w-full top-[125px] left-0 h-0 bg-[#e1999f] duration-200 group-hover:h-[42rem] group-hover:overflow-y-auto">
                  <div className="p-8 gap-5 grid grid-cols-4 ">

                    <div className="min-h-[360px] h-full w-full relative card">
                      <img src="https://my-thread.com/wp-content/uploads/photo/curtain.jpg" className='w-full h-full rounded-2xl' alt="" />
                                              <div className="absolute right-0 bottom-0 z-10">
                                                <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                                              <svg className='corner w-[80px] h-[80px] duration-200'  width="80" height="80"
                                                                        viewBox="0 0 80 80" aria-hidden="true"
                                                                        role="img">
                                                                        <path fill='#fff'
                                                                            d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                                                                    </svg>
                      
                                                                            </div>
                    </div>
                    <div className="min-h-[360px] h-full w-full relative card">
                      <img src="https://my-thread.com/wp-content/uploads/photo/curtain.jpg" className='w-full h-full rounded-2xl' alt="" />
                                              <div className="absolute right-0 bottom-0 z-10">
                                                <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                                              <svg className='corner w-[80px] h-[80px] duration-200'  width="80" height="80"
                                                                        viewBox="0 0 80 80" aria-hidden="true"
                                                                        role="img">
                                                                        <path fill='#fff'
                                                                            d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                                                                    </svg>
                      
                                                                            </div>
                    </div>
                    <div className="min-h-[360px] h-full w-full relative card">
                      <img src="https://my-thread.com/wp-content/uploads/photo/curtain.jpg" className='w-full h-full rounded-2xl' alt="" />
                                              <div className="absolute right-0 bottom-0 z-10">
                                                <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                                              <svg className='corner w-[80px] h-[80px] duration-200'  width="80" height="80"
                                                                        viewBox="0 0 80 80" aria-hidden="true"
                                                                        role="img">
                                                                        <path fill='#fff'
                                                                            d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                                                                    </svg>
                      
                                                                            </div>
                    </div>
                    <div className="min-h-[360px] h-full w-full relative card">
                      <img src="https://my-thread.com/wp-content/uploads/photo/curtain.jpg" className='w-full h-full rounded-2xl' alt="" />
                                              <div className="absolute right-0 bottom-0 z-10">
                                                <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                                              <svg className='corner w-[80px] h-[80px] duration-200'  width="80" height="80"
                                                                        viewBox="0 0 80 80" aria-hidden="true"
                                                                        role="img">
                                                                        <path fill='#fff'
                                                                            d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                                                                    </svg>
                      
                                                                            </div>
                    </div>
                    <div className="min-h-[360px] h-full w-full relative card">
                      <img src="https://my-thread.com/wp-content/uploads/photo/curtain.jpg" className='w-full h-full rounded-2xl' alt="" />
                                              <div className="absolute right-0 bottom-0 z-10">
                                                <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                                              <svg className='corner w-[80px] h-[80px] duration-200'  width="80" height="80"
                                                                        viewBox="0 0 80 80" aria-hidden="true"
                                                                        role="img">
                                                                        <path fill='#fff'
                                                                            d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                                                                    </svg>
                      
                                                                            </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className=' h-full flex justify-center items-center group overflow-hidden'><a className='hover:text-[#fec500]' href="https://my-thread.com/fabric">Fabric </a><Icon onClick={() => setShopArrow(_ => !_)} className={`${shopArrow && 'rotate-180'} `} icon={'iconoir:nav-arrow-up'} />
                <div className="absolute overflow-hidden w-full top-[125px] left-0 h-0 bg-[#e1999f] duration-200 group-hover:h-[30rem]">
                  <div className="px-[7%] py-[3%] gap-5 grid grid-cols-2 h-full">
                  <div className="min-h-[360px] h-full w-full relative card">
                      <img src="https://my-thread.com/wp-content/uploads/photo/curtain.jpg" className='w-full h-full rounded-2xl' alt="" />
                                              <div className="absolute right-0 bottom-0 z-10">
                                                <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                                              <svg className='corner w-[80px] h-[80px] duration-200'  width="80" height="80"
                                                                        viewBox="0 0 80 80" aria-hidden="true"
                                                                        role="img">
                                                                        <path fill='#fff'
                                                                            d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                                                                    </svg>
                      
                                                                            </div>
                    </div>
                    <div className="min-h-[360px] h-full w-full relative card">
                      <img src="https://my-thread.com/wp-content/uploads/photo/curtain.jpg" className='w-full h-full rounded-2xl' alt="" />
                                              <div className="absolute right-0 bottom-0 z-10">
                                                <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                                              <svg className='corner w-[80px] h-[80px] duration-200'  width="80" height="80"
                                                                        viewBox="0 0 80 80" aria-hidden="true"
                                                                        role="img">
                                                                        <path fill='#fff'
                                                                            d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                                                                    </svg>
                      
                                                                            </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className='hover:text-[#fec500] h-full flex justify-center items-center'><a href="https://my-thread.com/our-works">Our Works </a></li>
              <li className='hover:text-[#fec500] h-full flex justify-center items-center'><a href="https://my-thread.com/Commercial/">Commercial </a></li>
              <li className='hover:text-[#fec500] h-full flex justify-center items-center'><a href="https://my-thread.com/needhelp">Need Help </a></li>
              <li className='hover:text-[#fec500] h-full flex justify-center items-center'><a href="https://my-thread.com/free-sample">Free Sample </a></li>
            </ul>

            <div className="flex justify-center items-center gap-5">
              <a href="tel:+97154888737" className='text-[#243029] font-medium'>+971 54 888 1737</a>
              <img src="/icons/cart.png" alt="cart icon" />
            </div>
          </div>
        </div>
      </header>
      {/* <div onMouseEnter={()=>setHover(_=>_)} onMouseLeave={()=>setHover(false)} className={`fixed  top-[132px] left-0] ${hover !==true ? 'h-[calc(100vh-132px)]' : "h-0"} w-full bg-[#e1999f] z-[100] duration-500`}>
            {true && <div className="max-w-[1540px] mx-auto grid grid-cols-4 gap-5 py-10">
                  <div className="min-h-[360px] h-full w-full relative">
                      <img src="https://my-thread.com/wp-content/uploads/photo/curtain.jpg" className='w-full h-full rounded-2xl' alt="" />
                      <div className="absolute right-0 bottom-0 z-10">
                        <img src={'/img/layout/corner.svg'} className='w-[100px] h-[100px]' alt="" />
                      </div>
                  </div>
                  <div className="min-h-[360px] h-full w-full relative">
                      <img src="https://my-thread.com/wp-content/uploads/photo/curtain.jpg" className='w-full h-full rounded-2xl' alt="" />
                      <div className="absolute right-0 bottom-0 z-10">
                        <img src={'/img/layout/corner.svg'} className='w-[100px] h-[100px]' alt="" />
                      </div>
                  </div>
                  <div className="min-h-[360px] h-full w-full relative">
                      <img src="https://my-thread.com/wp-content/uploads/photo/curtain.jpg" className='w-full h-full rounded-2xl' alt="" />
                      <div className="absolute right-0 bottom-0 z-10">
                        <img src={'/img/layout/corner.svg'} className='w-[100px] h-[100px]' alt="" />
                      </div>
                  </div>
                  <div className="min-h-[360px] h-full w-full relative">
                      <img src="https://my-thread.com/wp-content/uploads/photo/curtain.jpg" className='w-full h-full rounded-2xl' alt="" />
                      <div className="absolute right-0 bottom-0 z-10">
                        <img src={'/img/layout/corner.svg'} className='w-[100px] h-[100px]' alt="" />
                      </div>
                  </div>
                  <div className="min-h-[360px] h-full w-full relative">
                      <img src="https://my-thread.com/wp-content/uploads/photo/curtain.jpg" className='w-full h-full rounded-2xl' alt="" />
                      <div className="absolute right-0 bottom-0 z-10">
                        <img src={'/img/layout/corner.svg'} className='w-[100px] h-[100px]' alt="" />
                      </div>
                  </div>
              </div>}
            {hover ===2 && <div className="max-w-[1540px] mx-auto">Fabrics</div>}
            </div> */}



    </>
  )
}
