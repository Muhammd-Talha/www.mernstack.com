import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name : Yup.string().min(2).max(25).required("Please Enter Your Name"),
    email : Yup.string().email().required("Please Enter Your Email"),
    number : Yup.number().required("Please Enter Your Number")
})


