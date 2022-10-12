import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { LocaleConsumer } from "../contexts/LocaleContext"

function Navigation({ logout, name }) {
    return (
        <LocaleConsumer>
            {
                ({ locale, toggleLocale }) => {
                    return (
                        <nav className="navigation">
                            <ul>
                                <li><Link to="/archives">Arsip</Link></li>
                                <li><button onClick={toggleLocale} className="toggle-locale">{locale === 'id' ? 'en' : 'id'}</button></li>
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