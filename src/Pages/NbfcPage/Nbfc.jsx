// import React from 'react'
// import {useRef} from "react"
// import emailjs from '@emailjs/browser';

// function Form() {
//     const form=useRef()
//     const handleSubmit=(e)=>{
//         e.preventDefault();

//         emailjs
//         .sendForm('service_yf2sqqy', 'template_wuycqce',form.current, {
//           publicKey: 'HttQN9Y18hDMZRJP4',
//         })
//         .then(
//           () => {
//             console.log('SUCCESS!');
//           },
//           (error) => {
//             console.log('FAILED...', error.text);
//           },
//         );
//         e.target.reset()
//     }
//   return (
  
//     <div className="workSubContainer_right">
//          <form ref={form} onSubmit={handleSubmit}>
//            <h1 className="heading3">Request</h1>
//            <div className="input-Container">
//              <input type="text" placeholder="Name" />
//              <input type="text" placeholder="Phone Number" />
//              <input type="text" placeholder="Subject"/>
//              </div>
//              <button className="button_book" type="submit">Submit</button>
//          </form>
//        </div>
//   )
// }

// export default Form

import React from 'react'
import { useRef} from "react"
import emailjs from '@emailjs/browser';
import "./Nbfc.css"

function Nbfc() {
  const form=useRef()
  const sendEmail = (e) => {
     e.preventDefault();
  
      emailjs.sendForm('service_yf2sqqy', 'template_wuycqce', form.current, 'HttQN9Y18hDMZRJP4')
        .then((result) => {
          alert('submitted successfully!')
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        
    };

  return (
    <div className="nbfc-heading">
      <h1>NBFC</h1>
      <p>Are you a NBFC / Bank /offering loan against property products???<br/>
         Getting Delayed Property Title Reports from external Panel Advocates??<br/>
         Try our solution for faster and continuous delivery...
      </p>
        <div className="container">
         <form ref={form} onStalledCapture={sendEmail}>
          <h1>Submit your Request</h1>
          <div><input type="text" placeholder='Full Name' name="user_name" className="input1" required/></div>
          <div><input type="Email" placeholder='Email' name="user_email" className="input1" required/></div>
          <div><input type="text" placeholder='subject' className="input1" required/></div>
          {/* <div><textarea name="message"  cols="30" rows="10" ></textarea></div> */}
          <div><button onSubmit={sendEmail}>Submit Here</button></div>
         </form>
        </div>
    </div>
  )
}

export default Nbfc;
