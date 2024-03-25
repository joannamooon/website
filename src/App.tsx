import React, { useState, useEffect } from "react";
import './App.css'

function App() {
  const name = "Joanna Moon";
  const about = "> $ About Me";
  const projects = "> $ Cool Stuff";
  const contact = "> $ Contact";
  const linkedin = "[LinkedIn]";
  const github = "[GitHub]";
  const email = "[Email]";
  const experiences = "> $ Experiences";
  const mode = "> $ Theme";
  const heart = "[heart]";
  const more = "[see more...]"
  const [theme, setTheme] = useState('light');
  useEffect(() => {
   
    document.body.className = theme;
  }, [theme]); 

  const toggleTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
  };

  return (
    <div className={`hello ${theme}`}>
        <h1>{name}</h1>
        <p>Computational Mathematics and Statistics @ UWaterloo</p>
        <p>Whether it's through predictive models or statistical analysis, I am committed to turning theoretical knowledge into practical applications.</p>
        <p>✨🍄🌱</p>
        <h5>{contact}</h5>
            <a href="https://www.linkedin.com/in/joannamoon05/" className="links">{linkedin}</a>
            <a href="https://github.com/joannamooon" className="links">{github}</a>
            <a href="mailto:y9moon@uwaterloo.ca" className="links">{email}</a>
        <h5><hr />{projects}</h5>
        <a href="https://joannamooon.github.io/ascii-heart/" className='links'>{heart}</a>
        <a href="https://github.com/joannamooon" className='links'>{more}</a>
        <h5><hr />{experiences}</h5>
        <p>{"- ios developer @ Zibis Inc."}</p>
        <p>{"- website developer @ MathSoc UWaterloo"}</p>
        <h5><hr />{mode}</h5>
        <div className="theme-switcher">
            <a href="#" onClick={(e) => { e.preventDefault(); toggleTheme('light'); }} className="links">[Light]</a>
            <a href="#" onClick={(e) => { e.preventDefault(); toggleTheme('dark'); }} className="links">[Dark]</a>
        </div>
    </div>
  );
}

export default App;
