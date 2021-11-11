
import React,{useState} from 'react';
import './App.css';
import Parent from './Parent';
import Purecomponents from './Purecomponents';
import Themechange from './Themechange';
import { ThemeContext } from './ThemeContext';

function App() {

  return (
    <div>
      <ThemeContext>
      <Themechange>
       </Themechange>
          
      </ThemeContext>
       </div>
  );
}
export default App;
