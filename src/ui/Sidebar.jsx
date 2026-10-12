import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const NAV_ITEMS = [
  { label: 'Dashboard', to: '/notes', icon: '🏠' },
  { label: 'My Notes', to: '/my-notes', icon: '📄' },
  { label: 'Favorites', to: '/favorites', icon: '⭐' },
  { label: 'Trash', to: '/trash', icon: '🗑️' },
  { label: 'Upload', to: '/upload', icon: '⬆️' },
];

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          {item.icon} {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
