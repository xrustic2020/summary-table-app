import { connect } from 'react-redux';
import s from './Table.module.css';
import selectors from 'redux/selectors';

import TableRow from 'components/Table/TableRow';

function Table({ tableBodyData, tableFooterData }) {
  return <div className={s.scrollWrapper}>

    <table className={s.table}>
      <thead className={s.visuallyHidden}>
        <tr>
          <th>amount</th>
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

const mapStateToProps = (state) => ({
  tableBodyData: selectors.getTableBodyData(state),
  tableFooterData: selectors.getTableFooterData(state),
})


export default connect(mapStateToProps)(Table);