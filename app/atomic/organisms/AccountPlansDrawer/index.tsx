import React from 'react'

import { Box, Button } from '@chakra-ui/react'
import { Form } from 'react-final-form'

import useCreateOneAccountPlan from '../../../features/account-plans/hooks/useCreateOneAccountPlan'
import useUpdateOneAccountPlan from '../../../features/account-plans/hooks/useUpdateOneAccountPlan'
import { DrawerTemplate } from '../../molecules/Drawer'
import { SelectField } from '../../molecules/SelectField'
import { TextField } from '../../molecules/TextField'

interface AccountPlansDrawerProps {
  isOpen: boolean
  isEditForm?: boolean
  onClose: () => void
  intitialValues?: any | null
}

export const AccountPlansDrawer: React.FC<
  AccountPlansDrawerProps
> = ({ isOpen, onClose, isEditForm, intitialValues }) => {
  const { CreateOneAccountPlan } = useCreateOneAccountPlan()

  const { updateOneAccountPlan } = useUpdateOneAccountPlan()
  const handleUpdate = values => {
    values.id = intitialValues.id
    updateOneAccountPlan(values)
  }

  const costTypeOptions = [
    { value: 'INCOME', label: 'Entrada' },
    { value: 'OUTCOME', label: 'Saída' },
  ]

  const accoutPlanTypeOptions = [
    { value: 'FIXED', label: 'Fixo' },
    { value: 'VARIABLE', label: 'Variável' },
  ]

  return (
    <Form
      onSubmit={values => {
        isEditForm
          ? handleUpdate(values)
          : CreateOneAccountPlan(values)
      }}
      initialValues={isEditForm ? intitialValues : null}
    >
      {({ handleSubmit, hasValidationErrors, form }) => (
        <DrawerTemplate
          isOpen={isOpen}
          onClose={() => {
            onClose()
            form.reset()
          }}
          title={
            isEditForm
              ? 'Editar Plano de conta'
              : 'Cadastrar Plano de conta'
          }
          footer={
            <>
              <Button
                variant="outline"
                mr={3}
                onClick={() => {
                  onClose()
                  form.reset()
                }}
              >
                Cancelar
              </Button>
              <Button
                disabled={hasValidationErrors}
                onClick={values => {
                  handleSubmit(values)
                  onClose()
                  form.reset()
                }}
                type="submit"
                colorScheme="blue"
              >
                Salvar
              </Button>
            </>
          }
        >
          <Box display={'flex'} flexDir="column" gap={5}>
            <TextField
              isRequired
              validate="string"
              name="name"
              label="Nome"
            />
            <SelectField
              isRequired
              name="accountPlanType"
              validate="string"
              label="Fixo / Variável"
              placeholder="Selecione"
            >
              {accoutPlanTypeOptions.map((type, index) => (
                <option key={index} value={type.value}>
                  {type.label}
                </option>
              ))}
            </SelectField>
            <SelectField
              isRequired
              name="costType"
              validate="string"
              label="Entrada / Saída"
              placeholder="Selecione"
            >
              {costTypeOptions.map((type, index) => (
                <option key={index} value={type.value}>
                  {type.label}
                </option>
              ))}
            </SelectField>
          </Box>
        </DrawerTemplate>
      )}
    </Form>
  )
}
