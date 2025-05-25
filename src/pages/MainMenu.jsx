import React, { useState } from 'react';

export default function MainMenu({ onExit }) {
  const [view, setView] = useState('creator');
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="min-h-screen flex flex-col bg-yellow-100">
      {/* Top Bar with Animated Menu */}
      <div className="relative w-full flex justify-between items-center bg-sky-300 p-4 rounded-t-xl">
        <h1 className="text-3xl font-bold text-blue-900">DeepLearn</h1>

        <div className="relative">
          <button onClick={toggleMenu} className="space-y-1 focus:outline-none">
            <div className="w-6 h-1 bg-blue-800 rounded"></div>
            <div className="w-6 h-1 bg-blue-800 rounded"></div>
            <div className="w-6 h-1 bg-blue-800 rounded"></div>
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute right-0 mt-2 w-40 bg-white border border-blue-300 rounded-lg shadow-lg z-10 transform transition-all duration-200 origin-top ${
              showMenu ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
            }`}
          >
            <button
              onClick={() => {
                onExit();
                setShowMenu(false);
              }}
              className="w-full text-left px-4 py-2 text-sm hover:bg-blue-100"
            >
              🔙 Exit to Home
            </button>
            <button
              onClick={() => {
                alert('This is the DeepLearn main menu — choose a mode to begin your AI journey!');
                setShowMenu(false);
              }}
              className="w-full text-left px-4 py-2 text-sm hover:bg-blue-100"
            >
              ❓ About
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar + Main View */}
      <div className="flex flex-1">
        {/* Sidebar with big round icon buttons */}
        <div className="w-40 bg-sky-300 p-4 flex flex-col items-center gap-6 text-white font-semibold">
          <button
            onClick={() => setView('creator')}
            className={`flex flex-col items-center gap-2 ${
              view === 'creator' ? 'text-yellow-200' : 'hover:text-yellow-200'
            }`}
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
              <img src="/CreativeIcon.png" alt="Creator" className="w-12 h-12" />
            </div>
            <span className="text-sm mt-1">Creator</span>
          </button>

          <button
            onClick={() => setView('detective')}
            className={`flex flex-col items-center gap-2 ${
              view === 'detective' ? 'text-yellow-200' : 'hover:text-yellow-200'
            }`}
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
              <img src="/DetectiveIcon.png" alt="Detective" className="w-12 h-12" />
            </div>
            <span className="text-sm mt-1">Detective</span>
          </button>

          <button
            onClick={() => setView('ethics')}
            className={`flex flex-col items-center gap-2 ${
              view === 'ethics' ? 'text-yellow-200' : 'hover:text-yellow-200'
            }`}
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md">
              <img src="/EthicalIcon.png" alt="Ethics" className="w-12 h-12" />
            </div>
            <span className="text-sm mt-1">Ethics</span>
          </button>
        </div>


        {/* Main Content Area */}
        <div className="flex-1 p-6 flex flex-col items-center justify-center">
          {view === 'creator' && (
            <>
              <h1 className="text-4xl font-bold text-orange-600 mb-2">Creator Mode</h1>
              <p className="text-lg text-blue-900 mb-4 text-center max-w-xl">
                Build your own deepfake! Try out the GAN builder, then explore “Time Machine” mode.
              </p>
              <img src="/Creation.png" alt="Creator" className="w-60 mb-4" />
              <div className="flex gap-4">
                <button className="bg-orange-500 text-white font-bold px-6 py-2 rounded-md">GAN Builder</button>
                <button className="bg-sky-400 text-white font-bold px-6 py-2 rounded-md">‘Time Machine’ Mode</button>
              </div>
            </>
          )}
          {view === 'detective' && (
            <>
              <h1 className="text-4xl font-bold text-orange-600 mb-2">Detective Mode</h1>
              <p className="text-lg text-blue-900 mb-4 text-center max-w-xl">
                Spot the deepfake! Detect the ‘Deepfake of the Day’, try a multiplayer challenge, and more.
              </p>
              <img src="/Detection.png" alt="Detective" className="w-60 mb-4" />
              <button className="bg-orange-500 text-white font-bold px-6 py-2 rounded-md">Deepfake of the Day</button>
            </>
          )}
          {view === 'ethics' && (
            <>
              <h1 className="text-3xl font-bold text-blue-900 mb-4">Would it be ethical to…?</h1>
              <img src="/Reflection.png" alt="Ethics" className="w-60 mb-4" />
              <div className="flex gap-4">
                <button className="bg-orange-500 text-white font-bold px-6 py-2 rounded-md">Create a Video</button>
                <button className="bg-cyan-600 text-white font-bold px-6 py-2 rounded-md">Make a Post</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
