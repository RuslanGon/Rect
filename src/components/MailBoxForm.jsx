import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  userEmail: "",
  userName: ""
};

const FeedbackSchema = Yup.object().shape({
  userEmail: Yup.string().email("Must be a valid email!").required("Required email"),
  userName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required name"),
});

const MailBoxForm = ({ AddUser }) => {
    const handleSubmit = (values, actions) => {
      // console.log(values);
      AddUser(values)
      actions.resetForm();
    };
  
    return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit} 
      validationSchema={FeedbackSchema}>
      <Form>
        <h2>Add new user</h2>
        <label>
          <span>User Email</span>
          <br />
          <Field type="email" name="userEmail" placeholder="email" />
          <ErrorMessage name="userEmail" component="span" />
        </label>
        <br />
        <label>
          <span>User Name</span>
          <br />
          <Field type="text" name="userName" placeholder="name" />
          <ErrorMessage name="userName" component="span" />
        </label>
        <br />
        <button type="submit">Add user</button>
      </Form>
      </Formik>
    );
  };
  
  export default MailBoxForm;
  