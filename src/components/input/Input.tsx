"use client";

import React, { forwardRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";

export interface InputProps {
  error?: boolean;
  id?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  count?: number;
  disabled?: boolean;
  onEnter?: () => void;
  hierarchy?: "default" | "sigmine";
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
      hierarchy = "default",
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
        $hierarchy={hierarchy}
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
  $hierarchy: "default" | "sigmine";
}>`
  display: flex;
  align-items: center;
  padding: 11px 12px;
  margin-top: 8px;
  flex: 1;

  ${({ theme }) => theme.fonts.b3_14_reg};
  transition: all 0.1s;
  border-radius: 8px;

  ${({ $hierarchy, theme, $length }) => {
    switch ($hierarchy) {
      case "default":
        return css`
          background: ${$length > 0
            ? theme.colors.primary_10
            : theme.colors.white};

          border: 1px solid ${theme.colors.primary_20};

          &:hover {
            background: ${theme.colors.primary_10};
          }

          &:focus-within {
            background: ${({ theme }) => theme.colors.primary_10};
            border: 1px solid ${({ theme }) => theme.colors.primary_60};
          }
        `;
      case "sigmine":
        return css`
          background: ${$length > 0
            ? theme.colors.sigmine_primary_5
            : theme.colors.white};
          border: 1px solid ${theme.colors.sigmine_primary_20};

          &:focus-within {
            border: 1px solid ${theme.colors.sigmine_primary_40};
          }
        `;
    }
  }}
  ${({ $error }) =>
    $error &&
    `
      border: 1px solid rgba(246, 78, 57, 0.30); 
      background: rgba(246, 78, 57, 0.05); 
    `}

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
