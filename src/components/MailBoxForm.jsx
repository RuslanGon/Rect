import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  userEmail: "",
  userName: "",
  favColor: ""
};

const mailBoxSchema = Yup.object().shape({
  userEmail: Yup.string().email("Must be a valid email!").required("Required email"),
  userName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required name"),
  favColor: Yup.string().required("favColor is required").oneOf(['red', 'green', 'blue'])
});

const MailBoxForm = ({ AddUser }) => {
    const handleSubmit = (values, actions) => {
      // console.log(values);
      AddUser(values)
      actions.resetForm();
    };
  
    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit} 
      validationSchema={mailBoxSchema}>
      <Form>
        <h2>Add new MailBox user</h2>
        <label>
          <span>User email:</span>
          <br />
          <Field type="email" name="userEmail" placeholder="email" />
          <ErrorMessage name="userEmail" component="span" />
        </label>
        <br />
        <label>
          <span>User name:</span>
          <br />
          <Field type="text" name="userName" placeholder="name" />
          <ErrorMessage name="userName" component="span" />
          <br />
        </label>
        <br />
        <span>favourite color</span>
        <br />
        <label>
          <Field type="radio" name="favColor" value="red" />
          <span>Red:</span>
        </label>
        <label>
          <Field type="radio" name="favColor" value="green" />
          <span>Green:</span>
        </label>
        <label>
          <Field type="radio" name="favColor" value="blue" />
          <span>Blue:</span>
          <ErrorMessage component="p" name="favColor" />
        </label>
      <br />
      <button type="submit">Create new user 👱</button>
      </Form>
      </Formik>
    );
  };
  
  export default MailBoxForm;
  