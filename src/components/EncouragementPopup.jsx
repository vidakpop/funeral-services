import React, { useState, useEffect } from 'react';

// Simulating an API for random comforting messages.
const comfortingMessages = [
  "We are deeply sorry for your loss. May peace find its way to your heart.",
  "In times like these, we wish you strength and healing. We’re here for you.",
  "May you find comfort in the loving memories and know that we are with you.",
  "Our thoughts and prayers are with you during this difficult time.",
  "Sending you love and light in your time of need. You’re not alone.",
  "May the love of those around you help you through the days ahead.",
  "Wishing you peace and comfort during this difficult time."
];

const getRandomMessage = () => {
  return comfortingMessages[Math.floor(Math.random() * comfortingMessages.length)];
};

const ComfortPopup = () => {
  const [message, setMessage] = useState(getRandomMessage());
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 10000); // Hide the popup after 10 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <div className="popup-header">
              <h1 className="popup-title">Sending You Comfort</h1>
            </div>
            <div className="popup-body">
              <p className="popup-message">{message}</p>
              <div className="popup-icons">
                <i className="popup-icon">💫</i>
                <i className="popup-icon">🌿</i>
              </div>
            </div>
            <button className="popup-close" onClick={() => setShowPopup(false)}>Close</button>
          </div>
          <video className="popup-video" autoPlay loop muted>
            <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      <style jsx>{`
        .popup-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          animation: fadeIn 1s ease-out;
        }

        .popup-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5;
          z-index: -1;
        }

        .popup-content {
          background: rgba(0, 0, 0, 0.6); /* Dark background to make text stand out */
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          text-align: center;
          max-width: 500px;
          width: 80%;
          transform: scale(1);
          transition: transform 0.5s ease-out;
          animation: popupIn 1s ease-out;
        }

        .popup-header h1 {
          color: white;
          font-size: 2rem;
          font-family: 'Roboto', sans-serif;
          margin-bottom: 1rem;
          animation: slideIn 1.5s ease-out;
        }

        .popup-body {
          color: white;
          font-size: 1.2rem;
          font-family: 'Roboto', sans-serif;
          margin-bottom: 1rem;
        }

        .popup-message {
          font-style: italic;
          margin-bottom: 1rem;
        }

        .popup-icons {
          font-size: 2rem;
          margin-top: 1rem;
          animation: popIn 1s ease-out;
        }

        .popup-icon {
          margin: 0 0.5rem;
        }

        .popup-close {
          background-color: #ff4081;
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1.2rem;
          transition: background-color 0.3s;
        }

        .popup-close:hover {
          background-color: #d4005f;
        }

        /* Animations */
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes popupIn {
          0% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes slideIn {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default ComfortPopup;
