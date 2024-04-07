import { IoMoonOutline } from "react-icons/io5";
import { RiQuestionMark } from "react-icons/ri";
function Right(){
  return(
<div className="rightlast">
  <ul>
    <li>
<IoMoonOutline />
    </li>
    <div className="lastchild">
    <button type="button" class="btn position-relative">
  <li><RiQuestionMark /></li>
  <span class="position-absolute top-0 start-100 translate-middle p-2 bg-primary border border-light rounded-circle">
    <span class="visually-hidden"></span>
  </span>
</button>
    </div>
  </ul>
</div>
  )
};
export default Right;