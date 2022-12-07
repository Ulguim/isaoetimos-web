import React, { memo } from 'react'
import { useMemo } from 'react'

import {
  BoxProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  Input,
  InputProps,
} from '@chakra-ui/react'
import { ValidationRule } from 'fastest-validator'
import IMask from 'imask'
import { useField, UseFieldConfig } from 'react-final-form'

import { fv } from '../../../common/validator'

export type MaskFieldProps = {
  name: string
  label?: string
  labelProps?: FormLabelProps
  inputProps?: InputProps
  type?: string
  isRequired?: boolean
  mask: string
  validate?: ValidationRule
  validateCPF?: boolean
  isReadOnly?: boolean
  useMaskFormat?: boolean

  config?: UseFieldConfig<any>
} & BoxProps

export const MaskField = memo(
  ({
    name,
    label,
    labelProps,
    inputProps,
    mask = '',
    validate,
    isRequired,
    useMaskFormat,
    isReadOnly = false,
    ...props
  }: MaskFieldProps) => {
    const masked = useMemo(
      () =>
        IMask.createMask({
          mask,
        }),
      [mask],
    )

    const { input, meta } = useField(name, {
      format(value) {
        masked.resolve(value ?? '')
        return masked.value
      },
      parse(value) {
        masked.resolve(value ?? '')
        if (useMaskFormat) return masked.value
        return masked.unmaskedValue
      },
      validate: value => {
        if (validate) {
          let key = label
          //@ts-ignore
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
        }
      },
    })

    return (
      <FormControl
        id={input.name}
        {...props}
        isInvalid={!!(meta.touched && meta.error)}
      >
        <FormLabel
          fontSize="sm"
          fontWeight="normal"
          color="boulder"
          {...labelProps}
        >
          {label}: {isRequired && '*'}
        </FormLabel>
        <Input
          color="boulder"
          size="md"
          borderRadius="5px"
          border="1px solid"
          shadow="0px 0px 3px rgba(0, 0, 0, 0.25)"
          isReadOnly={isReadOnly}
          {...input}
          {...inputProps}
        />

        <FormErrorMessage>
          {meta.error?.[0]?.message && (
            <span>{meta.error?.[0]?.message}</span>
          )}
        </FormErrorMessage>
      </FormControl>
    )
  },
)
