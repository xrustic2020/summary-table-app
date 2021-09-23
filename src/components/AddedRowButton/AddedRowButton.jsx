import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import AddedIcon from '@mui/icons-material/AddToPhotos';
import s from './AddedRowButton.module.css';
import operations from 'redux/operations';

const AddedRowButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(operations.generateOneRow())
  }
  return <>
    <Button variant="contained" onClick={handleClick} className={s.button} startIcon={<AddedIcon color="white" />}>
      Add
    </Button>
  </>
}

export default AddedRowButton;
