import 'react-datepicker/dist/react-datepicker.css'

import React, { memo } from 'react'

import { forwardRef, Input, InputProps } from '@chakra-ui/react'
import ptBR from 'date-fns/locale/pt-BR'
import ReactDatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from 'react-datepicker'
import InputMask from 'react-input-mask'

registerLocale('ptBR', ptBR)

type DatePickerCustomProps = {
  inputProps?: InputProps
} & ReactDatePickerProps

const CustomInput = forwardRef(
  ({ value, onClick, ...inputProps }, ref) => {
    return (
      <Input
        as={InputMask}
        mask="****"
        size="md"
        _placeholder={{
          color: '#CBD5E0',
        }}
        onClick={onClick}
        ref={ref}
        value={value}
        {...inputProps}
      />
    )
  },
)

export const DatePicker = memo(
  ({
    onChange,
    selected,
    inputProps,
    ...props
  }: DatePickerCustomProps) => {
    return (
      <ReactDatePicker
        dateFormat="dd/MM/yyyy"
        selected={selected}
        onChange={onChange}
        locale="ptBR"
        autoComplete="off"
        customInput={<CustomInput {...inputProps} />}
        wrapperClassName="customDatePickerWidth"
        className="customDatePickerWidth"
        {...props}
      />
    )
  },
)
