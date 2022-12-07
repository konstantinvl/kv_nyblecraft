import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NoteInt } from '../../interfaces';
import getHashtags from '../../services/getHashtags';
import { RootState } from '../store';

export interface NotesState {
  notes: NoteInt[];
}

const initialState: NotesState = { notes: [] };

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNotes: (state, action: PayloadAction<NoteInt[]>) => {
      return { notes: action.payload };
    },
  },
});

export const getNotesState = (state: RootState): NotesState => state.notes;
export const selectNotesByTag = createSelector(
  [getNotesState, (state, tag: string) => tag],
  (state, tag) =>
    state.notes.filter((note) => {
      const tags = getHashtags(note);
      if (tags) {
        return tags.includes(tag);
      }
      return false;
    })
);

export default notesSlice.reducer;
