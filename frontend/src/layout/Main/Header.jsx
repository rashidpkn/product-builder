import React from 'react'

export default function Header() {
  return (
    <header className='hidden lg:flex justify-between'>
      <div className="w-[185px] p-5">
        <a href="https://my-thread.com">
        <img src="/img/logo/logo.svg" alt="" />
        </a>
      </div>
      <div className="w-full">
        <div className="bg-[#e1999f] h-9 rounded-bl-lg flex justify-end items-center text-white gap-8 px-5 text-xs">
          <div className="">Call us for advice <strong> +971 54 888 1737</strong>
</div>
          <div className=""><a href="https://my-thread.com/about">About us</a></div>
          <div className=""><a href="https://my-thread.com/contact">Contact</a></div>
          <div className=""><a href="#">My Account</a></div>
        </div>
        <div className="flex justify-between items-center px-5 h-[91px]">
          <div className=""></div>
          <ul className='flex gap-28 text-lg text-[#243029] font-[500]' style={{fontFamily:'Recoleta'}}>
                <li><a href="https://my-thread.com/curtains">Shop </a></li>
                <li><a href="https://my-thread.com/fabric">Fabric </a></li>
                <li><a href="https://my-thread.com">Our Works </a></li>
                <li><a href="https://my-thread.com/needhelp">Need Help </a></li>
                <li><a href="https://my-thread.com/measure-install">Free Sample </a></li>
          </ul>
          <div className="">
              <a href="tel:+97154888737" className='text-[#243029] font-semibold'>+971 54 888 1737</a>
          </div>
        </div>
      </div>
    </header>
  )
}
