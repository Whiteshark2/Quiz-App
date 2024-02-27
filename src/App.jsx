import React, { useState } from 'react';
import quizData from './data';
import './App.css'

const App= () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleAnswerOptionClick = () => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption('');
    } else {
      setShowScore(true);
    }
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='container'>
    <div className='quiz'>
      {showScore ? (
        <div className='score-section'>
          <h1 style={{ color: score >= 3 ? 'green' : 'red' }}>
          You scored {score} out of {quizData.length}
        </h1>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{quizData.length}
            </div>
            <div className='question-text'>{quizData[currentQuestion].question}</div>
          </div>
          <div className='answer-section'>
            {quizData[currentQuestion].options.map((option) => (
              <div key={option}>
                <input
                  type="radio"
                  id={option}
                  name="answer"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          <button onClick={handleAnswerOptionClick}>Next</button>
        </>
      )}
   </div>
  </div>
  );
};

export default App;
