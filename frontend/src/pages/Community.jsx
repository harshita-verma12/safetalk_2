import { useState } from "react";
import "../styles/community.css";

function Community() {
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([
    { name: "Anonymous", text: "Today I rested instead of pushing too hard, and that felt okay." },
    { name: "Anonymous", text: "I shared how I feel with a friend and felt lighter afterward." }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!post.trim()) return;
    setPosts([{ name: "Anonymous", text: post }, ...posts]);
    setPost("");
  };

  return (
    <div className="container">
      <h2 className="page-title">Community</h2>
      <p className="page-subtitle">Share anonymously, encourage others, and feel connected.</p>

      <div className="card panel">
        <form onSubmit={handleSubmit}>
          <textarea className="textarea" placeholder="Share your story or a helpful tip..." value={post} onChange={(e) => setPost(e.target.value)} />
          <button className="btn" type="submit">Post Anonymously</button>
        </form>
      </div>

      <div className="grid community-grid">
        {posts.map((item, index) => (
          <div key={index} className="card community-post">
            <strong>{item.name}</strong>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Community;