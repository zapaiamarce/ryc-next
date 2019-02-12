import { Formik, Field } from 'formik';

export default () => (
  <Formik
      initialValues={{ title: '', description: '', price:'' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <h4>Nombre</h4>
            <Field name="title" placeholder="Nombre" />
          </div>

          <div>
            <h4>Detalle</h4>
            <Field name="description" component="textarea" />
          </div>

          <div>
            <h4>Precio</h4>
            <Field name="price" />
          </div>
          
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
)