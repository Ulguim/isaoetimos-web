import React, { memo } from 'react'

import {
  BoxProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  Textarea,
  TextareaProps,
} from '@chakra-ui/react'
import { useField, UseFieldConfig } from 'react-final-form'

import { fv } from '../../../common/validator'

export type TextAreaFieldProps = {
  name: string
  label?: string
  labelProps?: FormLabelProps
  inputProps?: TextareaProps
  isRequired?: boolean
  isReadOnly?: boolean
  showLabel?: boolean
  validate?: string
  errorFieldName?: string
  config?: UseFieldConfig<any>
} & BoxProps

export const TextAreaField = memo(
  ({
    name,
    label,
    inputProps,
    isRequired,
    validate,
    errorFieldName,
    labelProps,
    ...props
  }: TextAreaFieldProps) => {
    const { input, meta } = useField(name, {
      validate:
        validate &&
        (value => {
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
        {...props}
        isInvalid={!!(meta.touched && meta.error)}
      >
        <FormLabel fontSize="sm" fontWeight="normal" {...labelProps}>
          {label}: {isRequired && '*'}
        </FormLabel>

        <Textarea
          name={name}
          resize="none"
          shadow="0px 0px 3px rgba(0, 0, 0, 0.25)"
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
