import { v4 as uuidv4 } from 'uuid';
import actions from './actions';

const {
  generateTableDataRequest,
  generateTableDataSuccess,
  generateTableDataError,

  oneClickCellRequest,
  oneClickCellSuccess,
  oneClickCellError,

  findFloorAmountsRequest,
  findFloorAmountsSuccess,
  findFloorAmountsError,
} = actions;


const generateTableData = ({ rows, columns }) => dispatch => {
  dispatch(generateTableDataRequest());

  const data = [];

  try {
    for (let i = 0; i < (rows + 1); i += 1) {
      const id = uuidv4().slice(30);
      data[i] = { key: id, rows: [] };
      const target = data[i].rows;

      for (let j = 0; j < columns; j += 1) {
        const randomNumber = Math.random() * (999 - 100) + 100;
        const cell = { id: uuidv4(), amount: Number.parseInt(randomNumber) };
        target.push(cell);
      }
    }

    const updatedData = data.map(el => {
      const sum = el.rows.reduce((acc, cell) => acc += cell.amount, 0)
      el.rows.forEach(cell => {
        const percent = Math.round((cell.amount / sum) * 100);
        cell.percent = `${percent}%`;
      })

      return { ...el, sum }
    })

    dispatch(generateTableDataSuccess(updatedData));
  } catch (error) {
    dispatch(generateTableDataError(error));
  }
};

const updateCellData = (data) => (dispatch, getState) => {
  dispatch(oneClickCellRequest());

  try {
    const row = getState().table.data.find((el) => el.rows.includes(data));
    const index = row.rows.indexOf(data);
    const payload = { key: row.key, data, index }

    dispatch(oneClickCellSuccess(payload))
  } catch (error) {
    dispatch(oneClickCellError(error))
  }
}

const findFloorAmounts = (data) => (dispatch, getState) => {
  dispatch(findFloorAmountsRequest());
  const highlights = getState().table.params.highlights;
  const tableBodyCells = getState().table.data;
  const allCells = tableBodyCells.slice(0, tableBodyCells.length - 1).flatMap(el => el.rows);
  const sortedArr = allCells.sort((a, b) => a.amount - b.amount);
  const index = sortedArr.indexOf(data);
  sortedArr.splice(index, 1);
  const startIndex = index - Math.floor((highlights / 2));
  // console.log('startIndex', startIndex);

  function getResultAmountsArray() {
    if (startIndex >= 0) {
      const endIndex = (startIndex + highlights) <= sortedArr.length ? (startIndex + highlights) : sortedArr.length;

      // console.log('endIndex', endIndex);
      if (endIndex === sortedArr.length) return sortedArr.slice(highlights * -1);
      return sortedArr.slice(startIndex, endIndex);
    } else {
      // console.log('startIndex in "0"')
      const endIndex = highlights <= sortedArr.length ? highlights : sortedArr.length;
      // console.log('endIndex', endIndex);
      return sortedArr.slice(0, endIndex);
    }
  }

  const amounts = getResultAmountsArray();

  // console.log('amounts', amounts)

  try {
    dispatch(findFloorAmountsSuccess(amounts))
  } catch (error) {
    dispatch(findFloorAmountsError(error))
  }
}

const operations = {
  generateTableData,
  updateCellData,
  findFloorAmounts,
}

export default operations;