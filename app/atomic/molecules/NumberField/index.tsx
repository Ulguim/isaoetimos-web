import React, { memo } from 'react'

import { fv } from '@app/common/validator'
import {
  BoxProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
} from '@chakra-ui/react'
import { useField, UseFieldConfig } from 'react-final-form'

export type NumberFieldProps = {
  name: string
  label?: string
  labelProps?: FormLabelProps
  inputProps?: NumberInputProps
  isRequired?: boolean
  isReadOnly?: boolean
  showLabel?: boolean
  showInputStepper?: boolean
  validate?: string
  errorFieldName?: string
  config?: UseFieldConfig<any>
} & BoxProps

export const NumberField = memo(
  ({
    name,
    label,
    inputProps,
    isRequired,
    validate,
    showInputStepper,
    errorFieldName,
    labelProps,
    ...props
  }: NumberFieldProps) => {
    const { input, meta } = useField(name, {
      validate:
        validate &&
        (value => {
          let key = label ?? errorFieldName
          key = key.replace(':', '')
          const validation = fv.validate(
            {
              [key]: Number(value),
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
        {...props}
        isInvalid={!!(meta.touched && meta.error)}
      >
        <FormLabel fontSize="sm" fontWeight="normal" {...labelProps}>
          {label}: {isRequired && '*'}
        </FormLabel>

        <NumberInput name={name} {...input} {...inputProps}>
          <NumberInputField
            shadow="0px 0px 3px rgba(0, 0, 0, 0.25)"
            {...input}
            {...props}
          />
          {showInputStepper && (
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          )}
        </NumberInput>

        <FormErrorMessage>
          {meta.error?.[0]?.message && (
            <span>{meta.error?.[0]?.message}</span>
          )}
        </FormErrorMessage>
      </FormControl>
    )
  },
)
