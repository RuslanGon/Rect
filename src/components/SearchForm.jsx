import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
searchTherm: ""
};

const searchFormSchema = Yup.object().shape({
  searchTherm: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required search"),
});

const SearchForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={searchFormSchema}
    >
      <Form>
        <h2>Search product</h2>
        <label>
          <Field type="text" name="searchTherm" placeholder="search" />
          <ErrorMessage name="searchTherm" component="span" />
        </label>
        <br />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};
  
  export default SearchForm;
  