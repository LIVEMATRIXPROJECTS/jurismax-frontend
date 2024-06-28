import React from "react";
import headerImg from "../../assets/searchtwo.jpeg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./header.css";

const Header = () => {
  const [text] = useTypewriter({
    words: [
      "REAL ESTATE FRAUDS ARE EVERYWHERE",
      "PROTECT YOURSELF FROM THE PROPERTY FRAUDS",
      "CIVIL LITIGATIONS CAN BREAK YOUR PEACE OF MIND ",
      "BETTER DECISIONS BETTER LIFE",
    ],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 40,
  });

  return (
    <div className="headerContainer">
      <div className="rightContainer">
        <h2>
          <span>{text}</span>
          <span style={{ color: "black" }}>
            <Cursor cursorStyle="|" />
          </span>
        </h2>
        <p className="Description">
          Title Search and Legal Opinion are like two faces to a coin of title
          which is very crucial subject when dealing with real estate property
          transactions which becomes essential action for every
          individual/business during their lifetime. Getting complete Title
          Search and Accurate opinion on the real estate property ensures a
          peace of mind and protects from landing into an unwanted civil
          litigations and disputes. Title search includes the process of
          scrutinizing all link documents relating to the property and comparing
          them with certified documents available or ascertained from the public
          records portals or any other mediums and checking the sanctity of
          documents and understanding the true title of the property. Title is
          defined as true a legal ownership of the property who holds the
          property.A legal opinion on immovable property is a formal written
          document prepared by a legal expert, usually a lawyer or a team of
          lawyers, providing an assessment of the legal aspects and implications
          related to a specific piece.It aims to provide clarity and guidance to
          individuals or entities involved in transactions or disputes
          concerning immovable property, helping them make informed decisions
          and mitigate legal risks...
        </p>
      </div>
      <div className="leftContainer">
        <div className="left">
        <img src={headerImg} alt="" className="img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
