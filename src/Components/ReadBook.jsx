import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../assets/styles/readbook.css'


const ReadBook = () => {


    
    let params = useParams()
    let bookid = params.id
     console.log(bookid)

let [book,setBook] = useState([])

let fetchSingleBook = async () =>{
    let bookApi = await fetch(`http://localhost:4000/books/${bookid}`)
    
    let singleBook = await bookApi.json()
    setBook(singleBook);
}

fetchSingleBook()


let {title, thumbnailUrl, longDescription} = book

  return (
   <>
   <div className='readbook'>
        <div className="imag"><img src={thumbnailUrl} /></div>
        <div className="title">{title}</div>
        <div className="long">{longDescription}</div>
   </div>
   </>
  )
}

export default ReadBook
