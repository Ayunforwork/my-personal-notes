import React from "react";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { BiWorld } from "react-icons/bi";
//import ToggleTheme from "../components/ToggleTheme";


function Content() {
    return (
        <LocaleConsumer>
            {
                ({ locale, toggleLocale }) => {
                    return (
                        <nav className="navigation">
                            <ul>
                                <li><button onClick={toggleLocale} className="toggle-locale">{locale === 'id' ? <BiWorld /> : <BiWorld />}</button></li>
                                
                            </ul>
                        </nav>
                    )
                }
            }
        </LocaleConsumer>
    )
}




export default Content;