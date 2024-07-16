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
            src="/img/product-builder/single.svg"
            width={96}
            height={96}
            alt=""
            className={`${panelType ==='single' && 'border-4 border-[#e1999f]'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'panelType',value:'single'}))}}
          />
          <p>Single</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="/img/product-builder/pair.svg"
            width={96}
            height={96}
            alt=""
            className={`${panelType ==='pair' && 'border-4 border-[#e1999f]'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'panelType',value:'pair'}))}}
          />
          <p>Pair</p>
        </div>
      </div>



      <p className="my-6">What look are you going for ?</p>
      <div className="grid grid-cols-4 gap-3 ">
        
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="/img/product-builder/double.svg"
            width={96}
            height={96}
            alt=""
            className={`${hangingStyle ==='double' && 'border-4 border-[#e1999f]'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'hangingStyle',value:'double'}))}}
          />
          <p>Double</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="/img/product-builder/eyelet.svg"
            width={96}
            height={96}
            alt=""
            className={`${hangingStyle ==='eyelet' && 'border-4 border-[#e1999f]'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'hangingStyle',value:'eyelet'}))}}
          />
          <p>Eyelet</p>
        </div>


        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="/img/product-builder/pencil.svg"
            width={96}
            height={96}
            alt=""
            className={`${hangingStyle ==='pencil' && 'border-4 border-[#e1999f]'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'hangingStyle',value:'pencil'}))}}
          />
          <p>Pencil</p>
        </div>


        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="/img/product-builder/goblet.svg"
            width={96}
            height={96}
            alt=""
            className={`${hangingStyle ==='goblet' && 'border-4 border-[#e1999f]'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'hangingStyle',value:'goblet'}))}}
          />
          <p>Goblet</p>
        </div>


        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="/img/product-builder/triple.svg"
            width={96}
            height={96}
            alt=""
            className={`${hangingStyle ==='triple' && 'border-4 border-[#e1999f]'} rounded-lg cursor-pointer p-1 duration-200`}
            onClick={()=>{dispatch(setFabric({key:'hangingStyle',value:'triple'}))}}
          />
          <p>Triple</p>
        </div>
        
      </div>
      </>
    )
}

export default Step3