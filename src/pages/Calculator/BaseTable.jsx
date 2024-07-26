import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  TableCaption,
} from '@chakra-ui/react'

export default function BaseTable(props) {
  const { tableIndex, tableData, tableColumn } = props
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>{`中周期-${tableIndex + 1}`}</TableCaption>
        <Thead>
          <Tr>
            {tableColumn.map((col) => (
              <Th>{col.label}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((row) => (
            <Tr>
              <Td>{row.week}</Td>
              <Td>{row.group}</Td>
              <Td>{row.count}</Td>
              <Td>{row.absoluteStrength}</Td>
              <Td>{row.relativeStrength}</Td>
              <Td>{row.trainingLoad}</Td>
              <Td>{row.capacity}</Td>
              <Td>{row.lightTraining}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
