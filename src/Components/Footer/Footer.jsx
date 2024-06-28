// import React from "react";
// import "./footer.css";
// // import logo from "../../assets/logo.png";
// import legal from "../../assets/legal.png";

// import {
//   MdOutlineMyLocation,
//   MdLocalPhone,
//   MdOutlineHourglassTop,
// } from "react-icons/md";
// import { IoMailOpen } from "react-icons/io5";
// import { FaRegHandPointRight } from "react-icons/fa6";
// import {
//   IoLogoInstagram,
//   IoLogoFacebook,
//   IoLogoWhatsapp,
//   IoLogoYoutube,
//   IoLogoLinkedin,
// } from "react-icons/io";

// const Footer = () => {
//   return (
//     <div className="footerContainer">
//       <div className="footerTop">
//         <div className="footerLeft">
//           <img src={legal} alt="logo" className="logo1" />
//           {/* <div className="getTouchContianer">
//             <h2>Get In Touch</h2>
//             <ul>
//               <li>
//                 <MdOutlineMyLocation />
//                 &nbsp; &nbsp; Deshaipet Road, Warangal
//               </li>
//               <li>
//                 <MdLocalPhone /> &nbsp; &nbsp;+91 9030297337
//               </li>
//               <li>
//                 <IoMailOpen />
//                 &nbsp; &nbsp; legaltitle.in@gmail.com
//               </li>
//               <li>
//                 <MdOutlineHourglassTop />
//                 &nbsp; &nbsp; Mon - Fri: 9AM - 10PM
//               </li>
//             </ul>
//           </div>  */}
          
//         <div className="footerBottom">
//         <p>
//           By subscribing to our news letter service, you will recieve links
//           about recent subject articles published by professionals.
//         </p>
//         <div className="subscription">
//           <input type="text" placeholder="Your Name" />
//           <input type="text" placeholder="Your Email" />
//           <div className="button_subscribe">Subscribe</div>
//         </div>
//         <p className="rights">© 2022 legalTitle.in All rights reserved</p>
//       </div>
//       </div> 
//       <div>
     
