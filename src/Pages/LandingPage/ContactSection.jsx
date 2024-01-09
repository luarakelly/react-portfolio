import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [input, setInput] = useState({
    fname:'',
    lname:'',
    email:'',
    phoneNumber:'',
    topic:'',
    message:'',
    sent:false,
  });

  const [successMessage, setSuccessMessage] = useState('');

  //handle inputs
  const handleFname = (e) => {
    setInput({
      ...input,
      fname:e.target.value
    })
  };

  const handleLname = (e) => {
    setInput({
      ...input,
      lname:e.target.value
    })
  };
  const handleEmail = (e) => {
    setInput({
      ...input,
      email:e.target.value
    })
  };
  const handlePhoneNumber = (e) => {
    setInput({
      ...input,
      phoneNumber:e.target.value
    })
  };
  const handleTopic = (e) => {
    setInput({
      ...input,
      topic:e.target.value
    })
  };
  const handleMessage = (e) => {
    setInput({
      ...input, //This ensures that you preserve the existing state and only update the field that corresponds to the input being changed.
      message:e.target.value
    })
  };

  //Submit
  const formSubmit= (e)=>{
    e.preventDefault();

    let data= {
      fname: input.fname,
      lname:input.lname,
      email:input.email,
      phoneNumber:input.phoneNumber,
      topic:input.topic,
      message:input.message,
    }

    // http requests
    axios.post('http://localhost:5000/api/contactForm', data)
    .then(res=>{
      setInput({sent:true})
      setSuccessMessage('Message sent successfully! Check your email for further details.');
    }).catch(()=>{
      console.log('message not sent');
    })
    
  }

  //For resetting initial state


    return (
      <section id="ContactSection" className="contact--section">
        <div>
          <h2>Contact Me</h2>
          <p className="text-lg">
            Let's together transform ideas into web applications!
          </p>
        </div>
        <form 
          action="" 
          method="POST" 
          className="contact--form--container"
          onSubmit={formSubmit}
        >
          <div className="container">
            <label htmlFor="fname" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="fname"
                id="fname"
                required
                value={input.fname}
                onChange={handleFname}
              />
            </label>
            <label htmlFor="lname" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="lname"
                id="lname"
                required
                value={input.lname}
                onChange={handleLname}
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
                value={input.email}
                onChange={handleEmail}
              />
            </label>
            <label htmlFor="phoneNumber" className="contact--label">
              <span className="text-md">Phone number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="phoneNumber"
                id="phoneNumber"
                value={input.phoneNumber}
                onChange={handlePhoneNumber}
              />
            </label>
          </div>
          <label htmlFor="topic" className="contact--label">
            <span className="text-md">Choose a topic</span>
            <select 
              name="topic" 
              id="topic" 
              className="contact--input text-md"
              value={input.topic}
              onChange={handleTopic}
            >
              <option>Select One...</option>
              <option>Looking for a web developer.</option>
              <option>Interested in partneship.</option>
              <option>Other.</option>
            </select>
          </label>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              name="message"
              id="message"
              rows="8"
              placeholder="Type your message..."
              value={input.message}
              onChange={handleMessage}
            />
          </label>
          <div>
            <button className="btn btn-primary contact--form--btn">Submit</button>
          </div>
        </form>
        {successMessage && (
        <div className="success-message">
          <p>{successMessage}</p>
        </div>
        )}
      </section>
    );
  }