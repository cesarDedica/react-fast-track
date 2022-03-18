import './App.css';
import Title from "./components/Title";
import List from "./components/List";

const moviesData = [
  {
    title: 'Die Hard',
    votes: 999
  },
  {
    title: 'Zohan',
    votes: 2606
  },
  {
    title: 'Madagascar 2',
    votes: 30
  },
  {
    title: 'Pulp Fiction',
    votes: 1992
  },
  {
    title: 'KISS Meets the Phantom Of The Park',
    votes: 333
  }
];

function App() {
  return (
    <div className="App">
      <Title text="My Favorite Movies"/>
      <List listType='ol'>
        {
          moviesData.map(movie => {
            return <li>{movie.title}. - {movie.votes} Votes</li>
          })
        }
      </List>
    </div>
  );
}

export default App;
