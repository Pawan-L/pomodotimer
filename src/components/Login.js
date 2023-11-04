// src/components/Login.js
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import * as yup from "yup";
import { useUserAuth } from "./Context";
function Login() {
    
    const {login}=useUserAuth();
    const [error, setError] = useState('');
    return (
        <div className="border shadow w-5/6 mx-auto mt-24 sm:max-w-lg" style={{ fontFamily: "times" }}>
            <h1 className="mt-2 text-center font-bold text-3xl text-blue-700">Login</h1>
            <img src="../img/profile_avatar.png" alt="404 Error" className="m-auto h-24 w-24" />
            <h2 className="font-bold text-2xl text-center">Welcome Back</h2>
            <Formik
                initialValues={
                    {
                        email: '',
                        password: ''
                    }
                }
                validationSchema={yup.object().shape({
                    email: yup.string().email('Please! enter valid email').required("email is required"),
                    password: yup.string().required("password is required").min(4, "Too Short!").max(15, "Too Long!")
                })}

                onSubmit={async (value) => {
                    try {
                        await login( value.email, value.password);
                    } catch (error) {
                        setError(error.message);
                    }
                }}

            >
                <Form className="w-5/6 m-auto">
                    <Field type="email" name="email" placeholder="Email" className="w-full p-2 mb-2 shadow border-b-2 rounded focus:outline-none focus:border-blue-500 hover:border-blue-700  max-sm:flex"></Field>
                    <span className="text-red-700"><ErrorMessage name="email" ></ErrorMessage></span>
                    <Field type="password" name="password" placeholder="Password" className="w-full mb-2 shadow m-auto p-2 border-b-2 rounded focus:outline-none focus:border-blue-500 hover:border-blue-700"></Field>
                    <span className="text-red-700"> <ErrorMessage name="password" ></ErrorMessage></span>
                    <div className="text-red-700">{error}</div>
                    <div className="m-2">Forget Password? <Link to="/forget" className="text-blue-500 hover:text-blue-700">Click Here!</Link></div>
                    <div className="flex justify-evenly">
                        <button type="submit" className="w-1/3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-2 mt-3">Login</button>
                        <Link to="/sign_up" className="text-center w-1/3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-2 mt-3">Sign up</Link>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
export default Login;
