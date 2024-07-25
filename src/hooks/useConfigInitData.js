import { useState } from 'react'
import {
  cycleConfig,
  bufferMap,
  lightTrainingDegreeMap,
  overloadIncreaseDegreeMap,
  RMCountRelation,
  tableColumn
} from '@/pages/Calculator/constant'

const useConfigInitData = () => {
  const [oneRM, setOneRM] = useState(0)
  const [cycle, setCycle] = useState('mxs-1')
  const [buffer, setBuffer] = useState
  const [tableData, setTableData] = useState([[], []])

  const renderTableData = () => {
    const { group, count } = cycleConfig[cycle]
    const buffer = bufferMap[cycle]
    const lightTrainingDegree = lightTrainingDegreeMap[cycle]
    const overloadIncreaseDegree = overloadIncreaseDegreeMap[cycle]
  }

  return { oneRM, setOneRM, cycle, setCycle, renderTableData }
}

export default useConfigInitData
