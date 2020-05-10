import React from 'react';
import { connect } from 'react-redux'
import classNames from 'classnames';
const NavItem = ({children, label, link, themeMode}) => {
    return(
        <li className="nav-item">
            <a className={classNames("nav-link", {
                "text-info": themeMode === "dark"
            })} href={link}>{label}{children}</a>
        </li>
    )
}
const Header = (props) => {
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
    const isDark = props.themeMode === "dark";
    const bgClass = isDark ? "bg-dark" : "bg-white";
    return (
        <div className={classNames("c-header border-bottom", {
            [bgClass]: bgClass, 
            "border-secondary" : isDark
        })}>
            <div className="container">
                <nav className="navbar">
                    <ul className="ml-auto nav">
                        {menus.map((menu, key) => <NavItem themeMode={props.themeMode} key={key} link={menu.link} label={menu.label} />)}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    themeMode: state.theme.mode
})
export default connect(mapStateToProps)(Header);