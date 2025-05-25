import React, { useState } from 'react';

export default function WelcomePage({ onStart, onExit }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center justify-start p-6">
      {/* Top Bar with Animated Menu */}
      <div className="relative w-full flex justify-between items-center bg-sky-300 p-4 rounded-t-xl">
        <h1 className="text-3xl font-bold text-blue-900">DeepLearn</h1>

        <div className="relative">
          <button onClick={toggleMenu} className="space-y-1 focus:outline-none">
            <div className="w-6 h-1 bg-blue-800 rounded"></div>
            <div className="w-6 h-1 bg-blue-800 rounded"></div>
            <div className="w-6 h-1 bg-blue-800 rounded"></div>
          </button>

          {/* Animated Dropdown Menu */}
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
                alert('DeepLearn helps you explore deepfake and AI ethics in a fun, interactive way!');
                setShowMenu(false);
              }}
              className="w-full text-left px-4 py-2 text-sm hover:bg-blue-100"
            >
              ❓ About
            </button>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="w-full max-w-4xl mt-8 text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-2">Welcome to DeepLearn!</h2>
        <p className="text-lg font-semibold text-blue-900 mb-4">
          Become a deepfake and AI expert!
        </p>
      </div>

      {/* Image + Form Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-yellow-50 p-6 rounded-lg shadow-md w-full max-w-4xl mt-4">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/Welcome.png" alt="Welcome illustration" className="w-full max-w-md h-auto" />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <form
            className="flex flex-col gap-4 w-full max-w-sm"
            onSubmit={(e) => {
              e.preventDefault();
              onStart();
            }}
          >
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-3 rounded-md border border-blue-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-3 rounded-md border border-blue-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="p-3 rounded-md border border-blue-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="p-3 rounded-md border border-blue-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 text-white font-bold py-3 rounded-md hover:bg-orange-600 transition"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
