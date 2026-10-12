import styles from './FormField.module.css';

export default function FormField({ id, label, type = 'text' }) {
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input id={id} type={type} className={styles.input} />
    </div>
  );
}
