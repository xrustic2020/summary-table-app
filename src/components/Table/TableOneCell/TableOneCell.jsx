import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';

import s from './TableOneCell.module.css';
import selectors from 'redux/selectors';
import actions from 'redux/actions';
import operations from 'redux/operations';

function TableOneCell({ data, summary, index, rowId, tableBodyData, highlights, rowSumHover }) {
  const dispatch = useDispatch();
  const classes = summary ? [s.summary] : [s.cell];
  if (highlights) classes.push(s.highlight);
  if (rowSumHover === rowId) classes.push(s.rowId)

  const calculate = (index) => {
    const oneColumn = tableBodyData.map(el => el.rows[index]);
    return oneColumn.reduce((acc, el) => acc += el.amount, 0);
  }

  const handleClick = () => {
    dispatch(operations.updateCellData(data))
  }

  const handleHover = (evt) => {
    if (summary) return;
    const amount = evt.target.innerHTML;
    dispatch(actions.setFloorAmount(amount))
    dispatch(operations.findFloorAmounts(data))
  }

  const handleOutHover = () => {
    if (summary) return;
    dispatch(actions.setFloorAmount(null))
  }
  const sum = summary ? calculate(index) : (rowSumHover === rowId ? data.percent : data.amount);

  return <td style={{ '--percent': sum }} className={classes.join(' ')} onMouseOver={handleHover} onMouseOut={handleOutHover} onClick={handleClick}>{sum}</td>
}

TableOneCell.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    percent: PropTypes.string,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  summary: PropTypes.bool,
  index: PropTypes.number,
  rowId: PropTypes.string,
  tableBodyData: PropTypes.array.isRequired,
  highlights: PropTypes.bool,
  rowSumHover: PropTypes.string,
}

const mapStateToProps = (state) => ({
  tableBodyData: selectors.getTableBodyData(state),
  rowSumHover: selectors.getRowHoverId(state),
})

export default connect(mapStateToProps)(TableOneCell);