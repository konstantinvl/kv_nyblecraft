import React, { useCallback } from 'react';
import {
  requestCreateHashtags,
  requestDeleteHashtags,
} from '../../app/store/hashtags/hashtagsActions';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import Hashtag from '../../components/hashtag/hashtag';
import HashtagCreator from '../../components/hashtagCreator/hashtagCreator';
import './style.scss';

function HashtagContainer(props: {
  sortingHashtag: string;
  setSortingHashtag: (hashtag: string) => void;
}) {
  const { sortingHashtag, setSortingHashtag } = props;
  const dispatch = useAppDispatch();
  const { hashtags } = useAppSelector((state) => state.hashtags);

  const callbacks = {
    createHashtag: useCallback(
      (hashtags: string) => {
        dispatch(requestCreateHashtags(hashtags));
      },
      [dispatch]
    ),
    deleteHashtag: useCallback(
      (hashtag: string) => {
        dispatch(requestDeleteHashtags(hashtag));
      },
      [dispatch]
    ),
  };

  return (
    <div className='hashtag-container'>
      <div className='hashtag-container_tagfield'>
        <Hashtag
          hashtag='All'
          onClick={() => setSortingHashtag('')}
          onDelete={() => {}}
          active={sortingHashtag === ''}
        />
        {hashtags.map((tag) => {
          return (
            <Hashtag
              hashtag={tag}
              onClick={() => setSortingHashtag(tag)}
              onDelete={() => callbacks.deleteHashtag(tag)}
              key={tag}
              active={sortingHashtag === tag}
            />
          );
        })}
      </div>
      <HashtagCreator onSubmit={callbacks.createHashtag} />
    </div>
  );
}

export default HashtagContainer;
