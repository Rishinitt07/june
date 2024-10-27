// import React from 'react';
// import { motion } from 'framer-motion';

// function ProposalPage() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-red-200 text-center">
//       <motion.h1
//         className="text-4xl font-bold text-gray-800"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1 }}
//       >
//         Will You Be Mine?
//       </motion.h1>
//       <div className="mt-8 flex space-x-4">
//         <motion.button
//           className="px-6 py-3 bg-green-500 text-white rounded-full"
//           whileHover={{ scale: 1.1 }}
//           onClick={() => alert("Yes! 💖")}
//         >
//           Yes
//         </motion.button>
//         <motion.button
//           className="px-6 py-3 bg-red-500 text-white rounded-full"
//           whileHover={{ scale: 1.1 }}
//           onClick={() => alert("Maybe someday! 😊")}
//         >
//           No
//         </motion.button>
//       </div>
//     </div>
//   );
// }

// export default ProposalPage;




import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ProposalPage() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  // const moveNoButton = () => {
  //   const randomX = Math.floor(Math.random() * 300) - 200; // Random position within a range
  //   const randomY = Math.floor(Math.random() * 300) - 200;
  //   setNoButtonPosition({ x: randomX, y: randomY });
  // };
  const moveNoButton = () => {
    const randomX = Math.floor(Math.random() * window.innerWidth) - window.innerWidth / 2;
    const randomY = Math.floor(Math.random() * window.innerHeight) - window.innerHeight / 2;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-200 text-center">
      <motion.h1
        className="text-4xl font-bold text-gray-800"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        Will You Be Mine?
      </motion.h1>
      <div className="mt-8 flex space-x-4">
        <motion.button
          className="px-6 py-3 bg-green-500 text-white rounded-full"
          whileHover={{ scale: 1.1 }}
          onClick={() => alert("Yes! 💖")}
        >
          Yes
        </motion.button>
        <motion.button
          className="px-6 py-3 bg-red-500 text-white rounded-full"
          whileHover={{ scale: 1.1 }}
          animate={noButtonPosition}
          onHoverStart={moveNoButton} // This triggers the position change
        >
          No
        </motion.button>
      </div>
    </div>
  );
}

export default ProposalPage;

