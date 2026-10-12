import FilterChips from '../notes/FilterChips.jsx';
import NoteCard from '../notes/NoteCard.jsx';
import { MOCK_NOTES, NOTE_CATEGORIES } from '../notes/mockNotes.js';
import AppLayout from '../ui/AppLayout.jsx';
import styles from './DashboardPage.module.css';

export default function DashboardPage({ title = 'All Lecture Notes' }) {
  return (
    <AppLayout>
      <h1 className={styles.title}>{title}</h1>
      <FilterChips categories={NOTE_CATEGORIES} activeCategory="All" />
      <section className={styles.grid}>
        {MOCK_NOTES.map((note) => (
          <NoteCard
            key={note.id}
            id={note.id}
            title={note.title}
            description={note.description}
            date={note.date}
          />
        ))}
      </section>
    </AppLayout>
  );
}
