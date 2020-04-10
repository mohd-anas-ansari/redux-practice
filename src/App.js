import React from 'react';
import './App.css';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      <PostForm />
      <Posts />
    </div>
  );
}

export default App;
