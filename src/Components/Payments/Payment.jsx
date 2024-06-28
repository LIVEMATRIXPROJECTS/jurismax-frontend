// import React from 'react'
// import "./Payment.css";

// function Payment() {
//   return (

//   <div className="form-container">
//     <form>
//       <h1 className="form-heading">Submit your Request</h1>
//         <div className="input-Container">
//           <input type="text" placeholder="Name" className="input1"/>
//           <input type="text" placeholder="Phone Number" className="input1" />
//           <input type="text" placeholder="Subject" className="input1"/>
//           </div>
//         <div className="button_book">Submit</div>
//     </form>
//   </div>
//   )
// }

// export default Payment

// import React,{useState} from 'react'
// import "./Email.css";
// import emailjs from '@emailjs/browser';

// function Email() {

//     const [name,setName]=useState("");
//     const [email,setEmail]=useState("");
//     const [subject,setSubject]=useState("");
//     const [message,setMessage]=useState("");

//     const handleSubmit=(e)=>{
//         e.preventDefault();

//         const serviceId="service_yf2sqqy";
//         const templateId="template_wuycqce";
//         const publickey="HttQN9Y18hDMZRJP4";

//         const templateParams={
//             form_name:name,
//             form_email:email,
//             to_name:"soujanya",
//             message:message,
//         };

//         emailjs.send(serviceId,templateId,templateParams,publickey)
//           .then((response)=>{
//             console.log("email sent successfully",response);
//             setName("");
//             setEmail("");
//             setMessage("");
//           })
//           .catch((error)=>{
//             console.log("Error sending Email",error);
//           });
//     }

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="emailForm">
//         <div>
//         <input
//         type="text"
//         placeholder='Name'
//         value={name}
//         className="input"
//         onChange={(e)=>setName(e.target.value)}
//         />
//         </div>
        
//         <div>
//        <input
//         type="email"
//         placeholder='Email'
//         value={email}
//         className="input"
//         onChange={(e)=>setEmail(e.target.value)}
//         />
//         </div>

//       <div>
//        <input
//         type="text"
//         placeholder='Subject'
//         value={subject}
//         className="input"
//         onChange={(e)=>setSubject(e.target.value)}
//         />
//         </div>
       
//        <div>
//        <textarea id="myTextarea" name="myTextarea" rows="4" cols="50" className='input1'>
//         </textarea>
//         </div>
//         <button type="submit">Send Email</button>
//       </form>
//     </div>
//   )
// }

// export default Email



import { useRef} from "react"
import React from 'react'
import "./Payment.css";
import emailjs from '@emailjs/browser';

const Email = () => {
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
        <div className="containers">
        <div className="container">
          <form ref={form} onSubmit={sendEmail} >
            
          <h1 className="form-heading">Submit your Request</h1>
            <div><input type="text"   placeholder='Full Name'  name='user_name' className="input1" required/></div>
            <div><input type="Email" placeholder='Email' name='user_email' className="input1"  required/></div>
            <div><input type="text"   placeholder='Subject' name='Subject' className="input1"    required/></div>
            {/* <div><textarea name="message"  cols="30" rows="10"></textarea></div> */}
            <div><button onSubmit={sendEmail}>Submit Here</button></div>
               
          </form>
        </div>
        </div>
   
  )
}

export default Email

