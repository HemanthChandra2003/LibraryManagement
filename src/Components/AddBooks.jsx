import React, { useRef } from 'react'
import '../assets/styles/addbooks.css'

const AddBooks = () => {

  let formData = useRef()

  let handleSubmit = (e) => {
    e.preventDefault()

    let elements = formData.current.elements

    let newBook = {
      title: elements[0].value,
      thumbnailUrl: elements[1].value,
      authors: elements[2].value,
      categories: elements[3].value,
    }

    fetch('http://localhost:4000/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(newBook)
    })  
  }

  return (
    <>
      <div className="addbooks">
        <h2>Add Books</h2>
        <div className="formbox">
          <form ref={formData}>
            <input type="text" placeholder='Enter title' />
            <input type="text" placeholder='Enter image link' />
            <input type="text" placeholder='Enter Authors' />
            <input type="text" placeholder='Enter Categories' />
            <button onClick={handleSubmit}>Add Book</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddBooks
