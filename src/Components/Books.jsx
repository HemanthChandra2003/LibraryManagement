import React, { useState } from 'react'
import '../assets/styles/books.css'
import { Await } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Books = () => {

  let [books,setBooks] = useState([])
  const navigate = useNavigate(); 

  let fetchBookApi = async()=>{
    let apiData = await fetch('http://localhost:4000/books')
    let jsonData = await apiData.json()
    setBooks(jsonData)
  }


  useEffect(() => {
  fetchBookApi();
}, []);


let deleteBook=(id)=>{
  let bool = window.confirm("Do you really really want to delete the book?")
  bool
  ? fetch(`http://localhost:4000/books/${id}`,{method : 'DELETE'})
  : 'Your book is not deleted'
}

  let readBook = (id) => {
    navigate(`/portal/readbook/${id}`); //
  };


  let addtoCart=(book)=>{
    let cartBool=window.confirm('Do you want add this book to cart')
    if(cartBool){
    fetch(`http://localhost:4000/cartitems`, {
      method : 'POST' ,
      headers : {'Content-type' : 'application/json'},
      body : JSON.stringify(book)
    })
  }
    else{
      alert('Book is not added')
    }
  }


  return (
    <>
        <div className="books">
          <h2>Books Data</h2>
          <div className="container">
            {
              books.map((elem)=>{
                let {id,title,thumbnailUrl,authors,categories} = elem
                return(
                  <>
                  <div className="card">
                    <div className="image1">
                      <img src={thumbnailUrl} alt="" />
                    </div>
                    <div className="title">{title}</div>
                    <div className="aurthor">{authors}</div>
                    <div className="categories">{categories}</div>
                    <div className="del">
                      <button onClick={()=>deleteBook(id)}>Delete</button>
                    </div>

                    <div className="readbook">
                      <button onClick={()=>readBook(id)}>Read</button>
                    </div>
                  <button className='cart' onClick={()=>addtoCart(elem)}>
                        Add to Cart
                      </button>


                  </div>
                  </>
                )
              })
            }
          </div>
        </div>
    </>
  )
}

export default Books

