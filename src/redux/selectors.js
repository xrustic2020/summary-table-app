import { createSelector } from '@reduxjs/toolkit';

const getTableData = state => state.table.data;

const getTableBodyData = createSelector(
  [getTableData],
  (data) => data.slice(0, data.length - 1)
);

const getTableFooterData = createSelector(
  [getTableData],
  (data) => data.slice(-1)
);

const getTableParams = state => state.table.params;

const getCellAmount = (state, props) => state.table.data[props.rowId][props.index].amount;

const getHoverNumber = (state) => state.hoverNumber;

const getRowHoverId = (state) => state.rowHoverId;

const getFloorAmounts = (state) => state.floorAmounts;


const selectors = {
  getTableData,
  getTableBodyData,
  getTableFooterData,
  getTableParams,
  getCellAmount,
  getHoverNumber,
  getRowHoverId,
  getFloorAmounts,
}

export default selectors;