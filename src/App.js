// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDataForm from './components/UserDataForm';

function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-3">Firebase React Form</h1>
      <UserDataForm />
    </div>
  );
}

export default App;
