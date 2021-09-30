import { useSelector } from 'react-redux';

import s from './Table.module.css';
import selectors from 'redux/selectors';

import TableRow from 'components/Table/TableRow';

function Table() {
  const tableBodyData = useSelector(selectors.getTableBodyData);
  const tableFooterData = useSelector(selectors.getTableFooterData);
  const tableParams = useSelector(selectors.getTableParams);

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
        <TableRow oneRowData={tableFooterData} />
      </tfoot>
    </table>
  </div>
}

export default Table;