import { useState } from 'react'
import {
  cycleConfig,
  bufferMap,
  lightTrainingDegreeMap,
  overloadIncreaseDegreeMap,
  RMCountRelation,
  tableColumn,
  deloadWeekIndex
} from '@/pages/Calculator/constant'

const useConfigInitData = () => {
  const [oneRM, setOneRM] = useState(0)
  const [cycle, setCycle] = useState('mxs-1')
  const [tableDataList, setTableDataList] = useState([])

  const renderTableData = () => {
    const { group, count } = cycleConfig[cycle]
    const buffer = bufferMap[cycle]
    const lightTrainingDegree = lightTrainingDegreeMap[cycle]
    const overloadIncreaseDegree = overloadIncreaseDegreeMap[cycle]
    // TODO 取值方式待优化
    const rowLength = group[0].length
    const initTable = new Array(rowLength).fill({})
    initTable.map(row => {
      const result = {}
      tableColumn.forEach((col, index) => {
        if (col.id === 'week') {
          if (deloadWeekIndex.length) {
            const deloadLen = deloadWeekIndex.length
            const deloadStart = deloadWeekIndex[0]
            if (index >= deloadStart) {
              result[col.id] = `W-${deloadStart + 1}.${deloadWeekIndex.findIndex(x => x === index)}`
            } else {
              result[col.id] = `W-${index + 1}`
            }
          } else {
            result[col.id] = `W-${index + 1}`
          }
        }

      })

      return result
    })
  }

  return {
    oneRM,
    setOneRM,
    cycle,
    setCycle,
    renderTableData,
    tableDataList,
    tableColumn
  }
}

export default useConfigInitData
