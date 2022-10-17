import React from "react";
import useInput from "../components/UseInput";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

function RegisterInput({register}) {
    const [name, onNameChange] = useInput('');
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const [confirmPassword, onConfirmPasswordChange] = useInput('');

    const onSubmitHandler = e => {
        e.preventDefault();

        password !== confirmPassword ? Swal.fire({
            icon:"error",
            title:"Passwords must be the same",
        })
        : register({
            name: name,
            email: email,
            password: password,
        });

    }
    return (
        <form onSubmit={onSubmitHandler} className="input-register">
            <input type="text" placeholder="Nama" value={name} onChange={onNameChange} id="name" />
            <input type="email" placeholder="Email" value={email} onChange={onEmailChange} id="email" />
            <input type="password" placeholder="Password" autoComplete="current-password" id="password" value={password} onChange={onPasswordChange} />
            <input type="confirmPassword" placeholder="confirm Password" id="confirmPassword" value={confirmPassword} onChange={onConfirmPasswordChange} />
            <button>Register</button>
        </form>
    )
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}


export default RegisterInput;
