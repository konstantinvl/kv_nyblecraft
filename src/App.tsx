import React, { useEffect, useState } from 'react';
import './App.scss';
import { useAppDispatch } from './app/store/hooks';
import { requestNotes } from './app/store/notes/notesActions';
import HashtagContainer from './containers/hashtagContainer/hashtagContainer';
import NotesContainer from './containers/notesContainer/notesContainer';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(requestNotes());
  }, []);

  const [sortingHashtag, setSortingHashtag] = useState('');

  return (
    <div className='App'>
      <HashtagContainer setSortingHashtag={(hashtag: string) => setSortingHashtag(hashtag)} />
      <NotesContainer sortingHashtag={sortingHashtag} />
    </div>
  );
}

export default App;
