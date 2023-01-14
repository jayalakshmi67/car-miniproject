import useFetch from "./useFetch"
import Spinner from "./Spinner"
import {Link} from "react-router-dom"

function CarDetails(props){
  
  const{car_id} = props.match.params
    const {data,loading,error} = useFetch('http://localhost:4000/carBlogs/'+car_id,'GET')
    
   async  function handleDelete(){
        await fetch('http://localhost:4000/carBlogs/'+car_id,{
          method : 'DELETE'
        })
        props.history.push('/')
    }

     return(
        <div className="container text-center">
            {loading && <Spinner/>}
            {error && <h3 className='text-danger mt-3'>{error}</h3>}
            {data &&(<div class="card mt-5" style ={{padding:"15px"}}>
           < h5 class="card-title">{data.Make}</h5>
           <h6 class="card-subtitle mb-2 text-muted">{data.MarketCategory}</h6>
        <div class="card-body"> {data.Details}</div>
      </div>)}
      {data && 
           (<div class="row justify-content-md-center">
                <div class="col col-lg-2">
                <Link to={`/edit/${data.id}`} className="btn btn-primary mt-3">Edit</Link>
                </div>
                <div class="col-md-auto">
                </div>
                <div class="col col-lg-2">
                <button className="btn btn-danger mt-3" onClick={handleDelete}>Delete</button>
                </div>
            </div>)}
    </div>
     )
    
}
export default CarDetails
