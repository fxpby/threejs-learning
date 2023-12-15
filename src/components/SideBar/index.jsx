import {
  Box,
  Flex,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  Tooltip,
} from '@chakra-ui/react'
import { BiHeart } from 'react-icons/bi'
import { FiChevronDown } from 'react-icons/fi'
import useExpand from '../../hooks/useExpand'
import { AnimatePresence, motion } from 'framer-motion'
import useActive from '../../hooks/useActive'
import useCollapse from '../../hooks/useCollapse.jsx'

const navList = [
  {
    title: '三要素',
    icon: <BiHeart size="16px" />,
    subMenu: [{ title: '场景' }, { title: '相机' }, { title: '渲染器' }],
  },
  {
    title: '物体',
    icon: <BiHeart size="16px" />,
    subMenu: [
      { title: '添加网格/组对象' },
      { title: '添加精灵' },
      { title: '添加线条' },
    ],
  },
]
const menuItemClass = {
  p: '4',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'all 0.2s',
  fontSize: 'sm',
  _hover: {
    bg: 'gray.50',
  },
}

const activeClass = {
  color: 'purple.400',
  fontWeight: 'semibold',
}

const unActiveClass = {
  color: 'gray.500',
  fontWeight: 'semibold',
}

export default function Sidebar() {
  const { isExpanded, setMenuExpand } = useExpand()
  const { activatedMenu, setMenuActive } = useActive()
  const { collapseButton, showCollapseBtn, hideCollapseBtn, isMenuCollapse } =
    useCollapse()
  const handleExpandMenu = (menuItem, index) => {
    if (menuItem.subMenu) {
      setMenuExpand(index)
    } else {
      setMenuActive(index)
    }
  }
  const renderSubMenu = (subMenu, index, props) => {
    return subMenu?.map((subMenuItem, subIndex) => {
      return (
        <Box
          {...menuItemClass}
          {...(activatedMenu[1] === subIndex ? activeClass : unActiveClass)}
          pl="8"
          key={subMenuItem.title}
          onClick={() => setMenuActive(index, subIndex)}
          {...props}>
          {subMenuItem.title}
        </Box>
      )
    })
  }

  const renderMenuItem = (menuItem, index) => {
    return (
      <Flex
        onClick={() => handleExpandMenu(menuItem, index)}
        align="center"
        justify="space-between"
        {...menuItemClass}
        {...(activatedMenu[0] === index ? activeClass : unActiveClass)}>
        <Flex align="center" overflow="hidden">
          <Box mr="3">{menuItem.icon}</Box>
          {!isMenuCollapse && <Box fontSize="sm">{menuItem.title}</Box>}
        </Flex>

        {menuItem.subMenu && !isMenuCollapse && (
          <Icon
            transition="transform 0.2s ease-in-out"
            transform={`rotate(${isExpanded(index) ? -180 : 0}deg)`}
            as={FiChevronDown}></Icon>
        )}
      </Flex>
    )
  }

  return (
    <Box
      w={isMenuCollapse ? '50px' : '200px'}
      h="100vh"
      boxShadow="lg"
      position="relative"
      transition="width 0.2s"
      onMouseEnter={() => showCollapseBtn()}
      onMouseLeave={() => hideCollapseBtn()}>
      {collapseButton}
      {navList.map((menuItem, index) => {
        return (
          <Box key={menuItem.title}>
            <Popover
              trigger="hover"
              placement="right"
              closeOnBlur={false}
              offset={[0, 16]}>
              {menuItem.subMenu ? (
                <PopoverTrigger>
                  {renderMenuItem(menuItem, index)}
                </PopoverTrigger>
              ) : (
                <Tooltip
                  hasArrow
                  placement="right"
                  label={menuItem.title}
                  aria-label={menuItem.title}
                  isDisabled={!isMenuCollapse}>
                  {renderMenuItem(menuItem, index)}
                </Tooltip>
              )}
              <PopoverContent
                w="max-content"
                hidden={!isMenuCollapse || !menuItem.subMenu}>
                <PopoverArrow />
                <PopoverHeader
                  p="3"
                  color="gray.600"
                  fontSize="sm"
                  fontWeight="semibold">
                  {menuItem.title}
                </PopoverHeader>
                {renderSubMenu(menuItem.subMenu, index, {
                  pl: '3',
                  p: '3',
                })}
              </PopoverContent>
            </Popover>

            <Box>
              <AnimatePresence>
                {isExpanded(index) && !isMenuCollapse && (
                  <motion.div
                    style={{ overflow: 'hidden' }}
                    initial={{ height: '0px', opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: '0px', opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}>
                    {menuItem.subMenu?.map((subMenuItem, subIndex) => {
                      return (
                        <Box
                          {...menuItemClass}
                          {...(activatedMenu[1] === subIndex
                            ? activeClass
                            : unActiveClass)}
                          pl="8"
                          key={subMenuItem.title}
                          onClick={() => setMenuActive(index, subIndex)}>
                          {subMenuItem.title}
                        </Box>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}
