import {createSlice} from '@reduxjs/toolkit'

const tableSlice=createSlice({
    name: 'tab',
    initialState: {
        isCollapse: false
    },
    reducers: {
        collapseMenu:(state,action)=>{
            state.isCollapse = !state.isCollapse
            console.log(state.isCollapse)
        }
    }
})

export const {collapseMenu} = tableSlice.actions
export default tableSlice.reducer