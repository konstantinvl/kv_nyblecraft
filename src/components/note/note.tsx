import React, { ChangeEvent, FC, useRef, useState } from 'react';
import { NoteInt } from '../../app/interfaces';
import './style.scss';

const Note: FC<{
  note?: NoteInt;
  noteCreator?: boolean;
  noteCreate: (note: string) => void;
  noteChange: (note: NoteInt) => void;
  noteDelete: (id: number) => void;
}> = ({ note, noteCreator, noteChange, noteCreate, noteDelete }) => {
  function highlightHashtags(
    str: string | null | undefined
  ): string | null | (string | JSX.Element)[] {
    if (str) {
      let splited = str.split(' ');
      const arr = splited.map((str, index) => {
        if (str.match(/^(#\w+)/gm)) {
          return (
            <span className='hashtag' key={str + index}>
              {str + ' '}
            </span>
          );
        }
        return str + ' ';
      });
      return arr;
    } else return null;
  }

  const [content, setContent] = useState<string | null | (string | JSX.Element)[]>(
    highlightHashtags(note?.note)
  );
  const [inputContent, setInputContent] = useState<string>(note?.note || '');

  const [active, setActive] = useState<boolean>(false);

  const inputWrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  function noteOnClose() {
    setActive(false);
    inputWrapperRef.current?.scrollTo({ top: 0, left: 0 });
    inputRef.current?.scrollTo({ top: 0, left: 0 });

    if (noteCreator) {
      if (inputContent) {
        noteCreate(inputContent);
        setInputContent('');
        setContent('');
      }
    } else {
      noteChange({ id: (note as NoteInt).id, note: inputContent });
    }
  }

  function noteOnChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(highlightHashtags(event.target.value));
    setInputContent(event.target.value);

    if (event.target.scrollTop) {
      inputWrapperRef.current?.scrollTo({ top: event.target.scrollTop, left: 0 });
    }
    (inputRef.current as HTMLElement).style.height = inputWrapperRef.current?.offsetHeight + 'px';
  }

  function noteOnScroll(ev: React.UIEvent<HTMLTextAreaElement, UIEvent>) {
    const target = ev.target as HTMLTextAreaElement;
    if (target.scrollTop) {
      inputWrapperRef.current?.scrollTo({ top: target.scrollTop, left: 0 });
    }
  }

  function noteOnDelete() {
    noteDelete((note as NoteInt).id);
    setActive(false);
  }

  return (
    <div
      className={'note-wrapper' + (active ? ' active' : '')}
      onClick={() => {
        noteOnClose();
      }}>
      <div
        className={'note' + (active ? ' active' : '')}
        onClick={(ev) => {
          ev.stopPropagation();
          if (!active) {
            setActive(true);
          }
        }}>
        <div className={'note_header' + (active ? ' active' : '')}>
          <div
            className='note_header_button'
            onClick={() => {
              noteOnClose();
            }}>
            Save
          </div>
          {!noteCreator && (
            <div
              className='note_header_button'
              onClick={() => {
                noteOnDelete();
              }}>
              Delete
            </div>
          )}
        </div>
        <div className={'note_input-wrapper' + (active ? ' active' : '')} ref={inputWrapperRef}>
          <textarea
            className={'note_input' + (active ? ' active' : '')}
            wrap='soft'
            value={inputContent}
            placeholder={noteCreator ? 'You can make your notes here...' : ''}
            ref={inputRef}
            onScroll={(ev) => {
              noteOnScroll(ev);
            }}
            onChange={(ev) => {
              noteOnChange(ev);
            }}></textarea>
          {content}
          <div className='note_edit-button'></div>
        </div>
      </div>
    </div>
  );
};

export default Note;
