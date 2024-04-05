import { FaRegBell } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { GoCommentDiscussion } from "react-icons/go";
import { PiHandWavingLight} from "react-icons/pi";
import { TfiHandOpen } from "react-icons/tfi";
import { MdArrowDropDown } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { LiaBookSolid } from "react-icons/lia";
import { RiUserAddLine } from "react-icons/ri";
import { PiCircleHalfTiltDuotone } from "react-icons/pi";
import { PiDownloadSimpleLight } from "react-icons/pi";
import { PiArchiveThin } from "react-icons/pi";
function Sidebar()
  

    {
      const style={
     float:'right',
margin:'45px',


 
     
    
    
    }
    const style1={
     float:'left',
      margin:'5px',
    
    
    }
    
      return(
    <div className="navbar">
      <ul>
         <li><span className="name">refero team</span>    <FaRegBell style={style} /></li>
         <li><div className="inputcontainer"><TfiHandOpen/>  <input type="text"  placeholder="ask your AI assistant"></input> 
         <button id="btn "><AiOutlineSearch /></button></div></li>
        <li><div id="navdiv"><h6 style={{margin:'6px', marginLeft:'12px'}}>Your team used 8/50 free docs</h6>
        <p style={{margin:'6px', marginLeft:'12px'}}>Upgrade to create unlimited docs</p></div></li>
        <li><div ><CiClock2 style={style1} ></CiClock2>Catch Up</div></li>
        <li><GoCommentDiscussion style={style1}/>Discussion</li>
        <li><h4>Favourites</h4></li>
        <li><PiHandWavingLight/>Getting started</li>
        <li><h5>My Channels</h5>
        </li>
        <li><MdArrowDropDown style={style1}/><CiLock style={style1} /> Private Channel
        <ul className="dropdown">
       
    <div class="dropdown-content">
      <a > <PiHandWavingLight style={style1} />Get Started</a></div>
        </ul>
        </li>
        <li><MdArrowDropDown style={style1}/> <LiaBookSolid style={style1} />Engineering
        <ul className="dropdown">
          
        </ul>
        </li>
        <li><MdArrowDropDown style={style1}/><LiaBookSolid style={style1} /> Product
        <ul className="dropdown">
        
        </ul>
        </li><br /><br></br>
        <li><RiUserAddLine style={style1} />Add People</li>
        <li><PiCircleHalfTiltDuotone style={style1} />Template</li>
        <li><PiDownloadSimpleLight style={style1} />Shared With Me</li>
        <li><PiArchiveThin style={style1} />Archive</li>
      </ul>
    </div>
    
  )
}
export default Sidebar;