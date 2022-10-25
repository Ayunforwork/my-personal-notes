import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/network-data";
import { LocaleConsumer } from "../contexts/LocaleContext";

function RegisterPage() {
    const navigate = useNavigate();

    async function onRegisterHandler(user) {
        const { error } = await register(user);
        if (!error) {
            navigate('/');
        }
    }

    return (
        <LocaleConsumer>
        {
          ({ locale }) => {
            return (
        <section className="register-page">
            <RegisterInput register={onRegisterHandler} />
            <p>{locale === 'id' ? 'Kembali ke '  : 'back to '}<Link to="/login">{locale === 'id' ? 'Masuk' : 'Login'}</Link></p>    
        </section>
            )
          }
        }
        </LocaleConsumer>
    )
}


export default RegisterPage;
