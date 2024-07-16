import React from 'react'

export default function Header() {
  return (
    <header className='hidden lg:flex justify-between'>
      <div className="w-[185px] p-5">
        <img src="/img/logo/logo.svg" alt="" />
      </div>
      <div className="w-full">
        <div className="bg-[#e1999f] h-9 rounded-bl-lg flex justify-end items-center text-white gap-8 px-5 text-xs">
          <div className="">Call us for advice <strong> +971 54 888 1737</strong>
</div>
          <div className="">About us</div>
          <div className="">Contact</div>
          <div className="">My Account</div>
        </div>
        <div className="flex justify-between items-center px-5 h-[91px]">
          <div className=""></div>
          <ul className='flex gap-28 text-lg text-[#243029] font-[500]' style={{fontFamily:'Recoleta'}}>
                <li>Shop</li>
                <li>Fabric</li>
                <li>Our Works</li>
                <li>Need Help</li>
                <li>Free Sample</li>
          </ul>
          <div className=""></div>
        </div>
      </div>
    </header>
  )
}
