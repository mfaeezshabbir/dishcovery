import { Route, Routes } from 'react-router-dom';
import Blog from '../components/blog';
import SingleArticle from '../components/article';

const articles = [
  {
    id: 1,
    title: 'First Article',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    slug: 'first-article',
  },
  // Add more articles here
];

const BlogPage = () => {
  return (
    <div>
      <h1 className="mb-8 text-4xl font-bold">Welcome to Our Blog</h1>
      <Routes>
        <Route exact path="/blog/*" element={<Blog articles={articles} />} />
        <Route path="/blog/:slug" element={<SingleArticle articles={articles} />} />
      </Routes>
    </div>
  );
};

export default BlogPage;
