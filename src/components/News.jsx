import React from 'react';

const News = ({ data }) => {
  if (data.length === 0) {
    return <p className="text-center mt-6 text-gray-500">No news articles found.</p>;
  }

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {data.map((article, index) => (
        <div key={index} className="bg-white border rounded shadow-md overflow-hidden">
          <img
            src={article.image_url || "https://via.placeholder.com/300"}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{article.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{article.pubDate}</p>
            <p className="text-sm text-gray-700 mb-4">{article.description}</p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
