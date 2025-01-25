import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: ""
};

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email!").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={handleSubmit} 
      validationSchema={loginSchema}
    >
      <Form>
        <h2>Login User</h2>
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

export default LoginPage;
