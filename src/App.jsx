import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';

export default function App() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="flex flex-col justify-between sp">
          <Header />
          <main>
            <p className="mg-b05">
              ここはメインページですが、特に何かおいているわけではないです。<br />
              サイトに関しての概要などは<a href="About.html">こっち</a>にあります。
            </p>
            <h1 className="mg-t20 sm:text-4xl sm:leading-10">最近の投稿</h1>
            <PostList />
          </main>
          <Footer />
        </div>
      </section>
    </>
  );
}