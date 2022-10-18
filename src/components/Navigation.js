import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { LocaleConsumer } from "../contexts/LocaleContext";
import Content from "../pages/Content";

function Navigation({ logout, name }) {
    return (
        <LocaleConsumer>
            {
                ({ locale, toggleLocale }) => {
                    return (
                        <nav className="navigation">
                            <ul>
                                <li><Link to="/arsip">Arsip</Link></li>
                                <li><Link to="/">Home</Link></li>
                                <li><Content /></li>
                                <li><button onClick={logout} className="button-logout">{name} <FiLogOut /></button></li>
                            </ul>
                        </nav>
                    )
                }
            }
        </LocaleConsumer>
    )
}
Navigation.propTypes = {
    logout: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}



export default Navigation;