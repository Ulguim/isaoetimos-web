import { useState } from 'react'

import {
  Box,
  GridItem,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import {
  faCalendarXmark,
  faCircleExclamation,
  faHourglassStart,
  faPenToSquare,
  faRepeat,
  faSquareCheck,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addDays, compareAsc, format, startOfDay } from 'date-fns'

import { PlusButton } from '../../../../atomic/atoms/PlusButton'
import MoreOptionsMenu from '../../../../atomic/molecules/MoreOptionsMenu/MoreOptionsMenu'
import { FinancesModal } from '../../../../atomic/organisms/FinancesModal'
import { ListRowItem } from '../../../../atomic/organisms/ListRowItem'
import { SuppliersAndCustomer } from '../../../../generated/graphql'
import { useDeleteOneFinanceMutation } from '../../graphql/mutations.generated'
import { useGetFinancesQuery } from '../../graphql/queries.generated'

type ListFinancesProps = {
  id: string
  comments?: string
  dueDate: Date
  issuedate: string
  payDay?: Date
  paymentTerm: Date
  status: 'OPEN' | 'PAID'
  value: number
  createdAt: Date
  updatedAt: Date
  accountplan?: {
    id: string
    accountPlanType: 'FIXED' | 'VARIABLE'
    costType: 'INCOME' | 'OUTCOME'
    name: string
  }
  supplierAndCustomer?: SuppliersAndCustomer
}

const ListFinances: React.FC = () => {
  const { data } = useGetFinancesQuery()
  const toast = useToast()
  const [DeleteOneFinance] = useDeleteOneFinanceMutation({
    refetchQueries: ['getFinances'],
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
  const [initialValues, setInitalValues] = useState<any | null>(null)
  const [isEditForm, setIsEditform] = useState(false)
  const handleUpdate = (finance: ListFinancesProps) => {
    const formatedDueDate = format(
      addDays(new Date(finance.dueDate), 1),
      'dd/MM/yyyy',
    )
    const formatedIssuedate = format(
      addDays(new Date(finance.issuedate), 1),
      'dd/MM/yyyy',
    )
    const formatedPaymentTerm = format(
      addDays(new Date(finance.paymentTerm), 1),
      'dd/MM/yyyy',
    )
    let formatedPayDay
    if (finance.payDay) {
      formatedPayDay = format(
        addDays(new Date(finance.payDay), 1),
        'dd/MM/yyyy',
      )
    }

    setInitalValues({
      id: finance.id,
      accountplanId: finance?.accountplan?.id,
      dueDate: formatedDueDate,
      issuedate: formatedIssuedate,
      paymentTerm: formatedPaymentTerm,
      payDay: formatedPayDay,
      status: finance.status,
      supplierAndCustomerId: finance?.supplierAndCustomer?.id,
      value: `${finance.value}`,
      comments: finance.comments,
    })
    setIsEditform(true)

    onOpen()
  }

  return (
    <>
      {data?.finances?.nodes?.map(finance => {
        const compareDate = compareAsc(
          startOfDay(addDays(new Date(finance?.dueDate), 1)),
          startOfDay(new Date()),
        )
        const isLate =
          compareDate === -1 && finance?.status === 'OPEN'

        const borderLeftColor = isLate ? '#D90000' : '#00B247'

        const issueDate = format(
          addDays(new Date(finance?.issuedate), 1),
          'dd/MM/yyyy',
        )
        const dueDate = format(
          addDays(new Date(finance?.dueDate), 1),
          'dd/MM/yyyy',
        )

        const status = () => {
          if (isLate) {
            return {
              icon: faCircleExclamation,
              color: '#D90000',
            }
          } else if (
            compareDate !== -1 &&
            finance.status === 'PAID'
          ) {
            return {
              icon: faSquareCheck,
              color: '#00B247',
            }
          } else {
            return {
              icon: faHourglassStart,
              color: '#00B247',
            }
          }
        }

        return (
          <ListRowItem
            maxW={'95%'}
            key={finance.id}
            boxShadow={'lg'}
            bgColor={'#FFFFFF'}
            templateColumns={['1.5fr 3fr 1fr min-content']}
            actions={
              <MoreOptionsMenu
                options={[
                  {
                    icon: (
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        size="lg"
                      />
                    ),
                    label: 'Editar',
                    onClick: () => handleUpdate(finance),
                  },
                  {
                    icon: (
                      <FontAwesomeIcon icon={faTrashCan} size="lg" />
                    ),
                    label: 'Excluir',
                    onClick: () =>
                      DeleteOneFinance({
                        variables: { id: finance.id },
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
            <GridItem>{finance?.supplierAndCustomer?.name}</GridItem>
            <GridItem display="flex" alignItems="center">
              <Box ml={2} mr={3}>{`Emissão: ${issueDate}`}</Box>
              <FontAwesomeIcon icon={faCalendarXmark} size="lg" />
              <Box ml={10} mr={3}>{`Vencimento: ${dueDate}`}</Box>
              <FontAwesomeIcon icon={faCalendarXmark} size="lg" />
            </GridItem>
            <GridItem
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>{`R$: ${finance?.value?.toFixed(2)}`}</Box>
              <FontAwesomeIcon icon={faRepeat} size="lg" />
              <FontAwesomeIcon
                icon={status()?.icon}
                color={status()?.color}
                size="lg"
              />
            </GridItem>
          </ListRowItem>
        )
      })}
      <PlusButton onOpen={onOpen} setEdit={setIsEditform} />
      <FinancesModal
        isOpen={isOpen}
        onClose={onClose}
        intitialValues={initialValues}
        isEditForm={isEditForm}
      />
    </>
  )
}

export default ListFinances
