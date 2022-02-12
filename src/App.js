import initialData from './data.json'
import { Buttons } from './components/Buttons';
import { PostsList } from './components/PostsList';
import { Title } from './components/Title';
import { useEffect, useState } from 'react';



export const App = () => {

  const [posts, setPosts] = useState(initialData);
  const [activeButton, setActiveButton] = useState(true);

  const sortAsc = () => {
    let postsAsc = [...posts]  
    postsAsc = postsAsc.sort((b, a) => b.votes - a.votes)
    setPosts(postsAsc)
    setActiveButton(true)
  }

  const sortDesc = () => {    
    let postsDesc = [...posts]
    postsDesc = postsDesc.sort((a, b) => b.votes - a.votes)  
    setPosts(postsDesc)
    setActiveButton(false)
  }

  useEffect(() => { 
    let postsAsc = posts.sort((b, a) => b.votes - a.votes)    
    setPosts(postsAsc)
  }, []);

  return (
    <div className="container">
      <Title/>
      <Buttons  sortAsc={sortAsc} sortDesc={sortDesc} activeButton={activeButton}/>
      <PostsList posts={posts} /> 
    </div>
  );
}

