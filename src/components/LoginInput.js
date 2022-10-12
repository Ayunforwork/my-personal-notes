import React from "react";
import PropTypes from "prop-types";

class LoginInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };

        this.onEmailHandler = this.onEmailHandler.bind(this);
        this.onPasswordHandler = this.onPasswordHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onEmailHandler(event) {
        this.setState(() => {
            return {
                email: event.target.value
            }
        })
    }

    onPasswordHandler(event) {
        this.setState(() => {
            return {
                password: event.target.value
            }
        })
    }

    onSubmitHandler(event) {
        event.preventDefault();

        this.props.login({
            email: this.state.email,
            password: this.state.password,
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler} className="input-login">
                <input type="email" placeholder="Email" value={this.state.email} onChange={this.onEmailHandler} />
                <input type="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordHandler} />
                <button>Masuk</button>
            </form>
        );
    }
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginInput;
// import React from "react";
// import PropTypes from "prop-types";

// class LoginInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       }

//         this.onEmailChange = this.onEmailChange.bind(this);
//         this.onPasswordChange = this.onPasswordChange.bind(this);
//         this.onSubmitHandler = this.onSubmitHandler.bind(this);
//     }

//     onEmailChange(event) {
//       this.setState(() => {
//           return {
//               email: event.target.value,
//           };
//       });
//   }

//   onPasswordChange(event) {
//       this.setState(() => {
//           return {
//               password: event.target.value
//           };
//       });
//   }

//   onSubmitHandler(event) {
//       event.preventDefault();

//       this.props.login({
//           email: this.state.email,
//           password: this.state.password,
//       });
//   }

//   render() {
//       return (
//           <form onSubmit={this.onSubmitHandler} className="input-login">
//               <input type='email' placeholder="email" value={this.state.email} onChange={this.onEmailChange} />
//               <input type='password' placeholder="password" value={this.state.password} onChange={this.onPasswordChange} />
//               <button>Masuk</button>
//           </form>
//       )
//   }
// }

// export default LoginInput;
  

// //  import React from "react";

// // //import { login } from "../utils/network-data";
// // import useInput from "../components/UseInput";

// // function LoginInput({login}) {
// //     const [email, onEmailChange] = useInput('');
// //     const [password, onPasswordChange] = useInput('');
// //     const onSubmitHandler = e => {
// //         e.preventDefault();
// //         login({email, password});
// //     }
// //     return (
// //         <form className="input-login" onSubmit={onSubmitHandler}>
// //             <label htmlFor="email">Email</label>
// //             <input type="email" id="email" value={email} onChange={onEmailChange} />
// //             <label htmlFor="password">Password</label>
// //             <input type="password" id="password" value={password} onChange={onPasswordChange} />
// //             <button>Login</button>
// //         </form>
// //     );
// // }


// // export default LoginInput;
