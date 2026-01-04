import { createSlice } from '@reduxjs/toolkit'

const navigateSlice = createSlice({
    name:'navigate',
    initialState:{
        activeTab:'Browse',
        error:null,
    },
    reducers:{
        SetActiveTab(state, action){
            state.activeTab = action.payload
        },
        setError(state, action){
            state.error = action.payload
        },
    },
})

export const {SetActiveTab,setError}  = navigateSlice.actions

export default navigateSlice.reducer