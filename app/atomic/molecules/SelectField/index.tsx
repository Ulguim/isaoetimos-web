import React from 'react'

import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  InputProps,
  Select,
  SelectProps,
  Text,
  TextProps,
} from '@chakra-ui/react'
import { useField, UseFieldConfig } from 'react-final-form'
import { fv } from '../../../common/validator'

export type SelectFieldProps = {
  name: string
  defaultValue?: string
  label?: string
  labelProps?: FormLabelProps
  inputProps?: InputProps
  type?: string
  isRequired?: boolean
  validate?: string
  errorFieldName?: string
  formWidth?: string
  hasLabel?: boolean
  config?: UseFieldConfig<any>
  selectProps?: SelectProps
  errorProps?: TextProps
  onChange?: (value: any) => void
} & SelectProps

export const SelectField = ({
  name,
  label,
  defaultValue,
  children,
  labelProps,
  isRequired,
  validate,
  errorFieldName,
  formWidth,
  hasLabel = true,
  onChange = () => {},
  selectProps,
  errorProps,
  ...props
}: SelectFieldProps) => {
  const { input, meta } = useField(name, {
    validate:
      validate &&
      ((value) => {
        let key = label ?? errorFieldName
        key = key.replace(':', '')
        const validation = fv.validate(
          {
            [key]: value,
          },
          {
            [key]: validate,
          },
        )
        return Array.isArray(validation) ? validation : false
      }),
  })

  return (
    <FormControl
      id={input.name}
      isInvalid={!!(meta.touched && meta.error)}
      w={formWidth}
    >
      {hasLabel && (
        <FormLabel fontSize="sm" fontWeight="normal" {...labelProps}>
          {label}: {isRequired && '*'}
        </FormLabel>
      )}
      <Select
        variant="outline"
        size="md"
        bg="white"
        placeholder={defaultValue}
        {...props}
        {...input}
        {...selectProps}
        onChange={(e) => {
          onChange(e)
          input.onChange(e)
        }}
      >
        {children}
      </Select>

      <FormErrorMessage>
        {meta?.error?.[0]?.message && (
          <Flex w="100%" h="auto">
            <Text fontSize="0.875rem" marginTop="0px" {...errorProps}>
              {meta.error?.[0]?.message}
            </Text>
          </Flex>
        )}
      </FormErrorMessage>
    </FormControl>
  )
}
