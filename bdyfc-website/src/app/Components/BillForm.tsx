import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

interface BillFormProps {
  show: boolean;
  onClose: () => void;
  onAddBill: (bill: any) => void;
  billToEdit?: any;
}

const BillForm: React.FC<BillFormProps> = ({
  show,
  onClose,
  onAddBill,
  billToEdit,
}) => {
  const [churchName, setChurchName] = useState("");
  const [billingDate, setBillingDate] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (billToEdit) {
      setChurchName(billToEdit.churchName);
      setBillingDate(billToEdit.billingDate);
      setAmount(billToEdit.amount);
      setPaymentMethod(billToEdit.paymentMethod);
      setTransactionId(billToEdit.transactionId);
    } else {
      setChurchName("");
      setBillingDate("");
      setAmount("");
      setPaymentMethod("");
      setTransactionId("");
    }
  }, [billToEdit]);

  const handleSubmit = () => {
    onAddBill({
      churchName,
      billingDate,
      amount,
      paymentMethod,
      transactionId,
    });
    onClose();
  };

  return (
    <Modal show={show} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4">
        {billToEdit ? "Edit Bill" : "Add Bill"}
      </h2>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Church Name</label>
        <select
          value={churchName}
          onChange={(e) => setChurchName(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="St. Marks Tamil Church, Vikhroli">
            St. Marks Tamil Church, Vikhroli
          </option>
          <option value="St. Stephens Tamil Church, Bhandup">
            St. Stephens Tamil Church, Bhandup
          </option>
          <option value="Bethel Tamil Church, Chembur">
            Bethel Tamil Church, Chembur
          </option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Billing Date</label>
        <input
          type="date"
          value={billingDate}
          onChange={(e) => setBillingDate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Amount</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Payment Method</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="cash"
            name="paymentMethod"
            value="cash"
            checked={paymentMethod === "cash"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="cash" className="mr-4">
            Cash
          </label>
          <input
            type="radio"
            id="cheque"
            name="paymentMethod"
            value="cheque"
            checked={paymentMethod === "cheque"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="cheque" className="mr-4">
            Cheque
          </label>
          <input
            type="radio"
            id="online"
            name="paymentMethod"
            value="online"
            checked={paymentMethod === "online"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="online" className="mr-4">
            Online
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Transaction ID</label>
        <input
          type="text"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="flex justify-end">
        <Button className="bg-gray-500 text-white mr-2" onClick={onClose}>
          Cancel
        </Button>
        <Button className="bg-blue-500 text-white" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default BillForm;
