import React, { useCallback } from 'react';
import { NoteInt } from '../../app/interfaces';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import {
  requestChangeNote,
  requestCreateNote,
  requestDeleteNote,
} from '../../app/store/notes/notesActions';
import { selectNotesByTag } from '../../app/store/notes/notesSlice';
import Note from '../../components/note/note';
import './style.scss';

function NotesContainer(props: { sortingHashtag: string }) {
  const { sortingHashtag } = props;
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const notes = sortingHashtag ? selectNotesByTag(state, sortingHashtag) : state.notes.notes;

  const callbacks = {
    onNoteChange: useCallback(
      (note: NoteInt) => {
        dispatch(requestChangeNote(note));
      },
      [dispatch]
    ),
    onNoteCreate: useCallback(
      (note: string) => {
        dispatch(requestCreateNote(note));
      },
      [dispatch]
    ),
    onNoteDelete: useCallback(
      (id: number) => {
        dispatch(requestDeleteNote(id));
      },
      [dispatch]
    ),
  };
  return (
    <div className='notes-container'>
      <Note
        noteCreator
        noteChange={callbacks.onNoteChange}
        noteCreate={callbacks.onNoteCreate}
        noteDelete={callbacks.onNoteDelete}
      />
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          noteChange={callbacks.onNoteChange}
          noteCreate={callbacks.onNoteCreate}
          noteDelete={callbacks.onNoteDelete}
        />
      ))}
    </div>
  );
}

export default NotesContainer;
