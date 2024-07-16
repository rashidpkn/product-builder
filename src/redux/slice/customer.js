import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fName: '',
  lName: '',

  country: import.meta.env.VITE_COUNTRY || "United Arab Emirates",
  emirate: '',
  city: '',

  type: "Home",

  streetAddress: "",

  apartment: "",

  phone: "",

  email: '',

}

const customer = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomer(state, { payload: { key, value } }) {
      state[key] = value
    }
  }
});

export const { setCustomer } = customer.actions

export default customer.reducer