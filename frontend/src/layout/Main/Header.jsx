import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

import './header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  const [shopArrow, setShopArrow] = useState(false)
  const [navArrow, setnavArrow] = useState(false)
  const [topArrow, settopArrow] = useState(false)
  const [menu, setMenu] = useState(false)
  const [mega, setMega] = useState('')
  const [mega2, setmega2] = useState('')


  useEffect(() => {
  if(menu){
    document.body.style.overflow = "hidden"
  }  else{
    document.body.style.overflow = ""
  }
  return ()=>{
    document.body.style.overflow = ""
  }
  
  }, [menu])
  
  return (
    <>
      <header className=' lg:flex justify-between relative z-50 bg-white' >
        <div className="hidden lg:block w-[185px] p-5">
          <a href="https://my-thread.com">
            <img src="/img/logo/logo.svg" alt="" />
          </a>
        </div>
        <div className="w-full">
          <div className="bg-[#e1999f] h-9 lg:rounded-bl-lg flex justify-end items-center text-white gap-8 px-5 text-[15px] font-medium">
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
          <div className="hidden lg:flex justify-between items-center px-5 h-[91px]">
            <div className=""></div>
            <ul className='flex gap-28 text-lg text-[#243029] font-[500] h-full'>

              <li className=' h-full flex justify-center gap-1 items-center group overflow-hidden'><a className='hover:text-[#fec500]' href="https://my-thread.com/curtains">Shop </a><Icon onClick={() => setShopArrow(_ => !_)} className={`${shopArrow && 'rotate-180'} `} icon={'iconoir:nav-arrow-up'} />
                <div className="absolute overflow-hidden w-full top-[125px] left-0 h-0 bg-[#e1999f] duration-200 group-hover:h-screen group-hover:overflow-y-auto">
                  <div className="p-8 gap-5 grid grid-cols-4 py-16 ">
                    <Link to={'https://my-thread.com/curtains/'}>
                      <div className="min-h-[360px] h-[360px] w-full relative card">
                        <div className="absolute right-[15rem] bottom-6 text-xl text-white">
                          <h6 className='font-semibold'>Curtains</h6>
                        </div>
                        <img src="/nav-image/curtains-1.webp" className='w-full h-full rounded-2xl' alt="" />
                        <div className="absolute right-0 bottom-0 z-10">
                          <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                          <svg className='corner w-[80px] h-[80px] duration-200' width="80" height="80"
                            viewBox="0 0 80 80" aria-hidden="true"
                            role="img">
                            <path fill='#fff'
                              d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                          </svg>

                        </div>
                      </div>
                    </Link>
                    <Link to={'https://my-thread.com/blinds/'}>
                      <div className="min-h-[360px] h-[360px] w-full relative card">
                        <div className="absolute right-[15rem] bottom-6 text-xl text-white">
                          <h6 className='font-semibold'>
                            Blinds</h6>
                        </div>
                        <img src="/nav-image/blinds-1.webp" className='w-full h-full rounded-2xl' alt="" />
                        <div className="absolute right-0 bottom-0 z-10">
                          <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                          <svg className='corner w-[80px] h-[80px] duration-200' width="80" height="80"
                            viewBox="0 0 80 80" aria-hidden="true"
                            role="img">
                            <path fill='#fff'
                              d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                          </svg>

                        </div>
                      </div>
                    </Link>
                    <Link to={'https://my-thread.com/poles%20+%20track/'}>
                      <div className="min-h-[360px] h-[360px] w-full relative card">
                        <div className="absolute w-full left-[2rem] bottom-6 text-xl text-white">
                          <h6 className='font-semibold'>
                            Poles & Tracks</h6>
                        </div>
                        <img src="/nav-image/pols-1.webp" className='w-full h-full rounded-2xl' alt="" />
                        <div className="absolute right-0 bottom-0 z-10">
                          <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                          <svg className='corner w-[80px] h-[80px] duration-200' width="80" height="80"
                            viewBox="0 0 80 80" aria-hidden="true"
                            role="img">
                            <path fill='#fff'
                              d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                          </svg>

                        </div>
                      </div>
                    </Link>
                    <Link to={'https://my-thread.com/Smart%20curtains/'}>
                      <div className="min-h-[360px] h-[360px] w-full relative card">
                        <div className="absolute left-[2rem] w-full bottom-6 text-xl text-white">
                          <h6 className='font-semibold'>
                            Smart Curtains</h6>
                        </div>
                        <img src="/nav-image/smart-1.webp" className='w-full h-full rounded-2xl' alt="" />
                        <div className="absolute right-0 bottom-0 z-10">
                          <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                          <svg className='corner w-[80px] h-[80px] duration-200' width="80" height="80"
                            viewBox="0 0 80 80" aria-hidden="true"
                            role="img">
                            <path fill='#fff'
                              d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                          </svg>

                        </div>
                      </div>
                    </Link>
                    <Link to={'https://my-thread.com/Accessories/'}>
                      <div className="min-h-[360px] h-[360px] w-full relative card">
                        <div className="absolute right-[14rem] bottom-6 text-xl text-white">
                          <h6 className='font-semibold'>
                            Accessories</h6>
                        </div>
                        <img src="/nav-image/ass-1.webp" className='w-full h-full rounded-2xl' alt="" />
                        <div className="absolute right-0 bottom-0 z-10">
                          <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                          <svg className='corner w-[80px] h-[80px] duration-200' width="80" height="80"
                            viewBox="0 0 80 80" aria-hidden="true"
                            role="img">
                            <path fill='#fff'
                              d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                          </svg>


                        </div>

                      </div>
                    </Link>
                  </div>
                </div>
              </li>

              <li className=' h-full flex justify-center items-center group overflow-hidden'><a className='hover:text-[#fec500]' href="https://my-thread.com/fabric">Fabric </a><Icon onClick={() => setnavArrow(_ => !_)} className={`${navArrow && 'rotate-180'} `} icon={'iconoir:nav-arrow-up'} />
                <div className="absolute overflow-hidden w-full top-[125px] left-0 h-0 bg-[#e1999f] duration-200 group-hover:h-[30rem]">
                  <div className="px-[7%] py-[3%] gap-5 grid grid-cols-2 h-full">
                    <Link to={'https://my-thread.com/fabric/'}>
                      <div className="min-h-[360px] h-[300px] w-full relative card">
                        <div className="absolute left-[2rem] bottom-6 text-xl text-white">
                          <h6 className='font-semibold'>

                            Our Fabrics</h6>
                        </div>
                        <img src="/nav-image/fabric.webp" className='w-full h-full rounded-2xl' alt="" />
                        <div className="absolute right-0 bottom-0 z-10">
                          <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                          <svg className='corner w-[80px] h-[80px] duration-200' width="80" height="80"
                            viewBox="0 0 80 80" aria-hidden="true"
                            role="img">
                            <path fill='#fff'
                              d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                          </svg>

                        </div>
                      </div>
                    </Link>
                    <Link to={'https://my-thread.com/colours/'}>
                      <div className="min-h-[360px] h-[300px] w-full relative card">
                        <div className="absolute left-[2rem] bottom-6 text-xl text-white">
                          <h6 className='font-semibold'>

                            Our Colours</h6>
                        </div>
                        <img src="/nav-image/colours.png" className='w-full h-full rounded-2xl' alt="" />
                        <div className="absolute right-0 bottom-0 z-10">
                          <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                          <svg className='corner w-[80px] h-[80px] duration-200' width="80" height="80"
                            viewBox="0 0 80 80" aria-hidden="true"
                            role="img">
                            <path fill='#fff'
                              d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                          </svg>

                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </li>

              <li className='hover:text-[#fec500] h-full flex justify-center items-center'><a href="https://my-thread.com/our-works">Our Works </a></li>
              <li className='hover:text-[#fec500] h-full flex justify-center items-center group overflow-hidden'><a href="https://my-thread.com/Commercial/">Commercial </a><Icon onClick={() => settopArrow(_ => !_)} className={`${topArrow && 'rotate-180'} `} icon={'iconoir:nav-arrow-up'} />
                <div className="absolute overflow-hidden w-full top-[125px] left-0 h-0 bg-[#e1999f] duration-200 group-hover:h-screen group-hover:overflow-y-auto">
                  <div className="p-8 gap-5 grid grid-cols-4 ">
                    <Link to={'https://my-thread.com/Office-blinds-Curtains/'}>
                      <div className="min-h-[360px] h-full w-full relative card">
                        <div className="absolute left-[2rem] bottom-6 text-xl text-white">
                          <h6 className='font-semibold'>
                            Office Blinds & Curtains</h6>
                        </div>
                        <img src="/nav-image/Commercial/1.webp" className='w-full h-full rounded-2xl' alt="" />
                        <div className="absolute right-0 bottom-0 z-10">
                          <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                          <svg className='corner w-[80px] h-[80px] duration-200' width="80" height="80"
                            viewBox="0 0 80 80" aria-hidden="true"
                            role="img">
                            <path fill='#fff'
                              d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                          </svg>

                        </div>
                      </div>
                    </Link>
                    <Link to={'my-thread.com/Hospital-Blinds-Curtains/'}>
                      <div className="min-h-[360px] h-full w-full relative card">
                        <div className="absolute left-[2rem] bottom-6 text-xl text-white">
                          <h6 className='font-semibold'>
                            Hospital Blinds & Curtains</h6>
                        </div>
                        <img src="/nav-image/Commercial/2.webp" className='w-full h-full rounded-2xl' alt="" />
                        <div className="absolute right-0 bottom-0 z-10">
                          <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                          <svg className='corner w-[80px] h-[80px] duration-200' width="80" height="80"
                            viewBox="0 0 80 80" aria-hidden="true"
                            role="img">
                            <path fill='#fff'
                              d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                          </svg>

                        </div>
                      </div>
                    </Link>
                    <Link to={'https://my-thread.com/hotel-blinds-curtains/'}>
                      <div className="min-h-[360px] h-full w-full relative card">
                        <div className="absolute left-[2rem] bottom-6 text-xl text-white">
                          <h6 className='font-semibold'>Hotel Blinds & Curtains</h6>
                        </div>
                        <img src="/nav-image/Commercial/3.webp" className='w-full h-full rounded-2xl' alt="" />
                        <div className="absolute right-0 bottom-0 z-10">
                          <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                          <svg className='corner w-[80px] h-[80px] duration-200' width="80" height="80"
                            viewBox="0 0 80 80" aria-hidden="true"
                            role="img">
                            <path fill='#fff'
                              d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                          </svg>

                        </div>
                      </div>
                    </Link>
                    <Link to={'https://my-thread.com/School-Blinds-Curtains/'}>
                      <div className="min-h-[360px] h-full w-full relative card">
                        <div className="absolute left-[2rem] bottom-6 text-xl text-white">
                          <h6 className='font-semibold'>
                            School Blinds & Curtains</h6>
                        </div>
                        <img src="/nav-image/Commercial/4.webp" className='w-full h-full rounded-2xl' alt="" />
                        <div className="absolute right-0 bottom-0 z-10">
                          <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                          <svg className='corner w-[80px] h-[80px] duration-200' width="80" height="80"
                            viewBox="0 0 80 80" aria-hidden="true"
                            role="img">
                            <path fill='#fff'
                              d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                          </svg>

                        </div>
                      </div>
                    </Link>
                    <Link to={'https://my-thread.com/Gym%20Curtains/'}>
                      <div className="min-h-[360px] h-full w-full relative card">
                        <div className="absolute left-[2rem] bottom-6 text-xl text-white">
                          <h6 className='font-semibold'>
                            Gym Curtains</h6>
                        </div>
                        <img src="/nav-image/Commercial/5.webp" className='w-full h-full rounded-2xl' alt="" />
                        <div className="absolute right-0 bottom-0 z-10">
                          <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                          <svg className='corner w-[80px] h-[80px] duration-200' width="80" height="80"
                            viewBox="0 0 80 80" aria-hidden="true"
                            role="img">
                            <path fill='#fff'
                              d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                          </svg>

                        </div>
                      </div>
                    </Link>
                    <Link to={'https://my-thread.com/Government-Project/'}>
                      <div className="min-h-[360px] h-full w-full relative card">
                        <div className="absolute left-[2rem] bottom-6 text-xl text-white">
                          <h6 className='font-semibold'>
                            Government Project</h6>
                        </div>
                        <img src="/nav-image/Commercial/6.webp" className='w-full h-full rounded-2xl' alt="" />
                        <div className="absolute right-0 bottom-0 z-10">
                          <Icon icon={'eva:plus-outline'} className='plus duration-200 w-9 h-9 absolute inset-0 m-auto top-4 left-4 text-[#e1999f]' />

                          <svg className='corner w-[80px] h-[80px] duration-200' width="80" height="80"
                            viewBox="0 0 80 80" aria-hidden="true"
                            role="img">
                            <path fill='#fff'
                              d="M80,6.33543898 L80,80 L3.85686258,80 C11.3486253,76.7919283 16.597369,69.3522221 16.597369,60.6866061 L16.597369,50.6342576 C16.597369,33.4845191 30.499979,19.5819091 47.6497175,19.5819091 L60.4777554,19.5819091 C69.337167,19.5819091 76.9152239,14.095777 80,6.33543898 L80,6.33543898 Z" />
                          </svg>

                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </li>
              <li className='hover:text-[#fec500] h-full flex justify-center items-center'><a href="https://my-thread.com/needhelp">Need Help </a></li>
              <li className='hover:text-[#fec500] h-full flex justify-center items-center'><a href="https://my-thread.com/free-sample">Free Sample </a></li>
            </ul>

            <div className="flex justify-center items-center gap-5">
              <a href="tel:+97154888737" className='text-[#243029] font-medium'>+971 54 888 1737</a>
              <img src="/icons/cart.png" alt="cart icon" />
            </div>
          </div>
        </div>

        <div className="flex justify-between px-5 items-center lg:hidden z-50 ">
          <img className='w-[120px]' src="/img/logo/logo.svg" alt="" />
          <div className="flex justify-center items-center gap-5 text-base">
            <a href="tel:+97154888737" className='text-[#243029] font-medium'>+971 54 888 1737</a>
            <img src="/icons/cart.png" alt="cart icon" />
          </div>
          <Icon icon={!menu ? 'pajamas:hamburger' : 'eva:close-fill'} color={menu && '#f00'} onClick={() => { setMenu(prev => !prev);setMega(false);setmega2(false) }} className='text-gold text-3xl' />
        </div>
      </header>
      {<div className={`fixed h-screen  ${menu ? 'w-full' : 'w-0'} duration-500 bg-white top-10px z-10 left-0 flex overflow-hidden scroll-none`}>


        <ul className={` duration-200 delay-500 h-screen  flex flex-col overflow-hidden bg-white px-5 py-5 space-y-5 text-black`}>
          <li className='hover:text-[#fec500] overflow-hidden flex gap-7 items-center text-xl'><a className='hover:text-[#fec500] text-black ' href="https://my-thread.com/curtains">Shop </a><Icon onClick={() => setShopArrow(_ => !_)} className={`${shopArrow && 'rotate-180'} `} icon={'iconoir:nav-arrow-up'} />
          </li>
          {shopArrow &&<ul className='px-5 py-1 leading-8'>
              <Link to={'https://my-thread.com/curtains/'}><li>curtains</li></Link>
              <Link to={'https://my-thread.com/blinds/'}><li>Blinds</li></Link>
              <Link to={'https://my-thread.com/poles%20+%20track/'}><li>Poles & Tracks</li></Link>
              <Link to={'https://my-thread.com/Smart%20curtains/'}><li>Smart Curtains</li></Link>
              <Link to={'https://my-thread.com/Accessories/'}><li>Accessories</li></Link>
            </ul>}
          <li className='hover:text-[#fec500]  flex gap-7 items-center text-xl overflow-hidden'><a className='hover:text-[#fec500]' href="https://my-thread.com/fabric">Fabric </a><Icon onClick={() => setnavArrow(_ => !_)} className={`${navArrow && 'rotate-180'} `} icon={'iconoir:nav-arrow-up'} /></li>
          {navArrow &&<ul className='px-5 py-1 leading-8'>
              <Link to={'https://my-thread.com/fabric/'}><li>Our Fabrics</li></Link>
              <Link to={'https://my-thread.com/colours/'}><li>Our Colours</li></Link>
            </ul>}
          <li className='hover:text-[#fec500] text-xl '><a href="https://my-thread.com/our-works">Our Works </a></li>
          <li className='hover:text-[#fec500] text-xl flex  items-center group overflow-hidden'><a href="https://my-thread.com/Commercial/">Commercial </a><Icon onClick={() => settopArrow(_ => !_)} className={`${topArrow && 'rotate-180'} `} icon={'iconoir:nav-arrow-up'} /></li>
          {topArrow &&<ul className='px-5 py-1 leading-8'>
              <Link to={'https://my-thread.com/Office-blinds-Curtains/'}><li>Office Blinds & Curtains</li></Link>
              <Link to={'https://my-thread.com/Hospital-Blinds-Curtains/'}><li>Hospital Blinds & Curtains</li></Link>
              <Link to={'https://my-thread.com/hotel-blinds-curtains/'}><li>Hotel Blinds & Curtains</li></Link>
              <Link to={'https://my-thread.com/School-Blinds-Curtains/'}><li>School Blinds & Curtains</li></Link>
              <Link to={'https://my-thread.com/Gym%20Curtains/'}><li>Gym Curtains</li></Link>
              <Link to={'https://my-thread.com/Government-Project/'}><li>Government Project</li></Link>
            </ul>}
          <li className='hover:text-[#fec500] text-xl'><a href="https://my-thread.com/needhelp">Need Help </a></li>
          <li className='hover:text-[#fec500] text-xl'><a href="https://my-thread.com/free-sample">Free Sample </a></li>
        </ul>

      </div>}

      <>
        <div className="flex justify-around items-center lg:hidden text-black h-16  text-2xl font-semibold border-t-2 border-t-neutral-200">
          <h1 className='' onClick={() => { setMega(prev => !prev);setmega2(false) }}>blinds</h1>
          <h1 onClick={() => { setmega2(prev => !prev);setMega(false) }}>Curtains</h1>
        </div>
        {mega && <div className=" w-full bg-white  z-50 relative grid grid-cols-2 p-5">
          <Link to={'https://my-thread.com/blinds/blinds-roller/'}>
            <div className="">
              <img src="/nav-image/blinds/1.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'> Roller Blinds </h5>
            </div>
          </Link>
          <Link to={'https://my-thread.com/blinds/blackout-blinds/'}>
            <div className="">
              <img src="/nav-image/blinds/2.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'>
              Blackout Blinds </h5>
            </div>
          </Link>
          <Link to={'https://my-thread.com/blinds/roman-blinds/'}>
            <div className="">
              <img src="/nav-image/blinds/3.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'> Roman
              Blinds </h5>
            </div>
          </Link>
          <Link to={'https://my-thread.com/blinds/motorized-blinds/'}>
            <div className="">
              <img src="/nav-image/blinds/4.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'>
              Motorized Blinds </h5>
            </div>
          </Link>
          <Link to={'https://my-thread.com/blinds/vertical-blinds/'}>
            <div className="">
              <img src="/nav-image/blinds/5.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'>
              Vertical Blinds </h5>
            </div>
          </Link>
          <Link to={'https://my-thread.com/blinds/duplex-blinds/'}>
            <div className="">
              <img src="/nav-image/blinds/6.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'>Duplex
              Blinds</h5>
            </div>
          </Link>
          <Link to={'https://my-thread.com/blinds/aluminium-blinds/'}>
            <div className="">
              <img src="/nav-image/blinds/7.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'>Aluminium Venetian Blinds</h5>
            </div>
          </Link>
          <Link to={'https://my-thread.com/blinds/wooden-blinds/'}>
            <div className="">
              <img src="/nav-image/blinds/8.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'>Wooden Ventian
              Blinds</h5>
            </div>
          </Link>
          <div className="text-xl flex">
          <Link to={'https://my-thread.com/blinds/'}><button>Shop all Blinds</button></Link>
          <Icon className='text-xl text-green-900' to={'eva:arrow-forward-fill'} />
          </div>
        </div>}
        {mega2 && <div className="h-auto w-full bg-white  z-50 relative grid grid-cols-2 p-5">
          <Link to={'https://my-thread.com/curtains/pencil-curtains/'}>
            <div className="">
              <img src="/nav-image/curtains/1.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'>
              pencil curtains </h5>
            </div>
          </Link>
          <Link to={'https://my-thread.com/curtains/eyelet-curtains/'}>
            <div className="">
              <img src="/nav-image/curtains/2.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'>
              Eyelet Curtains </h5>
            </div>
          </Link>
          <Link to={'https://my-thread.com/curtains/goblet-curtains/'}>
            <div className="">
              <img src="/nav-image/curtains/3.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'>Goblet Curtains </h5>
            </div>
          </Link>
          <Link to={'https://my-thread.com/curtains/double-curtains/'}>
            <div className="">
              <img src="/nav-image/curtains/4.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'>Double Curtains </h5>
            </div>
          </Link>
          <Link to={'https://my-thread.com/curtains/thriblepleat-curtains/'}>
            <div className="">
              <img src="/nav-image/curtains/5.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'>
              Triple Pleat Curtains </h5>
            </div>
          </Link>
          <Link to={'https://my-thread.com/curtains/blackout-curtains/'}>
            <div className="">
              <img src="/nav-image/curtains/6.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'>
              Blockout Curtains </h5>
            </div>
          </Link>
          <Link to={'https://my-thread.com/curtains/sheer-curtains/'}>
            <div className="">
              <img src="/nav-image/curtains/7.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'>Sheer Curtains </h5>
            </div>
          </Link>
          <Link to={'https://my-thread.com/curtains/hook-type-curtains/'}>
            <div className="">
              <img src="/nav-image/curtains/8.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'>
              Hook Type Curtains </h5>
            </div>
          </Link>
          <Link to={'https://my-thread.com/curtains/ring-type-curtains/'}>
            <div className="">
              <img src="/nav-image/curtains/9.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'>
              Ring Type Curtains </h5>
            </div>
          </Link>
          <Link to={'https://my-thread.com/curtains/pinch-curtains/'}>
            <div className="">
              <img src="/nav-image/curtains/10.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'>
              Pinch Pleat Curtains</h5>
            </div>
          </Link>
          <Link to={'https://my-thread.com/curtains/curtain-wave/'}>
            <div className="">
              <img src="/nav-image/curtains/11.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'>
              Wave curtains</h5>
            </div>
          </Link>
          <Link to={'https://my-thread.com/curtains/curtain-children/'}>
            <div className="">
              <img src="/nav-image/curtains/12.webp" className='w-[163px] h-[190px] rounded-2xl' alt="" />
              <h5 className='py-2 text-xl px-2'>
              Children Curtains</h5>
            </div>
          </Link>
          <div className="text-xl flex">
          <Link to={'https://my-thread.com/blinds/'}><button>Shop all Blinds</button></Link>
          <Icon className='text-xl text-green-900' to={'eva:arrow-forward-fill'} />
          </div>
          </div>}
      </>



    </>
  )
}
