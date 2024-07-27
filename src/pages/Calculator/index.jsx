import React from 'react'
import ConfigArea from '@/pages/Calculator/ConfigArea'
import TableArea from '@/pages/Calculator/TableArea'
import useConfigInitData from '@/hooks/useConfigInitData'

export default function Calculator() {
  const props = useConfigInitData()
  return (
    <>
      <ConfigArea {...props} />
      <TableArea {...props} />
    </>
  )
}
