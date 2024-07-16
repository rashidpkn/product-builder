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
  sqm: 2,
  price: 250
}

const fabric = createSlice({
  name: 'fabric',
  initialState,
  reducers: {
    setFabric(state, { payload }) {
      const { key, value } = payload
      state[key] = value

      if (state.coverType === 'curtain') {
        state.sqm = state.height * (state.width + 50) / 10000
      } else {
        state.sqm = state.height * (state.width) / 10000
      }


      state.price = state.sqm * 100

      if (state.hangingStyle === 'trible') {
        state.price += 30;
      }

      if (state.lining === 'regular') {
        state.price += state.sqm * 15;
      } else if (state.lining === 'blackout') {
        state.price += state.sqm * 25;
      }

      if (state.installationMethod !== 'none' && state.coverType === 'curtain') {
        const installationPrices = {
          'Sovereign': 117,
          'Turrent': 132,
          'Globe': 150,
          'Orb': 156,
          'Crown': 165,
          'Swirl': 156,
          'Spire': 165,
          'Crest': 150
        };
        state.price += installationPrices[state.installationItem.name] || 0;
      }

    }


  }
});

export const { setFabric } = fabric.actions

export default fabric.reducer