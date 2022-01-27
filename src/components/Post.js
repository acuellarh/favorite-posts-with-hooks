import Data from "../data.json"

export const Post = () => {
  
     Data.map(post => {
      return(
        <article className="posts" key={post.id}>
          <img alt="">{post.post_image_url}</img>
          <div>
            <p>{post.votes}</p>
          </div>
          <div>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <div>
              <p>Escrito por: </p>
              <img alt="">{post.writer_avatar_url}</img>
            </div>
          </div>
        </article>      
      )
    }) 
  
}



  
