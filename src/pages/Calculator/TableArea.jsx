import React from 'react'
import BaseTable from '@/pages/Calculator/BaseTable'
import useConfigInitData from '@/hooks/useConfigInitData'

export default function TableArea() {
  const { tableDataList = [], tableColumn } = useConfigInitData()

  return (
    <div className="p-8 flex gap-8 flex-col">
      {tableDataList?.map((table, index) => (
        <BaseTable
          tableIndex={index}
          tableData={table}
          tableColumn={tableColumn}
        />
      ))}
    </div>
  )
}
