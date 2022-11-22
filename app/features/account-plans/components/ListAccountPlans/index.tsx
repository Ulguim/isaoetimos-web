import { useState } from 'react'

import {
  Box,
  GridItem,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import {
  faPenToSquare,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import MoreOptionsMenu from '../../../../atomic/molecules/MoreOptionsMenu/MoreOptionsMenu'
import { ListRowItem } from '../../../../atomic/organisms/ListRowItem'
import { AccountPlansDrawer } from '../../../../atomic/organisms/AccountPlansDrawer'
import { PlusButton } from '../../../../atomic/atoms/PlusButton'


const ListAccountPlan: React.FC = () => {
  // const { data } = useGetSuppliersAndCustomersQuery()
  const toast = useToast()
  // const [DeleteSupplierAndCustomer] =
  //   useDeleteOneSuppliersAndCustomerMutation({
  //     refetchQueries: ['getSuppliersAndCustomers'],
  //     onCompleted: () => {
  //       toast({
  //         title: 'Sucesso!',
  //         description: 'Deletado com Sucesso',
  //         status: 'success',
  //         position: 'top-right',
  //         variant: 'top-accent',
  //         isClosable: true,
  //       })
  //     },
  //   })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [initialValues, setInitalValues] =
    useState<any | null>(null)
  const [isEditForm, setIsEditform] = useState(false)
  const handleUpdate = (accountPlan: any) => {
    setInitalValues({
      id: accountPlan.id,
      name: accountPlan.name,
      fixed: accountPlan.fixed,
      type: accountPlan.type,
    })
    setIsEditform(true)

    onOpen()
  }

  // moke
  const data = {
    accountPlan: {
      nodes: [
        {
          id: '01',
          name: 'Account 01',
          fixed: 'FIXO',
          type: 'ENTRADA',
        },
        {
          id: '02',
          name: 'Account 02',
          fixed: 'VARIAVEL',
          type: 'SAIDA',
        },
        {
          id: '03',
          name: 'Account 03',
          fixed: 'FIXO',
          type: 'ENTRADA',
        },
      ]
    }
  }

  return (
    <>
      {data?.accountPlan?.nodes.map(accountPlan => {
        const borderLeftColor = accountPlan.type === "ENTRADA" ? "#00B247" : "#D90000"

        return(
        <ListRowItem
          maxW={'95%'}
          key={accountPlan.id}
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
                  onClick: () => handleUpdate(accountPlan),
                },
                {
                  icon: (
                    <FontAwesomeIcon icon={faTrashCan} size="lg" />
                  ),
                  label: 'Excluir',
                  onClick: () => {}
                    // DeleteSupplierAndCustomer({
                    //   variables: { id: accountPlan.id },
                    // }),
                },
              ]}
            />
          }
          actionsProps={{ justifySelf: 'flex-end' }}
          borderLeft="8px"
          borderLeftColor={borderLeftColor}
          my={5}
        >
          <GridItem>{accountPlan?.name}</GridItem>
          <GridItem display="flex" alignItems="center">
            <Box ml={2}>{accountPlan?.type}</Box>
          </GridItem>
          <GridItem></GridItem>
        </ListRowItem>
      )})}
      <PlusButton onOpen={onOpen} setEdit={setIsEditform} />
      <AccountPlansDrawer
        intitialValues={initialValues}
        isEditForm={isEditForm}
        isOpen={isOpen}
        onClose={onClose}
      ></AccountPlansDrawer>
    </>
  )
}

export default ListAccountPlan
