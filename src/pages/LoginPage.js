import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';
import { LocaleConsumer } from "../contexts/LocaleContext"
 
function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }
 
  return (
    <LocaleConsumer>
      {
        ({ locale }) => {
          return (

    <section className='login-page'>
      <h2>{locale === 'id' ? 'Silakan masuk untuk melanjutkan ...' : 'please login for continue...'} </h2>
      <LoginInput login={onLogin} />
      <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
      
    </section>
          )
        }
      }
      </LocaleConsumer>
  );
}
 
LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}
 
export default LoginPage;
// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import LoginInput from '../components/LoginInput';
// import { login } from '../utils/network-data';

// function LoginPage({ loginSuccess }) {
//   async function onLogin({ email, password }) {
//     const { error, data } = await login({ email, password });

//     if (!error) {
//       loginSuccess(data);
//     }
//   }

//   return (
//     <section className='login-page'>
//       <h2>Silakan masuk untuk melanjutkan ...</h2>
//       <LoginInput login={onLogin} />
//       <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
//     </section>
//   );
// }

// // LoginPage.propTypes = {
// //   loginSuccess: PropTypes.func.isRequired,
// // }

// export default LoginPage;
// import React from "react";
// import PropTypes from "prop-types";
// import { login } from "../utils/network-data";
// import { Link } from "react-router-dom";
// import useInput from "../components/UseInput";
// //import { LocaleConsumer } from "../contexts/LocaleContext";

// function LoginPage({ loginSuccess }) {
//   const [email, onUserEmailHandler] = useInput("");
//   const [password, onUserPasswordHandler] = useInput("");

//   async function onLogin(event) {
//     event.preventDefault();

//     const { error, data } = await login({ email, password });
//     if (!error) {
//       loginSuccess(data);
//     }
//   }

//   return (
//     <LocaleConsumer>
//       {({ locale }) => {
//         return (
//           <section className="login_page">
//             <h2>{locale === "id" ? "Masuk ke Akun" : "Login to Account"}</h2>
//             <div className="login_input">
//               <div className="input-block">
//                 <label htmlFor="email">
//                   {locale === "id" ? "Surel" : "Email"}
//                 </label>
//                 <input
//                   type="email"
//                   placeholder={
//                     locale === "id" ? "Masukkan Surel" : "Input Email"
//                   }
//                   value={email}
//                   onChange={onUserEmailHandler}
//                 />
//               </div>
//               <div className="input-block">
//                 <label htmlFor="password">
//                   {locale === "id" ? "Kata Sandi" : "Password"}
//                 </label>
//                 <input
//                   type="password"
//                   placeholder={
//                     locale === "id" ? "Masukkan Kata Sandi" : "Input Password"
//                   }
//                   value={password}
//                   onChange={onUserPasswordHandler}
//                 />
//               </div>
//               <button type="button" onClick={onLogin}>
//                 {locale === "id" ? "Masuk" : "Login"}
//               </button>
//             </div>
//             <p>
//               {locale === "id" ? "Belum Punya Akun?" : "Don't Have Account?"}{" "}
//               <Link to="register" className="toLink">
//                 {locale === "id" ? "Daftar Disini" : "Sign Up"}
//               </Link>
//             </p>
//           </section>
//         );
//       }}
//     </LocaleConsumer>
//   );
// }

// LoginPage.propTypes = {
//   loginSuccess: PropTypes.func.isRequired,
// };

// export default LoginPage;
// import React from "react";
// import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";
// import LoginInput from "../components/LoginInput";
// import { login } from "../utils/network-data";


// function LoginPage({ loginSuccess }) {
//     async function onLogin({ email, password }) {
//         const { error, data } = await login({ email, password })

//         if (!error)
//          {
//             loginSuccess(data)
//         }
//     }

//     return (
//         <section className="login-page">
//             <h2>Silahkan masuk untuk melanjutkan ...</h2>
//             <LoginInput login={onLogin} />
//             <p>Belum punya akun? <Link to="/register">Daftar Di sini</Link></p>
//         </section>
//     )
// }

//  LoginPage.propTypes = {
//      loginSuccess: PropTypes.func.isRequired
//  }

// export default LoginPage;
// //import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import InputLogin from "../components/LoginInput";
// import { login } from "../utils/network-data";

// function LoginPage({ loginSucces }) {
//     async function onLogin({ email, password }) {
//         const { error, data } = await login({ email, password });

//         if (!error) {
//             loginSucces(data);
//         }
//     }

//     return (
//         <section>
//             <h2>Silahkan masuk untuk melanjutkan...</h2>
//             <InputLogin login={onLogin} />
//             <p>Belum punya akun? <Link to="/register">Daftar di sini.</Link></p>
//         </section>
//     )
// }

// LoginPage.propTypes = {
//     loginSucces: PropTypes.func.isRequired,
// }

// export default LoginPage;