import PdfPreview from '../notes/PdfPreview.jsx';
import TagList from '../notes/TagList.jsx';
import { MOCK_NOTE_DETAIL } from '../notes/mockNotes.js';
import Button from '../ui/Button.jsx';
import styles from './NoteDetailPage.module.css';

export default function NoteDetailPage() {
  const note = MOCK_NOTE_DETAIL;

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>{note.title}</h1>
      <p className={styles.meta}>
        Uploaded by {note.author} • {note.pages} pages • {note.format}
      </p>
      <div className={styles.columns}>
        <PdfPreview title={note.title} />
        <aside className={styles.sidePanel}>
          <Button>⬇ Download PDF</Button>
          <h2 className={styles.tagsTitle}>Tags</h2>
          <TagList tags={note.tags} />
        </aside>
      </div>
    </main>
  );
}
