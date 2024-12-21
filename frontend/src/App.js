import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and other necessary components
import Header from './components/Header';
import Cards from './components/Cards';
import About from './About';
import Navbar from './Navbar';
import unionIcon from './assets/Union.png';
import Announcement from './Announcement';
import Heading from './mediumprep/Heading';
import Card1 from './mediumprep/Card1';
import Icon from './assets/Download.png';
import Login from './login';
import AddUserForm from './AddUserForm';
import UploadGuidelines from './guideline';
import AdminLoginForm from './adminlogin';
import AdminPage from './admin'; // Assuming 'admin' is the AdminPage component
import FAQ from './faq'

function App() {


  

  
  const pscard = [
    {
      title: 'High Prep',
      description: 'In-depth demonstrations and extensive proof-of-concept work requiring 4–10 weeks of preparation, with considerable resource investment.',
      buttonText: 'See PS',
      icon: unionIcon,
    },
    {
      title: 'Mid Prep',
      description: 'In-depth demonstrations and extensive proof-of-concept work requiring 4–10 weeks of preparation, with considerable resource investment.',
      buttonText: 'See PS',
      icon: unionIcon,
    },
    {
      title: 'Low Prep',
      description: 'In-depth demonstrations and extensive proof-of-concept work requiring 4–10 weeks of preparation, with considerable resource investment.',
      buttonText: 'See PS',
      icon: unionIcon,
    },
    {
      title: 'No Prep',
      description: 'In-depth demonstrations and extensive proof-of-concept work requiring 4–10 weeks of preparation, with considerable resource investment.',
      buttonText: 'See PS',
      icon: unionIcon,
    },
  ];

  const mpcard = [
    {
      title: 'Software Devlopment',
      description1: 'by Coding Club',
      description2: 'Deadline : 24/2/2025',
      buttonText: 'Register',
      icon: Icon,
    },
    {
      title: 'Software Devlopment',
      description1: 'by Coding Club',
      description2: 'Deadline : 24/2/2025',
      buttonText: 'Register',
      icon: Icon,
    },
    {
      title: 'Software Devlopment',
      description1: 'by Coding Club',
      description2: 'Deadline : 24/2/2025',
      buttonText: 'Register',
      icon: Icon,
    },
    {
      title: 'Software Devlopment',
      description1: 'by Coding Club',
      description2: 'Deadline : 24/2/2025',
      buttonText: 'Register',
      icon: Icon,
    },
  ];

  return (
    <div className="App">
      <Router>
        {/* Set up routes for different pages */}
        <Routes>
          <Route path="/admin" element={<AdminPage />} /> {/* Admin page */}
          <Route path="/adminlogin" element={<AdminLoginForm />} /> {/* Admin login page */}
          <Route path="/" element={
            <>
              <Navbar />
             
             <About/>
              <Announcement />
              <FAQ/>
              <UploadGuidelines />
              <AddUserForm />
              <Header />
              <div className="cards-grid">
                {pscard.map((card, index) => (
                  <Cards
                    key={index}
                    title={card.title}
                    icon={card.icon}
                    description={card.description}
                    buttonText={card.buttonText}
                  />
                ))}
              </div>
              <Heading />
              <div className="card-grid">
                {mpcard.map((card, index) => (
                  <Card1
                    key={index}
                    title={card.title}
                    icon={card.icon}
                    description1={card.description1}
                    description2={card.description2}
                    buttonText={card.buttonText}
                  />
                ))}
              </div>
            </>
          } />
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
