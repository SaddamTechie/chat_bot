import './App.css';
import {  useState } from 'react';
import MarkdownComponent from './Components/MarkdownComponent';
import Sidebar from './Components/Sidebar';
import { FaArrowRight } from 'react-icons/fa';
require('dotenv').config();


function App() {
    const apiKey = process.env.REACT_APP_API_KEY
    
    console.log('B4.this')
    const urL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`

    
    const [query,setQuery] = useState('');
    const [loading,setLoading] = useState(false);
    const [chats,setChats] = useState([]);

    let idCounter = 0;




  async function generateContent(){
    if(query.trim()===''){
      return
    }
    setLoading(true)
    console.log(apiKey)
    const data = {"contents":[{"parts":[{"text":query}]}]}
    const response = await fetch(urL,{
      method:'POST',
      'Content-Type':'application/json',
      body:JSON.stringify(data)
    })
    if(response.ok){
      const data = await response.json()
      const question = query
      const queryResponse = data.candidates[0].content.parts[0].text;

      const newChat = {
        key:idCounter++,
        query:question,
        response:queryResponse
      }

      setLoading(false)
      setQuery('')
      setChats(chats => [...chats,newChat ]);
      
    }
    
  }
  
 
  



  
  return (
    <div className="dark:bg-main-dark dark:text-dark-theme-text  bg-main text-light-theme-text">
    <div className="flex h-screen">
       <Sidebar />
        <main className="w-4/5 p-4 overflow-y-auto">
          {/*<button className='bg-slate-500' onClick={generateContent}>Generate</button>*/}
      {chats.length >0?
      <>
        {chats.map((chat)=>(
        <div key={chat.id}>
        <div className='p-2 text-lg font-semibold shadow-lg mt-10'>
          <h3 className='p-2'>{chat.query}</h3>
        </div>
        <MarkdownComponent markdownContent={chat.response} />
        </div>
      ))}
      <div className='relative'><input type='text' onChange={(e)=>setQuery(e.target.value)} className='h-16 rounded-lg sticky bottom-2 pl-5 mt-3   w-full dark:bg-gray-700 shadow-lg dark:text-dark-theme-text' placeholder='Ask Follow Up' /><FaArrowRight onClick={generateContent} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'/></div>
      {loading?
    <div className="h-10 w-full animate-bounce rounded-md mt-4 bg-gray-500"></div>  : <span></span>  }
      </>
      :

      <div className=''>
        <div className=''>
        <h3 className='font-semibold text-lg'>Where Knowledge Begins</h3>
        <div className='relative'><input type='text' onChange={(e)=>setQuery(e.target.value)} className='h-16 rounded-lg sticky bottom-2 pl-5 mt-3   w-full dark:bg-gray-700 shadow-lg dark:text-dark-theme-text' placeholder={`Ask anything...`} /><FaArrowRight onClick={generateContent} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'/></div>
        {loading?
      <div class="h-10 w-full animate-bounce rounded-md mt-4 bg-gray-500"></div> :<span></span> }
        </div>
      </div>
     
      }
        </main>
    </div>
</div>
  );
}

export default App;

