import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFabric } from "../../redux/slice/fabric";
import { Icon } from "@iconify/react/dist/iconify.js";
import { fabrics } from "./fabrics";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Estimate from "./Estimate";

export default function ProductBuilder() {
  const style = new URLSearchParams(window.location.search).get('style')?.trim()?.toLowerCase()
  const h = new URLSearchParams(window.location.search).get('h')?.trim()
  const w = new URLSearchParams(window.location.search).get('w')?.trim()
  
  const [step, setStep] = useState(1);
  const menu = useRef(null)
  const subMenu = useRef(null)

  const [enableScrollDown, setEnableScrollDown] = useState(false)

  useEffect(() => {
    if (menu.current) {
      menu.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    
    if(subMenu.current.offsetHeight > 400){
      setEnableScrollDown(true)
    }else{
      setEnableScrollDown(false)
    }
  }, [step])
  

  const {hangingStyle,type} = useSelector(state=>state.fabric)
const dispatch = useDispatch()
useEffect(() => {
if(['double','eyelet','pencil','goblet','triple'].includes(style))  {
    dispatch(setFabric({key:'hangingStyle',value:style}))
}

if(parseInt(h) > 100){
  dispatch(setFabric({key:'height',value:parseInt(h)}))

}if(parseInt(w) > 100){

  dispatch(setFabric({key:'width',value:parseInt(w)}))
}

}, [])


  return (
    <main className="h-[calc(100vh-132.28px)] relative">
      <img
        src={fabrics.find(e=>e.fabric === type).img}
        className="absolute w-full h-full object-cover"
        alt=""
      />

{step === 5 && <Estimate setStep={setStep} />}



      <div className="absolute inset-y-0 my-auto max-h-[44rem] h-full w-[30rem] bg-white right-48 rounded-lg p-8">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="font-[Recoleta] text-4xl font-[1000] capitalize">{hangingStyle}</h1>
            {step === 1 && <p className="text-lg">Fabric</p>}
            {step === 2 && <p className="text-lg">Measurement</p>}
            {step === 3 && <p className="text-lg">Style</p>}
            {step === 4 && <p className="text-lg">Features</p>}
            
          </div>
          {step !==1 && <button onClick={()=>step !==1 && setStep(step -1)} className="p-3 rounded-full border">
            <Icon icon={'ooui:previous-ltr'} className="text-black text-2xl" />
          </button>}
        </div>
        <hr className="my-8" />
        <div className=" overflow-y-auto overflow-x-hidden h-[400px]" ref={menu}>
          <div className="overflow-auto pb-3" ref={subMenu}>
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 w-full h-36 bg-white"
          style={{ boxShadow: "0 -1px 0 rgba(0, 0, 0, .03)" }}
        >
<div className=" absolute flex justify-center items-center w-full -top-4 ">

{enableScrollDown && <button onClick={()=>menu.current.scrollTo({ top: menu.current.scrollTop +100, behavior: "smooth" })} className="p-3 rounded-full border bg-white animated-button" >
            <Icon icon={'ooui:previous-ltr'} className="text-black text-2xl -rotate-90" />
          </button>}
</div>

          <div
            className="w-full h-2 border-b"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .05) 100%)",
            }}
          ></div>
          <div className="flex justify-center items-center h-full">
            {step === 1 && (
              <button
                className="w-[50%] h-12 m-auto border rounded-full bg-[#e1999f] text-white"
                onClick={() => setStep(2)}
              >
                Measurement
              </button>
            )}
            {step === 2 && (
              <button
                className="w-[50%] h-12 m-auto border rounded-full bg-[#e1999f] text-white"
                onClick={() => setStep(3)}
              >
                Style
              </button>
            )}
            {step === 3 && (
              <button
                className="w-[50%] h-12 m-auto border rounded-full bg-[#e1999f] text-white"
                onClick={() => setStep(4)}
              >
                Features
              </button>
            )}

{step === 4 && (
              <button className="w-[50%] h-12 m-auto border rounded-full bg-[#e1999f] text-white" onClick={() => setStep(5)}>
                Estimate
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}








