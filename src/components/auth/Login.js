import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {

    const navigate = useNavigate();

    const [ownername, setOwnername] = useState()

    const onInputChange = (e) => {
        setOwnername(e.target.value)
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required("Username is required")
            .min(1, "Username must be at least 1 characters")
            .max(20, "Username must not exceed 20 characters"),

        password: Yup.string()
            .required("Password is required")
            .min(1, "Password must be at least 1 characters")
            .max(40, "Password must not exceed 40 characters"),
    });

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data) => {

        const payload = { userName: data.username, userPassword: data.password };

        const result = await axios.post(
            "http://localhost:8081/authenticate",
            payload
        );
        if (result?.data?.user?.role[0]?.roleName === "Owner") {
            navigate(`/owner/${ownername}`);
        } else {
            navigate("/team");
        }
    };

    return (
        <div className="img">
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-secondary justify-content-between text-white font-weight-bol fixed-top">
                    <img src='https://www.iplt20.com/assets/images/ipl-logo-new-old.png' alt='logo' height={70} />
                    <h2> IPL Dashboard </h2>
                    <Link className='btn btn-primary btn-lg' to='/login'>Login</Link>
                </nav>
            </div>
            <div className='container ' >
                <div className="row">
                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                        <div className='card'>
                            <div className='card card-header'><h1 className='text-center text-danger'>IPL - Login</h1></div>
                            <div className='card card-body'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input
                                            name="username"
                                            type="text"
                                            {...register("username")}
                                            className={`form-control ${errors.username ? "is-invalid" : ""}`}
                                            onChange={(e) => onInputChange(e)}
                                        />
                                        <div className="invalid-feedback">{errors.username?.message}</div>
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            name="password"
                                            type="password"
                                            {...register("password")}
                                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                        />
                                        <div className="invalid-feedback">{errors.password?.message}</div>
                                    </div>
                                    <hr />
                                    <div className="form-group">
                                        <div className="d-flex justify-content-around">
                                            <button type="submit" className="btn btn-primary mt-2">
                                                Login
                                            </button>
                                            <Link className="btn btn-danger mx-2 mt-2" to={"/"}>
                                                Cancel
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
