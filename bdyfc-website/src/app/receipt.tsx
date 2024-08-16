// src/app/Components/ReceiptPage.tsx
import React from "react";
import { useRouter } from "next/router";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Receipt from "./Components/Receipt"; // Ensure the correct import path

const ReceiptPage = () => {
  const router = useRouter();
  const {
    billNumber = "",
    date = "",
    churchName = "",
    amount = "",
    paymentMethod = "",
    transactionId = "",
    billingDate = "",
  } = router.query;

  // Helper function to convert query params to string
  const toString = (value: string | string[] | undefined): string => {
    if (Array.isArray(value)) {
      return value[0] || ""; // default to empty string if array is empty
    }
    return value || "";
  };

  const billNumberStr = toString(billNumber);
  const dateStr = toString(date);
  const churchNameStr = toString(churchName);
  const amountStr = toString(amount);
  const paymentMethodStr = toString(paymentMethod);
  const transactionIdStr = toString(transactionId);
  const billingDateStr = toString(billingDate);

  const isValid =
    billNumberStr &&
    dateStr &&
    churchNameStr &&
    amountStr &&
    paymentMethodStr &&
    transactionIdStr &&
    billingDateStr;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Receipt</h1>
      {isValid ? (
        <div className="text-center">
          <PDFDownloadLink
            document={
              <Receipt
                billNumber={billNumberStr}
                date={dateStr}
                churchName={churchNameStr}
                amount={amountStr}
                paymentMethod={paymentMethodStr}
                transactionId={transactionIdStr}
                billingDate={billingDateStr}
              />
            }
            fileName="receipt.pdf"
          >
            {({ loading }) =>
              loading ? "Loading document..." : "Download PDF"
            }
          </PDFDownloadLink>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default ReceiptPage;
