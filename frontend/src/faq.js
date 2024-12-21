import React, { useState } from "react";
import "./faq.css";
import { GoPlus, GoDash } from "react-icons/go";

const Faq = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAnswer = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqData = [
    { question: "An intense showdown where IIT Guwahati hostels compete in diverse events across tech, management, and innovation. From robotics to finance, Kriti challenges skills, teamwork, and creativity, with one hostel emerging as Kriti Champions.", answer: "An intense showdown where IIT Guwahati hostels compete in diverse events across tech, management, and innovation. From robotics to finance, Kriti challenges skills, teamwork, and creativity, with one hostel emerging as Kriti Champions." },
    { question: "Who can participate?", answer: "All IIT Guwahati hostel boarders can participate across different events." },
    { question: "How are winners decided?", answer: "A panel of judges evaluates the performance to declare the overall winner." },
    { question: "When is Kriti held?", answer: "Kriti is typically held in the middle of the academic semester." },
  ];

  return (
    <div className="faq-container" id="faqs">
      <h1>Have any questions?</h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            <p>{item.question}</p>
            <span className="icon">{expanded === index ? <GoDash /> : <GoPlus />}</span>
          </div>
          {expanded === index && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Faq;
