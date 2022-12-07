import React, { useState } from 'react';
import './style.scss';

function HashtagCreator(props: { onSubmit: (hashtag: string) => void }) {
  const { onSubmit } = props;
  const [hashtag, setHashtag] = useState('');

  function onHashtagSubmit() {
    if (hashtag) {
      onSubmit(hashtag);
      setHashtag('');
    }
  }

  return (
    <form
      className='hashtag-creator'
      onSubmit={(ev) => {
        ev.preventDefault();
        onHashtagSubmit();
      }}>
      <label htmlFor='tag-creator'>Create Hashtag:</label>
      <input
        type='text'
        id='tag-creator'
        value={hashtag}
        className='hashtag-creator_input'
        onChange={(ev) => {
          setHashtag(ev.target.value);
        }}
      />
      <button type='submit' className='hashtag-creator_submit'>
        Submit
      </button>
    </form>
  );
}

export default HashtagCreator;
