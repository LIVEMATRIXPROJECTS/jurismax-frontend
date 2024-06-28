// // import React from "react";
// // import "./pagenotfound.css";

// // import pageIMG from "../../assets/404.svg";
// // import { Link } from "react-router-dom";
// // const PageNotFound = () => {
// //   return (
// //     <div className="pageNotFoundContainer">
// //       <div className="pageChild">
// //         <img src={pageIMG} alt="" />
// //         <h1>PAGE NOT FOUND</h1>
// //         <Link to="/">
// //           <button className="pageNot_button">Back to home</button>
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default PageNotFound;

// import React from "react";
// import img2 from "../../assets/service.jpeg";
// import img1 from "../../assets/howwedo.jpeg";
// import { Link } from "react-router-dom";
// import "./LegalPage.css";


// function LegalPage() {
//   return (
//     <div className="legal-containers">
//       <div className="legal-container">
//         <h1 className="title">Technical Report</h1>
//       </div>

//       <div className="legal-cards">
//         <div className="legal-card">
//           <h1 className="heading">What is Legal Opinion?</h1>
//           <div className="card">
//             <p className="paragraph">A legal opinion on immovable property is a formal written document prepared by a legal expert, usually a lawyer or a team of lawyers, providing an assessment of the legal aspects and implications related to a specific piece.It aims to provide clarity and guidance to individuals or entities involved in transactions or disputes concerning immovable property, helping them make informed decisions and mitigate legal risks.</p>
//             <p>When Buying a new property or when Lenders considers a property against loans, Property Technical Valuation Report drafted by expert civil engineers, experienced surveyors plays a crucial role that includes technical Specifications includes total Area, its Plinth Areas, Stairs, Corridors, elevations, Age of Building and other Amenities attached therewith, which all determines the true price of the building. The accurate technical assessment aids the lenders / buyers while decision making.
//                 The other aspect of technical valuation includes analysis of building plan and comparing it with the physical measurements of building to find any deviations from the actual plan otherwise deviations may incur legal implications.
//             </p>
//             <img src={img2} alt="" className="image1"/>
//           </div>
//         </div>

//         <div className="legal-card">
//           <h1 className="heading">Why it is so important?</h1>
//           <div className="card">
//             {/* <p className="paragraph">A legal opinion on immovable property is a formal written document prepared by a legal expert, usually a lawyer or a team of lawyers, providing an assessment of the legal aspects and implications related to a specific piece.It aims to provide clarity and guidance to individuals or entities involved in transactions or disputes concerning immovable property, helping them make informed decisions and mitigate legal risks.</p> */}
//             <ul className="card1">
//               <li> Understanding the Chain of Title</li>
//               <li> Analyzing Risk </li>
//               <li> Adherence to Title Due Deligence </li>
//               <li> Estimating Future Disputes</li>
//               <li> Due Diligence</li>
//               <li> Confidence/Assurance on Transaction </li>
//             </ul>
//             <img src={img1} alt="" className="image2"/>
//           </div>
//         </div>
//         {/* </div> */} 
//         {/* <div className="legal-cards"> */}
//         <div className="legals-card">
//           <h1 className="heading">Why Our LegalTitle.in?</h1>
//           <p className="paragraph1">TittleLegal has a profound experience in title due diligence throughout its journey and the dedicated
//             team can definitely assist the clients to deliver the exceptional legal opinions on the properties over
//             the internet so that the clients get a clarity even sitting at the home and can make better decisions further.
//           </p>
//           <div className="cards">
//             <div className="icons">
//              <img src="https://previews.123rf.com/images/valentint/valentint1611/valentint161105131/66183394-online-services-icon-online-services-website-button-on-white-background.jpg" alt="" className="image"/>
//              <h1 className="title-heading1">Flexibility</h1>
//             </div>
            
//             {/* <div className="image-card"> */}
//             <div className="icons">
//              <img src="https://www.pngall.com/wp-content/uploads/5/Weight-Balance-PNG-High-Quality-Image.png" alt="" className="image"/>
//              <h1 className="title-heading1">Unbiased</h1>
//             </div>

//             <div className="icons">
//              <img src="https://www.kindpng.com/picc/m/94-949697_high-speed-drawing-of-speed-clock-hd-png.png" alt="" className="image"/>
//              <h1 className="title-heading1">Velocity</h1>
//             </div>

//             <div className="icons">
//              <img src="https://static.thenounproject.com/png/4737422-200.png" alt="" className="image"/>
//              <h1 className="title-heading1">Veracity</h1>
//             </div>
//             </div>
//         </div>
//         {/* </div> */}

//         <div className="legals-card">
//           <h1 className="heading">How We Do it?</h1>
//           <div className="cards">
        
//           <Link to={"/File"}>
          
//            <img src={img1} alt="" className="image1"/>
//            <h1 className="heading1">Document Collection</h1>
//           </Link>

//           <Link>
//             <img src="https://icml.com.au/wp-content/uploads/2021/01/5-Steps-for-Better-Report-Writing_345_6070134_0_14102490_500.jpg" alt="" className="image1"/>
//             <h1 className="heading1">Report Preparation</h1>
//           </Link>

//           <Link>
//             <img src="https://www.livemint.com/lm-img/img/2023/03/27/600x338/retail_1556079531016_1679895510395_1679895510395.jpg" alt="" className="image1"/>
//             <h1 className="heading1">Report Delivery</h1>
//           </Link>
//           </div>
//         </div>
//       </div>
//       <div style={{textAlign:"center"}}>
//       <Link to={"/payment"}>
//        <button className="button1" >Proceed</button>
//       </Link>
//       </div>
//     </div>
//   );
// }

// export default LegalPage;

import React from 'react'
import "./LegalPage.css"

function LegalPage() {
  return (
    <div>
      <h1 className="tech-heading">Technical Report</h1>
      <p className="tech-paragraph">When Buying a new property or when Lenders considers a property against loans, Property Technical Valuation Report drafted by expert civil engineers, experienced surveyors plays a crucial role that includes technical Specifications includes total Area, its Plinth Areas, Stairs, Corridors, elevations, Age of Building and other Amenities attached therewith, which all determines the true price of the building. The accurate technical assessment aids the lenders / buyers while decision making.
       The other aspect of technical valuation includes analysis of building plan and comparing it with the physical measurements of building to find any deviations from the actual plan otherwise deviations may incur legal implications.
     </p>
    </div>
  )
}

export default LegalPage

