import React, { useState, useEffect } from 'react';
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Container } from 'react-bootstrap';
import { MdOutlinePhonePaused } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import Footer from "./Footer"
import "./Getintouch.css";
import { RiseLoader } from 'react-spinners';
import { Formik, useFormik } from 'formik';
import { signUpSchema } from './Schema';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
    name: "",
    email: "",
    number: "",
    textarea: "",
}
const Getintouch = () => {
    function toastify() {
        toast("Wow so easy!");
    }
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            action.resetForm();
            toast.success("Done succesffly")
        }
    })
    const [counterstart, setcounterstart] = useState(false)
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 1000);
    }, [])
    return (
        <div>
            {
                loading ?
                    <div className='loader-tag'>
                        <RiseLoader
                            color={"#284D91"}
                            loading={loading}
                            // cssOverride={override}
                            size={15}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                    :
                    <div>
                        <Container>
                            <h1 className='heading-tag'>LETS DISCUSS YOUR PROJECT!</h1>
                            <p className='paragraph-tag'>You Get In Touch With Us When Need Help! My WhatsApp Number is <span>+92-322-8487164</span> and Email account is <span>MuhammadTalha9279@gmail.com</span></p>
                            <div className="row w-100 forms-style">
                                <div className="col iframe-location">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6806.432694033293!2d74.2626456!3d31.463234299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901807103c38f%3A0xa131bd757ebb3d02!2sTrade%20Centre%20Phase%202%20Johar%20Town%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1710537998496!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div className="col">
                                    <form className='formdata' onSubmit={handleSubmit}>
                                        <div class="input-group mb-4">
                                            <span class="input-group-text input-icon"><FaRegUser /></span>
                                            <div className='w-100'>
                                                <input type="text" name='name' id='name' aria-label="First name" placeholder='Full Name..'
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    class="form-control input-field ps-5" />
                                            </div>
                                            {errors.name && touched.name ? (<p className='validation-paragraph'>{errors.name} </p>) : null}

                                        </div>
                                        <div class="input-group mb-4">
                                            <span class="input-group-text input-icon"><HiOutlineMail /></span>
                                            <div className='w-100'>
                                                <input type="text" name='email' id='email' aria-label="First name" placeholder='Email Address..'
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    class="form-control input-field ps-5" />
                                            </div>
                                            {errors.email && touched.email ? (<p className='validation-paragraph'>{errors.email}  </p>) : null}
                                        </div>
                                        <div class="input-group mb-4">
                                            <span class="input-group-text input-icon"><MdOutlinePhonePaused /></span>
                                            <div className='w-100'>
                                                <input type="tel" name='number' id='number' aria-label="First name" placeholder='Phone Number..'
                                                    value={values.number}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    class="form-control input-field ps-5" />
                                            </div>
                                            {errors.number && touched.number ? (<p className='validation-paragraph'>{errors.number}  </p>) : null}
                                        </div>
                                        <div class="input-group mt-4">
                                            <span class="input-group-text input-icon" id='textarea-icon'><BiMessageDetail /></span>
                                            <div className='w-100 '>
                                                <textarea style={{ width: "100%" }} className='textareas ps-5 pe-3' placeholder='Message..'
                                                    rows="5"></textarea>
                                            </div>
                                        </div>
                                        <div className='mt-4 form-button'>
                                            <input type="submit" value="send" className='button' />
                                            <ToastContainer />
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </Container>
                        <Footer />
                    </div>
            }
        </div>
    );
}

export default Getintouch;
