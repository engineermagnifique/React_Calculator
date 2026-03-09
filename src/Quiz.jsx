import React, { useState } from "react";
import Circle from "./components/Circle";

const Exam = () => {
  const [questions,setQuestions] = useState([
    { id: 1, question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris", score: 0 },
    { id: 2, question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars", score: 0 },
    { id: 3, question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"], answer: "William Shakespeare", score: 0 },
    { id: 4, question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "Pacific", score: 0 },
    { id: 5, question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Gold", "Iron", "Silver"], answer: "Oxygen", score: 0 },
    { id: 6, question: "In which country is the Great Pyramid of Giza?", options: ["Egypt", "Mexico", "India", "China"], answer: "Egypt", score: 0 },
    { id: 7, question: "What is the square root of 64?", options: ["6", "8", "10", "12"], answer: "8", score: 0 },
    { id: 8, question: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"], answer: "Leonardo da Vinci", score: 0 },
    { id: 9, question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide", score: 0 },
    { id: 10, question: "What is the fastest land animal?", options: ["Cheetah", "Lion", "Horse", "Leopard"], answer: "Cheetah", score: 0 },
  ]);
  const [score, setScore] = useState(0); 
  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [combinedAnswerAndSolutions,setCombinedAnswerAndSolutions] = useState({});
  const handleNext=(id)=>{
     setCurrentQuestion(questions.find(q=>q.id===id));
  }
  const handleMark = (id, option) => {
  setSelectedOptions(prev => ({
    ...prev,
    [id]: option
  }));

  if (questions.find(q => q.id === id).answer === option) {
    setScore(prev => prev + 1);
    console.log("correct");
    console.log(score);
  } else {
    console.log("fall here");
    setScore(prev => prev + 0);
  }
  console.log(selectedOptions);
};
const checkStatus=(id)=>{
  if(selectedOptions[id] === questions.find(q => q.id === id).answer){
    return 'correct';
  } else if(selectedOptions[id] !== undefined){
    return 'fail';
  } else {
    return '';
  }
}

const handleSubmit=()=>{
  console.log('Submitted');
  setCombinedAnswerAndSolutions(questions.reduce((acc, question) => {
    acc[question.id] = {
      question: question.question,
      selectedOption: selectedOptions[question.id],
      correctAnswer: question.answer,
      isCorrect: selectedOptions[question.id] === question.answer
    };
    return acc;
  }, {}));
  setIsSubmitted(true);
}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-md overflow-hidden">
        <div className="w-3/5 p-10 flex flex-col gap-6">
          <h1 className="text-xl font-semibold mb-6">Quiz Title</h1>
          <div className="flex flex-row py-2 px-4">
            <div className={`${score> questions.length/2 ? 'text-green-500' : 'text-red-500'} font-bold rounded`}>
              Score: {score}
            </div>
            <div className="ml-3">
              / {questions.length}
            </div>
          </div>
          <div className="flex flex-col gap-3 border-2 border-blue-500 p-4 rounded-lg">
            <h2>Question {currentQuestion.id}</h2>
            <p>{currentQuestion.question}</p>
          </div>
          {currentQuestion.options.map((option) => (
          <button
           key={option}
           onClick={() => handleMark(currentQuestion.id, option)}
           style={{
             backgroundColor:
                      selectedOptions[currentQuestion.id] === option &&
                      option === currentQuestion.answer
                        ? "green" : selectedOptions[currentQuestion.id] === option && option !== currentQuestion.answer
                        ? "red"
                         : "white", color: selectedOptions[currentQuestion.id] === option ? "white" : "black", border: "1px solid #ccc", padding: "10px", borderRadius: "5px", textAlign: "left"
           }}
           disabled={selectedOptions[currentQuestion.id] !== undefined}
           className="w-full text-left"
           >  
           {option}
           </button>
          ))}
          <div className="flex flex-row justify-center gap-8 mt-4">
            <button onClick={()=>handleNext(currentQuestion.id>1?currentQuestion.id-1:currentQuestion.id)} className={`shadow-md px-4 py-2 rounded  ${currentQuestion.id>1?'bg-blue-500':'bg-gray-200'}text-white hover:bg-gray-300`}>Prev</button>
            <button onClick={()=>currentQuestion.id===questions.length?handleSubmit():handleNext(currentQuestion.id<questions.length?currentQuestion.id+1:currentQuestion.id)} className={`shadow-md px-4 py-2 rounded ${currentQuestion.id<=questions.length?'bg-blue-500':'bg-gray-200'} text-white hover:bg-blue-600`}>{questions.length===currentQuestion.id?'Submit':'Next'}</button>
          </div>
        </div>
        <div className="w-2/5 flex flex-col bg-gray-50 p-6 items-center justify-center border-l border-gray-200">
          <div className="flex flex-row w-full justify-between mb-6">
            <p>Question 1/10</p>
            <p>Need Help</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {questions.map((num) => (
              <Circle 
                key={num.id} 
                prop={num.id} 
                status={checkStatus(num.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
      {isSubmitted && (
      <div className="">
        <p className="font-bold text-2xl py-5">The results from submission</p>
        {
          combinedAnswerAndSolutions && Object.entries(combinedAnswerAndSolutions).map(([id, data]) => (
            <div key={id} className={`border ${data.isCorrect ? 'bg-blue-500' : 'bg-red-500'} rounded-md shadow-md p-4 mb-2`}>
              <h3 className="font-bold">Question {id}: {data.question}</h3> 
              <p>Your Answer: {data.selectedOption || "No answer selected"}</p>
              <p>Correct Answer: {data.correctAnswer}</p>
              <p>Status: {data.isCorrect ? "Correct" : "Incorrect"}</p>
            </div>
          ))
        }
      </div>
      )}
      </div>
    </div>
  );
};

export default Exam;