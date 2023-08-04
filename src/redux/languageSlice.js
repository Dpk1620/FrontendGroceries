import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    language:"",
}
export const languageSettingSlice = createSlice({
    name:"languageSetting",
    initialState,
    reducers:{
        setLanguage:(state,action)=>{
            state.language = action.payload
            console.log(action)
        },
    }
})
export const {setLanguage} = languageSettingSlice.actions

export default languageSettingSlice.reducer