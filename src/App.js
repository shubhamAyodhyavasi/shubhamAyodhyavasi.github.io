import React from 'react';
import './App.scss';
import { HomePage } from './pages'
import { TopHeader, Header, Cursor } from './components';
import { connect } from 'react-redux'
import { setTheme } from './services/redux/actions'

class App extends React.Component {
  componentDidMount(){
    const {
      setTheme
    } = this.props
    const today = new Date().getHours();
    if (today >= 5 && today <= 19) {
      setTheme({
        mode: "light",
      })
    } else {
      setTheme({
        mode: "dark",
      })
    }

  }
  render(){
    return (
      <div className="App">
        <Cursor />
        <TopHeader />
        <Header />
        <HomePage />
      </div>
    );
  }
}
export default connect(null, {
  setTheme
})(App);
