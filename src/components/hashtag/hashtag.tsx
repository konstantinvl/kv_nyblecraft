import React from 'react';
import './style.scss';

function Hashtag(props: { hashtag: string; onClick: () => void; onDelete: () => void }) {
  const { hashtag, onClick, onDelete } = props;
  return (
    <div className='hashtag-component' onClick={() => onClick()}>
      {hashtag}
      {hashtag !== 'All' && (
        <div
          className='hashtag-component_delete'
          onClick={(ev) => {
            ev.stopPropagation();
            onDelete();
          }}></div>
      )}
    </div>
  );
}

export default Hashtag;
