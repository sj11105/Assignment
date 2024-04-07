import { CiLock } from "react-icons/ci";
import { IoBulbOutline } from "react-icons/io5";
function Body(){
  const style3={
 position:'absolute',
margin:' -30px',
top:'308px'
     
   
   
   }
   const style1={
    float:'left',
     margin:'5px',
   
   
   }
  return(
    <div className="body">
<p className="heading">Getting started</p>
<div className="content">  <CiLock style={style3} />  This doc is in your private channel,where you can store your private work.You can share docs one by one from here,but to properly organise your team's knowledge base,use workspace channels.
  <br></br><br></br><br></br>You can make channels public to make all docs visible to everyone on the team , or private if you want the channel's docs to only be visisble by a selection of teammates.  
</div>
<p className="second">Collaborate with your team with these three features
<br></br><br></br>Docs</p>
<div className="image"><img src="/images/body.jpg" alt="" srcset="" /></div>
<div className="last"><IoBulbOutline style={style1}/>Give it a go by typing /below</div>
</div>

  )
};
export default Body;