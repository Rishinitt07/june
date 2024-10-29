import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const memories = [
  { date: "First Meeting", description: "We met at the ......., and you looked amazing!" },
  { date: "First photo", description: "Our pic at ....... was unforgettable." },
];

function Timeline() {
  return (
    <div className="h-screen bg-purple-200 text-center p-8">
      <h2 className="text-3xl font-bold mb-8">Our Memories</h2>
      {memories.map((memory, index) => (
        <motion.div
          key={index}
          className="mb-4 bg-white p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <h3 className="font-bold">{memory.date}</h3>
          <p>{memory.description}</p>
        </motion.div>
      ))}
      <Link to="/proposal">
        <button className="mt-8 px-6 py-3 bg-purple-500 text-white rounded-full shadow-lg">
          Final Message
        </button>
      </Link>
    </div>
  );
}

export default Timeline;
