import dayjs from "dayjs";
import * as React from "react";
import ReactPaginate from "react-paginate";
import { ReactComponent as ActivateUser } from "../../../../assets/activate-user.svg";
import { ReactComponent as BlacklistUser } from "../../../../assets/blacklist-user.svg";
import { ReactComponent as FilterButton } from "../../../../assets/filter-button.svg";
import { ReactComponent as More } from "../../../../assets/more-vert.svg";
import { ReactComponent as View } from "../../../../assets/view.svg";
import "./UserTable.styles.scss";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import ContextMenu from "../../../../shared/UIElements/constext-menu/ContextMenu";
import { UserType } from "../../types/UserDetailTypes";
import FilterForm from "./FilterForm";
import { useNavigate } from "react-router-dom";

export const Table: React.FC<{ users: UserType[] }> = ({ users }) => {
  const [isFilterPopperOpen, setIsFilterPopperOpen] =
    React.useState<boolean>(false);
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [anchorEl, setanchorEl] = React.useState<
    null | (EventTarget & HTMLButtonElement)
  >(null);

  const navigate = useNavigate();
  const handleFIlterPopperToggle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setanchorEl(e?.currentTarget);
    e.stopPropagation();
    setIsFilterPopperOpen(!isFilterPopperOpen);
  };

  const handleMorePopperToggle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    setanchorEl(e?.currentTarget);
    setSelectedId(id);
    e.stopPropagation();
  };

  const handleCloseFilter = () => {
    setanchorEl(null);
    setIsFilterPopperOpen(false);
  };
  const handleCloseMorePopper = () => {
    setanchorEl(null);
    setSelectedId(null);
  };
  const columnHelper = createColumnHelper<UserType>();
  const filterButton = (
    <button
      onClick={(e) => {
        handleFIlterPopperToggle(e);
      }}
      className="filter__btn"
    >
      <FilterButton />
    </button>
  );

  const MoreButton: React.FC<{ id: string }> = ({ id }) => (
    <button
      onClick={(e) => {
        handleMorePopperToggle(e, id);
      }}
      className="filter__btn"
    >
      <More />
    </button>
  );

  const columns = [
    columnHelper.accessor("orgName", {
      header: () => (
        <span className="table__header">Organization {filterButton}</span>
      ),
    }),
    columnHelper.accessor((row) => row.userName, {
      id: "userName",
      header: () => (
        <span className="table__header">Username {filterButton}</span>
      ),
    }),
    columnHelper.accessor((row) => row.email, {
      id: "email",
      header: () => (
        <span className="table__header"> Email {filterButton}</span>
      ),
    }),
    columnHelper.accessor((row) => row.phoneNumber, {
      id: "phoneNumber",
      header: () => (
        <span className="table__header">Phone Number {filterButton}</span>
      ),
    }),
    columnHelper.accessor((row) => row.createdAt, {
      id: "createdAt",
      cell: (info) => dayjs(info.getValue()).format("MMM DD YYYY"),
      header: () => (
        <span className="table__header">Date joined {filterButton}</span>
      ),
    }),
    columnHelper.accessor((row) => row.createdAt, {
      id: "status",
      cell: (info) => <div className="user__status">Active</div>,
      header: () => (
        <span className="table__header">Status {filterButton}</span>
      ),
    }),
    columnHelper.accessor((row) => row.id, {
      id: "id",
      cell: (info) => (
        <div>
          <MoreButton id={info?.getValue()} />
        </div>
      ),
      header: () => <span className="table__header"></span>,
    }),
  ];

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <ContextMenu
        anchorEl={anchorEl}
        open={isFilterPopperOpen}
        handleClose={handleCloseFilter}
      >
        <>
          <FilterForm users={users} />
        </>
      </ContextMenu>
      <ContextMenu
        anchorEl={anchorEl}
        open={Boolean(selectedId)}
        handleClose={handleCloseMorePopper}
      >
        <div className="more__actions__wrapper">
          <button
            className="more__actions__btn"
            onClick={(e) => navigate(`/users/${selectedId}`)}
          >
            <View />
            View Details
          </button>
          <button className="more__actions__btn">
            <BlacklistUser />
            Blacklist User
          </button>
          <button className="more__actions__btn">
            <ActivateUser />
            Activate User{" "}
          </button>
        </div>
      </ContextMenu>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup, index) => (
            <tr key={index}>
              {headerGroup.headers.map((header, index) => (
                <th key={index}>
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
          {table.getRowModel().rows.map((row, index) => (
            <tr key={index}>
              {row.getVisibleCells().map((cell, index) => (
                <td key={index}>
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
