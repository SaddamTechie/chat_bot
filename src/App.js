import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MarkdownComponent from './Components/MarkdownComponent';
import Sidebar from './Components/Sidebar';


function App() {
    //const apiKey = env.apiKey
    const urL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDiKMvjIdLqJW49Kg4RrufhGje_4aTb8FI'

    
    const [text,setText] = useState('Explain How AI works');
    const [textContent,setTextContent] = useState('');

    const markdownContent1 = `
# Welcome to My Page

This is a placeholder for your content.

## Example Code Snippet

Here’s an example of how you might implement a simple AI model using Python:

\`\`\`python
import numpy as np
from sklearn.linear_model import LinearRegression

# Sample data
X = np.array([[1], [2], [3], [4]])
y = np.array([2, 3, 5, 7])

# Create and train the model
model = LinearRegression()
model.fit(X, y)

# Make predictions
predictions = model.predict(np.array([[5]]))
print("Prediction for input 5:", predictions)
\`\`\`
`;

const markdownContent2 = `
# Welcome to My Page

This is a placeholder for your content.

## Example Code Snippet

Here’s an example of how you might implement a simple AI model using Python:

\`\`\`python
import numpy as np
from sklearn.linear_model import LinearRegression

# Sample data
X = np.array([[1], [2], [3], [4]])
y = np.array([2, 3, 5, 7])

# Create and train the model
model = LinearRegression()
model.fit(X, y)

# Make predictions
predictions = model.predict(np.array([[5]]))
print("Prediction for input 5:", predictions)
\`\`\`
`;




/*
  async function generateContent(){
    const data = {"contents":[{"parts":[{"text":text}]}]}
    const response = await fetch(urL,{
      method:'POST',
      'Content-Type':'application/json',
      body:JSON.stringify(data)
    })
    if(response.ok){
      const data = await response.json()
      // const firstCandidate = data.candidates[0]; // Access the first candidate
      // const textContent = firstCandidate.content.parts[0].text; // Access the text content
      // const role = firstCandidate.content.role; // Access the role
      // const finishReason = firstCandidate.finishReason; // Access the finish reason
      // const safetyRating = firstCandidate.safetyRatings[0]; // Access the first safety rating
      // const safetyCategory = safetyRating.category; // Access the category of safety rating
      // const safetyProbability = safetyRating.probability; // Access the probability
      //console.log()
      setTextContent(data.candidates[0].content.parts[0].text)
    }
    
  }
  */

  
  return (
    <div className="">
      <button>Toggle</button>
      <div>
        <Sidebar />
      </div>
      <div className='right-2'>
      {/*<button className='bg-slate-500' onClick={generateContent}>Generate</button>*/}
      <MarkdownComponent markdownContent={markdownContent1} />
      <MarkdownComponent markdownContent={markdownContent2} />
      </div>
    </div>
  );
}

export default App;

