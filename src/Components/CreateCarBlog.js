import {useState} from "react"
import useFetch from "./useFetch"

function CreateCarBlog(){
    const [input,setInput] = useState ({
        Make:'',
        SeatingCapacity:'',
        FuelType:'',
        TransmissionType:'',
        BodyType:'',
        FrontSuspension:'',
        MarketCategory:'',
        Details:''
    })

    
    const {data,loading,error,postData} = useFetch('http://localhost:4000/carBlogs','POST')
    
    const { Make,SeatingCapacity,FuelType,TransmissionType,BodyType,FrontSuspension,MarketCategory,Details} = input
    
    function handleChange(e){
        setInput({
            ...input,
            [e.target.id] : e.target.value
        })
    }

    function handleSumbit(){
        postData(input)
        setInput({
            Make:'',
            SeatingCapacity:'',
            FuelType:'',
            TransmissionType:'',
            BodyType:'',
            FrontSuspension:'',
            MarketCategory:'',
            Details:''
        })

    }
    console.log(input)
    return(
        <div className="container" style={{maxWidth:"600px"}}>
            <h3 className="text-center mt-3 text-body-teritary">CreateCarBlog</h3>
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
            <button className="btn btn-primary mt-3 text-center" onClick={handleSumbit}>Sumbit</button>
        </div>
    )
}
export default CreateCarBlog