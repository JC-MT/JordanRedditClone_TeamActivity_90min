import './App.css';
import './App.scss';

// Components & Pages
import NavBar from './components/NavBar';
import Trending from './components/Trending';
import SideBar from './components/Sidebar';
import Communities from './components/Communities';
import Feed from './components/Feed';

export default function App() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <main>
        <SideBar />
        <div className="feedContainer">
          <div className="feedContainer__carouselContainer">
            <Trending />
          </div>
          <div className="feedContainer__feed">
            <div className="feedContainer__feed__main">
              <Feed />
            </div>
            <div className="feedContainer__feed__aside">
              <Communities />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
