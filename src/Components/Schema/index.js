import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name : Yup.string().min(5).max(35).required("Pleaser enter your name"),
    email : Yup.string().email().required("Pleaser enter your email"),
    number : Yup.number().min(12).required("please enter correct number"),
})

