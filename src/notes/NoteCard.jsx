import { Link } from 'react-router-dom';
import Button from '../ui/Button.jsx';
import styles from './NoteCard.module.css';

export default function NoteCard({ id, title, description, date }) {
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>
        <Link to={`/notes/${id}`} className={styles.link}>
          {title}
        </Link>
      </h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.date}>📅 {date}</p>
      <Button>⬇ Download PDF</Button>
    </article>
  );
}
