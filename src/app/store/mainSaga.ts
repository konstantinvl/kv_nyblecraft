import { ForkEffect, takeEvery } from 'redux-saga/effects';
import { REQUEST_CREATE_HASHTAG, REQUEST_DELETE_HASHTAG } from './hashtags/hashtagsActions';
import { hashtagCreate, hashtagDelete } from './hashtags/saga';
import {
  REQUEST_CHANGE_NOTE,
  REQUEST_CREATE_NOTE,
  REQUEST_DELETE_NOTE,
  REQUEST_NOTES,
} from './notes/notesActions';
import { noteChange, noteCreate, noteDelete, notesGet } from './notes/saga';

function* mainSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(REQUEST_NOTES, notesGet);
  yield takeEvery(REQUEST_CREATE_NOTE, noteCreate);
  yield takeEvery(REQUEST_CHANGE_NOTE, noteChange);
  yield takeEvery(REQUEST_DELETE_NOTE, noteDelete);
  yield takeEvery(REQUEST_DELETE_HASHTAG, hashtagDelete);
  yield takeEvery(REQUEST_CREATE_HASHTAG, hashtagCreate);
}

export default mainSaga;
