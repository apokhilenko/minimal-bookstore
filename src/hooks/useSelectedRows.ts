import { useState } from "react";

export function useSelectedRows<T>(): [T[], (id: T) => void] {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  
  function handleRowSelect(id: T) {
    let newSelectedRows = [];

    if (selectedRows.includes(id)) {
      newSelectedRows = selectedRows.filter(function (selectedRowId: T) {
        return selectedRowId !== id;
      });
    } else {
      newSelectedRows = [...selectedRows, id];
    }

    setSelectedRows(newSelectedRows);
  }

  return [selectedRows, handleRowSelect];
}
