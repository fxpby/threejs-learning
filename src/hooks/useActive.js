import { useState } from 'react'

const useActive = () => {
  const [activatedMenu, setActivatedMenu] = useState([-1, -1])
  const setMenuActive = (index, subIndex) => {
    if (typeof subIndex !== 'undefined') {
      setActivatedMenu([index, subIndex])
    } else {
      setActivatedMenu([index, -1])
    }
  }

  return { activatedMenu, setMenuActive }
}

export default useActive
