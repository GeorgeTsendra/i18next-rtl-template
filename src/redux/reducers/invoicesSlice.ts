import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { InvoiceT } from "../../types/incoices";
import { getInvoicesList } from "../actions/invoicesActions";

export interface CounterState {
  invoices: Array<InvoiceT> | null;
  isLoading: boolean;
}

const initialState: CounterState = {
  invoices: null,
  isLoading: false,
};

export const invoicesSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInvoicesList.pending.toString(), (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getInvoicesList.fulfilled.toString(),
      (state, action: PayloadAction<Array<InvoiceT>>) => {
        state.isLoading = false;
        state.invoices = action?.payload;
      }
    );
    builder.addCase(
      getInvoicesList.rejected.toString(),
      (state, action: { payload: any; type: string }) => {
        state.isLoading = false;
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const {} = invoicesSlice.actions;

export default invoicesSlice.reducer;