//           {/* <div className="getTouchContianer">
//             <h2>Get In Touch</h2>
//             <ul>
//               <li>
//                 <MdOutlineMyLocation />
//                 &nbsp; &nbsp; Deshaipet Road, Warangal
//               </li>
//               <li>
//                 <MdLocalPhone /> &nbsp; &nbsp;+91 9030297337
//               </li>
//               <li>
//                 <IoMailOpen />
//                 &nbsp; &nbsp; legaltitle.in@gmail.com
//               </li>
//               <li>
//                 <MdOutlineHourglassTop />
//                 &nbsp; &nbsp; Mon - Fri: 9AM - 10PM
//               </li>
//             </ul>
//           </div>  */}
//         </div>
//         <div className="footerMiddle">
//         <p>
//             legalTitle.in is a team of Legal Specialists dedicated to filter out
//             the possible risks and pitfalls and guide you in verifying the title
//             of property. our Opinion matters a lot in your decision making and
//             make you more confident about the property you wish to transact.<br/>
//             LEGALTITLE.IN is a product of JURISMAX LEGAL STUDIO, a subsidiary of
//             LIVEMATRIX INFORMATION SOLUTIONS PRIVATE LIMITED.
//           </p> 
//           </div>
//           {/* <div className="getTouchContianer">
//             <h2>Get In Touch</h2>
//             <ul>
//               <li>
//                 <MdOutlineMyLocation />
//                 &nbsp; &nbsp; Deshaipet Road, Warangal
//               </li>
//               <li>
//                 <MdLocalPhone /> &nbsp; &nbsp;+91 9030297337
//               </li>
//               <li>
//                 <IoMailOpen />
//                 &nbsp; &nbsp; legaltitle.in@gmail.com
//               </li>
//               <li>
//                 <MdOutlineHourglassTop />
//                 &nbsp; &nbsp; Mon - Fri: 9AM - 10PM
//               </li>
//             </ul>
//           </div> */}
//           {/* <div className="usefulLinkContainer">
//             <h2>Useful Links</h2>
//             <ul>
//               <li>
//                 <FaRegHandPointRight />
//                 &nbsp; &nbsp; Title Investigation Report
//               </li>
//               <li>
//                 <FaRegHandPointRight /> &nbsp; &nbsp; About us
//               </li>
//             </ul>
//           </div> */}
//         <div className="footerRight">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15178.30734018965!2d79.609362!3d17.9984142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3345d808e5ba8d%3A0x615a2e7cce48840!2sJURISMAX%20LEGAL%20STUDIO!5e0!3m2!1sen!2sin!4v1705931721316!5m2!1sen!2sin"
//             width="300"
//             height="300"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//           <ul>
//             <li>
//               <IoLogoFacebook className="socialIcons" />
//             </li>
//             <li>
//               <IoLogoInstagram className="socialIcons" />
//             </li>
//             <li>
//               <IoLogoWhatsapp className="socialIcons" />
//             </li>
//             <li>
//               <IoLogoYoutube className="socialIcons" />
//             </li>
//             <li>
//               <IoLogoLinkedin className="socialIcons" />
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from 'react'
import "./footer.css";
// import logo from "../../assets/logo.png";
import legal from "../../assets/legal.png";
 import {
   IoLogoInstagram,
   IoLogoFacebook,
   IoLogoWhatsapp,
   IoLogoYoutube,
   IoLogoLinkedin,
 } from "react-icons/io";
 import { IoMailOpen } from "react-icons/io5";
  import {
   MdOutlineMyLocation,
   MdLocalPhone,
   MdOutlineHourglassTop,
 } from "react-icons/md";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerTop">
        <div className="footerLeft">
           <img src={legal} alt="logo" className="logo1" />
           <p>
             legalTitle.in is a team of Legal Specialists dedicated to filter out
             the possible risks and pitfalls and guide you in verifying the title
             of property. our Opinion matters a lot in your decision making and
             make you more confident about the property you wish to transact.<br/>
            LEGALTITLE.IN is a product of JURISMAX LEGAL STUDIO, a subsidiary of
            LIVEMATRIX INFORMATION SOLUTIONS PRIVATE LIMITED.
          </p>
          <div className="footerRight">
           <iframe
             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15178.30734018965!2d79.609362!3d17.9984142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3345d808e5ba8d%3A0x615a2e7cce48840!2sJURISMAX%20LEGAL%20STUDIO!5e0!3m2!1sen!2sin!4v1705931721316!5m2!1sen!2sin"
             width="260"
             height="210"
             style={{ border: 0 }}
             allowFullScreen=""
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
           <ul>
             <li>
               <IoLogoFacebook className="socialIcons" />
             </li>
             <li>
               <IoLogoInstagram className="socialIcons" />
             </li>
             <li>
               <IoLogoWhatsapp className="socialIcons" />
             </li>
             <li>
               <IoLogoYoutube className="socialIcons" />
             </li>
             <li>
               <IoLogoLinkedin className="socialIcons" />
             </li>
           </ul>
         </div> 
        </div>

        <div className="footerLeft">
          <div className="getTouchContainer">
             <h2>Get In Touch</h2>
             <ul>
               <li>
                 <MdOutlineMyLocation />
                 &nbsp; &nbsp; Deshaipet Road, Warangal
               </li>
               <li>
                 <MdLocalPhone /> &nbsp; &nbsp;+91 9030297337
               </li>
               <li>
                 <IoMailOpen />
                 &nbsp; &nbsp; legaltitle.in@gmail.com
               </li>
               <li>
                 <MdOutlineHourglassTop />
                 &nbsp; &nbsp; Mon - Fri: 9AM - 10PM
               </li>
             </ul>
           </div> 
        <div className="footerBottom">
         <p className="paragraph">
           By subscribing to our news letter service, you will recieve links<br/>
           about recent subject articles published by professionals.
         </p>
         <div className="subscription">
           <input type="text" placeholder="Your Name" />
           <input type="text" placeholder="Your Email" />
           <div className="button_subscribe">Subscribe</div>
         </div>
         <p className="rights">© 2022 legalTitle.in All rights reserved</p>
       </div>
      </div> 
      </div>
      </div>
    
  )
}

export default Footer


