import { NoteInt } from '../interfaces';

export default function getHashtags(...notes: NoteInt[]) {
  const hashtags: string[] = [];

  notes.forEach((note) => {
    note.note.split(' ').forEach((word) => {
      if (word.match(/^(#\w+)/gm) && !hashtags.includes(word)) {
        hashtags.push(word);
      }
    });
  });

  return hashtags;
}
