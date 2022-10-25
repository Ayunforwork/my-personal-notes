import React from "react";
import useInput from "../components/UseInput";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

function LoginInput({ login }) {
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const onSubmitHandler = e => {
        e.preventDefault();
        login({ email, password });
    }

    return (
        <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
                        <form className="input-login" onSubmit={onSubmitHandler}>
                            <label htmlFor="email">{locale === 'id' ? 'Surel' : 'Email'}</label>
                            <input type="email"
                                id="email"
                                value={email}
                                onChange={onEmailChange} />
                            <label htmlFor="password">{locale === 'id' ? 'Kata Sandi' : 'Password'}</label>
                            <input type="password"
                                id="password"
                                value={password}
                                onChange={onPasswordChange} />
                            <button>{locale === 'id' ? 'Masuk' : 'Login'}</button>
                        </form>
                    )
                }
            }
        </LocaleConsumer>
    );
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired
}

export default LoginInput;



