import { Link, NavLink } from "react-router-dom";
import classes from './MainNavigation.css';

function MainNavigation() {
  return (
    <header className="{classes.header}">
    <nav className="nav">
        <ul className="{classes.list}">
            <NavLink to="/" 
            className={ ({isActive}) => isActive ? classes.active: classes.undefined}
            >Home</NavLink>


            <NavLink to="/products"
            className={ ({isActive}) => isActive ? classes.active: classes.undefined}
            >Products</NavLink>
        </ul>
    </nav>
    </header>
  );
}

export default MainNavigation;