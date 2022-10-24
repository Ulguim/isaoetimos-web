import { Box, GridItem } from '@chakra-ui/react'
import {
  faEnvelope,
  faPenToSquare,
  faSquarePhone,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MoreOptionsMenu from '../../../../atomic/molecules/moreOptionsMenu/MoreOptionsMenu'
import { ListRowItem } from '../../../../atomic/organisms/ListRowItem'
import { useGetSuppliersAndCustomersQuery } from '../../graphql/suppliers-and-customers.generated'

const ListSupplyAndCustomer: React.FC = () => {
  const { data } = useGetSuppliersAndCustomersQuery()
  return (
    <>
      {data?.suppliersAndCustomers?.nodes.map(supply => (
        <ListRowItem
          key={supply.id}
          boxShadow={'lg'}
          bgColor={'#FFFFFF'}
          actions={
            <MoreOptionsMenu
              options={[
                {
                  icon: (
                    <FontAwesomeIcon icon={faPenToSquare} size="lg" />
                  ),
                  label: 'Editar',
                },
                {
                  icon: (
                    <FontAwesomeIcon icon={faTrashCan} size="lg" />
                  ),
                  label: 'Excluir',
                },
              ]}
            />
          }
          actionsProps={{ justifySelf: 'flex-end' }}
          borderLeft="8px"
          borderLeftColor="#00B247"
          my={5}
        >
          <GridItem>{supply?.name}</GridItem>
          <GridItem display="flex" alignItems="center">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <Box ml={2}>{supply?.email}</Box>
          </GridItem>
          <GridItem display="flex" alignItems="center">
            <FontAwesomeIcon
              icon={faSquarePhone}
              size="lg"
              color="#00B247"
            />
            <Box ml={2}>{supply?.phone}</Box>
          </GridItem>
        </ListRowItem>
      ))}
    </>
  )
}

export default ListSupplyAndCustomer
