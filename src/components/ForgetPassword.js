import { sendPasswordResetEmail } from "firebase/auth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from 'yup'
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const ForgetPassword=()=>{
    const navigate=useNavigate();
    const [error, setError]=useState();
    return(
        <div className="border shadow w-5/6 mx-auto mt-24 sm:max-w-lg font-[poppins]">
            <h1 className="mt-2 text-center font-bold text-3xl text-blue-700">Forge Password</h1>
            <img src="../img/profile_avatar.png" alt="404 Error" className="m-auto h-24 w-24" />
            <h2 className="font-bold text-2xl text-center">Send email reset password</h2>
        <Formik
        initialValues={
            {
                email: '',
            }
        }
        validationSchema={yup.object().shape({
            email: yup.string().email('Please! enter valid email').required("email is required"),
                   })}

        onSubmit={async (value) => {
            sendPasswordResetEmail(auth,value.email)
            .then(data=>navigate('/'))
            .catch(error=>setError(error))
        }}

    >
        <Form className="w-5/6 m-auto">
            <Field type="email" name="email" placeholder="Email" className="w-full p-2 mb-2 shadow border-b-2 rounded focus:outline-none focus:border-blue-500 hover:border-blue-700  max-sm:flex"></Field>
            <div className="text-red-700"><ErrorMessage name="email" ></ErrorMessage></div>
            <div className="text-red-700">{error}</div>
            <button type="submit" className="w-2/3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-2 mt-3">Send Reset password</button>
        </Form>
    </Formik>
</div>
    )
}

export default ForgetPassword;