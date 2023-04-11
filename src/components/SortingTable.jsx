import { useTable, useSortBy } from 'react-table'
import { useMemo } from 'react'
import { COLUMNS } from './columns'
import MOCK_DATA from './MOCK_DATA.json'
import './table.css'

export default function SortingTable() {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy)

  return (
    <table {...getTableProps}>
      <thead>
        {headerGroups.map((headerGroup) => (
          // @ts-expect-error getSortByToggleProps
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>{column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}</span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps}>
        {rows.map((row) => {
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
      <tfoot>
        {footerGroups.map((footerGroup) => (
          <tr {...footerGroup.getFooterGroupProps()}>
            {footerGroup.headers.map((column) => (
              <td {...column.getFooterProps}>{column.render('Footer')}</td>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  )
}
