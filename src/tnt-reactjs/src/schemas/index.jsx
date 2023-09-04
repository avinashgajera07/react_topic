import * as Yup from "yup";

export const signUpSchema = Yup.object({
    username: Yup.string().min(2).max(30).required("Please enter your Username"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref('password'), null, "confirm password and password must be same "]),
    employeeid: Yup.string().required('Please enter employeeId'),
    usertype: Yup.string().required('Please enter usertype'),
    joiningdate: Yup.date()
    .required("Joining date is required")
    .test(
      "join-date-test",
      "Joining date must be before expiry date",
      function (value) {
        const { expirydate } = this.parent;
        return !value || !expirydate || value < expirydate;
      }
    ),
  expirydate: Yup.date()
    .required("Expiry date is required")
    .test(
      "expiry-date-test",
      "Expiry date must be after joining date",
      function (value) {
        const { joiningdate } = this.parent;
        return !value || !joiningdate || value > joiningdate;
      }
    ),

});