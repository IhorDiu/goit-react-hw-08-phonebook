import { Helmet } from 'react-helmet';


import {ContactForm, ContactList, Filter } from 'components';
import { Title, Subtitle } from '../components/App/App.styled';


export default function Contacts() {
 

  return (
    <>
      <Helmet>
        <Title>Your contacts</Title>
      </Helmet>
      <ContactForm />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <ContactList />
    </>
  );
}



