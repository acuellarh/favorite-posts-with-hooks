export const Buttons = ({sortAsc, sortDesc, activeButton}) => {

  return(
    <>
      <div className="row justify-content-center mt-4 mb-3">
        <div className="col">
          <p className="d-inline-block ms-2">Orden:</p>       
          <button type="button" className={activeButton ? "btn ms-2 btn-primary" : "btn ms-2 btn-outline-primary" } onClick={() => sortAsc()}>Ascendente</button>
          <button type="button" className={activeButton ? "btn ms-2 btn-outline-primary" : "btn ms-2 btn-primary" } onClick={() => sortDesc()}>Descendente</button>  
        </div>      
      </div> 
    </>
  )
}