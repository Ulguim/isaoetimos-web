import React from 'react'

import { Box, Button } from '@chakra-ui/react'
import { Form } from 'react-final-form'

import { DrawerTemplate } from '../../molecules/Drawer'
import { MaskField } from '../../molecules/MaskField'
import { TextField } from '../../molecules/TextField'
import { SelectField } from '../../molecules/SelectField'

interface AccountPlansDrawerProps {
  isOpen: boolean
  isEditForm?: boolean
  onClose: () => void
  intitialValues?: any | null
}

export const AccountPlansDrawer: React.FC<
AccountPlansDrawerProps
> = ({ isOpen, onClose, isEditForm, intitialValues }) => {
  // const { createOneSupplierAndCustomer } =
  //   useCreateOneSupplierAndCustomer()

  // const { updateOneSupplierAndCustomer } =
  //   useUpdateOneSupplierAndCustomer()
  // const handleUpdate = values => {
  //   values.id = intitialValues.id
  //   updateOneSupplierAndCustomer(values)
  // }

  const typeOptions = [
    {value: 'ENTRADA'},
    {value: 'SAIDA'}
  ]

  const fixedOptions = [
    {value: 'FIXO'},
    {value: 'VARIAVEL'}
  ]

  return (
    <Form
      onSubmit={values => {
        // isEditForm
        //   ? handleUpdate(values)
        //   : createOneSupplierAndCustomer(values)
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
              name='type'
              validate='string'
              label='Fixo / Variável'
              placeholder='Selecione'
            >
              {typeOptions.map((type, index) => (
                <option key={index} value={type.value}>
                  {type.value}
                </option>
              ))}
            </SelectField>
            <SelectField
              isRequired
              name='fixed'
              validate='string'
              label='Entrada / Saída'
              placeholder='Selecione'
            >
              {fixedOptions.map((fixed, index) => (
                <option key={index} value={fixed.value}>
                  {fixed.value}
                </option>
              ))}
            </SelectField>
          </Box>
        </DrawerTemplate>
      )}
    </Form>
  )
}
