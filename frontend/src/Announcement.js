import React from "react";
import "./announcement.css";

const Announcement = () => {
  const announcements = [
    {
      date: "15 Dec 2024",
      text: "An intense showdown where IIT Guwahati hostels compete in diverse events across tech, management, and innovation. From robotics to finance, Kriti challenges skills, teamwork, and creativity, with one hostel emerging as Kriti Champions.",
    },
    {
      date: "14 Dec 2024",
      text: "Kriti fosters innovation through workshops and competitive coding, encouraging collaboration and skill development among students.",
    },
    {
      date: "13 Dec 2024",
      text: "Join us for the robotics event showcasing groundbreaking tech projects by the brightest minds of IIT Guwahati.",
    },
    {
      date: "12 Dec 2024",
      text: "The finance challenge will test your analytical and decision-making skills. Participate to prove your mettle.",
    },

    {
      date: "12 Dec 2024",
      text: "The finance challenge will test your analytical and decision-making skills. Participate to prove your mettle.",
    },
  ];


  return (
    <div className="announcements-container" id="announcements">
      <h1>Announcements</h1>
      {announcements.map((announcement, index) => (
        <div className="announcement" key={index}>
          <div className="date">{announcement.date}</div>
          <div className="content">
            <p>{announcement.text}</p>
          </div>
         
        </div>
         
      ))}
      <div className="white-line"></div> {/* The white line */}
    </div>
    
  );
  
};

export default Announcement;