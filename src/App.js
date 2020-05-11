import React from 'react';
import './App.scss';
import { HomePage } from './pages'
import { TopHeader, Header, Cursor } from './components';
import { connect } from 'react-redux'
import { setTheme, toggleThemeMode } from './services/redux/actions'
import classNames from 'classnames'
class App extends React.Component {
  componentDidMount(){
    const {
      isSetByUser
    } = this.props
    const isDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    if(!isSetByUser){
      setTheme({
        mode: isDark ? "dark" : "light"
      })
    }
  }
  render(){
    return (
      <div className={classNames("App", {
        "bg-dark": this.props.themeMode === "dark"
      })}>
        <Cursor />
        <TopHeader />
        <Header />
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
