import React from 'react';
import Overlay from './components/ui/Overlay';
import CustomCursor from './components/ui/CustomCursor';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <Overlay />
    </div>
  );
}

export default App;
