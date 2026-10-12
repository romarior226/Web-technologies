import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button.jsx';
import FormField from '../ui/FormField.jsx';
import styles from './SignInPage.module.css';

export default function SignInPage() {
  const navigate = useNavigate();

  // No authentication yet: the form only opens the dashboard.
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/notes');
  };

  return (
    <main className={styles.page}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Sign In</h1>
        <FormField id="email" label="Email" type="email" />
        <FormField id="password" label="Password" type="password" />
        <Button type="submit">Sign In</Button>
      </form>
      <footer className={styles.footer}>Study Notes Hub</footer>
    </main>
  );
}
