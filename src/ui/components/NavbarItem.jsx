import { NavLink } from "react-router-dom"

export const NavbarItem = ({name, url}) => {
    return (
        <NavLink
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            to={url}>
            {name}
        </NavLink>

    )
}
