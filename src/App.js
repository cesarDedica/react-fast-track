import './App.css';
import Title from "./components/Title";
import ListContainer from "./components/ListContainer";
import {useState} from "react";
import CardsGrid from "./components/CardsGrid";
import axios from "axios";

const setType = (type, setListType) => {
  const updatedType = type === 'ol' ? 'ul' : 'ol';
  setListType(updatedType);
}

const getMovies = async setMoviesData => {
  const search = document.getElementById('search').value;
  const url = 'http://www.omdbapi.com/?apikey=a4a947a3&s=' + search;
  const movies = await axios.get(url);
  setMoviesData(movies.data.Search);
  return movies;
}

function App() {

  const [listType, setListType] = useState('ol');
  const [moviesData, setMoviesData] = useState([]);


  return (
    <div className="App">
      <Title text="My Favorite Movies"/>
      <ListContainer listType={listType} listData={moviesData}/>
      <button onClick={() => {
        setType(listType, setListType);
      }}>Click me! {listType}</button>
      <hr/>
      <input id="search"/>
      <button onClick={() => getMovies(setMoviesData)}>Get movies!</button>
      <CardsGrid data={moviesData}/>
    </div>
  );
}

export default App;
