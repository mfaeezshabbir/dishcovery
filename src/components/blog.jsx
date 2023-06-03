/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Blog = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.id} className="my-8">
          <h2 className="mb-2 text-2xl font-bold">{article.title}</h2>
          <p>{article.content}</p>
          <Link to={`/blog/${article.slug}`} className="font-bold text-blue-500">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
