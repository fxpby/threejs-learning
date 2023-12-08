import { Box, Flex } from '@chakra-ui/react'

const navList = [
  {
    title: 'BiAlarm',
    subMenu: [
      { title: '子级标题1' },
      { title: '子级标题2' },
      { title: '子级标题3' },
    ],
  },
  {
    title: 'BiAlarm1',
  },
]

export default function Sidebar() {
  return (
    <Box h="100vh" boxShadow="lg" position="relative" transition="width 0.2s">
      {navList.map((menuItem) => {
        return (
          <Box key={menuItem.title}>
            <Flex align="center" justify="space-between">
              <Flex align="center" overflow="hidden">
                {<Box fontSize="sm">{menuItem.title}</Box>}
              </Flex>

              {menuItem.subMenu && <div>123</div>}
            </Flex>
          </Box>
        )
      })}
    </Box>
  )
}
