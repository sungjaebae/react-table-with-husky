import React, { useMemo } from 'react'
import { useTable, useRowSelect } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'
import Checkbox from './Checkbox'
import HeaderComponent from './HeaderComponent'
import CellComponent from './CellComponent'

export default function RowSelection() {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, selectedFlatRows } =
    useTable(
      {
        columns,
        data,
      },
      useRowSelect,
      (hooks) => {
        hooks.visibleColumns.push((icolumns) => [
          {
            id: 'selection',
            Header: HeaderComponent,
            Cell: CellComponent,
          },
          ...icolumns,
        ])
      },
    )

  const firstPageRows = rows.slice(0, 10)

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
      <pre>
        <code>
          {JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2,
          )}
        </code>
      </pre>
    </>
  )
}
