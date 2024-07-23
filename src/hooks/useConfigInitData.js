import { useState } from 'react'

const useConfigInitData = () => {
  const [oneRM, setOneRM] = useState(0)


  return { oneRM, setOneRM }
}

export default useConfigInitData
