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
import { useGetAccountPlansQuery } from '../../graphql/queries.generated'
import { useDeleteOneAccountPlanMutation } from '../../graphql/mutations.generated'

type costTypeProps = 'INCOME' | 'OUTCOME'


type AccountPlanProps = {
  id: string,
  name: string,
  accountPlanType: 'FIXED' | 'VARIABLE',
  costType: costTypeProps,
}

const ListAccountPlan: React.FC = () => {
  const { data } = useGetAccountPlansQuery()
  const toast = useToast()
  const [DeleteOneAccountPlan] =
    useDeleteOneAccountPlanMutation({
      refetchQueries: ['getAccountPlans'],
      onCompleted: () => {
        toast({
          title: 'Sucesso!',
          description: 'Deletado com Sucesso',
          status: 'success',
          position: 'top-right',
          variant: 'top-accent',
          isClosable: true,
        })
      },
    })
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [initialValues, setInitalValues] =
    useState<any | null>(null)
  const [isEditForm, setIsEditform] = useState(false)
  const handleUpdate = (accountPlan: AccountPlanProps) => {

    setInitalValues({
      id: accountPlan.id,
      name: accountPlan.name,
      accountPlanType: accountPlan.accountPlanType,
      costType: accountPlan.costType,
    })
    setIsEditform(true)

    onOpen()
  }

  const costType = (costType: costTypeProps) => {
    if (costType === 'INCOME') return 'Entrada'
    if (costType === 'OUTCOME') return 'Saída'
  }


  return (
    <>
      {data?.accountPlans?.nodes.map(accountPlan => {
        const borderLeftColor = accountPlan.costType === "INCOME" ? "#00B247" : "#D90000"

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
                  onClick: () =>
                    DeleteOneAccountPlan({
                      variables: { id: accountPlan.id },
                    }),
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
            <Box ml={2}>{costType(accountPlan?.costType)}</Box>
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
