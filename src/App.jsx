import { Navigate, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage.jsx';
import NoteDetailPage from './pages/NoteDetailPage.jsx';
import SignInPage from './pages/SignInPage.jsx';
import UploadPage from './pages/UploadPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/notes" element={<DashboardPage />} />
      <Route path="/notes/:noteId" element={<NoteDetailPage />} />
      <Route path="/my-notes" element={<DashboardPage title="My Notes" />} />
      <Route path="/favorites" element={<DashboardPage title="Favorites" />} />
      <Route path="/trash" element={<DashboardPage title="Trash" />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="*" element={<Navigate to="/sign-in" replace />} />
    </Routes>
  );
}
