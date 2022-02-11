// import './App.css';
// import data from './data.json'
import { Buttons } from './components/Buttons';
import { PostsList } from './components/PostsList';
import { Title } from './components/Title';



export const App = () => {
  return (
    <div className="container">
      <Title/>
      <Buttons/>
      <PostsList/> 
    </div>
  );
}

