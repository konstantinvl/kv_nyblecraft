import { PayloadAction } from '@reduxjs/toolkit';

import { all, call, put } from 'redux-saga/effects';
import { NoteInt } from '../../interfaces';
import { changeNote, createNote, deleteNote, getNotes } from '../../apiMock/apiMock';
import { setNotes } from './notesActions';
import getHashtags from '../../services/getHashtags';
import { setHashtags } from '../hashtags/hashtagsActions';

export function* notesGet() {
  try {
    const notes: NoteInt[] = yield call(getNotes);

    const hashtags = getHashtags(...notes);
    yield all([put(setNotes(notes)), put(setHashtags(hashtags))]);
  } catch (e) {
    yield console.log(e);
  }
}

export function* noteCreate(action: PayloadAction<string>) {
  try {
    const notes: NoteInt[] = yield call(createNote, action.payload);
    const hashtags = getHashtags(...notes);
    yield all([put(setNotes(notes)), put(setHashtags(hashtags))]);
  } catch (e) {
    yield console.log(e);
  }
}

export function* noteChange(action: PayloadAction<NoteInt>) {
  try {
    const notes: NoteInt[] = yield call(changeNote, action.payload);
    const hashtags = getHashtags(...notes);
    yield all([put(setNotes(notes)), put(setHashtags(hashtags))]);
  } catch (e) {
    yield console.log(e);
  }
}

export function* noteDelete(action: PayloadAction<number>) {
  try {
    const notes: NoteInt[] = yield call(deleteNote, action.payload);
    const hashtags = getHashtags(...notes);
    yield all([put(setNotes(notes)), put(setHashtags(hashtags))]);
  } catch (e) {
    yield console.log(e);
  }
}
