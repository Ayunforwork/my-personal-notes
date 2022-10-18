import React from "react";
import { LocaleConsumer } from "../contexts/LocaleContext";
//import { BiWorld } from "react-icons/bi";
//import { FaMoon, FaSun } from "react-icons/fa";
//import { ThemeConsumer} from '../contexts/ThemeContext';
//import ToggleTheme from "../components/ToggleTheme";


function Content() {
    return (
        // <ThemeConsumer>
        //     {({ theme, toggleTheme}) => {
        //         return(

                    <LocaleConsumer>
            {
                ({ locale, toggleLocale }) => {
                    return (
                        <nav className="navigation">
                            <ul>
                               <li><button>theme</button></li>
                                <li><button onClick={toggleLocale} className="toggle-locale">{locale === 'id' ? 'en' : 'id' }</button></li>
                            </ul>
                        </nav>
                    )
                }
            }
        </LocaleConsumer>
            // )
            //     }}
            // </ThemeConsumer>
    )
}




export default Content;