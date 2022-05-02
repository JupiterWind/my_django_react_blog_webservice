import React, { useState, useEffect } from 'react';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    try {
      fetch('http://127.0.0.1:8000/api/blog/')
        .then((res) => res.json())
        .then((posts) => setPosts(posts));
    } catch (e) {
      console.log(e);
    }
  }, [posts]);

  return (
    <div>
      {posts.map((item) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <span>{item.content}</span>
        </div>
      ))}
    </div>
  );
};

export default Home;
