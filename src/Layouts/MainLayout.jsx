import Sidebar from '../components/SideBar'
import { Outlet, NavLink } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'

export default function MainLayout() {
  return (
    <Box w="100%" className="flex w-full h-screen">
      <Sidebar />
      <Box className="flex-1">
        <Outlet />
      </Box>
    </Box>
  )
}
