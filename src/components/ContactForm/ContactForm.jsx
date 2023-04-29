import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/operations';
import { useContacts } from 'hooks';
import { Formik } from 'formik';

import { Input, FormInput, AddButton } from './ContactForm.styled';

const initialValues = { name: '', phone: '' };

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useContacts();

  const handleSubmit = (values, { resetForm }) => {
    const newName = values.name;
    if (
      contacts.items.find(
        contact => contact.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      alert(`${newName} is already in contacts`);
      resetForm();
      return;
    }

    dispatch(addContacts(values));

    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <FormInput autoComplete="off">
        <label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            placeholder="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="phone">
          Phone
          <Input
            type="tel"
            name="phone"
            placeholder="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <AddButton type="submit">Add contact</AddButton>
      </FormInput>
    </Formik>
  );
};
