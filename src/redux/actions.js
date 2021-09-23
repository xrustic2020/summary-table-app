import { createAction } from '@reduxjs/toolkit';

const writeTableParams = createAction('writeTableParams');

const setFloorAmount = createAction('setFloorAmount');

const setRowSumHoverId = createAction('setRowSumHoverId');

const deleteRow = createAction('deleteRow');

const generateTableDataRequest = createAction('generateTableDataRequest');
const generateTableDataSuccess = createAction('generateTableDataSuccess');
const generateTableDataError = createAction('generateTableDataError');

const oneClickCellRequest = createAction('oneClickCellRequest');
const oneClickCellSuccess = createAction('oneClickCellSuccess');
const oneClickCellError = createAction('oneClickCellError');

const findFloorAmountsRequest = createAction('findFloorAmountsRequest');
const findFloorAmountsSuccess = createAction('findFloorAmountsSuccess');
const findFloorAmountsError = createAction('findFloorAmountsError');

const actions = {
  writeTableParams,
  setFloorAmount,
  setRowSumHoverId,
  deleteRow,

  generateTableDataRequest,
  generateTableDataSuccess,
  generateTableDataError,

  oneClickCellRequest,
  oneClickCellSuccess,
  oneClickCellError,

  findFloorAmountsRequest,
  findFloorAmountsSuccess,
  findFloorAmountsError,
};

export default actions;