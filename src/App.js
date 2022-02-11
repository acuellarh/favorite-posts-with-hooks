import './App.css';
import { Buttons } from './components/Buttons';
import { PostsList } from './components/PostsList';
import { Title } from './components/Title';

function App() {
  return (
    <div className="container">
      <Title/>
      <Buttons/>
      <PostsList/> 
    </div>
  );
}
export default App;
