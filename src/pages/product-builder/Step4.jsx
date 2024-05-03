import { useDispatch, useSelector } from "react-redux";
import { setFabric } from "../../redux/slice/fabric";

const Step4 = () =>{

    const dispatch = useDispatch()
    const {lining,installationMethod} = useSelector(state=>state.fabric)

    return(
        <>
          <p className="mb-6">Lining</p>
      <div className="grid grid-cols-1 gap-3  px-10">
        <button className={`w-full h-14 ${lining === 'unlined' ? 'border-4 border-[#e1999f]' : 'border'} border rounded`} onClick={()=>dispatch(setFabric({key:'lining',value:'unlined'}))}>Unlined</button>
        <button className={`w-full h-14 ${lining === 'regular' ? 'border-4 border-[#e1999f]' : 'border'} border rounded`} onClick={()=>dispatch(setFabric({key:'lining',value:'regular'}))}>Regular</button>
        <button className={`w-full h-14 ${lining === 'blackout' ? 'border-4 border-[#e1999f]' : 'border'} border rounded`} onClick={()=>dispatch(setFabric({key:'lining',value:'blackout'}))}>Blackout</button>
      </div>

      <p className="my-6">Do you require a Pole Or Track?</p>
      <div className="grid grid-cols-1 gap-3  px-10">
        <button className={`w-full h-14 ${installationMethod === 'none' ? 'border' : 'border-4 border-[#e1999f]'} border rounded`} onClick={()=>{dispatch(setFabric({key:'installationMethod',value:'track'}))}}>Yes</button>
        <button className={`w-full h-14 ${installationMethod === 'none' ? 'border-4 border-[#e1999f]' : 'border'} border rounded`} onClick={()=>{dispatch(setFabric({key:'installationMethod',value:'none'}))}}>No</button>
     </div>

{installationMethod !== 'none' && <>
     <p className="my-6 text-sm">Track or Pole ?</p>
      <div className="grid grid-cols-1 gap-3  px-10">
        <button className={`w-full h-14 ${installationMethod === 'track' ? 'border-4 border-[#e1999f]' : 'border'} border rounded`} onClick={()=>{dispatch(setFabric({key:'installationMethod',value:'track'}))}}>Track</button>
        <button className={`w-full h-14 ${installationMethod === 'pole' ? 'border-4 border-[#e1999f]' : 'border'} border rounded`} onClick={()=>{dispatch(setFabric({key:'installationMethod',value:'pole'}))}}>Pole</button>
     </div>
</>}
     
        </>
    )
}

export default Step4