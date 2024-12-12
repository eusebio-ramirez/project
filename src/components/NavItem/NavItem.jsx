import { Link} from "react-router-dom"
import './NavItem.css'
// eslint-disable-next-line react/prop-types
export const NavItem = ({ children,toLink }) => {
    return (
        <Link to={toLink} className="navItem">{children}</Link>
    )
}
