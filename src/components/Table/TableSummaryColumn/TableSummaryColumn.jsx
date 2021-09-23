import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import s from './TableSummaryColumn.module.css';
import selectors from 'redux/selectors';
// import operations from 'redux/operations';
import actions from 'redux/actions';
import DeleteRowButton from 'components/DeleteRowButton';
import AddedRowButton from 'components/AddedRowButton'

function TableSummaryColumn({ data, id, isAddedRowButton, isDeleteRowButton, tableBodyData }) {
  const dispatch = useDispatch();
  const sum = data.reduce((acc, el) => acc + el.amount, 0);
  const isButtonsCell = isAddedRowButton || isDeleteRowButton;
  const classes = isButtonsCell ? [s.footerCell] : [s.sumCell];

  // console.log('data TabSumCol', data);
  // console.log('TubSumCol id', id);

  const handleMouseOver = () => {
    if (isButtonsCell) return;
    dispatch(actions.setRowSumHoverId(id))
  }

  const handleMouseOut = () => {
    if (isButtonsCell) return;
    dispatch(actions.setRowSumHoverId(null))
  }

  return <td colSpan={isAddedRowButton ? 2 : 1} className={classes.join(' ')} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
    {!isButtonsCell && sum}
    {isDeleteRowButton && <DeleteRowButton id={id} />}
    {isAddedRowButton && <AddedRowButton />}
  </td>
}

const mapStateToProps = (state) => ({
  tableBodyData: selectors.getTableBodyData(state),
})

export default connect(mapStateToProps)(TableSummaryColumn);