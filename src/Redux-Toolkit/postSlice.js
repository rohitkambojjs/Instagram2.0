import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  previewUrl: "",
}

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPreviewUrl: (state, action) => {
      state.previewUrl = action.payload
    }
  }
})

export const { addPreviewUrl } = postSlice.actions
export default postSlice.reducer