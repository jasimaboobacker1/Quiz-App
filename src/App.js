import React, { useState } from 'react';


export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: ' How many letters are there in the English alphabet?',
			answerOptions: [
				{ answerText: '20', isCorrect: false },
				{ answerText: '42', isCorrect: false },
				{ answerText: '26', isCorrect: true },
				{ answerText: '12', isCorrect: false },
			],
		},
		{
			questionText: 'Rainbow consist of how many colours?',
			answerOptions: [
				{ answerText: '5', isCorrect: false },
				{ answerText: '7', isCorrect: true},
				{ answerText: '3', isCorrect: false },
				{ answerText: '12', isCorrect: false },
			],
		},
		{
			questionText: 'Name the National river of India?',
			answerOptions: [
				{ answerText: 'Ganga', isCorrect: true },
				{ answerText: 'Periyar', isCorrect: false },
				{ answerText: 'Yamuna', isCorrect: false },
				{ answerText: 'Bharatha Puzha', isCorrect: false },
			],
		},
		{
			questionText: 'What is the capital of India?',
			answerOptions: [
				{ answerText: 'Kerala', isCorrect: false },
				{ answerText: 'Gujarat', isCorrect: false },
				{ answerText: 'Karnataka', isCorrect: false },
				{ answerText: 'New Delhi', isCorrect: true },
			],
		},
		{
			questionText: ' Which colour symbolises peace?',
			answerOptions: [
				{ answerText: 'White', isCorrect: true },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Green', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: false },
			],
		},
		{
			questionText: 'How many sides are there in a triangle?',
			answerOptions: [
				{ answerText: '8', isCorrect: false },
				{ answerText: '1', isCorrect: false },
				{ answerText: '3', isCorrect: true },
				{ answerText: '5', isCorrect: false },
			],
		},
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	

	const handleReset = () => {
	      setCurrentQuestion(0);
		  setScore(0);
		  setShowScore(0);

	  };

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
    <>
     <center> <h1>Quiz App</h1></center>
  		<div className='app'>
      
  			{showScore ? (
  				<div className='score-section'>
  					You scored {score} out of {questions.length}
					<button onClick={handleReset}>Start Again</button>
  				</div>
  			) : (
  				<>
  					<div className='question-section'>
  						<div className='question-count'>
  							<span id='q'>QUESTION {currentQuestion + 1}</span>/{questions.length}
  						</div>
  						<div className='question-text'>{questions[currentQuestion].questionText}</div>
  					</div>
  					<div className='answer-section'>
  						{questions[currentQuestion].answerOptions.map((answerOption) => (
  							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
  						))}
  					</div>
  				</>
  			)}
  		</div>
    </>
	);
}
