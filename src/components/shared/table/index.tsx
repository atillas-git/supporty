import { Sheet, Table } from "@mui/joy";
import React from "react";
import Pagination from "../pagination";

export interface HeadCell {
  key?: string;
  id: string;
  sortable?: boolean;
  label: string;
  fieldName: string;
}

interface IProps {
  label: string;
  stickyHeader?: boolean;
  stickyFooter?: boolean;
  hoverRow?: boolean;
  headCells: HeadCell[];
  rows: any;
  itemCountPerPage?: number;
  totalPage?: number;
  currentPage?: number;
  onPageClick?: (nextPage: number) => void;
}

const TTable = ({
  label,
  headCells,
  rows,
  stickyFooter,
  stickyHeader,
  itemCountPerPage = 15,
  totalPage,
  currentPage,
  onPageClick,
}: IProps) => {
  return (
    <Sheet sx={{ width: "100%", overflow: "auto" }}>
      <Table
        aria-label={label}
        stickyHeader={stickyHeader}
        stickyFooter={stickyFooter}
        hoverRow
      >
        <thead>
          <tr>
            {headCells.map((headcell) => (
              <th key={headcell.id || headcell.key}>{headcell.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(0, itemCountPerPage).map((row: any, index: number) => (
            <tr key={index}>
              {headCells.map((headcell) => (
                <td
                  key={index + headcell.id || headcell.key}
                  title={String(row[headcell.fieldName])}
                >
                  {row[headcell.fieldName]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      {totalPage && currentPage && onPageClick && (
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          onPageClick={onPageClick}
        />
      )}
    </Sheet>
  );
};

export default TTable;
