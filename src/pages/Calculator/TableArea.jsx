import React, { useEffect } from 'react'
import BaseTable from '@/pages/Calculator/BaseTable'

export default function TableArea(props) {
  const { tableDataList, tableColumn, unit } = props

  return (
    <div className="p-8 flex gap-8 flex-col">
      {tableDataList?.map((table, index) => (
        <BaseTable
          key={index}
          tableIndex={index}
          tableData={table}
          tableColumn={tableColumn}
          unit={unit}
        />
      ))}
    </div>
  )
}
