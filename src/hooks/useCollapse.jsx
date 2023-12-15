import { Tooltip, Flex, useBoolean, Icon } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronRight } from 'react-icons/fi'

const useCollapse = () => {
  const [isMenuCollapse, { toggle: toggleMenuCollapse }] = useBoolean(false)
  const [isMenuCollapseBtnShow, { on: showCollapseBtn, off: hideCollapseBtn }] =
    useBoolean(false)

  const collapseButton = (
    <AnimatePresence>
      {isMenuCollapseBtnShow && (
        <motion.div
          style={{
            position: 'absolute',
            top: '58px',
            right: '-10px',
            cursor: 'pointer',
            zIndex: '1',
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}>
          <Tooltip
            label={isMenuCollapse ? 'Expand' : 'Collapse'}
            hasArrow
            placement="right">
            <Flex
              role="group"
              id={`menu-${isMenuCollapse ? 'expand' : 'collapse'}-btn`}
              align="center"
              justify="center"
              w="20px"
              h="20px"
              bgColor="purple.400"
              borderRadius="50%"
              onClick={toggleMenuCollapse}
              _hover={{
                border: '1px',
                borderColor: 'purple.400',
                bgColor: 'white',
              }}>
              <Icon
                w="14px"
                h="14px"
                transition="transform 0.2s ease-in-out"
                transform={`rotate(${isMenuCollapse ? 0 : -180}deg)`}
                as={FiChevronRight}
                color="white"
                _groupHover={{
                  color: 'purple.400',
                }}
              />
            </Flex>
          </Tooltip>
        </motion.div>
      )}
    </AnimatePresence>
  )
  return {
    isMenuCollapse,
    isMenuCollapseBtnShow,
    showCollapseBtn,
    hideCollapseBtn,
    collapseButton,
  }
}

export default useCollapse
