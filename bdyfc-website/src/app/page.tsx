"use client";

import React from "react";
import BillManagement from "./Components/BillManagement";

const page = () => {
  return (
    <div className="bg-background text-center p-8 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Billing System</h1>
        <BillManagement />
      </div>
    </div>
  );
};

export default page;
