import { useDispatch, useSelector } from "react-redux";
import { setFabric } from "../../redux/slice/fabric";
import { fabrics } from "./fabrics";

 const Step1 = () => {



    
    const dispatch = useDispatch()
    const {type} = useSelector(state=>state.fabric)
    
      return (
        <>
          
          <div className="grid grid-cols-8 gap-2">
            {fabrics.map((e) => (
              <div key={e.id} className={`h-12 w-12 rounded-full  p-[3px] border-0 ${e.fabric === type && 'border-4'}  hover:border-4 duration-200 cursor-pointer`}>
                <button onClick={()=>dispatch(setFabric({key:'type',value:e.fabric}))} title={e.fabric} className={`w-full h-full rounded-full`} style={{backgroundImage:`url(${e.fabricPath})`}}>
                </button>
              </div>
            ))}
          </div>
          <div className="p-3 border rounded mt-6">
            <p className="text-xs font-medium text-[#212122]">
              Select a color to request a sample
            </p>
          </div>
    
          <div className="flex justify-between items-center p-10 text-center text-xs">
            <div className="flex flex-col justify-center items-center gap-5">
              <img src="/img/product-builder/icon1.svg" alt="" />
              <p>Softly filters daylight</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <img src="/img/product-builder/icon2.svg" alt="" />
              <p>Neutral colour palette</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <img src="/img/product-builder/icon3.svg" alt="" />
              <p>Delivered in 4 weeks</p>
            </div>
          </div>
        </>
      );
    };
    

    export default Step1