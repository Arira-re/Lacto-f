import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import About from "./pages/About";
import Test from './pages/Test';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="flex flex-col justify-between sp">
          <Header />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <p className="mg-b05">
                      ここはメインページですが、特に何かおいているわけではないです。<br />
                      サイトに関しての概要などは
                      <a href="/about">こっち</a>
                      にあります。
                    </p>
                    <h1 className="mg-t20 sm:text-4xl sm:leading-10">最近の投稿</h1>
                    <PostList />
                  </>
                }
              />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/test" element={<Test />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </section>
    </Router>
  );
}