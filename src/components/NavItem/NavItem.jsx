import { Link} from "react-router-dom"
// eslint-disable-next-line react/prop-types
export const NavItem = ({ children,toLink }) => {
    return (
        <Link to={toLink}>{children}</Link>
    )
}
