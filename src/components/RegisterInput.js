import React from "react";
import useInput from "../components/UseInput";
import { LocaleConsumer } from "../contexts/LocaleContext";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

function RegisterInput({ register }) {
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const [confirmPassword, onConfirmPasswordChange] = useInput('');

    const onSubmitHandler = e => {
        e.preventDefault();

        password !== confirmPassword ? Swal.fire({
            icon: "error",
            title: "Passwords must be the same",
        })
            : register({
                name: name,
                email: email,
                password: password,
            });

    }
    return (
        <LocaleConsumer>
            {
                ({ locale }) => {
                    return (
                        <form onSubmit={onSubmitHandler} className="input-register">
                            <input type="text"
                                placeholder={locale === 'id' ? 'Nama' : 'Name'}
                                value={name}
                                onChange={onNameChange}
                                id="name" />
                            <input type="email"
                                placeholder={locale === 'id' ? 'Surel' : 'Email'}
                                value={email}
                                onChange={onEmailChange}
                                id="email" />
                            <input type="password"
                                placeholder={locale === 'id' ? 'Kata Sandi' : 'Password'}
                                autoComplete="current-password"
                                id="password"
                                value={password}
                                onChange={onPasswordChange} />
                            <input type="confirmPassword"
                                placeholder={locale === 'id' ? 'Konfirmasi Password' : 'Confirm Password'}
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={onConfirmPasswordChange} />
                            <button>{locale === 'id' ? 'Daftar' : 'Register'}</button>
                        </form>
                    )
                }
            }
        </LocaleConsumer>
    )
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}


export default RegisterInput;
