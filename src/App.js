import {Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.js'
import Blog from './pages/blog/blog.js'
import SingleBlog from './pages/singleBlog/singleBlog.js';
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
    </div>
  );
}

export default App;
