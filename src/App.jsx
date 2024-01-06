import { useState } from "react";
import data from "./data";
import React from "react";
import {
  FaGolfBall,
  FaMountain,
  FaBookOpen,
  FaBinoculars,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, description } = data[index];
  return (
    <main>
      <article className="review"></article>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4>{name}</h4>
      <p>{job}</p>
      <p>{description}</p>
    </main>
  );
};
export default App;
