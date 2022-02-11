export const Buttons = () => {

  return(
    <>
      <div className="row justify-content-center mt-4 mb-3">
        <div className="col">
          <p className="d-inline-block ms-2">Orden:</p>       
          <button type="button" className="btn btn-outline-primary ms-2">Ascendente</button>
          <button type="button" className="btn btn-primary ms-2">Descendente</button>          
        </div>      
      </div> 
    </>
  )
}