import React, { memo } from 'react'

import {
  BoxProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  forwardRef,
  Input,
  InputProps,
} from '@chakra-ui/react'
import ptBR from 'date-fns/locale/pt-BR'
import { ValidationRule } from 'fastest-validator'
import DatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from 'react-datepicker'
import { useField, UseFieldConfig } from 'react-final-form'
import InputMask from 'react-input-mask'

import { fv } from '../../../common/validator'

registerLocale('ptBR', ptBR)

export type DateFieldProps = {
  name: string
  label?: string
  labelProps?: FormLabelProps
  inputProps?: InputProps
  DatePickerProps?: Partial<ReactDatePickerProps>
  type?: string
  isRequired?: boolean
  validate?: ValidationRule
  errorFieldName?: string
  isDateRange?: boolean
  config?: UseFieldConfig<any>
} & BoxProps

const CustomInput = forwardRef(
  ({ value, onClick, ...inputProps }, ref) => {
    return (
      <Input
        as={InputMask}
        mask="**/**/****"
        border="1px solid"
        size="md"
        shadow="0px 0px 3px rgba(0, 0, 0, 0.25)"
        borderColor={'#CBD5E0'}
        _placeholder={{
          color: '#CBD5E0',
        }}
        onClick={onClick}
        ref={ref}
        value={value}
        {...inputProps}
        placeholder="__/__/____"
      />
    )
  },
)

export const DateField = memo(
  ({
    name,
    label,
    labelProps,
    DatePickerProps,
    isRequired,
    validate,
    errorFieldName,
    isDateRange,
    inputProps,
    ...props
  }: DateFieldProps) => {
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
        w="100%"
        sx={datePickerStyle}
      >
        <FormLabel fontSize="sm" fontWeight="normal" {...labelProps}>
          {label}: {isRequired && '*'}
        </FormLabel>

        <DatePicker
          dateFormat="dd/MM/yyyy"
          {...DatePickerProps}
          selected={!isDateRange && input.value}
          startDate={isDateRange && input?.value?.[0]}
          endDate={isDateRange && input?.value?.[1]}
          selectsRange={isDateRange}
          onChange={input.onChange}
          locale="ptBR"
          autoComplete="off"
          customInput={<CustomInput {...inputProps} />}
          wrapperClassName="customDatePickerWidth"
          className="customDatePickerWidth"
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

const datePickerStyle = {
  '.react-datepicker': {
    display: 'none',
    '.react-datepicker__header ': {
      bg: 'primary',
      '.react-datepicker__current-month': {
        color: 'white',
      },
      '.react-datepicker__day-name': {
        color: 'white',
      },
    },
    '.react-datepicker__day': {
      transition: 'all 0.3s',
    },
    '.react-datepicker__day:hover ': {
      bg: 'primary',
      borderRadius: '50%',
      color: 'white',
    },
    ' .react-datepicker__day--selected ': {
      bg: 'primary',
      borderRadius: '50%',
      color: 'white',
    },
    '.react-datepicker__year-select': {
      bg: 'white',
      borderRadius: '9px',
      px: 2,
      py: 1,
      w: '80px',
      color: 'grey.500',
      fontWeight: 500,
    },
  },
}
