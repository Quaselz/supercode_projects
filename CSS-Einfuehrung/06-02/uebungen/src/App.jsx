import './App.css'
import Counter from './components/counter'
import DayNight from "./components/DayNight/DayNight";
import Inputs from './components/Inputs/Inputs';
import MovieArticle from './components/MovieArticle/MovieArticle';

import { movies } from '../src/assets/Lev1_1-React_JS-Movie_Database';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <>
     {/* <Counter /> */}
     {/* <DayNight /> */}
     {/* <Inputs /> */}

      <TodoList />

     {/* <section className='gridMe'>
      {movies.map((movie, index) => 
      <MovieArticle title={movie.title} year={movie.year}  director={movie.director} duration={movie.duration} genre={movie.genre} rate={movie.rate}key={index}/>
      )}

     </section> */}
    </>
  )
}

export default App
