import React from 'react'

import { Box, Button } from '@chakra-ui/react'
import { Form } from 'react-final-form'

import useCreateOneSupplierAndCustomer from '../../../features/suppliers-and-customers/hooks/useCreateOneSuppliersAndCustomer'
import useUpdateOneSupplierAndCustomer from '../../../features/suppliers-and-customers/hooks/useUpdateOneSuppliersAndCustomer'
import { SuppliersAndCustomer } from '../../../generated/graphql'
import { DrawerTemplate } from '../../molecules/Drawer'
import { MaskField } from '../../molecules/MaskField'
import { TextField } from '../../molecules/TextField'

interface SuppliersAndCustomersDrawerProps {
  isOpen: boolean
  isEditForm?: boolean
  onClose: () => void
  intitialValues?: SuppliersAndCustomer | null
}

export const SuppliersAndCustomersDrawer: React.FC<
  SuppliersAndCustomersDrawerProps
> = ({ isOpen, onClose, isEditForm, intitialValues }) => {
  const { createOneSupplierAndCustomer } =
    useCreateOneSupplierAndCustomer()

  const { updateOneSupplierAndCustomer } =
    useUpdateOneSupplierAndCustomer()
  const handleUpdate = values => {
    values.id = intitialValues.id
    updateOneSupplierAndCustomer(values)
  }
  return (
    <Form
      onSubmit={values => {
        isEditForm
          ? handleUpdate(values)
          : createOneSupplierAndCustomer(values)
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
              ? 'Editar Fornecedor/Cliente'
              : 'Cadastrar Fornecedor/Cliente'
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
            ></TextField>
            <TextField
              isRequired
              validate="string"
              name="cpf"
              label="CPF/CNPJ"
            ></TextField>
            <TextField
              isRequired
              validate="string"
              name="email"
              label="E-mail"
            ></TextField>
            <MaskField
              isRequired
              validate="string"
              name="phone"
              label="Telefone"
              mask="(00) 0 0000-0000"
            />
            <TextField
              isRequired
              validate="string"
              name="address"
              label="Endereço"
            ></TextField>
          </Box>
        </DrawerTemplate>
      )}
    </Form>
  )
}
