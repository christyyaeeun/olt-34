import React from 'react';
import { Link } from 'react-router-dom';

export default function Posts({ posts = [] }) {
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Link to={`/post/${post.id}`}key={post.id}>
          <div key={post.id}>
            <h1>{post.name}</h1>
            <img alt="post" src={post.image} />
          </div>
        </Link>
      ))}
    </>
  );
}

