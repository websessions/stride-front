'use client'

import React from 'react'
import { css, styled } from 'styled-components'
import { assertUnreachable } from '../assert-unreachable'
import { detail1 } from '../styles/typography'

export type ButtonVariantType = 'primary' | 'secondary' | 'tertiary' | 'warning' | 'cta'

const buttonReset = css`
  user-select: none;
  position: relative;
  outline: 0;
  border: none;
  font-style: inherit;
  font-variant: inherit;
  font-family: inherit;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  background-color: transparent;
`

const ButtonRoot = styled.button<{ $variant: ButtonVariantType; $small?: boolean }>`
  ${buttonReset};

  padding: ${props => (props.$small ? '0' : '8px 16px')};
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => {
    switch (props.$variant) {
      case 'primary':
        return props.theme.colorButtonPrimaryBackground
      case 'secondary':
        return props.theme.colorButtonSecondaryBackground
      case 'tertiary':
        return props.theme.colorButtonTertiaryBackground
      case 'warning':
        return props.theme.colorButtonWarningBackground
      case 'cta':
        return props.theme.colorButtonCtaBackground
      default:
        return assertUnreachable(props.$variant)
    }
  }};
  color: ${props => {
    switch (props.$variant) {
      case 'primary':
        return props.theme.colorButtonPrimaryText
      case 'secondary':
        return props.theme.colorButtonSecondaryText
      case 'tertiary':
        return props.theme.colorButtonTertiaryText
      case 'warning':
        return props.theme.colorButtonWarningText
      case 'cta':
        return props.theme.colorButtonCtaText
      default:
        return assertUnreachable(props.$variant)
    }
  }};
  ${props => {
    if (props.$variant === 'secondary') {
      return css`
        border: 1px solid ${props.theme.colorButtonSecondaryBorder};
      `
    }
  }}

  &:disabled {
    background-color: ${({ theme }) => theme.colorStateDisabledFill};
    color: ${({ theme }) => theme.colorTextDisabled};
    cursor: default;
  }
`

const IconContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
`

const Label = styled.span`
  ${detail1};
  color: currentColor;
  white-space: nowrap;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

interface ButtonProps {
  variant?: ButtonVariantType
  name?: string
  type?: 'button' | 'reset' | 'submit'
  iconStart?: React.ReactNode
  label: string | React.ReactNode
  disabled?: boolean
  small?: boolean // Basically removes padding from the button
  className?: string
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  onClick?: React.MouseEventHandler
}

export const TextButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      name,
      type = 'button',
      iconStart,
      label,
      disabled,
      small,
      className,
      buttonProps,
      onClick,
    },
    ref,
  ) => {
    return (
      <ButtonRoot
        ref={ref}
        name={name}
        type={type}
        disabled={disabled}
        className={className}
        $variant={variant}
        $small={small}
        onClick={onClick}
        {...buttonProps}>
        <Label>
          {iconStart ? <IconContainer>{iconStart}</IconContainer> : null}
          {label}
        </Label>
      </ButtonRoot>
    )
  },
)
