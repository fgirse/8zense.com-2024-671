import React from 'react';

interface Column {
  header: string;
  accessor: string;
  className?: string;
}

interface CustomTableProps {
  columns: Column[];
  data: any[];
  renderRow: (item: any) => React.ReactNode;
}
interface CustomComponentProps {
  table: string;
  type: string;
}

const CustomTable: React.FC<CustomTableProps> = ({ columns, data, renderRow }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor} className={column.className}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>{renderRow(item)}</tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;