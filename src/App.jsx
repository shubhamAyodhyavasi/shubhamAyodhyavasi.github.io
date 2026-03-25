import { useTheme } from './contexts/ThemeContext';
import { HomePage } from './pages';
import { Navbar } from './components';
import './App.css';

const App = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
      }`}
    >
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;

