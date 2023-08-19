import { useState,useEffect } from "react";
import "./index.css"
import AtomicSpinner from 'atomic-spinner';

const Characters = () =>{
    const [data,setData] = useState([])
    const [isLoading,setLoader] = useState(true)
    const [searchText,setText] = useState("")
    const [filteredData,setFilteredData] = useState([])
     
 
     const getData = async () =>{
        const res = await fetch("https://hp-api.onrender.com/api/characters/students")
        const data = await res.json()
        setData([...data])
        setFilteredData([...data])
        setLoader(false)
        console.log(data)
    }

    useEffect(()=>{
        getData()
    },[])

   const CharacterBanner = (item) =>(
    <div className="characterCard" >
    {item.image !==""?
    <div className="profileImgContainer" >
       <img className="profilePic" src={item.image } alt={item.name} /> 
    </div>:null }
    <p className="characterPara" >ACTOR : {item.actor===""?"NA":item.actor}</p>
    <p className="characterPara" >NAME : {item.name}</p>
    <p className="characterPara" >SPECIES : {item.species==null?"NA":item.species}</p>
    <p className="characterPara" >ALIVE : {item.alive===true?"Yes":"No"}</p>
    <p className="characterPara" >ANCESTRY : {item.ancestry===""?"NA":item.ancestry}</p>
    <p className="characterPara" >DATE OF BIRTH : {item.dateOfBirth==null?"NA":item.dateOfBirth}</p>
    <p className="characterPara" >EYE COLOUR : {item.eyeColour===""?"NA":item.eyeColour}</p>
    <p className="characterPara" >GENDER : {item.gender==null?"NA":item.gender}</p>
    </div>
   )

   const changeText = (e) =>{
    setText(e.target.value)
    const newList = data.filter((item)=>item.name.toLowerCase().includes(searchText.toLowerCase()))
    setFilteredData([...newList])
   }

    return (
        <>
        <div className="characterContainer" >
        <div className="inputContainer" >
        <input className="inputBar" onChange={changeText} value={searchText} type="search" />
        </div>
        { isLoading === true ?  <div className="loader" ><AtomicSpinner displayNucleus  /> </div> :
        (<div className="characterBannerContainer" >
            {filteredData.map(item=>(CharacterBanner(item)))}
        </div>)}
        </div>
        </>
    )
 }

export default Characters