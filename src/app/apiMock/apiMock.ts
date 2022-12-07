import { NoteInt } from '../interfaces';

const NOTES = 'notes';

export function getNotes() {
  return JSON.parse(localStorage.getItem(NOTES) || '[]') as NoteInt[];
}

export function createNote(note: string) {
  const notes = getNotes();
  const newNote = notes.length ? { id: notes[0].id + 1, note } : { id: 1, note };

  localStorage.setItem(NOTES, JSON.stringify([newNote].concat(notes)));

  return getNotes();
}

export function deleteNote(id: number) {
  const notes = getNotes();

  localStorage.setItem(NOTES, JSON.stringify(notes.filter((note) => note.id !== id)));

  return getNotes();
}

export function changeNote(newNote: NoteInt) {
  const notes = getNotes();

  localStorage.setItem(
    NOTES,
    JSON.stringify(
      notes.map((note) => {
        if (note.id === newNote.id) {
          return newNote;
        } else return note;
      })
    )
  );

  return getNotes();
}

export function deleteHashtag(hashtag: string, hashtags: string[]) {
  return hashtags.filter((tag) => tag !== hashtag);
}

export function createHashtag(hashtag: string, hashtags: string[]) {
  const newHashtags = hashtag.split(' ').map((tag) => {
    if (tag.match(/^(#)/gm)) {
      return tag;
    } else return '#' + tag;
  });
  return hashtags.concat(newHashtags);
}
