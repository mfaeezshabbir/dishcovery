/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';

const SingleArticle = ({ articles }) => {
  const { slug } = useParams();
  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <div>
      <h2 className="mb-2 text-2xl font-bold">{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
};

export default SingleArticle;
