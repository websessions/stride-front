'use client'

import React from 'react'
import styled, { css } from 'styled-components'
import { body1Mono, detail1, detail1Caps } from '../styles/typography'

const Container = styled.div<{ $hasValue?: boolean; $hasError?: boolean; $disabled?: boolean }>`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: ${({ $disabled, theme }) =>
    $disabled ? theme.colorStateDisabledFill : theme.colorInputBackground};
  border-radius: 4px;

  ${props => {
    let borderColor = props.theme.colorInputBorderEmpty
    if (props.$hasValue) {
      borderColor = props.theme.colorInputBorderFilled
    }
    if (props.$hasError) {
      borderColor = props.theme.colorStateError
    }
    if (props.$disabled) {
      borderColor = props.theme.colorStateDisabledEmpty
    }

    return css`
      border: 1px solid ${borderColor};
    `
  }}
`

const Input = styled.input<{ $disabled?: boolean }>`
  ${body1Mono};
  color: ${({ theme }) => theme.colorTextPrimary};

  flex-grow: 1;
  width: 100%;
  border: none;
  border-radius: 0;
  outline: none;
  background: none;
  padding: 10px 12px;

  &:focus {
    outline: none;
  }
  &:invalid {
    outline: none;
    box-shadow: none;
  }

  /* Chrome, Firefox, Opera, Safari 10.1+ */
  &::placeholder {
    color: ${({ theme, $disabled }) =>
      $disabled ? theme.colorTextDisabled : theme.colorTextPlaceholder};
    opacity: 1; /* Firefox */
  }

  /* Microsoft Edge */
  &::-ms-input-placeholder {
    color: ${({ theme, $disabled }) =>
      $disabled ? theme.colorTextDisabled : theme.colorTextPlaceholder};
  }
`

const Label = styled.label`
  ${detail1Caps};
  color: ${({ theme }) => theme.colorTextSecondary};

  margin-bottom: 4px;
`

const InformationText = styled.div`
  ${detail1};
  color: ${({ theme }) => theme.colorTextTertiary};

  margin-top: 4px;
`

const ErrorText = styled.div`
  ${detail1};
  color: ${({ theme }) => theme.colorStateError};

  margin-top: 4px;
`

interface TextInputProps {
  name?: string
  value?: string
  type?: string
  label?: string
  disabled?: boolean
  errorText?: string
  className?: string
  placeholder?: string
  informationText?: string
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      name,
      value,
      type = 'text',
      label,
      disabled,
      errorText,
      className,
      placeholder,
      informationText,
      inputProps,
      onBlur,
      onChange,
    },
    ref,
  ) => {
    return (
      <div className={className}>
        {label ? <Label>{label}</Label> : null}
        <Container $hasValue={!!value} $hasError={!!errorText} $disabled={disabled}>
          <Input
            ref={ref}
            value={value}
            name={name}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            $disabled={disabled}
            onBlur={onBlur}
            onChange={onChange}
            {...inputProps}
          />
        </Container>
        {informationText ? <InformationText>{informationText}</InformationText> : null}
        {errorText ? <ErrorText>{errorText}</ErrorText> : null}
      </div>
    )
  },
)
