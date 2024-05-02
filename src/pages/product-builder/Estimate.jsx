import React from 'react'

export default function Estimate() {
  return (
    <div className="">

    
    <div className="bg-[#5C8984]/70 rounded-2xl backdrop-blur-[24px] p-10 flex lg:gap-[100px] justify-center text-white flex-wrap">
      <div className="w-[370px]">
        <p className="text-base font-bold font-inter text-center">Estimate</p>
        <div className="flex justify-between mt-6">
          <p>Fabric</p>
          <p>Acanthium Autumn</p>
        </div>
        <div className="flex justify-between mt-3">
          <p>Item</p>
          <p>Blind</p>
        </div>
        <div className="flex justify-between mt-3">
          <p>Installation</p>
          <p>Outside</p>
        </div>
        <div className="flex justify-between mt-3">
          <p>Pole</p>
          <p>No</p>
        </div>
        <div className="flex justify-between mt-3">
          <p>Measurements</p>
          <p> W  H (Bedroom)</p>
        </div>
        <div className="flex justify-between mt-3">
          <p>Lining</p>
          <p>Unlined</p>
        </div>
        <div className="w-full h-[2px] border-dashed border mt-6"></div>
        <div className="flex justify-between mt-6">
          <p>Making Price</p>
          <p>AED 100</p>
        </div>
        <div className="flex justify-between mt-3">
          <p>Accessories</p>
          <p>AED 0</p>
        </div>
        <div className="flex justify-between mt-3">
          <p>Boxed & Postage</p>
          <p>AED 50</p>
        </div>
        <div className="flex justify-between mt-3">
          <p>Installation</p>
          <p>AED  0 </p>
        </div>
        <div className="w-full h-[2px] border-dashed border mt-6"></div>
        <div className="flex justify-between mt-3">
          <p>Total Price</p>
          <p className="font-medium">AED 150</p>
        </div>
        <a href="/login">
          <p className="mt-6">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="BookmarkBorderOutlinedIcon"
            >
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2m0 15-5-2.18L7 18V5h10z"></path>
            </svg>{' '}
            Save for later
          </p>
        </a>
      </div>
      <form className="w-[370px]">
        <p className="text-base font-bold font-inter text-center">Payment</p>
        <div className="flex  justify-between mt-6">
          <div className="flex flex-col">
            <label htmlFor="fName">First Name</label>
            <input type="text" id="fName" className="w-44 h-8 rounded outline-none bg-white text-black pl-2" required="" placeholder="George" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lName">Last Name</label>
            <input type="text" id="lName" className="w-36 h-8 rounded outline-none bg-white text-black pl-2" required="" placeholder="Wilson" />
          </div>
        </div>
        <div className="flex w-[370px] justify-between mt-6">
          <div className="">
            <label htmlFor="phone">Phone Number</label>
            <div className="flex gap-1">
              <input type="text" className="w-12 h-8 outline-none rounded bg-white text-black text-center" required="" value="+44" />
              <input type="tel" className="w-32 h-8 outline-none rounded bg-white text-black pl-2" required="" />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Post Code</label>
            <input type="text" className="w-36 h-8 outline-none rounded bg-white text-black pl-2" required="" placeholder="E1 7AA" />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="address">Address</label>
          <textarea name="" id="address" cols="30" rows="10" className="w-full h-[87px] outline-none rounded bg-white text-black p-2" required=""></textarea>
        </div>
        <div className="mt-6">
          <label htmlFor="address">Email</label>
          <input type="email" className="w-full h-8 outline-none rounded bg-white text-black p-2" required="" value="" />
        </div>
        <div className="flex justify-center w-full items-center mt-6">
          <button className="px-4 py-1 rounded-lg bg-white text-[#5C8984] flex justify-center items-center hover:shadow-2xl duration-200 hover:scale-110">Continue to Pay</button>
        </div>
      </form>
    </div>
    </div>
  )
}
