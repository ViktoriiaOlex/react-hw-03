import { nanoid } from "nanoid";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";

import css from './ContactForm.module.css';

const ContactForm = ({ addContact, contacts }) => {
  const INITIAL_FORM_DATA = {
    name: "",
    number: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short!")
      .max(30, "User name must be less than 30 characters!")
      .required("Name is required")
      .test("uniqueName", "Name already exists", (value) => {
        return !contacts.some((contact) => contact.name === value);
      }),
    number: Yup.string()
      .min(3, "Phonenumber must be at least 3 characters!")
      .required("Number is required"),
  });
  const handleSubmit = (values, { resetForm }) => {
    addContact({ id: nanoid(), ...values });
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={INITIAL_FORM_DATA}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form className={css.formContact} onSubmit={handleSubmit}>
            <p className={css.title}>Name</p>
            <Field
              className={css.field}
              type="text"
              name="name"
              placeholder="John Smith"
            />
            <ErrorMessage
              className={css.formError}
                name="name" component="span" />
            <p className={css.title}>Number</p>
            <Field
              className={css.field}
              type="text"
              name="number"
              placeholder="123-45-67"
            />
            <ErrorMessage 
            className={css.formError}
            name="number" component="span" />
            <button
              type="submit"
              disabled={isSubmitting}
              title="Click to save new phonenumber"
              aria-label="Add new phonenumber"
            >
              Add contact
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};


export default ContactForm;