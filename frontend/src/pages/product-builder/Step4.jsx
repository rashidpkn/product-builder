import { useDispatch, useSelector } from "react-redux";
import { setFabric } from "../../redux/slice/fabric";
import { PoleAndTrack } from "./PoleAndTrack";

const Step4 = () =>{

    const dispatch = useDispatch()
    const {lining,installationMethod,installationItem} = useSelector(state=>state.fabric)

    return(
        <>
          <p className="mb-6">Lining</p>
      <div className="grid grid-cols-1 gap-3  lg:px-10">
        <button className={`w-full h-14 ${lining === 'unlined' ? 'border-4 border-[#e1999f]' : 'border'} border rounded`} onClick={()=>dispatch(setFabric({key:'lining',value:'unlined'}))}>Unlined</button>
        <button className={`w-full h-14 ${lining === 'regular' ? 'border-4 border-[#e1999f]' : 'border'} border rounded`} onClick={()=>dispatch(setFabric({key:'lining',value:'regular'}))}>Regular</button>
        <button className={`w-full h-14 ${lining === 'blackout' ? 'border-4 border-[#e1999f]' : 'border'} border rounded`} onClick={()=>dispatch(setFabric({key:'lining',value:'blackout'}))}>Blackout</button>
      </div>

      <p className="my-6">Do you require a Pole Or Track?</p>
      <div className="grid grid-cols-1 gap-3  lg:px-10">
        <button className={`w-full h-14 ${installationMethod === 'none' ? 'border' : 'border-4 border-[#e1999f]'} border rounded`} onClick={()=>{dispatch(setFabric({key:'installationMethod',value:'track'}))}}>Yes</button>
        <button className={`w-full h-14 ${installationMethod === 'none' ? 'border-4 border-[#e1999f]' : 'border'} border rounded`} onClick={()=>{dispatch(setFabric({key:'installationMethod',value:'none'}))}}>No</button>
     </div>

{installationMethod !== 'none' && <>
     <p className="my-6 text-sm">Track or Pole ?</p>
      <div className="grid grid-cols-1 gap-3  lg:px-10">
        <button className={`w-full h-14 ${installationMethod === 'track' ? 'border-4 border-[#e1999f]' : 'border'} border rounded`} onClick={()=>{dispatch(setFabric({key:'installationMethod',value:'track'}))}}>Track</button>
        <button className={`w-full h-14 ${installationMethod === 'pole' ? 'border-4 border-[#e1999f]' : 'border'} border rounded`} onClick={()=>{dispatch(setFabric({key:'installationMethod',value:'pole'}))}}>Pole</button>
     </div>
</>}

{
  installationMethod === 'track' &&
  <div className="grid grid-cols-3 gap-3  lg:px-10 mt-6">
      {PoleAndTrack.map(e=>e.type ==='track' && <div className={`h-24 flex justify-center items-center border ${installationItem.name === e.name && installationItem.meterial === e.meterial && 'border-4 border-[#e1999f] rounded'}`} onClick={()=>{
        dispatch(setFabric({key:'installationItem' , value:{name:e.name,meterial:e.meterial}}))
      }}
      title={e.name +' ' + e.meterial}
      >
          <img src={e.img} alt={e.name + ' ' + e.meterial}  title={e.name +' ' + e.meterial}/>
      </div>)}
  </div>
}

{
  installationMethod === 'pole' &&
  <div className="grid grid-cols-3 gap-3  lg:px-10 mt-6">
      {PoleAndTrack.map(e=>e.type ==='pole' && <div className={`h-24 flex justify-center items-center border ${installationItem.name === e.name && installationItem.meterial === e.meterial && 'border-4 border-[#e1999f] rounded'}`} onClick={()=>{
        dispatch(setFabric({key:'installationItem' , value:{name:e.name,meterial:e.meterial}}))
      }}
      title={e.name +' ' + e.meterial}
      >
          <img src={e.img} alt={e.name + ' ' + e.meterial}  title={e.name +' ' + e.meterial}/>
      </div>)}
  </div>
}
     
        </>
    )
}

export default Step4