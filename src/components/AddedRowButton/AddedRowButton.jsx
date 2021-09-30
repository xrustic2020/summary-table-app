import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import AddedIcon from '@mui/icons-material/AddToPhotos';
import IconButton from '@mui/material/IconButton';

import operations from 'redux/operations';

function AddedRowButton() {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(operations.generateOneRow());
  }, [dispatch]);

  return <>
    <IconButton onClick={handleClick} color="primary" aria-label="added row">
      <AddedIcon />
    </IconButton>
  </>
}

export default AddedRowButton;
