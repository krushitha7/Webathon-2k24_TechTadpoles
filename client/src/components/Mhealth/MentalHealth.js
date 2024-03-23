import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function MentalHealth() {

  let navigate=useNavigate()

  const questions = [
    {
      question: 'What is the capital of France?',
      options: [
        { text: 'London', marks: 1 },
        { text: 'Berlin', marks: 2 },
        { text: 'Paris', marks: 5 }, // Correct answer
        { text: 'Madrid', marks: 3 },
      ]
    },
    {
      question: 'What is the meaning of life?',
      options: [
        { text: 'To enjoy', marks: 4 },
        { text: 'To be happy', marks: 5 }, // Correct answer
        { text: 'There is none', marks: 1 },
        { text: 'Love', marks: 3 },
      ]
    },
    {
      question: 'how was your experience',
      options: [
        { text: '*', marks: 0 },
        { text: '**', marks: 0 }, // Correct answer
        { text: '***', marks: 0 },
        { text: '****', marks: 0 },
      ]
    }
    // Add more questions here
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [totalScore, setTotalScore] = useState(0);
  let [page,setPage]=useState(false)
  
  


  const handleOptionChange = (event) => {
    setSelectedOption(parseInt(event.target.value));
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      const selectedOptionMarks = questions[currentQuestion].options[selectedOption].marks;
      setTotalScore(totalScore + selectedOptionMarks);
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null); // Reset selected option for next question
    } else {
      alert('Please select an option before submitting.');
    }
  };

  const handleFinishTest = () => {
    setPage(true)
  };

  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className='container'>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card shadow text-center" style={{ backgroundColor: '#A9A9A9' }}>
            {page===false?(<>
            <h1>MCQ Test</h1>
            <h2>Your Score : ${totalScore}</h2>
            <div className='card-body'>
              {questions.length > 0 ? (
                <>
                  <p>Question {currentQuestion + 1} of {questions.length}</p>
                  <p>{questions[currentQuestion].question}</p>
                  <ul>
                    {questions[currentQuestion].options.map((option, index) => (<>
                      <li key={index}>{option.text}</li>
                      
                        <input
                          type="radio"
                          value={index}
                          checked={selectedOption === index}
                          onChange={handleOptionChange}
                          className='form-control mb-4'
                        />
                        </>
                    ))}
                  </ul>
                  <button className='my-3' onClick={handleSubmit} disabled={selectedOption === null}>
                    {isLastQuestion ? '' : 'Submit Answer'}
                  </button>
                  {isLastQuestion && (
                    <button className='btn btn-success my-3' onClick={handleFinishTest}>See Your Score</button>
                  )}
                </>
              ) : (
                <p>No questions available.</p>
              )}
            </div>
            </>):(
              <div className="card-body">
                <h1>Your Score is {totalScore}</h1>
                <button className='btn btn-info my-3' onClick={()=>navigate('/analysis')}>Analyze your result</button>
                <button className='btn btn-info my-3' onClick={()=>navigate('/chat-box')}>Chat with friends</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentalHealth;
