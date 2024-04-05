import { CiLock } from "react-icons/ci";
import { PiHandWavingLight } from "react-icons/pi";
import { BiBookContent } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TbMessageCircle2 } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
function Navbar(){
  const style1={
    float:'left',
     margin:'5px',
   
   
   }
   const style2={
    margin:'2px',
   }
  return(
<div className="topnav">
  <ul>
    <li><BiBookContent style={style2} /></li>
    <li><IoIosArrowBack style={style2}/> <IoIosArrowForward style={style2} />
  </li>
  <li>My Private Channel /<CiLock style={style1} /> <PiHandWavingLight/> Getting Started </li>
  
 </ul>
  <div className="rightnav">
    <ul>
  <li>Share</li>
  <li><TbMessageCircle2 /></li>
  <li><FaStar /></li>
  <li><BsThreeDotsVertical /></li>
  </ul>
  </div>
 
  
  </div>

  )
}
export default Navbar;