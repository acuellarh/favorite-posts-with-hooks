import posts from "../data.json"

export const PostsList = () => {   

  return (   
    <>
      {posts.map((post)=>{
        return(
          <div className="row justify-content-center posts my-3" key={post.id}>
            <div className="col-4">
              <img 
                alt=""
                src={post.post_image_url} 
                width="250px" 
                height="auto" 
              />                  
            </div>

            <div className="col-1 text-center pt-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up text-primary" width="20" height="20" viewBox="0 0 16 16">
                <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z"/>
              </svg>   
              <p className="mt-2">{post.votes}</p>                
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down text-primary" width="20" height="20" viewBox="0 0 16 16">
                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
              </svg>                          
            </div>

            <div className="col-5">                
              <a href={post.url} target="_blank" rel="noreferrer" className="h4 link-primary text-decoration-none">{post.title}</a>
              <p className="mt-3">{post.description}</p>
              <div className="d-flex align-items-center mb-4">               
                <p className="mt-2"> <small className="fw-lighter">Escrito por: </small> </p>                 
                <img 
                  src={post.writer_avatar_url}
                  alt="new"
                  width="40px" 
                  height="auto"
                  className="rounded-circle mx-2"
                />
              </div>          
            </div>

          </div>
        );
       })
      }
    </>
  )
} 