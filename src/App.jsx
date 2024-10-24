import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Projects from './components/Projects';
import Announcements from './components/Announcements';
import Trending from './components/Trending';

function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <div className="gray-background">
        <Projects />
        <Announcements />
        <Trending />
      </div>
    </>
  );
}

export default App;
