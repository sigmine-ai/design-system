"use client";

import React, { forwardRef } from "react";
import styled from "styled-components";

export interface InputProps {
  id?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  count?: number;
  disabled?: boolean;
  onEnter?: () => void;
  size?: number;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      value = "",
      onChange,
      count,
      disabled = false,
      onEnter,
      size = 44,
      ...props
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      if (count && inputValue.length > count) return;
      onChange(inputValue);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && onEnter) {
        onEnter();
      }
    };

    return (
      <InputContainer $length={value.length} $disabled={disabled} $size={size}>
        <StyledInput
          ref={ref}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          {...props}
        />
        {count !== undefined && (
          <CountBox $length={value.length}>
            <b>{value.length}</b>/{count}
          </CountBox>
        )}
      </InputContainer>
    );
  }
);

Input.displayName = "Input";

export default Input;

const InputContainer = styled.div<{
  $length: number;
  $disabled?: boolean;
  $size: number;
}>`
  display: flex;
  align-items: center;
  padding: 11px 12px;
  margin-top: 8px;
  flex: 1;
  height: ${({ $size }) => `${$size}px`};
  box-sizing: border-box;
  ${({ theme }) => theme.fonts.b3_14_reg};
  transition: all 0.1s;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary_20};
  background: ${({ theme, $length }) =>
    $length > 0 ? theme.colors.primary_10 : theme.colors.white};

  &:hover {
    background: ${({ theme }) => theme.colors.primary_5};
  }

  &:focus-within {
    background: ${({ theme }) => theme.colors.primary_5};
    border: 1px solid ${({ theme }) => theme.colors.primary_40};
  }

  ${({ $disabled, theme }) =>
    $disabled &&
    `
            background: ${theme.colors.G_100};
            border: 1px solid ${theme.colors.G_100};
            color: ${theme.colors.G_300};
            pointer-events: none;
        `}
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    color: ${({ theme }) => theme.colors.G_400};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary_60};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.G_300};

    &::placeholder {
      color: ${({ theme }) => theme.colors.G_300};
    }
  }
`;

const CountBox = styled.div<{ $length: number }>`
  margin-left: 8px;
  ${({ theme }) => theme.fonts.c1_12_reg};
  color: ${({ theme }) => theme.colors.G_300};

  b {
    ${({ theme }) => theme.fonts.c1_12_semi};
    color: ${({ theme, $length }) =>
      $length > 0 ? theme.colors.primary : theme.colors.G_300};

    &:hover {
      color: ${({ theme }) => theme.colors.G_400};
    }
  }
`;
