import useFetch from './useFetch'
import Spinner from './Spinner'
import {Link} from 'react-router-dom'
function CardList(){
    const {data,loading,error} = useFetch("http://localhost:4000/carBlogs")

    return(
        <div className="container ">
            <h2 className = "mb-5">CarListAvailable</h2>
            {loading && <Spinner/>}
            {error && <h3 className='text-danger mt-3 text-center'>{error}</h3>}
            {data && data.map(e=>(
                <div class="card mt-3 text-center" style = {{padding:"15px"}}>
                    <Link to ={'/Car/' + e.id}>
                        <h5 class="card-title">{e.Make}</h5>
                        </Link>
                  <h6 class="card-subtitle mb-2 text-muted">{e.MarketCategory}</h6>
                 <div class="card-body">
                  {e.Details}
                </div>
              </div>
            ))}

        </div>
    )
}
export default CardList