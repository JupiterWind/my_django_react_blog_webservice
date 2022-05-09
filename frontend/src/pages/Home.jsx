import React, { useState, useEffect } from 'react';
import { call } from '../service/ApiService';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isAuthenticated, setAuthenticated] = useState(
    localStorage.getItem('ACCESS_TOKEN') ? true : false
  );

  useEffect(() => {
    try {
      call('/api/blog/').then((posts) => setPosts(posts));
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
