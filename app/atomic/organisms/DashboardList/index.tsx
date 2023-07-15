import DashboardListRows from '@app/features/dashboard/components/DashboardListRows'
import { Box } from '@chakra-ui/react'

const DashboardList = () => {
  return (
    <Box height={'100%'} minH={'320px'} mt={5}>
      <Box
        fontSize="24px"
        fontWeight="bold"
        pb="6px"
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        Próximos lançamentos
        <Box
          mt={4}
          fontSize="12px"
          width={'50%'}
          display={'grid'}
          gridTemplateColumns={'1fr 1fr'}
        >
          <Box>Fornecedor/Cliente</Box>
          <Box>Plano de conta</Box>
        </Box>
      </Box>
      <DashboardListRows />
    </Box>
  )
}

export default DashboardList
