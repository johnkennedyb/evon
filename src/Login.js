import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [photo, setPhoto] = useState(null);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleToggle = () => {
    setIsLoginForm(!isLoginForm);
    setUsername('');
    setEmail('');
    setPhoneNumber('');
    setPhoto(null);
    setPassword('');
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create FormData object and append form data
      const formData = new FormData();
      formData.append('username', username);
      formData.append('email', email);
      formData.append('phoneNumber', phoneNumber);
      formData.append('image', photo); // 'image' is the key for the photo data
      formData.append('password', password);

      // Send signup request to backend
      const response = await fetch('http://localhost:4100/signup', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json();
        setErrorMessage(data.message || 'Signup failed.');
        return;
      }

      // Redirect to home page after successful signup
      window.location.href = '/home';
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

<<<<<<< HEAD
  // const validateFileType = (file) => {
  //   const acceptedTypes = ['image/jpeg', 'image/png'];
  //   return file && acceptedTypes.includes(file.type);
  // };
=======
  //const validateFileType = (file) => {
   // const acceptedTypes = ['image/jpeg', 'image/png'];
   // return file && acceptedTypes.includes(file.type);
 // };
>>>>>>> 64f8890bc5788fbd220dd3d8f0d99b19bd8ade57

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  };

  return (
    <div>
      <Header />
      {/* Main Content */}
      <div className="container p-5 mt-5">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-md-6 border p-4 rounded">
            <h2 className="mb-4">{isLoginForm ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              {!isLoginForm && (
                <div className="mb-3">
                  <input
                    type="file"
                    className="form-control"
                    accept=".jpg,.jpeg,.png"
                    onChange={handlePhotoChange}
                  />
                </div>
              )}
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errorMessage && <div className="alert alert-danger mb-3">{errorMessage}</div>}
              <button className="btn btn-primary mr-2 me-2" type="submit">
                {isLoginForm ? 'Login' : 'Sign Up'}
              </button>
              <button className="btn btn-secondary" type="button" onClick={handleToggle}>
                {isLoginForm ? 'Switch to Sign Up' : 'Switch to Login'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
