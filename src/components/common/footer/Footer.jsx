import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>Learners Arena</h1>
            <span>Learning in the era of 4th Generation of Revolution</span>
            <p>Empowering our youth to become global leaders and successfull employees.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>Courses</li>
              <li>About</li>
              <li>Team</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Register</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          
          <div className='box last'>
            <h3>Contact Us?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Bahria University Lahore Campus, Civic Centre, Johar Town
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                03354370949
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@learnersarena.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      
    </>
  )
}

export default Footer
