import React from 'react';

const NavItem = ({children, label, link}) => {
    return(
        <li className="nav-item">
            <a className="nav-link" href={link}>{label}{children}</a>
        </li>
    )
}
const Header = () => {
    const menus = [
        {
            link: "#",
            label: "About"
        },
        {
            link: "#",
            label: "Service"
        },
        {
            link: "#",
            label: "Contact"
        },
    ]
    return (
        <div class="c-header bg-white border-bottom">
            <div class="container">
                <nav className="navbar">
                    <ul className="ml-auto nav">
                        {menus.map((menu, key) => <NavItem key={key} link={menu.link} label={menu.label} />)}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;
