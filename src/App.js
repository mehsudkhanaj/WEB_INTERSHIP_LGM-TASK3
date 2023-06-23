import React, { useState } from 'react';
import './App.css'; 
const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState([]);
  const [displayData, setDisplayData] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayData(true);
  };
  const handleClear = () => {
    setName('');
    setEmail('');
    setWebsite('');
    setImageLink('');
    setGender('');
    setSkills([]);
    setDisplayData(false);
  };
  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Student Enrollment Form</h1>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Website:</label>
          <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} required />

          <label>Image Link:</label>
          <input type="text" value={imageLink} onChange={(e) => setImageLink(e.target.value)} required />

          <label>Gender:</label>
          <div className="radio-buttons">
            <label>
              <input type="radio" value="male" checked={gender === 'male'} onChange={() => setGender('male')} />
              Male
            </label>
            <label>
              <input type="radio" value="female" checked={gender === 'female'} onChange={() => setGender('female')} />
              Female
            </label>
          </div>

          <label>Skills:</label>
          <div className="checkboxes">
            <label>
              <input type="checkbox" value="Java" checked={skills.includes('Java')} onChange={() => setSkills(prevSkills => [...prevSkills, 'Java'])} />
              Java
            </label>
            <label>
              <input type="checkbox" value="HTML" checked={skills.includes('HTML')} onChange={() => setSkills(prevSkills => [...prevSkills, 'HTML'])} />
              HTML
            </label>
            <label>
              <input type="checkbox" value="CSS" checked={skills.includes('CSS')} onChange={() => setSkills(prevSkills => [...prevSkills, 'CSS'])} />
              CSS
            </label>
          </div>

          <div className="button-container">
            <button type="submit">Enroll Student</button>
            <button type="button" onClick={handleClear}>Reset</button>
          </div>
        </form>
      </div>
      <div className={`card-container ${displayData ? 'show' : ''}`}>
        
        {displayData && (
          <div className="card">
            <img src={imageLink} alt="Profile" />
            <div>
              <p>Name: {name}</p>
              <p>Email: {email}</p>
              <p>Website: {website}</p>
              <p>Gender: {gender}</p>
              <p>Skills: {skills.join(', ')}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
