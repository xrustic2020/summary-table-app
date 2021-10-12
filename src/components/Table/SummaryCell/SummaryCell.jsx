import { useCallback, useMemo, memo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import s from './SummaryCell.module.css';
import actions from 'redux/actions';

import DeleteRowButton from 'components/DeleteRowButton';
import AddedRowButton from 'components/AddedRowButton';

const SummaryCell = memo(({ data, id, isAddedRowButton, isDeleteRowButton }) => {
  const dispatch = useDispatch();
  const sum = useMemo(() => data.reduce((acc, el) => acc + el.amount, 0), [data]);
  const isButtonsCell = isAddedRowButton || isDeleteRowButton;

  // console.log('render SummaryCell')

  const handleMouseOver = useCallback(() => {
    if (isButtonsCell) return;
    dispatch(actions.setRowSumHoverId(id));
  }, [dispatch, id, isButtonsCell]);

  const handleMouseOut = useCallback(() => {
    if (isButtonsCell) return;
    dispatch(actions.setRowSumHoverId(null));
  }, [dispatch, isButtonsCell])

  const classes = () => {
    const classes = isButtonsCell ? [s.footerCell] : [s.sumCell];
    if (isAddedRowButton) classes.push(s.right);
    return classes.join(' ');
  }

  return <td
    className={classes()}
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
  >
    {!isButtonsCell && sum}
    {isDeleteRowButton && <DeleteRowButton id={id} />}
    {isAddedRowButton && <AddedRowButton />}
  </td>
})

SummaryCell.propTypes = {
  oneRowData: PropTypes.array,
  id: PropTypes.string,
  isAddedRowButton: PropTypes.bool,
  isDeleteRowButton: PropTypes.bool,
}

export default SummaryCell;