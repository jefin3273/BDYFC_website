import React from "react";

interface BillDetailsProps {
  bill: {
    billNumber: string;
    date: string;
    churchName: string;
    amount: string;
    paymentMethod: string;
    transactionId: string;
  };
}

const BillDetails: React.FC<BillDetailsProps> = ({ bill }) => {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">Receipt</h2>
      <p>
        <strong>Bill Number:</strong> {bill.billNumber}
      </p>
      <p>
        <strong>Date:</strong> {bill.date}
      </p>
      <p>
        <strong>Church Name:</strong> {bill.churchName}
      </p>
      <p>
        <strong>Amount:</strong> {bill.amount}
      </p>
      <p>
        <strong>Payment Method:</strong> {bill.paymentMethod}
      </p>
      <p>
        <strong>Transaction ID:</strong> {bill.transactionId}
      </p>
    </div>
  );
};

export default BillDetails;
