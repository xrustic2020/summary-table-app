import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
// import s from './AddedRowButton.module.css';
import actions from 'redux/actions';

const AddedRowButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actions.deleteRow())
  }
  return <>
    <IconButton aria-label="delete" size="small" onClick={handleClick}>
      <DeleteIcon fontSize="small" />
    </IconButton>
  </>
}

export default AddedRowButton;
