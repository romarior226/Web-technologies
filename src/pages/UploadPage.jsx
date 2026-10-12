import AppLayout from '../ui/AppLayout.jsx';
import Button from '../ui/Button.jsx';
import FormField from '../ui/FormField.jsx';
import styles from './UploadPage.module.css';

export default function UploadPage() {
  // No upload logic yet: only stops the page from reloading.
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <AppLayout>
      <h1 className={styles.title}>Upload Lecture Note</h1>
      <form className={styles.card} onSubmit={handleSubmit}>
        <FormField id="title" label="Title" />
        <FormField id="description" label="Description" />
        <FormField id="tags" label="Tags" />
        <FormField id="file" label="PDF file" type="file" />
        <Button type="submit">⬆ Upload</Button>
      </form>
    </AppLayout>
  );
}
