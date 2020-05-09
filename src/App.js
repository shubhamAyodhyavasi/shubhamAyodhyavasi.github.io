import React from 'react';
import './App.scss';
import { HomePage } from './pages'
import { TopHeader, Header } from './components';
function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
