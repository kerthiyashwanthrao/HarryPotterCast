import {Link} from "react-router-dom"
import "./index.css"

const Explore = () =>(
    <>
    <div className="exploreDivContainer" >
    <nav className="navDiv" >
        <ul className="exploreContainer" >
        <div className="charactersDiv" >
           <h1>EXPLORE BY</h1>
           <div className="btnsContainer" >
               <Link to="/characters" ><button  className="button" >ALL CHARACTERS</button></Link>
               <Link to="/students" ><button className="button" >STUDENTS</button></Link>
               <Link to="/staff" ><button className="button" >STAFF</button></Link>
            </div>
        </div>
            
            <div className="byTeams" >
            <h1>BY TEAMS</h1>
            <div className="imagesContainer" >
            <Link to="/house/gryffindor" ><img className="teamImage" alt="GryffindorImage" src="https://1000logos.net/wp-content/uploads/2021/11/Gryffindor-Logo-768x432.png" /> </Link>
            <Link to="/house/ravenclaw" ><img alt="ravenClawImage" className="teamImage" src="https://1000logos.net/wp-content/uploads/2023/05/Ravenclaw-Logo-768x432.png"  /> </Link>
            <Link to="/house/hufflepuff" ><img alt="hufflePuffImage" className="teamImage" src="https://1000logos.net/wp-content/uploads/2023/08/Hufflepuff-Logo-768x432.png"  /></Link>
            <Link to="/house/slytherin" ><img alt="slytherinImage" className="teamImage" src="https://1000logos.net/wp-content/uploads/2023/05/Slytherin-Logo-768x432.png"  /></Link>
            </div>
            </div>
            <div className="spellsContainer" >
                <h1>BY SPELLS</h1>
                <Link to="spells" ><img className="spellsImage" alt="spellsImage" src="https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_760/MTkwNTgxMTM0OTI1NzAzMDM2/harry-potter-spells-jpg.webp" /> </Link>
            </div>
            
        </ul>
    </nav>
    </div>
    </>
)
    
export default Explore