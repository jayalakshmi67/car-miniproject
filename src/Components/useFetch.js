import { useState,useEffect } from "react";

function useFetch(URL,method='GET'){
    const [data,SetData] = useState(false)
    const [loading,SetLoading] = useState(false)
    const [error,SetError] = useState(false)
    const [options,setOptions]= useState(null)

    function postData(post){
        setOptions({
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(post)
        })
    }

    console.log(options,method)

    //componentdidmount
    useEffect ( ()=>{
        function fetchData(fetchHTTPRequest){
        SetLoading(true)
        SetError(false)
        SetData(false)
        setTimeout(()=>{

        //fetch    
        fetch(URL,{...fetchHTTPRequest})
        .then(res=>{
            console.log('data post')
            if(!res.ok){
                throw Error('could not fetch the data')
            }
        return  res.json()
        })
        .then(fin=>{
            SetLoading(false)
            SetData(fin)
    })
       .catch(err=>{
        SetLoading(false)
        SetError(err.message)
       })
        },2000)
        }

        //invoke
        if(method == 'GET'){
            fetchData()
        }else if(method == 'POST' && options){
       
            fetchData(options)
            setOptions(null)
        }
    },[URL,method,options])

    return{data,loading,error,postData}

    }
    export default useFetch