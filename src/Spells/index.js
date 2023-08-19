import { useState,useEffect } from "react";
import "./index.css"
import AtomicSpinner from 'atomic-spinner';

const Spells = () =>{
    const [data,setData] = useState([])
    const [isLoading,setLoader] = useState(true)

     const getData = async () =>{
        const res = await fetch("https://hp-api.onrender.com/api/spells")
        const data = await res.json()
        setData([...data])
        setLoader(false)
        console.log(data)
    }

    useEffect(()=>{
        getData()
    },[])

   const spellsBanner = (item) =>(
    <div className="spellsCard" >
       <p className="spellName" >SPELL NAME : {item.name.toUpperCase()}</p>
       <p className="spellDesc" >{item.description}</p>
    </div>
   )

    return (

        <>
        { isLoading === true ?  <div className="loader" ><AtomicSpinner displayNucleus  /> </div> :
        <div className="spellsBannerContainer" >
            {data.map(item=>(spellsBanner(item)))}
        </div>
    }
    </>
    )
 }

export default Spells