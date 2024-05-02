import { useDispatch, useSelector } from "react-redux";
import { setFabric } from "../../redux/slice/fabric";

const Step3 = () =>{

    const dispatch = useDispatch()
    const {panelType,hangingStyle} = useSelector(state=>state.fabric)
    return(
        <>
         <p className="mb-6">Single or Pair panel?</p>
      <div className="grid grid-cols-2 gap-3 ">
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="http://104.248.175.101:3001/static/media/Single.bdef5a098b6b4891b2dbb832ff70aa57.svg"
            width={96}
            height={96}
            alt=""
            className={`${panelType ==='single' && 'border-4'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'panelType',value:'single'}))}}
          />
          <p>Single</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="http://104.248.175.101:3001/static/media/Pair.d24b4c92ca2e7db838407096cabe677b.svg"
            width={96}
            height={96}
            alt=""
            className={`${panelType ==='pair' && 'border-4'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'panelType',value:'pair'}))}}
          />
          <p>Pair</p>
        </div>
      </div>



      <p className="my-6">What look are you going for ?</p>
      <div className="grid grid-cols-4 gap-3 ">
        
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="http://104.248.175.101:3001/static/media/Double.d49f22564539a2a682ac8f6efdfbd937.svg"
            width={96}
            height={96}
            alt=""
            className={`${hangingStyle ==='double' && 'border-4'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'hangingStyle',value:'double'}))}}
          />
          <p>Double</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="http://104.248.175.101:3001/static/media/Eyelet.ce8e659bf751eb516550ae77bcd9ac12.svg"
            width={96}
            height={96}
            alt=""
            className={`${hangingStyle ==='eyelet' && 'border-4'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'hangingStyle',value:'eyelet'}))}}
          />
          <p>Eyelet</p>
        </div>


        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="http://104.248.175.101:3001/static/media/Pencil.307ab450dd65332d2baca501749e8688.svg"
            width={96}
            height={96}
            alt=""
            className={`${hangingStyle ==='pencil' && 'border-4'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'hangingStyle',value:'pencil'}))}}
          />
          <p>Pencil</p>
        </div>


        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="http://104.248.175.101:3001/static/media/Goblet.1bf50b57dc451acd34c95c82916ec6ae.svg"
            width={96}
            height={96}
            alt=""
            className={`${hangingStyle ==='goblet' && 'border-4'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'hangingStyle',value:'goblet'}))}}
          />
          <p>Goblet</p>
        </div>


        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="http://104.248.175.101:3001/static/media/Triple.5cc87230fb2d647a9c774ef3b3f65c6b.svg"
            width={96}
            height={96}
            alt=""
            className={`${hangingStyle ==='triple' && 'border-4'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'hangingStyle',value:'triple'}))}}
          />
          <p>Triple</p>
        </div>
        
      </div>
      </>
    )
}

export default Step3