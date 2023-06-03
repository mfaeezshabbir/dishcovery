import { Routes, Route } from 'react-router-dom';
import BlogsPage from '../src/pages/blogs';
import SingleBlogPage from '../src/components/article';

const BlogRoutes = () => (
  <Routes>
    <Route path="/blog" element={<BlogsPage />} />
    <Route path="/blog/:slug" element={<SingleBlogPage />} />
  </Routes>
);

export default BlogRoutes;
