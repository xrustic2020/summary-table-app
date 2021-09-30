import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import s from './TableOneCell.module.css';
import selectors from 'redux/selectors';
import actions from 'redux/actions';
import operations from 'redux/operations';

function TableOneCell({ data, isSummary, index, rowId, highlights }) {
  const dispatch = useDispatch();
  const tableBodyData = useSelector(selectors.getTableBodyData);
  const rowSumHover = useSelector(selectors.getRowHoverId);

  const handleClick = () => {
    dispatch(operations.updateCellData(data))
  }

  const handleHover = (evt) => {
    if (isSummary) return;
    const amount = evt.target.innerHTML;
    dispatch(actions.setFloorAmount(amount))
    dispatch(operations.findFloorAmounts(data))
  }

  const handleOutHover = () => {
    if (isSummary) return;
    dispatch(actions.setFloorAmount(null))
  }

  const calculate = useMemo(() => (index) => {
    const oneColumn = tableBodyData.map(el => el.rows[index]);
    return oneColumn.reduce((acc, el) => acc += el.amount, 0);
  }, [tableBodyData])

  const classes = () => {
    const classes = isSummary ? [s.summary] : [s.cell];
    if (highlights) classes.push(s.highlight);
    if (rowSumHover === rowId) classes.push(s.rowId);
    return classes.join(' ');
  }

  const sum = isSummary
    ? calculate(index)
    : (rowSumHover === rowId ? data.percent : data.amount);

  return <td
    style={{ '--percent': sum }}
    className={classes()}
    onMouseOver={handleHover}
    onMouseOut={handleOutHover}
    onClick={handleClick}>{sum}
  </td>
}

TableOneCell.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    percent: PropTypes.string,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  isSummary: PropTypes.bool,
  index: PropTypes.number,
  rowId: PropTypes.string,
  highlights: PropTypes.bool,
}

export default TableOneCell;