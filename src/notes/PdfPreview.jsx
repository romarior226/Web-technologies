import styles from './PdfPreview.module.css';

// Static stand-in for a real PDF viewer.
export default function PdfPreview({ title }) {
  return (
    <div className={styles.wrapper}>
      <article className={styles.page} aria-label={`Preview of ${title}`}>
        <h2 className={styles.heading}>{title.toUpperCase()}</h2>
        <h3 className={styles.subheading}>1. What is a Computer Network?</h3>
        <p className={styles.text}>
          A computer network is a collection of interconnected devices that can
          communicate and share resources with each other. These devices can
          include computers, servers, printers, smartphones, and more.
        </p>
        <div className={styles.figure} aria-hidden="true" />
        <h3 className={styles.subheading}>2. Benefits of Computer Networks</h3>
        <ul className={styles.text}>
          <li>Resource sharing</li>
          <li>Communication</li>
          <li>Data sharing</li>
          <li>Centralized management</li>
          <li>Internet access</li>
        </ul>
      </article>
    </div>
  );
}
