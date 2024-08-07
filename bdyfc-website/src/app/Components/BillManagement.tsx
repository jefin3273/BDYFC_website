import React, { useState } from "react";
import BillForm from "./BillForm";
import BillList from "./BillList";
import BillDetails from "./BillDetails";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Receipt from "./Receipt";

interface Bill {
  id: string;
  churchName: string;
  billingDate: string;
  amount: string;
  paymentMethod: string;
  transactionId: string;
}

const BillManagement: React.FC = () => {
  const [bills, setBills] = useState<Bill[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [billToEdit, setBillToEdit] = useState<Bill | null>(null);

  const addBill = (bill: Bill) => {
    if (billToEdit) {
      setBills(
        bills.map((b) => (b.id === billToEdit.id ? { ...bill, id: b.id } : b))
      );
      setBillToEdit(null);
    } else {
      setBills([...bills, { ...bill, id: Date.now().toString() }]);
    }
  };

  const deleteBill = (id: string) => {
    setBills(bills.filter((bill) => bill.id !== id));
  };

  const modifyBill = (id: string) => {
    const bill = bills.find((bill) => bill.id === id);
    if (bill) {
      setBillToEdit(bill);
      setShowForm(true);
    }
  };

  const downloadBill = (id: string) => {
    const bill = bills.find((bill) => bill.id === id);
    if (bill) {
      return (
        <PDFDownloadLink
          document={
            <Receipt
              {...bill}
              billNumber={bill.id}
              date={new Date().toLocaleDateString()}
            />
          }
          fileName={`receipt_${bill.id}.pdf`}
        >
          {({ loading }) => (
            <button className="bg-green-500 text-white p-2 rounded">
              {loading ? "Loading document..." : "Download now!"}
            </button>
          )}
        </PDFDownloadLink>
      );
    }
    return null;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Bill Management</h1>
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => setShowForm(true)}
        >
          Add Bill
        </button>
      </div>
      <BillList
        bills={bills}
        onDeleteBill={deleteBill}
        onModifyBill={modifyBill}
        onDownloadBill={downloadBill}
      />
      <BillForm
        show={showForm}
        onClose={() => setShowForm(false)}
        onAddBill={addBill}
        billToEdit={billToEdit}
      />
    </div>
  );
};

export default BillManagement;
