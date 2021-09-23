import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import s from './Table.module.css';
import selectors from 'redux/selectors';

import TableRow from 'components/Table/TableRow';

function Table({ tableBodyData, tableFooterData, tableParams }) {
  return <div className={s.scrollWrapper}>

    <table className={s.table}>
      <thead className={s.visuallyHidden}>
        <tr>
          <th colSpan={tableParams.columns}>amount</th>
        </tr>
      </thead>
      <tbody>
        {tableBodyData.map((el) => <TableRow key={el.key} id={el.key} oneRowData={el.rows} />)}
      </tbody>
      <tfoot>
        <TableRow oneRowData={tableFooterData[0].rows} />
      </tfoot>
    </table>
  </div>
}

Table.propTypes = {
  tableBodyData: PropTypes.array.isRequired,
  tableFooterData: PropTypes.array.isRequired,
  tableParams: PropTypes.shape({
    rows: PropTypes.number.isRequired,
    columns: PropTypes.number.isRequired,
    highlights: PropTypes.number.isRequired,
  }).isRequired,
}

const mapStateToProps = (state) => ({
  tableBodyData: selectors.getTableBodyData(state),
  tableFooterData: selectors.getTableFooterData(state),
  tableParams: selectors.getTableParams(state),
})


export default connect(mapStateToProps)(Table);