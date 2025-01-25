import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { apiReqister } from "../redux/auth/operations.js";

const initialValues = {
  name: "",
  email: "",
  password: ""
};

const registorSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Must be a valid email!").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const RegistrationPage = () => {
  const dispatch = useDispatch()

  const handleSubmit = (values, actions) => {
    dispatch(apiReqister(values))
    actions.resetForm();
  };

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={handleSubmit} 
      validationSchema={registorSchema}
    >
      <Form>
        <h2>Register new User</h2>
        <br />
        <label>
          <span>Name:</span>
          <br />
          <Field type="text" name="name" placeholder="Enter your name" />
          <ErrorMessage name="name" component="span" style={{ color: "red" }} />
        </label>
        <br />
        <label>
          <span>Email:</span>
          <br />
          <Field type="email" name="email" placeholder="Enter your email" />
          <ErrorMessage name="email" component="span" style={{ color: "red" }} />
        </label>
        <br />
        <label>
          <span>Password:</span>
          <br />
          <Field type="text" name="password" placeholder="Enter your password" />
          <ErrorMessage name="password" component="span" style={{ color: "red" }} />
        </label>
        <br />
        <button type="submit">Register New User 👱</button>
      </Form>
    </Formik>
  );
};

export default RegistrationPage;
