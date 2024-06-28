// import React from 'react'
// import "./work.css";

// function Work() {
//   return (
//     <div className="workContainer">
//       <h1 className="heading">HOW WE WORK</h1>
//       <div className="cards">
//       <div className="cardContainer">
//         <h1 className="heading2">Get Started</h1>
//         <p>
//          Submit Your Properties Documents Via Email, Whatsapp To Our
//          Excecutive!
//         </p>
//       {/* <div className="button_book">Book Your Service</div> */}
//       </div>
//       <div className="cardContainer">
//         <h1 className="heading2">Get Reported</h1>
//         <p>
//           Our Legal Experts Scrutinize Your Documents Carefully And
//           Prepare A Detailed Report Within Days And Get Back To You
//         </p>
//       {/* <div className="button_book">Book Your Service</div> */}
//       </div>
//       </div>
//       {/* <div style={{textAlign:"center"}}className="button_book">Book Your Service</div> */}
//       <button className="button_book">Book Your Service</button>

//       <div className="workSubContainer_right">
//         <form>
//           <h1 className="heading3">Quick Enquiry</h1>
//           <div className="input-Container">
//             <input type="text" placeholder="Name" />
//             <input type="text" placeholder="Phone Number" />
//             <input type="text" placeholder="Subject"/>
//             </div>
//             <button className="button_book">Submit</button>
//         </form>
//       </div>
//       </div>

//   )
// }

// export default Work

import React from "react";
import img1 from "../../assets/howwedo.jpeg";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./work.css";

function Work() {
  return (
    <div className="title-container">
      <h1 className="title-heading">Why it is so Important?</h1>
      <div className="title-card">
        {/* <h1 className="title-heading">Why it is so Important?</h1> */}
        <div className="title-card1">
          <ol className="title-card2">
            <li> Understanding the Chain of Title</li>
            <li> Analyzing Risk</li>
            <li> Adherence to Title Due Deligence </li>
            <li> Estimating Future Disputes</li>
            <li> Due Diligence</li>
            <li> Confidence/Assurance on Transaction </li>
          </ol>
          <div>
           <img src={img1} alt="" className="image1" />
          </div>
        </div>
      </div>

      <h1 className="title-heading">Why Our LegalTitle.in?</h1>
      <div className="title-card">
        {/* <h1 className="title-heading">Why Our LegalTitle.in?</h1> */}
        <p className="title-paragraph">
          LegalTitle has a profound experience in title due diligence throughout
          its journey and the dedicated team can definitely assist the clients
          to deliver the exceptional legal opinions on the properties over the
          internet so that the clients get a clarity even sitting at the home
          and can make better decisions further.
        </p>
        <div className="title-cards">
          <div className="icons">
            <img
              src="https://previews.123rf.com/images/valentint/valentint1611/valentint161105131/66183394-online-services-icon-online-services-website-button-on-white-background.jpg"
              alt=""
              className="title-image1"
            />
            <h1 className="title-heading1">Flexibility</h1>
          </div>

          {/* <div className="image-card"> */}
          <div className="icons">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Weight-Balance-PNG-High-Quality-Image.png"
              alt=""
              className="title-image1"
            />
            <h1 className="title-heading1">Unbiased</h1>
          </div>

          <div className="icons">
            <img
              src="https://www.kindpng.com/picc/m/94-949697_high-speed-drawing-of-speed-clock-hd-png.png"
              alt=""
              className="title-image1"
            />
            <h1 className="title-heading1">Velocity</h1>
          </div>

          <div className="icons">
            <img
              src="https://static.thenounproject.com/png/4737422-200.png"
              alt=""
              className="title-image1"
            />
            <h1 className="title-heading1">Veracity</h1>
          </div>
        </div>
      </div>

      <div className="workContainer">
        <h1 className="heading">HOW WE WORK</h1>
        <div className="icon-container">
          {/* <hr className="custom-line"/> */}
          <FiSearch size={46} className="container-icon1" />
          <MdKeyboardDoubleArrowDown size={46} className="container-icon2"/>
          <TiTickOutline size={46} className="container-icon3" />
        </div>
        <div className="cards">                                                                                                
          <div className="cardContainer">
            <h1 className="heading2">Get Started</h1>
            <p>
              Submit Your Properties Documents Via Email, Watsapp,facebook,
              Instagram,twitter To Our particular Excecutive!
            </p>
          </div>

          <div className="cardContainer">
            <h1 className="heading2">Draft preparation</h1>
            <p>
              Our Legal Experts Scrutinize Your Documents Carefully And Prepare
              A Detailed Report Within Days And Get Back To You
            </p>
          </div>

          <div className="cardContainer">
            <h1 className="heading2">Get Reported</h1>
            <p>
              Our Legal Experts Scrutinize Your Documents Carefully And Prepare
              A Detailed Report Within Days And Get Back To You
            </p>
          </div>
        </div>
        <Link to="/payment">
          <div style={{textAlign:"center"}}>
            <button className='form-button'>Raise Request</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Work;
