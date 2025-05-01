"use client";

import React, { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";

export interface InputProps {
  error?: boolean;
  id?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  count?: number;
  disabled?: boolean;
  onEnter?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      error = false,
      placeholder,
      value = "",
      onChange,
      count,
      disabled = false,
      onEnter,
      ...props
    },
    ref
  ) => {
    const [isError, setIsError] = useState(error);

    const handleClick = () => {
      setIsError(false);
    };

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

    useEffect(() => {
      setIsError(error);
    }, [error]);

    return (
      <InputContainer
        $length={value.length}
        $disabled={disabled}
        $error={isError}
      >
        <StyledInput
          ref={ref}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          $error={isError}
          onClick={handleClick}
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

export default Input;

const InputContainer = styled.div<{
  $length: number;
  $disabled?: boolean;
  $error: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 11px 12px;
  margin-top: 8px;
  flex: 1;

  ${({ theme }) => theme.fonts.b3_14_reg};
  transition: all 0.1s;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary_20};
  background: ${({ theme, $length }) =>
    $length > 0 ? theme.colors.primary_10 : theme.colors.white};
  ${({ $error }) =>
    $error &&
    `
      border: 1px solid rgba(246, 78, 57, 0.30); 
      background: rgba(246, 78, 57, 0.05); 
    `}

  &:hover {
    background: ${({ theme }) => theme.colors.primary_10};
  }

  &:focus-within {
    background: ${({ theme }) => theme.colors.primary_10};
    border: 1px solid ${({ theme }) => theme.colors.primary_60};
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

const StyledInput = styled.input<{ $error: boolean }>`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.black};

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary_60};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.G_300};

    &::placeholder {
      color: ${({ theme }) => theme.colors.G_300};
    }
  }
  ${({ $error }) =>
    $error &&
    `
      &::placeholder {
        color: rgba(246, 78, 57, 0.30);
      }
    `}
`;

const CountBox = styled.div<{ $length: number }>`
  margin-left: 8px;
  ${({ theme }) => theme.fonts.c1_12_reg};
  color: ${({ theme }) => theme.colors.G_300};

  b {
    ${({ theme }) => theme.fonts.c1_12_semi};
    color: ${({ theme, $length }) =>
      $length > 0 ? theme.colors.primary : theme.colors.G_300};
  }
`;
