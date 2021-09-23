import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './actions';

const {
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

  replaceAmountPercentRequest,
  replaceAmountPercentSuccess,
  replaceAmountPercentError,
} = actions;

const params = createReducer({}, {
  [writeTableParams]: (_, { payload }) => payload,
});

const data = createReducer([], {
  [generateTableDataSuccess]: (_, { payload }) => payload,
  [oneClickCellSuccess]: (state, { payload }) => {
    const amount = payload.data.amount + 1;
    state.forEach(el => {
      if (el.key === payload.key) el.rows[payload.index] = { ...payload.data, amount }
      return
    })
  },
  [deleteRow]: (state, { payload }) => state.filter(el => el.key !== payload),
});

const hoverNumber = createReducer(null, {
  [setFloorAmount]: (_, { payload }) => payload,
})

const rowHoverId = createReducer(null, {
  [setRowSumHoverId]: (_, { payload }) => payload,
})

const floorAmounts = createReducer([], {
  [findFloorAmountsSuccess]: (_, { payload }) => payload,
})



const loading = createReducer(false, {
  [generateTableDataRequest]: () => true,
  [generateTableDataSuccess]: () => false,
  [generateTableDataError]: () => false,

  [oneClickCellRequest]: () => true,
  [oneClickCellSuccess]: () => false,
  [oneClickCellError]: () => false,

  [findFloorAmountsRequest]: () => true,
  [findFloorAmountsSuccess]: () => false,
  [findFloorAmountsError]: () => false,

  [replaceAmountPercentRequest]: () => true,
  [replaceAmountPercentSuccess]: () => false,
  [replaceAmountPercentError]: () => false,
});

const contactsReducer = combineReducers({
  table: combineReducers({ data, params }),
  hoverNumber,
  rowHoverId,
  floorAmounts,
  loading,
});

export default contactsReducer;