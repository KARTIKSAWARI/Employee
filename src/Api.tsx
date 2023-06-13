import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ApiData: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
    <Box boxShadow={3} borderRadius={8} padding={2} maxWidth={1000}>
      <h4>API Data</h4>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        posts.map(post => (
          <div key={post.id} style={{ marginBottom: '16px' }}>
            <h5>User ID = {post.userId}</h5>
            <h5>ID = {post.id}</h5>
            <h5>Title = {post.title}</h5>
            <p>{post.body}</p>
            <hr></hr>
          </div>
        ))
      )}
    </Box>
    </div>
  );
};

export default ApiData;
