import { useState } from 'react';
import { useDispatch } from 'react-redux';

import operations from 'redux/operations';
import actions from 'redux/actions'

import Button from '@mui/material/Button';
import s from './TableCreationForm.module.css';

function TableCreationForm() {
  const dispatch = useDispatch();
  const [rows, setRows] = useState('')
  const [columns, setColumns] = useState('')
  const [highlights, setHighlights] = useState('')

  const handleSubmit = evt => {
    evt.preventDefault();

    const data = {
      rows: Number(rows),
      columns: Number(columns),
      highlights: Number(highlights),
    };

    dispatch(actions.writeTableParams(data));
    dispatch(operations.generateTableData(data));
  }

  return <section className={s.wrapper}>
    <h2 className={s.heading}>Table Creation Form</h2>
    <form onSubmit={evt => handleSubmit(evt)} className={s.form}>

      <label className={s.fromElement}>
        <span className={s.captionField}>Rows "M"</span>
        <input type="number" value={rows} name="rows" onChange={(evt) => setRows(evt.target.value)} />
      </label>

      <label className={s.fromElement}>
        <span className={s.captionField}>Columns "N"</span>
        <input type="number" value={columns} name="columns" onChange={(evt) => setColumns(evt.target.value)} />
      </label>

      <label className={s.fromElement}>
        <span className={s.captionField}>Highlights "X"</span>
        <input type="number" value={highlights} name="highlights" onChange={(evt) => setHighlights(evt.target.value)} />
      </label>

      <Button variant="contained" type="submit">Create table</Button>
    </form>
  </section>
}

export default TableCreationForm;