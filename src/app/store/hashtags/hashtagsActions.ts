import { PayloadAction } from '@reduxjs/toolkit';

export const SET_HASHTAGS = 'hashtags/setHashtags';
export const REQUEST_CREATE_HASHTAG = 'hashtags/requestHashtagCreate';
export const REQUEST_DELETE_HASHTAG = 'hashtags/requestHashtagDelete';

export function setHashtags(hashtags: string[]): PayloadAction<string[]> {
  return { type: SET_HASHTAGS, payload: hashtags };
}

export function requestCreateHashtags(hashtag: string): PayloadAction<string> {
  return { type: REQUEST_CREATE_HASHTAG, payload: hashtag };
}

export function requestDeleteHashtags(hashtag: string): PayloadAction<string> {
  return { type: REQUEST_DELETE_HASHTAG, payload: hashtag };
}
