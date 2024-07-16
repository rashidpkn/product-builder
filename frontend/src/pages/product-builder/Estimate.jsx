import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCustomer } from "../../redux/slice/customer";
import { Icon } from "@iconify/react/dist/iconify.js";
import { api } from "../../util/api";

export default function Estimate({ setStep }) {

  const {customer,fabric} =  useSelector((state) => state);

  const {
    type: fabricType,
    coverType,
    windowType,
    roomName,
    height,
    width,
    lining,
    installationMethod,
    liveInDubai,
    panelType,
    hangingStyle,
    installationItem,
    price,
  } = fabric
  const {
    fName,
    lName,
    country,
    emirate,
    city,
    type,

    streetAddress,
    apartment,

    email,
    phone,
  } = customer

  
  const dispatch = useDispatch();

  const placeOrder = useCallback(async (e) => {
    try {
      e.preventDefault();

      const {data} =await api.post('/order',{customer,fabric})

      alert("Your order has placed!")
      window.location.href = 'https://my-thread.com'
      
    } catch (error) {
      
    }
    
  }, [customer]);


  return (
    <div className="h-full w-full absolute top-0 left-0 flex justify-center items-center z-40 backdrop-blur-[24px]">
      <div className="bg-[#e1999f]/70 rounded-2xl backdrop-blur-[24px] p-10 grid grid-cols-2 lg:gap-x-12 gap-5 justify-center text-white flex-wrap  max-h-[95vh] max-w-[95vw] overflow-auto">
        <div className="col-span-2 flex justify-between items-center">
          <div className=""></div>
          <h1 className="text-center text-2xl">Order Details</h1>
          <div className="" onClick={() => setStep((prev) => prev - 1)}>
            <Icon
              icon={"material-symbols-light:close"}
              className="h-8 w-8 cursor-pointer hover:rotate-90 duration-500"
            />
          </div>
        </div>

        <div className="col-span-full lg:col-span-1">
          <p className="text-base font-bold font-inter text-center">Estimate</p>
          <div className="flex justify-between mt-6">
            <p>Fabric</p>
            <p className="capitalize">{fabricType}</p>
          </div>
          <div className="flex justify-between mt-3">
            <p>Item</p>
            <p className="capitalize">{coverType}</p>
          </div>
          <div className="flex justify-between mt-3">
            <p>Installation</p>
            <p className="capitalize">{windowType}</p>
          </div>

          <div className="flex justify-between mt-3">
            <p>Live in Dubai</p>
            <p className="capitalize">{liveInDubai ? "Yes" : "No"}</p>
          </div>

          <div className="flex justify-between mt-3">
            <p>Measurements (H x W)</p>
            <p>
              {" "}
              {height} cm x {width} cm{" "}
            </p>
          </div>

          <div className="flex justify-between mt-3">
            <p>Room Name</p>
            <p> {roomName}</p>
          </div>

          <div className="flex justify-between mt-3">
            <p>Panel type</p>
            <p className="capitalize">{panelType}</p>
          </div>

          <div className="flex justify-between mt-3">
            <p>Hanging style</p>
            <p className="capitalize">{hangingStyle}</p>
          </div>

          <div className="flex justify-between mt-3">
            <p>Lining</p>
            <p className="capitalize">{lining}</p>
          </div>

          <div className="flex justify-between mt-3">
            <p>Track or Pole</p>
            {installationMethod === "none" && <p>No</p>}
            {installationMethod !== "none" && (
              <p className="capitalize">Yes ({installationMethod})</p>
            )}
          </div>

          {installationMethod !== "none" && (
            <div className="flex justify-between mt-3">
              <p>Installation Item</p>

              <p className="capitalize">
                {installationItem.name} ({installationItem.meterial})
              </p>
            </div>
          )}

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
        <form
          className=" text-sm col-span-full lg:col-span-1"
          onSubmit={placeOrder}
        >
          <p className="text-base font-bold font-inter text-center">
            Customer Details
          </p>
          <div className="grid grid-cols-2 gap-3 gap-y-10 mt-6">
            <input
              type="text"
              className="bg-transparent border-b outline-none placeholder:text-white/80"
              value={fName}
              onChange={(e) =>
                dispatch(setCustomer({ key: "fName", value: e.target.value }))
              }
              placeholder="First Name"
              required
            />
            <input
              type="text"
              className="bg-transparent border-b outline-none placeholder:text-white/80"
              value={lName}
              onChange={(e) =>
                dispatch(setCustomer({ key: "lName", value: e.target.value }))
              }
              placeholder="Last Name"
              required
            />

            <input
              type="text"
              className="bg-transparent border-b outline-none placeholder:text-white/80"
              value={country}
              onChange={(e) =>
                dispatch(setCustomer({ key: "country", value: e.target.value }))
              }
              placeholder="Country"
              required
              disabled={import.meta.env.VITE_COUNTRY}
            />
            <select
              type="text"
              className="bg-transparent border-b outline-none placeholder:text-white/80"
              value={emirate}
              onChange={(e) =>
                dispatch(setCustomer({ key: "emirate", value: e.target.value }))
              }
              placeholder="Emirate / Province"
              required
            >
              <option className="text-black" value="">
                Emirate / Province
              </option>
              <option className="text-black" value="Dubai">
                Dubai
              </option>
              <option className="text-black" value="Abu Dhabi">
                Abu Dhabi
              </option>
              <option className="text-black" value="Sharjah">
                Sharjah
              </option>
              <option className="text-black" value="Ajman">
                Ajman
              </option>
              <option className="text-black" value="Umm Al Quwain">
                Umm Al Quwain
              </option>
              <option className="text-black" value="Ras Al Khaimah">
                Ras Al Khaimah
              </option>
              <option className="text-black" value="Fujairah">
                Fujairah
              </option>
            </select>

            <input
              type="text"
              className="bg-transparent border-b outline-none placeholder:text-white/80"
              value={city}
              onChange={(e) =>
                dispatch(setCustomer({ key: "city", value: e.target.value }))
              }
              placeholder="City"
              required
            />
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1">
                <input
                  className=""
                  type="radio"
                  id="Home"
                  name="type"
                  value="Home"
                  defaultChecked={type === "Home"}
                  onChange={(e) =>
                    dispatch(
                      setCustomer({ key: "type", value: e.target.value })
                    )
                  }
                />
                <label htmlFor="Home">Home</label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  className=""
                  type="radio"
                  id="Office"
                  name="type"
                  value="Office"
                  defaultChecked={type === "Office"}
                  onChange={(e) =>
                    dispatch(
                      setCustomer({ key: "type", value: e.target.value })
                    )
                  }
                />
                <label htmlFor="Office">Office</label>
              </div>
            </div>

            <input
              type="text"
              className="bg-transparent border-b outline-none placeholder:text-white/80"
              value={streetAddress}
              onChange={(e) =>
                dispatch(
                  setCustomer({ key: "streetAddress", value: e.target.value })
                )
              }
              placeholder="Street Address"
              required
            />

            <input
              type="type"
              className="bg-transparent border-b outline-none placeholder:text-white/80"
              value={apartment}
              onChange={(e) =>
                dispatch(
                  setCustomer({ key: "apartment", value: e.target.value })
                )
              }
              placeholder="Apartment, suit, unit, etc "
              required
            />

            <input
              type="tel"
              className="bg-transparent border-b outline-none placeholder:text-white/80"
              value={phone}
              onChange={(e) =>
                dispatch(setCustomer({ key: "phone", value: e.target.value }))
              }
              placeholder="Phone"
              required
            />

            <input
              type="email"
              className="bg-transparent border-b outline-none placeholder:text-white/80"
              value={email}
              onChange={(e) =>
                dispatch(setCustomer({ key: "email", value: e.target.value }))
              }
              placeholder="E-mail"
              required
            />

            <div className="flex items-center gap-1">
              <input type="checkbox" name="" id="tac"  required/>
              <label htmlFor="tac">I agree to the terms and conditions</label>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10">
            <button className="border rounded-lg px-3 py-1 hover:rounded text-xl duration-200">
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
