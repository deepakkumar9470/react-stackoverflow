import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AllQuestions from './AllQuestions'
import axios from 'axios';
import { api } from '../../api'
import './Main.css'

const Main = () => {
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(api)
        setQuestions(res.data.items)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return (
    <div className='main'>
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          <Link>
            <button>Ask Question</button>
          </Link>
        </div>
      </div>
      <div className="questions">
        <div className="question">
         {questions.map((q) => (
           <AllQuestions key={q.id} question={q}/>
         ))}
        </div>
      </div>
    </div>
  )
}

export default Main