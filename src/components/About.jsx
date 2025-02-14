import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-md mt-10">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">About Us</h2>
      <p className="text-gray-700 text-lg text-center">
        Welcome to the News Aggregator App! Our mission is to provide you with the latest and most relevant news from multiple sources
        in one place. Stay updated with real-time news, tailored to your interests and preferred language.
      </p>
      <p className="text-gray-600 mt-4 text-center">
        This project is built using React, Firebase for authentication, and the NewsData.io API for fetching news articles.
        We aim to make news browsing seamless and enjoyable for users worldwide.
      </p>
    </div>
  );
};

export default AboutUs;
