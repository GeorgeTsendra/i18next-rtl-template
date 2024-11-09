import axios from "../utils/axios";

export const invoices = {
  getInvoicesList: async () => {
    const resp = await axios.get(`/invoices`);
    return resp;
  },
};
