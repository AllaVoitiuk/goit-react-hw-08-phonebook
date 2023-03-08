import { Modal } from 'components/Modal/Modal';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts.selector';
import { fetchContacts } from 'redux/contacts/contacts.operations';
import { Label, Input, Li, Button } from './FilterPage.styled';

const FilterPage = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    setIsModalOpen(true);
    setCurrentId(id);
  };

  const changeFilter = event => {
    setFilterValue(event.target.value);
  };

  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <Label>
        Find contacts by name
        <Input type="text" value={filterValue} onChange={changeFilter} />
      </Label>

      {filteredContacts.length !== 0 && (
        <ul>
          {filteredContacts.map(({ id, name, phone }) => {
            return (
              <Li key={id}>
                {name}: {phone}
                <Button type="button" onClick={() => handleDelete(id)}>
                  Delete
                </Button>
              </Li>
            );
          })}
        </ul>
      )}
      {isModalOpen && <Modal id={currentId} onClose={setIsModalOpen} />}
    </>
  );
};

export default FilterPage;
