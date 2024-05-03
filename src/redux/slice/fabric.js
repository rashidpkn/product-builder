import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  type: "Acanthium Autumn",
  coverType: 'curtain',
  windowType: 'flat',
  roomName: 'Bedroom',
  liveInDubai: false,
  height: 100,
  width: 200,
  panelType: 'single',
  hangingStyle: 'double',
  lining: 'unlined',
  installationMethod: 'none',
  installationItem: {
    name: '',
    meterial: ''
  },

  //need price table
  price: 100


}

const fabric = createSlice({
  name: 'fabric',
  initialState,
  reducers: {
    setFabric(state, { payload }) {
      const { key, value } = payload
      state[key] = value
    }
  }
});

export const { setFabric } = fabric.actions

export default fabric.reducer