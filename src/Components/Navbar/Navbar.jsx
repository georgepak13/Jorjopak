import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"
console.log(s);  
 



const Navbar=()=>{
return( <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassname={s.activeLink}>Profile</NavLink>
      </div>
     
      <div className= {`${s.item}  ${s.active} `}>
      <NavLink to="/dialogs" activeClassname={s.activeLink}> Message</NavLink>
      </div>
      <div className={s.item}>
        <a>Friends</a>
      </div>
      <div className={s.item}>
        <a>News</a>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
      <div className={s.item}>
        <a>Settings</a>
      </div>
      </nav>
)
}
export default Navbar;