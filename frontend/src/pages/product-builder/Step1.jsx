import { useDispatch, useSelector } from "react-redux";
import { setFabric } from "../../redux/slice/fabric";
import { fabrics } from "./fabrics";
import {  useState } from "react";

 const Step1 = () => {
    const dispatch = useDispatch()
    const {type} = useSelector(state=>state.fabric)

    const [types, setTypes] = useState('pattern') // plain
    
    const totalPage  = Math.ceil(fabrics.filter(e=>e.texture === types).length/24)

   const [pageNo, setPageNo] = useState(1)

    

      return (
        <>
        <div className="flex justify-center items-center">

          <div className="flex justify-center gap-2 rounded-md  px-2 py-1 bg-[#e1999f]/30">
                <button className={`rounded-md  px-4 py-2 duration-500 ${types === 'pattern' ? "bg-[#e1999f] text-white" : "text-[#2B2B2B]/50 hover:bg-[#e1999f]/40"}`} onClick={()=>setTypes('pattern')}>PATTERNS </button>
                <button className={`rounded-md  px-4 py-2 duration-500 ${types === 'plain' ? "bg-[#e1999f] text-white" : "text-[#2B2B2B]/50 hover:bg-[#e1999f]/40"}`} onClick={()=>setTypes('plain')}>PLAIN FABRICS</button>
          </div>

        </div>
          
          <div className="grid grid-cols-8 gap-2 mt-8">
          

            {fabrics.filter(e=>e.texture === types).slice((pageNo - 1) * 24, pageNo * 24).map((e) => (
              <div key={e.id} className={`h-10 w-10 2xl:h-12 2xl:w-12   rounded-full  p-[3px] border-0 ${e.fabric === type && 'border-4 border-[#e1999f]'}  hover:border-4 duration-200 cursor-pointer`}>
                <button onClick={()=>dispatch(setFabric({key:'type',value:e.fabric}))} title={e.fabric} className={`w-full h-full rounded-full overflow-hidden`} >
                  <img className="h-full w-full" src={e.fabricPath} alt={e.fabric}  />
                </button>
              </div>
            ))}

            <div className="col-span-full flex justify-center gap-3">
                  {Array.from({length: totalPage}, (_, i) => i + 1).map(e=><button onClick={()=>setPageNo(e)} key={e} className={`rounded-full bg-[#e1999f]/30 text-white h-5 w-5 flex justify-center items-center ${pageNo === e ? 'border-[#e1999f]' : 'border-transparent'} border-[2px]    p-3 `}>{e}</button>)}
            </div>

          </div>
          <div className="p-3 border rounded lg:mt-6">
            <p className="text-xs font-medium text-[#212122]">
              Select a color to request a sample
            </p>
          </div>
    
          <div className="flex justify-between items-center p-10 text-center text-xs">
            <div className="flex flex-col justify-center items-center gap-5">
              <img src="/img/product-builder/icon1.svg" alt="" />

              <p>Softly Filters Daylight</p>

            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <img src="/img/product-builder/icon2.svg" alt="" />
              <p>Neutral Colour Palette</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <img src="/img/product-builder/icon3.svg" alt="" />
              <p>Delivered in 3 Days</p>
            </div>
          </div>
        </>
      );
    };
    

    export default Step1