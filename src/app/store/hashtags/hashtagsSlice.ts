import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HashtagState {
  hashtags: string[];
}

const initialState: HashtagState = { hashtags: [] };

export const notesSlice = createSlice({
  name: 'hashtags',
  initialState,
  reducers: {
    setHashtags: (state, action: PayloadAction<string[]>) => {
      return { hashtags: action.payload };
    },
  },
});

export default notesSlice.reducer;
