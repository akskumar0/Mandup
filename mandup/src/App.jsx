import React from 'react';
import Navbar from './components/Navbar';
import Venues from './components/Venues';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header>
        <Navbar />
      </header>

      <main>
        <Venues />
      </main>
    </div>
  );
};

export default App;