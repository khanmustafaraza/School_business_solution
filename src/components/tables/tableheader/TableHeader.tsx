import React from "react";

interface Column {
  label: string;
  className?: string;
}

interface TableHeaderProps {
  columns: Column[];
}

const TableHeader = ({ columns }: TableHeaderProps) => {
  return (
    <thead className="bg-slate-100 dark:bg-slate-800">
      <tr>
        {columns.map((column, index) => (
          <th
            key={index}
            className={`border px-6 py-4 text-left ${column.className || ""}`}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
