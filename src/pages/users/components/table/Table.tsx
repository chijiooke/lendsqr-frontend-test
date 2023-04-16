import axios from "axios";
import dayjs from "dayjs";
import * as React from "react";
import "./Table.styles.scss";
import ReactPaginate from "react-paginate";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { UserType } from "./UserDetailTypes";

export const Table = () => {
  const [users, setusers] = React.useState<UserType[]>([]);

  const columnHelper = createColumnHelper<UserType>();

  const columns = [
    columnHelper.accessor("orgName", {
      header: () => <span>Organization</span>,
    }),
    columnHelper.accessor((row) => row.userName, {
      id: "userName",
      header: () => <span>Username</span>,
    }),
    columnHelper.accessor((row) => row.email, {
      id: "email",
      header: () => <span>Email</span>,
    }),
    columnHelper.accessor((row) => row.phoneNumber, {
      id: "phoneNumber",
      header: () => <span>Phone Number</span>,
    }),
    columnHelper.accessor((row) => row.createdAt, {
      id: "createdAt",
      cell: (info) => dayjs(info.getValue()).format("MMM DD YYYY"),
      header: () => <span>Date joined</span>,
    }),
    columnHelper.accessor((row) => row.lastActiveDate, {
      id: "lastActiveDate",
      header: () => <span>Status</span>,
    }),
  ];

  const getUsers = () => {
    return axios
      .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((res) => setusers(res?.data as UserType[]))
      .catch((err: any) => console.log(err));
  };

  React.useEffect(() => {
    getUsers();
  }, []);

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell, index) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination__wrapper">
        <div>
          {" "}
          Showing{" "}
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>{" "}
          out of {users.length}
        </div>
        <ReactPaginate
          containerClassName="pagination"
          activeClassName="active__page"
          pageClassName="page__item"
          pageLinkClassName="page__link"
          previousClassName="page-item"
          previousLinkClassName="prev__page__link"
          nextClassName="next__page"
          nextLinkClassName="next__page__link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          breakLabel="..."
          nextLabel=">"
          onPageChange={(selected) => {
            table.setPageIndex(selected.selected);
          }}
          pageRangeDisplayed={3}
          pageCount={users.length / table.getState().pagination.pageSize}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};
