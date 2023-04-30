import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';

import { Item, Name } from './ContactItem.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export const ContactItem = ({ contact: {id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <Item>
      <Name>{name}:</Name>
      <p>{number}</p>
      <IconButton type="button" aria-label="delete" size="large" color="secondary" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
      {/* <Button type="button" variant="outlined" startIcon={<DeleteIcon />} color="secondary" onClick={handleDelete}>
        Delete
      </Button> */}
    </Item>
  );
};
