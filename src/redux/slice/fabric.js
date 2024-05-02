import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    type:"Fabric 1",
    coverType:'curtain',
    windowType:'flat',
    roomeName:'Bedroom',
    liveInDubai:false,
    height:100,
    width:200,
    panelType:'single',
    hangingStyle:'double',
    lining:'unlined',
    installationMethod:'none',

}

const fabric = createSlice({
  name: 'fabric',
  initialState,
  reducers: {
    setFabric(state,{payload}){
        const {key,value} = payload
        state[key] = value
    }
  }
});

export const {setFabric} = fabric.actions

export default fabric.reducer