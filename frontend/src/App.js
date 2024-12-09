import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Cards from './components/Cards';
import Login from './pages/Login';
import Signup from './pages/Signup';
import unionIcon from './assets/Union.png';
import Navbar from './pages/Navbar'

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
  ]
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/login"
              element={<Login />}
            />
            <Route 
              path="/signup"
              element={<Signup />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      <Header/>
      <div className="cards-grid">
        {pscard.map((card,index) => (
          <Cards
          key={index}
          title = {card.title}
          icon = {card.icon}
          description = {card.description}
          buttonText = {card.buttonText}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
