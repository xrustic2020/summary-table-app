import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
// import s from './DeleteRowButton.module.css';
import actions from 'redux/actions';

const DeleteRowButton = ({ id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(actions.deleteRow(id))
  }
  return <>
    <IconButton aria-label="delete" size="small" onClick={handleClick}>
      <DeleteIcon fontSize="small" />
    </IconButton>
  </>
}

export default DeleteRowButton;