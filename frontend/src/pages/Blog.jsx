import { blogs } from "../data/blogs";
import "../styles/blog.css";

function Blog() {
  return (
    <div className="container">
      <h2 className="page-title">Blog</h2>
      <p className="page-subtitle">Helpful mental health topics, written simply and softly.</p>

      <div className="grid blog-grid">
        {blogs.map((item) => (
          <article key={item.title} className="card blog-card">
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;