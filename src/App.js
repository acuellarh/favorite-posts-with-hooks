import initialData from './data.json'
import { Buttons } from './components/Buttons';
import { PostsList } from './components/PostsList';
import { Title } from './components/Title';
import { useEffect, useState } from 'react';



export const App = () => {

  const [posts, setPosts] = useState(initialData);
  const [activeButton, setActiveButton] = useState(true);

  const sortAsc = (arrayPosts = posts) => {   
    let postsAsc = [...arrayPosts]  
    postsAsc = postsAsc.sort((b, a) => b.votes - a.votes)
    setPosts(postsAsc)
    setActiveButton(true)
  }

  const sortDesc = (arrayPosts = posts) => {     
    let postsDesc = [...arrayPosts]
    postsDesc = postsDesc.sort((a, b) => b.votes - a.votes)  
    setPosts(postsDesc)
    setActiveButton(false)
  }

  const Add = (id) => {
    let postsAdded = posts.map((post) =>
      {
        if (post.id === id){
          post.votes += 1
        }
        return post
      }
    )
    activeButton ? sortAsc(postsAdded) : sortDesc(postsAdded)
  }
  
  const Subs = (id) => {
    let postsSubs = posts.map((post) =>
      {
        if (post.id === id){
          post.votes -= 1
        }
        return post
      }
    )  
    activeButton ? sortAsc(postsSubs) : sortDesc(postsSubs)
  }

  useEffect(() => { 
    let postsAsc = posts.sort((b, a) => b.votes - a.votes)    
    setPosts(postsAsc)
  }, []);

  return (
    <div className="container">
      <Title/>
      <Buttons  sortAsc={sortAsc} sortDesc={sortDesc} activeButton={activeButton}/>
      <PostsList posts={posts} Add={Add} Subs={Subs} /> 
    </div>
  );
}

