import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-200 text-center">
      <motion.h1 
        className="text-4xl font-bold text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        A Special Message Just for You
      </motion.h1>
      <p className="mt-4 text-lg text-gray-700">Click below to begin!</p>
      <Link to="/quiz">
        <button className="mt-8 px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg">
          Start the Journey
        </button>
      </Link>
    </div>
  );
}

export default LandingPage;
