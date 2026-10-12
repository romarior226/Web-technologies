import styles from './FilterChips.module.css';

export default function FilterChips({ categories, activeCategory }) {
  return (
    <ul className={styles.list}>
      {categories.map((category) => (
        <li key={category}>
          <button
            type="button"
            className={
              category === activeCategory ? styles.activeChip : styles.chip
            }
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}
