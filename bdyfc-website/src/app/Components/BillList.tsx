import React from "react";

interface Bill {
  id: string;
  churchName: string;
  billingDate: string;
  amount: string;
  paymentMethod: string;
  transactionId: string;
}

interface BillListProps {
  bills: Bill[];
  onDeleteBill: (id: string) => void;
  onModifyBill: (id: string) => void;
  onDownloadBill: (id: string) => JSX.Element | null;
}

const BillList: React.FC<BillListProps> = ({
  bills,
  onDeleteBill,
  onModifyBill,
  onDownloadBill,
}) => (
  <div>
    {bills.map((bill) => (
      <div
        key={bill.id}
        className="border p-2 mb-2 flex justify-between items-center"
      >
        <div>
          <p>Church Name: {bill.churchName}</p>
          <p>Billing Date: {bill.billingDate}</p>
          <p>Amount: {bill.amount}</p>
          <p>Payment Method: {bill.paymentMethod}</p>
          <p>Transaction ID: {bill.transactionId}</p>
        </div>
        <div>
          <button
            className="bg-yellow-500 text-white p-2 rounded mr-2"
            onClick={() => onModifyBill(bill.id)}
          >
            Modify
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded mr-2"
            onClick={() => onDeleteBill(bill.id)}
          >
            Delete
          </button>
          {onDownloadBill(bill.id)}
        </div>
      </div>
    ))}
  </div>
);

export default BillList;
