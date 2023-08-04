import './Trending.scss';

const data = [
  {
    title: 'Lizzo releases statement',
    content: 'Lizzo Responds to "Outrageous" Allegation',
    publishedBy: ['r/entertainment', 'r/popculturechat']
  },
  {
    title: 'Taylor Swift addresses media rumors',
    content: "Taylor Swift Responds to Tabloid's Sensational Claims",
    publishedBy: ['r/entertainment', 'r/celebnews']
  },
  {
    title: 'Beyoncé drops surprise visual album',
    content: "Beyoncé's Latest Project Mesmerizes Fans Worldwide",
    publishedBy: ['r/music', 'r/beyhive']
  },
  {
    title: 'Ed Sheeran opens up about songwriting',
    content: 'Ed Sheeran Reveals the Inspirations Behind His Hit Songs',
    publishedBy: ['r/songwriting', 'r/musicnews']
  },
  {
    title: 'Ariana Grande claps back at haters',
    content: 'Ariana Grande Responds to Online Trolls with Positivity',
    publishedBy: ['r/celebrities', 'r/popheads']
  },
  {
    title: 'Drake announces collaboration with Rihanna',
    content: 'Drake and Rihanna Set to Release Hit Single Together',
    publishedBy: ['r/musicnews', 'r/hiphop']
  }
];

import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import four from '../assets/four.jpg';
import five from '../assets/five.jpg';
import six from '../assets/six.jpg';

const fileNames = [one, two, three, four, five, six];

export default function Trending() {
  function displayContainer() {
    return data.map((article, index) => (
      <li key={article.title} className="card">
        <img src={fileNames[index]} />
        <div className="caption">
          <h4>{article.title}</h4>
          <p>{article.content}</p>
          <p>{article.publishedBy}</p>
        </div>
      </li>
    ));
  }

  return (
    <div className="App">
      <div className="wrapper">
        <ul className="carousel">{displayContainer()}</ul>
      </div>
    </div>
  );
}
