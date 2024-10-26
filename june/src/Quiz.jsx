import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const questions = [
  { question: "What's my favorite color?", options: ["Red", "Blue", "Pink", "Green"], answer: "Blue" },
  { question: "Where did we first meet?", options: ["School", "Cafe", "Park", "Library"], answer: "Cafe" },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      window.location.href = "/timeline"; // Move to the timeline on completion
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-200 text-center">
      <h2 className="text-2xl font-bold">{questions[currentQuestion].question}</h2>
      <div className="mt-4">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className="m-2 px-4 py-2 bg-blue-500 text-white rounded-full"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
