import { HomePage } from './pages';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;

