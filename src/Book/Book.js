import React from 'react'
import '../Style/Book.css'

const Book = (props) => {
  return (
    <div className='Book'>
      <h1>{props.bookName}</h1>
      <h4>Author: {props.author}</h4>
      <p>{props.description}</p>
      <input type="text" onChange={props.inputName}/>
      <button onClick={props.delete}>Delete</button>
    </div>
  )
}

export default Book