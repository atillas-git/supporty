"use client";
import TTable from "@/components/shared/table";
import React from "react";

const UsersList = () => {
  return (
    <div>
      <TTable
        label="Sina Table"
        headCells={[
          {
            fieldName: "sina",
            label: "Sina",
            id: "sina",
          },
          {
            fieldName: "onat",
            label: "Onat",
            id: "onat",
          },
        ]}
        rows={[
          {
            sina: "ASDASDASD",
            onat: "asdasddada",
          },
        ]}
      />
    </div>
  );
};

export default UsersList;
