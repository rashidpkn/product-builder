import { useDispatch, useSelector } from "react-redux";
import { setFabric } from "../../redux/slice/fabric";

const Step2 = () => {

    const dispatch = useDispatch()
    const {coverType,windowType,roomName,liveInDubai,height,width} = useSelector(state=>state.fabric)

  return (
    <>
      <p className="mb-6 ">What are you measuring for?</p>
      <div className="grid grid-cols-2 gap-3 ">
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="http://104.248.175.101:3001/static/media/Flat.89df2add42df869d7926.png"
            width={96}
            height={96}
            alt=""
            className={`${coverType ==='curtain' && 'border-4'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'coverType',value:'curtain'}))}}
          />
          <p>Curtain</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="http://104.248.175.101:3001/static/media/Outside.ab2b5750bdae021d6dd4.png"
            width={96}
            height={96}
            alt=""
            className={`${coverType ==='blinds' && 'border-4'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'coverType',value:'blinds'}))}}
          />
          <p>Blinds</p>
        </div>
      </div>

      <p className="my-6 ">What kind of window to you have?</p>
     
     
     {coverType === 'curtain' && <div className="grid grid-cols-2 gap-3 ">
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="http://104.248.175.101:3001/static/media/Flat.89df2add42df869d7926.png"
            width={96}
            height={96}
            alt=""
            className={`${windowType ==='flat' && 'border-4'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'windowType',value:'flat'}))}}
          />
          <p>Flat</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="http://104.248.175.101:3001/static/media/Bay.4392c8a96b604b5a04c2.png"
            width={96}
            height={96}
            alt=""
            className={`${windowType ==='bay' && 'border-4'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'windowType',value:'bay'}))}}
          />
          <p>Bay</p>
        </div>
      </div>}

      {coverType === 'blinds' && <div className="grid grid-cols-2 gap-3 ">
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="http://104.248.175.101:3001/static/media/Inside.1873c2eaebb6663c5536.png"
            width={96}
            height={96}
            alt=""
            className={`${windowType ==='inside' && 'border-4'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'windowType',value:'inside'}))}}
          />
          <p>Inside</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="http://104.248.175.101:3001/static/media/Outside.ab2b5750bdae021d6dd4.png"
            width={96}
            height={96}
            alt=""
            className={`${windowType ==='outside' && 'border-4'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'windowType',value:'outside'}))}}
          />
          <p>Outside</p>
        </div>
      </div>}


      <p className="my-6">Room Name</p>
      <div className="grid grid-cols-1 gap-3  px-10">
        {["Bedroom", "Study", "Bathroom", "Balcony", "Living Room", "Dining Room", "Kitchen"].map((room, index) => (
      <button key={index} 
      className={`w-full h-14 ${roomName===room ? 'border-4' : 'border'}  rounded`}
      onClick={()=>{dispatch(setFabric({key:'roomName',value:room}))}}
      >{room}</button>
    ))}

        <input type="text" className="w-full h-14 border rounded px-3" placeholder="Other"  
        onChange={e=>{dispatch(setFabric({key:'roomName',value:e.target.value}))}}
        value={roomName}
        />
      </div>

      <p className="my-6">Do you live in Dubai? </p>
      <div className="grid grid-cols-1 gap-3  px-10">
        <button className={`w-full h-14 ${liveInDubai ? 'border-4' : 'border'} rounded`} onClick={()=>dispatch(setFabric({key:'liveInDubai',value:true}))}>Yes</button>
        <button className={`w-full h-14 ${liveInDubai ? 'border' : 'border-4'} rounded`} onClick={()=>dispatch(setFabric({key:'liveInDubai',value:false}))}>No</button>
      </div>

      <p className="my-6">Enter Height and Width in CM</p>
      <div className="grid grid-cols-1 gap-3  px-10">
        
        <input type="number" onChange={e=>dispatch(setFabric({key:'height',value:parseFloat(e.target.value)}))} value={height} className="w-full h-14 border rounded px-3" placeholder="Height in CM"  />
        <input type="number" onChange={e=>dispatch(setFabric({key:'width',value:parseFloat(e.target.value)}))} value={width} className="w-full h-14 border rounded px-3" placeholder="Width in CM"  />
      </div>

     
    </>
  );
};

export default Step2