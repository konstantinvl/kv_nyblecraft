import { PayloadAction } from '@reduxjs/toolkit';

import { put, select } from 'redux-saga/effects';
import { createHashtag, deleteHashtag } from '../../apiMock/apiMock';

import { setHashtags } from '../hashtags/hashtagsActions';
import { RootState } from '../store';

export function* hashtagCreate(action: PayloadAction<string>) {
  try {
    const getHashtags = (state: RootState) => state.hashtags;
    const { hashtags } = yield select(getHashtags);

    if (!hashtags.includes('#' + action.payload)) {
      yield put(setHashtags(createHashtag(action.payload, hashtags)));
    }
  } catch (e) {
    yield console.log(e);
  }
}

export function* hashtagDelete(action: PayloadAction<string>) {
  try {
    const getHashtags = (state: RootState) => state.hashtags;
    const { hashtags } = yield select(getHashtags);

    yield put(setHashtags(deleteHashtag(action.payload, hashtags)));
  } catch (e) {
    yield console.log(e);
  }
}
