import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { auth } from '../firebase';
import { useUserAuth } from "./Context";
export default function SignUp(){
    const [error, setError]=useState("");
    const {CreateUser}=useUserAuth();
    return(
        <div className="border shadow w-5/6 mx-auto mt-24 sm:max-w-lg" style={{ fontFamily: "times" }}>
        <h1 className=" mt-2 text-center font-bold text-3xl text-blue-700">Sign Up</h1>
        <img src="../img/profile_avatar.png" alt="404 Error" className="m-auto h-24 w-24" />
        <h2 className="font-bold text-2xl text-center">Welcome!</h2>
        <Formik
        initialValues={{
            username:"",
            email:"",
            password:"",
            confirm_password:''
        }}
        validationSchema={yup.object({
            username:yup.string().min(4,"Too Short!").max(10,"Too Long!").required("Please! enter the username"),
            email:yup.string().email("Please enter valid email").required("Please! enter email"),
            password:yup.string().required("Please! enter the password").min(6,"Password must be at least 6 characters!").max(15,"Password must be almost 15 characters!"),
            confirm_password: yup.string().oneOf([yup.ref('password'),null],"Password doesn't match").required('Please! enter confirm password')
         
        })}
        onSubmit={async (value)=>{
            try {
          await CreateUser(auth,value.email, value.password,value.username)
            } catch (error) {
                if(error){
                    setError(error.message)
                }
            }
        }}
        >
            <Form className="w-4/5 m-auto">
                <Field type="text" name="username" placeholder="username" className="w-full mb-2 shadow p-2 border-b-2 rounded focus:outline-none focus:border-blue-500 hover:border-blue-700  max-sm:flex"></Field>
                <span className="text-red-700"><ErrorMessage name="username" ></ErrorMessage></span>
                <Field type="email" name="email" placeholder="@email" className="w-full mb-2 p-2 shadow border-b-2 rounded focus:outline-none focus:border-blue-500 hover:border-blue-700 max-sm:flex"></Field>
                <span className="text-red-700"><ErrorMessage name="email" ></ErrorMessage></span>
                <Field type="password" name="password" placeholder="***password" className="w-full mb-2 shadow p-2 border-b-2 rounded focus:outline-none focus:border-blue-500 hover:border-blue-700 max-sm:flex"></Field>
                <span className="text-red-700"><ErrorMessage name="password" ></ErrorMessage></span>
                <Field type="password" name="confirm_password" placeholder="?confirm_password" className="w-full shadow mb-2 p-2 border-b-2 rounded focus:outline-none focus:border-blue-500 hover:border-blue-700  max-sm:flex"></Field>
                <span className="text-red-700"><ErrorMessage name="confirm_password" ></ErrorMessage></span>
                <div className="text-red-700">{error}</div>
               <div className="flex justify-center"> <button type="submit" className="w-48 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-2 mt-3">Sign Up</button></div>
               <div className="mb-2">Already have an account? <Link to="/"  className="text-blue-500 hover:text-blue-800">Login</Link></div>
            </Form>
        </Formik>
        </div>
    )
}