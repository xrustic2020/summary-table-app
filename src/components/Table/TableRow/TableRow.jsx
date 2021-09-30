import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import SummaryCell from 'components/Table/SummaryCell';
import TableOneCell from 'components/Table/TableOneCell';

import selectors from 'redux/selectors';


function TableRow({ oneRowData, id }) {
  const floorAmounts = useSelector(selectors.getFloorAmounts);
  const tableFooterData = useSelector(selectors.getTableFooterData);
  const isSummaryCell = tableFooterData === oneRowData;

  return <tr>
    {oneRowData.map((el, index) =>
      <TableOneCell
        key={el.id}
        rowId={id}
        highlights={floorAmounts.some(e => e.id === el.id)}
        index={index}
        data={el}
        isSummary={isSummaryCell}
      />)}


    {isSummaryCell ? <SummaryCell id={id} data={oneRowData} isAddedRowButton={isSummaryCell} /> : <>
      <SummaryCell id={id} data={oneRowData} />
      <SummaryCell id={id} data={oneRowData} isDeleteRowButton />
    </>}
  </tr>
}

TableRow.propTypes = {
  oneRowData: PropTypes.array.isRequired,
  id: PropTypes.string,
}

export default TableRow;