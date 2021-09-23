import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TableSummaryColumn from 'components/Table/TableSummaryColumn';
import TableOneCell from 'components/Table/TableOneCell';

import s from './TableRow.module.css';
import selectors from 'redux/selectors';


function TableRow({ oneRowData, id, floorAmounts, tableFooterData }) {
  const summaryCell = tableFooterData[0].rows === oneRowData;

  return <tr className={s.relative}>
    {oneRowData.map((el, index) => <TableOneCell key={el.id} rowId={id} highlights={floorAmounts.some(e => e.id === el.id)} index={index} data={el} summary={summaryCell} />)}
    {!summaryCell && <>
      <TableSummaryColumn id={id} data={oneRowData} />
      <TableSummaryColumn id={id} data={oneRowData} isDeleteRowButton={true} />
    </>}
    {summaryCell && <>
      <TableSummaryColumn id={id} data={oneRowData} isAddedRowButton={summaryCell} />
    </>}
  </tr>
}

TableRow.propTypes = {
  oneRowData: PropTypes.array.isRequired,
  id: PropTypes.string,
  floorAmounts: PropTypes.array,
  tableFooterData: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  floorAmounts: selectors.getFloorAmounts(state),
  tableFooterData: selectors.getTableFooterData(state),
})


export default connect(mapStateToProps)(TableRow);