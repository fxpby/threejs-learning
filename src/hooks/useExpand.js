import { useState } from 'react'

const useExpand = () => {
  const [expandedMenu, setExpandedMenu] = useState([])
  const isExpanded = (index) => expandedMenu.includes(index)
  const setMenuExpand = (index) => {
    const existIndex = expandedMenu.indexOf(index)
    if (existIndex === -1) {
      // expand
      setExpandedMenu([...expandedMenu, index])
    } else {
      // collapse
      setExpandedMenu(expandedMenu.filter((item) => item !== index))
    }
  }
  return { isExpanded, setMenuExpand }
}

export default useExpand
