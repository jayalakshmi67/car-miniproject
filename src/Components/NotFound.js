import {Link} from 'react-router-dom'

function NotFound(){
    return(
        <div className="text-center">
            <h3 className="text-danger" style={{marginTop:'35px'}}> This Path is Not Available <Link to="/" class="alert-link">Go To Home Page</Link>......<ion-icon name="arrow-round-back"></ion-icon> .</h3>
        </div>
    )
}


export default NotFound