import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fName:'',
    lName:'',
    email:'',
    mobileNumber:'',
    addressLine1:'',
    addressLine2:'',
    addressLine3:'',
    city:'Dubai',
    country:'United Arab Emirates',
    postCode:'25315',
}

const customer = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomer(state,{payload:{key,value}}){
            state[key] = value
    }
  }
});

export const {setCustomer} = customer.actions

export default customer.reducer