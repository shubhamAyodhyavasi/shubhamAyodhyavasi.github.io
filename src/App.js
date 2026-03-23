import React from 'react';
import './App.css';
import { HomePage } from './pages'
import { Navbar } from './components';
import { connect } from 'react-redux'
import { setTheme, toggleThemeMode } from './services/redux/actions'

class App extends React.Component {
  componentDidMount(){
    const { isSetByUser } = this.props;
    const isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (!isSetByUser) {
      setTheme({ mode: isDark ? "dark" : "light" });
    }
    this.updateDarkClass(this.props.themeMode);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.themeMode !== this.props.themeMode) {
      this.updateDarkClass(this.props.themeMode);
    }
  }

  updateDarkClass(mode) {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  render() {
    const isDark = this.props.themeMode === 'dark';
    return (
      <div className={`min-h-screen font-sans transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'
      }`}>
        <Navbar />
        <HomePage />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    themeMode: state.theme.mode,
    isSetByUser: state.theme.isSetByUser
})
export default connect(mapStateToProps, {
  setTheme,
  toggleThemeMode
})(App);
