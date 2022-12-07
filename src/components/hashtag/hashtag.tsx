import React from 'react';
import './style.scss';

function Hashtag(props: {
  hashtag: string;
  active: boolean;
  onClick: () => void;
  onDelete: () => void;
}) {
  const { hashtag, onClick, onDelete, active } = props;
  return (
    <div className={'hashtag-component' + (active ? ' active' : '')} onClick={() => onClick()}>
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
