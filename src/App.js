import {Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.js'
import Blog from './pages/blog/blog.js'
import SingleBlog from './pages/singleBlog/singleBlog.js';
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/MUSIC-PROJECT/" element={<Home />} />
          <Route path="/MUSIC-PROJECT/blog" element={<Blog />} />
          <Route path="/MUSIC-PROJECT/blog/:id" element={<SingleBlog />} />
      </Routes>
    </div>
  );
}

export default App;
