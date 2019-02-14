import { Formik, Field } from "formik";

export default ({onLogin}) => (
  <Formik
    initialValues={{ email: "", code: "" }}
    onSubmit={(values, { setSubmitting }) => {
      onLogin(values)
    }}
  >
    {({ handleSubmit, isSubmitting }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <h4>Email</h4>
          <Field name="email" type="email" />
        </div>

        <div>
          <h4>Código</h4>
          <Field name="code" />
        </div>

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    )}
  </Formik>
);
