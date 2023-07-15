import { memo } from 'react'

import { fv } from '@app/common/validator'
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
import { useField, UseFieldConfig } from 'react-final-form'

export type TextFieldProps = {
  name?: string
  maximumOfletters?: number
  label?: string
  labelProps?: FormLabelProps
  inputProps?: InputProps
  type?: string
  isRequired?: boolean
  validate?: ValidationRule
  errorFieldName?: string
  config?: UseFieldConfig<any>
  hasLabel?: boolean
} & BoxProps

export const TextField = memo(
  ({
    name,
    label,
    labelProps,
    inputProps,
    isRequired,
    errorFieldName,
    validate,
    hasLabel = true,
    ...props
  }: TextFieldProps) => {
    const { input, meta } = useField(name, {
      validate:
        validate &&
        (value => {
          let key = label ?? errorFieldName
          key = key.replace(':', '')
          const validation = fv.validate(
            {
              [key]:
                props.type === 'number' ? parseFloat(value) : value,
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
        {hasLabel && (
          <FormLabel
            fontSize="sm"
            fontWeight="normal"
            {...labelProps}
          >
            {label ? label + ':' : null} {isRequired && '*'}
          </FormLabel>
        )}
        <Input
          color="boulder"
          size="md"
          shadow="0px 0px 3px rgba(0, 0, 0, 0.25)"
          borderRadius="5px"
          background="white"
          border="1px solid"
          {...input}
          {...inputProps}
          type={props.type}
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
