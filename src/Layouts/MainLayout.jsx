import Sidebar from '../components/SideBar'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

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
