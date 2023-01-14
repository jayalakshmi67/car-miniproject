import {useState,useEffect} from 'react'
import Spinner from './Spinner'
import useFetch from './useFetch'


function EditCarBlog(props){
    const [alertMessage,setAlertMessage] = useState(false)
    const [input,setInput] = useState({
        Make:'',
        SeatingCapacity:'',
        FuelType:'',
        TransmissionType:'',
        BodyType:'',
        FrontSuspension:'',
        MarketCategory:'',
        Details:''
    })

    

    const {car_id} = props.match.params

    const {Make,SeatingCapacity,FuelType,TransmissionType,BodyType,FrontSuspension,MarketCategory,Details} = input

    const {data,loading,error,postData} = useFetch(`http://localhost:4000/carBlogs/${car_id}`)

    useEffect(()=>{
        if(data){
            setInput(data)
        }
    },[data])
  

    function handleChange(e){
        setInput({
            ...input,
            [e.target.id] : e.target.value
        })
    }

   async function handleSubmit(){

    await fetch(`http://localhost:4000/carBlogs/${car_id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(input)
    })

    setAlertMessage(true)

    setTimeout(()=>{
        setAlertMessage(false)
    },1000)
    setTimeout(()=>{
        setInput({
            Make:'',
            SeatingCapacity:'',
            FuelType:'',
            TransmissionType:'',
            BodyType:'',
            FrontSuspension:'',
            MarketCategory:'',
            details:''
        })
    },1500)
    setTimeout(()=>{
        props.history.push('/')
    },2000)
    }

    return(
        <div className="container" style={{maxWidth:'600px'}}>

          {alertMessage && (<div class="alert alert-success mt-3" role="alert">
            A simple success alert—check it out!
            </div>)}

            <h3 className="text-center mt-3 text-body-tertiary">EditCarBlog</h3>
            {loading && <Spinner/>}
            {data &&  (<>
           <div className="text-center">
           <label className="mt-3 fs-5">Make</label>
            <input type = "text" id="Make" value={Make} onChange={handleChange} className="form-control"/>
            <label className="mt-3 fs-5">SeatingCapacity</label>
            <input type = "number" id="SeatingCapacity" value={SeatingCapacity} onChange={handleChange} className="form-control"/>
            <label className="mt-3 fs-5">FuelType</label>
            <input type = "text" id="FuelType" value={FuelType} onChange={handleChange} className="form-control"/>
            <label className="mt-3 fs-5">TransmissionType</label>
            <input type = "text" id="TransmissionType" value={TransmissionType} onChange={handleChange} className="form-control"/>
            <label className="mt-3 fs-5">BodyType</label>
            <input type = "text" id="BodyType" value={BodyType} onChange={handleChange} className="form-control"/>
            <label className="mt-3 fs-5">FrontSuspension</label>
            <input type = "text" id="FrontSuspension" value={FrontSuspension} onChange={handleChange} className="form-control"/>
            <label className="mt-3 fs-5">MarketCategory</label>
            <input type = "text" id="MarketCategory" value={MarketCategory} onChange={handleChange} className="form-control"/>
            <label className="mt-3 fs-5">Details</label>
            <textarea id="Details" value={Details} onChange={handleChange} className="form-control" cols="20" rows="10"></textarea>
            
            <button className="btn btn-primary mt-3 text-center" onClick={handleSubmit}>Sumbit</button>
        </div>
        
            </>)
            }
        </div>
    )
}


export default EditCarBlog