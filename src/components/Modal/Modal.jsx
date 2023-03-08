import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.operations';
import { Backdrop, ModalWindow, Wrapper, Button } from './Modal.styled';

export const Modal = ({ id, onClose }) => {
  const dispatch = useDispatch();
  const handleClose = evt => {
    if (evt.target === evt.currentTarget) {
      onClose(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteContact(id));
    onClose(false);
  };
  return (
    <Backdrop onClick={handleClose}>
      <ModalWindow>
        <h3>Are you shure you want to delete this item?</h3>
        <Wrapper>
          <Button type="button" onClick={handleDelete}>
            Yes
          </Button>
          <Button type="button" onClick={handleClose}>
            No
          </Button>
        </Wrapper>
      </ModalWindow>
    </Backdrop>
  );
};
