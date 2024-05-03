import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCustomer } from '../../redux/slice/customer'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function Estimate({setStep}) {

    const {type,coverType,windowType,roomName,height,width,lining,installationMethod,liveInDubai,panelType,hangingStyle,installationItem,price} = useSelector(state=>state.fabric)
const { fName, lName, email, mobileNumber, addressLine1, addressLine2, addressLine3, city, country, postCode} = useSelector(state=>state.customer)
const dispatch = useDispatch()

const placeOrder = useCallback(
  async (e) => {
    e.preventDefault()
    alert("Testing")
  },
  [],
)



  return (
    <div className="h-full w-full absolute top-0 left-0 flex justify-center items-center z-40 backdrop-blur-[24px]">

    
    <div className="bg-[#e1999f]/70 rounded-2xl backdrop-blur-[24px] p-10 grid grid-cols-2 lg:gap-x-12 gap-5 justify-center text-white flex-wrap  w-[800px]">
        
        <div className="col-span-2 flex justify-between items-center">
            <div className=""></div>
            <h1 className='text-center text-2xl'>Order Details</h1>
            <div className="" onClick={()=>setStep(prev=>prev-1)}>
                <Icon  icon={'material-symbols-light:close'} className='h-8 w-8 cursor-pointer hover:rotate-90 duration-500' />
            </div>
        </div>

      <div className="">
        <p className="text-base font-bold font-inter text-center">Estimate</p>
        <div className="flex justify-between mt-6">
          <p>Fabric</p>
          <p className='capitalize'>{type}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p>Item</p>
          <p className='capitalize'>{coverType}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p>Installation</p>
          <p className='capitalize'>{windowType}</p>
        </div>

        <div className="flex justify-between mt-3">
          <p>Live in Dubai</p>
          <p className='capitalize'>{liveInDubai ? 'Yes' : 'No'}</p>
        </div>
        
        <div className="flex justify-between mt-3">
          <p>Measurements (H x W)</p>
          <p> {height} cm x {width} cm </p>
        </div>

        <div className="flex justify-between mt-3">
          <p>Room Name</p>
          <p> {roomName}</p>
        </div>

        <div className="flex justify-between mt-3">
          <p>Panel type</p>
          <p className='capitalize'>{panelType}</p>
        </div>

        <div className="flex justify-between mt-3">
          <p>Hanging style</p>
          <p className='capitalize'>{hangingStyle}</p>
        </div>

        <div className="flex justify-between mt-3">
          <p>Lining</p>
          <p className='capitalize'>{lining}</p>
        </div>
        
        <div className="flex justify-between mt-3">
          <p>Track or Pole</p>
          {installationMethod === 'none' && <p>No</p>}
          {installationMethod !== 'none' && <p className='capitalize'>Yes ({installationMethod})</p>}
        </div>

        {installationMethod !== 'none' && <div className="flex justify-between mt-3">
          <p>Installation Item</p>
          
          <p className='capitalize'>{installationItem.name} ({installationItem.meterial})</p>
        </div>}

        <div className="w-full h-[2px] border-dashed border mt-6"></div>
        <div className="flex justify-between mt-6">
          <p>Making Price </p>
          <p>AED {price.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p>Boxed & Postage</p>
          <p>AED 50.00</p>
        </div>
  
        <div className="w-full h-[2px] border-dashed border mt-6"></div>
        <div className="flex justify-between mt-3">
          <p>Total Price</p>
          <p className="font-medium">AED {(price + 50).toFixed(2)}</p>
        </div>
        
      </div>
      <form className=" text-sm" onSubmit={placeOrder}>
        <p className="text-base font-bold font-inter text-center">Customer Details</p>
        <div className="grid grid-cols-2 gap-3 gap-y-10 mt-6">
            <input type="text" className='bg-transparent border-b outline-none placeholder:text-white/80' value={fName} onChange={e=>dispatch(setCustomer({key:'fName',value:e.target.value}))} placeholder='First Name' required/>
            <input type="text" className='bg-transparent border-b outline-none placeholder:text-white/80' value={lName} onChange={e=>dispatch(setCustomer({key:'lName',value:e.target.value}))} placeholder='Last Name' required/>
            <input type="email" className='bg-transparent border-b outline-none placeholder:text-white/80' value={email} onChange={e=>dispatch(setCustomer({key:'email',value:e.target.value}))} placeholder='E-mail' required/>
            <input type="tel" className='bg-transparent border-b outline-none placeholder:text-white/80' value={mobileNumber} onChange={e=>dispatch(setCustomer({key:'mobileNumber',value:e.target.value}))} placeholder='Mobile Number' required/>
            <input type="text" className='bg-transparent border-b outline-none placeholder:text-white/80 col-span-2' value={addressLine1} onChange={e=>dispatch(setCustomer({key:'addressLine1',value:e.target.value}))} placeholder='Address Line1' required/>
            <input type="text" className='bg-transparent border-b outline-none placeholder:text-white/80 col-span-2' value={addressLine2} onChange={e=>dispatch(setCustomer({key:'addressLine2',value:e.target.value}))} placeholder='Address Line2' required/>
            <input type="text" className='bg-transparent border-b outline-none placeholder:text-white/80 col-span-2' value={addressLine3} onChange={e=>dispatch(setCustomer({key:'addressLine3',value:e.target.value}))} placeholder='Address Line3 (optinal)'/>
            <input type="text" className='bg-transparent border-b outline-none placeholder:text-white/80' value={city} onChange={e=>dispatch(setCustomer({key:'city',value:e.target.value}))} placeholder='City' required/>
            <input type="text" className='bg-transparent border-b outline-none placeholder:text-white/80' value={country} onChange={e=>dispatch(setCustomer({key:'country',value:e.target.value}))} placeholder='Country' required/>
            <input type="text" className='bg-transparent border-b outline-none placeholder:text-white/80' value={postCode} onChange={e=>dispatch(setCustomer({key:'postCode',value:e.target.value}))} placeholder='Post Code' required/>

        </div>
        <div className="flex justify-center items-center mt-10">
            <button className='border rounded-2xl px-4 py-3 hover:rounded-lg text-xl duration-200'>Place Order</button>
        </div>
       
      </form>
    </div>
    </div>
  )
}
