import { Action, PayloadAction } from '@reduxjs/toolkit';
import { NoteInt } from '../../interfaces';

export const SET_NOTES = 'notes/setNotes';
export const REQUEST_NOTES = 'notes/requestNotes';
export const REQUEST_CREATE_NOTE = 'notes/requestNoteCreate';
export const REQUEST_CHANGE_NOTE = 'notes/requestNoteChange';
export const REQUEST_DELETE_NOTE = 'notes/requestNoteDelete';

export function setNotes(notes: NoteInt[]): PayloadAction<NoteInt[]> {
  return { type: SET_NOTES, payload: notes };
}

export function requestNotes(): Action {
  return { type: REQUEST_NOTES };
}

export function requestCreateNote(note: string): PayloadAction<string> {
  return { type: REQUEST_CREATE_NOTE, payload: note };
}

export function requestChangeNote(note: NoteInt): PayloadAction<NoteInt> {
  return { type: REQUEST_CHANGE_NOTE, payload: note };
}

export function requestDeleteNote(id: number): PayloadAction<number> {
  return { type: REQUEST_DELETE_NOTE, payload: id };
}
