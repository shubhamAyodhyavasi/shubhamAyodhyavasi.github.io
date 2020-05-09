import React from 'react';
import './App.scss';
import { HomePage } from './pages'
import { TopHeader, Header, Cursor } from './components';
function App() {
  return (
    <div className="App">
      <Cursor />
      <TopHeader />
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
