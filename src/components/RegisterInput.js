import React from "react";
import PropTypes from "prop-types";

class RegisterInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
        }

        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onNameChange(event) {
        this.setState(() => {
            return{
            name: event.target.value,
            }
        })
    }

    onEmailChange(event) {
        this.setState(() => {
            return {
                email: event.target.value,
            };
        });
    }

    onPasswordChange(event) {
        this.setState(() => {
            return {
                password: event.target.value
            };
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();

        this.props.register({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler} className="input-register">
                <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChange} />
                <input type='email' placeholder="email" value={this.state.email} onChange={this.onEmailChange} />
                <input type='password' placeholder="password" autoComplete="current-password" value={this.state.password} onChange={this.onPasswordChange} />
                <button>Register</button>
            </form>
        )
    }
 }

// export default RegisterInput;
// import React from "react";
// import { register } from "../utils/network-data";
// import useInput from "../components/UseInput";
// import PropTypes from "prop-types";

// function RegisterInput() {
//     const [name, onNameChange] = useInput('');
//     const [email, onEmailChange] = useInput('');
//     const [password, onPasswordChange] = useInput('');
//     const onSubmitHandler = e => {
//         e.preventDefault();

//         register({ name, email, password });
//     }
//     return (
//         <form onSubmit={onSubmitHandler} className="input-register">
//             <input type="text" placeholder="Nama" value={name} onChange={onNameChange} id="name" />
//             <input type="email" placeholder="Email" value={email} onChange={onEmailChange} id="email" />
//             <input type="password" placeholder="Password" autoComplete="current-password" id="password" value={password} onChange={onPasswordChange} />
//             <button>Register</button>
//         </form>
//     )
// }

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
}


export default RegisterInput;
