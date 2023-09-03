import * as Yup from "yup";

export const signUpSchema = Yup.object({
    username: Yup.string().min(2).max(30).required("Please enter your Username"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password'), null, "confirm password and password must be same "]),
    employeeid: Yup.string().required('Please enter employeeId'),
    usertype: Yup.string().required('Please enter usertype'),
    joiningdate: Yup.string().required('Please choose joiningdate'),
    expirydate: Yup.string().required('Please choose expirydate')
});