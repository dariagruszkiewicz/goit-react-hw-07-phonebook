import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/sliceFilter';

export const Filter = () => {
  const dispatch = useDispatch();

  const inputFilterChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={inputFilterChange} />
    </label>
  );
};
