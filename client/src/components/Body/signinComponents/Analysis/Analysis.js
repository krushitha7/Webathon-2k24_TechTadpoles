import React from 'react'

function Analysis() {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="row ">
                
                

                <div className="card shadow col-12">
                    <h1 className="p-3">SCORE:0-4</h1>
                    <div className="card-body">
                        
                        <p>You are under minimal anxiety state.<br></br>
                        Minimal anxiety levels foster a calm and balanced state of mind.</p>
                        
                    </div>
                </div>

                <div className="card shadow col-12">
                    <h1 className="p-3">SCORE:5-9</h1>
                    <div className="card-body">
                        <p>Anxiety is a natural response to stress, but when it begins to interfere with daily life or causes excessive worry, it may indicate mild anxiety.​

                            <br></br>Navigating mild anxiety with resilience and self-awareness.​</p>
                        
                        <ol>
                         <li>Practice Relaxation Techniques</li>
                        <li>Stay Active
                        </li>
                        <li>Challenge Negative Thoughts
                        </li>
                        <li>Seek Support and Self-Care
                        </li>
                        </ol>
                    </div>
                </div>

                <div className="card shadow col-12">
                    <h1 className="p-3">SCORE:10-14</h1>
                    <div className="card-body">
                        <p>You are under moderate anxiety state.
                            <br></br>
                            Coping with moderate anxiety: Finding strength through life's ups and downs.
                        </p>
                        <ol>
                            <li>
                                Identify Triggers
                            </li>
                            <li>
                                Practice Relaxation Techniques
                            </li>
                            <li>
                                Seek Support
                            </li>
                            <li>
                                Establish Healthy Habits
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>




    
    </div>
  )
}

export default Analysis