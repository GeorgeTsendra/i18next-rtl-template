import { createAsyncThunk } from "@reduxjs/toolkit";
import { invoices } from "../../api/invoices";

export const getInvoicesList = createAsyncThunk(
  "invoices/get-list",
  async (_: void, thunkAPI) => {
    try {
      const { data } = await invoices.getInvoicesList();
      return data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);
