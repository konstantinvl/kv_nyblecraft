import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import hashtagsReduser from './hashtags/hashtagsSlice';
import mainSaga from './mainSaga';
import notesReducer from './notes/notesSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    hashtags: hashtagsReduser,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(mainSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
