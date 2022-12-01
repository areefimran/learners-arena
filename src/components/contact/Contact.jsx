import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          
          <div className='right row'>
            <h1>Register yourself</h1>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                
              </div>
              <div className='flexSB'>
              <input type='email' placeholder='Email' />
              </div>
              <div className='flexSB'>
              <input type='date' />
              </div>
              <div className='flexSB'>
              <input type='password' placeholder="Password" />
              </div>
              <div className='flexSB'>
              <input type='password' placeholder="Confirm Password" />
              </div>
              <button className='primary-btn'>Register</button>
            </form>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
