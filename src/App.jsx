import React from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import FishingScene from './components/FishingScene';
import MemoryGallery from './components/MemoryGallery';
import TimeCounter from './components/TimeCounter';

function App() {
  return (
    <div className="min-h-screen bg-forest-green text-starlight selection:bg-love-red selection:text-white">
      <Hero />

      <Story />
      <FishingScene />
      <MemoryGallery />
      <TimeCounter />

      <footer className="w-full py-8 text-center text-starlight/50 font-handwriting text-lg">
        <p>Created with love for you &bull; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
