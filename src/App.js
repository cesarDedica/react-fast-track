import './App.css';
import Title from "./components/Title";
import ListContainer from "./components/ListContainer";
import {useState} from "react";

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

const setType = (type, setListType) => {
  const updatedType = type === 'ol' ? 'ul' : 'ol';
  setListType(updatedType);
}

function App() {

  const [listType, setListType] = useState('ol');

  return (
    <div className="App">
      <Title text="My Favorite Movies"/>
      <ListContainer listType={listType} listData={moviesData}/>
      <button onClick={() => {
        setType(listType, setListType);
      }}>Click me! {listType}</button>
    </div>
  );
}

export default App;
