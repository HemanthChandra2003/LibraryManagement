import React, { useRef } from 'react'
import '../assets/styles/landingpage.css'
import { useNavigate } from 'react-router-dom'

const Landingpage = () => {
    let formData=useRef()
    let navigate = useNavigate()

    let handleLogin=(e)=>{
        e.preventDefault()

        let emailField = formData.current[0]
        let pswdField = formData.current[1]

        let credentials ={
            email:'heman@gmail.com',
            password:'heman'
        }
        
        let {email,password}=credentials;
        let emailBool = emailField.value === email 
        let pswdBool =  pswdField.value  === password

        if(emailBool&&pswdBool){
            navigate('/portal/')
        }
        else{
            let errBorder = 'solid 4px red'
            emailField.style.border = errBorder
            pswdField.style.border = errBorder   
        }
    }
    
  return (
    <>
    
        <div className="landingpage">
            <div className="container">
                <form ref={formData} onSubmit={handleLogin}>
                    <h3>Sign in Page</h3>
                    <input type="email" placeholder='Enter your email address' />
                    <input type="password" placeholder='Enter your password' />

                    <button>Login</button>
                </form>
            </div>
        </div>
    
    </>
  )
}

export default Landingpage