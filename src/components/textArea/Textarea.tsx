"use client";

import React, { forwardRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";

export interface TextareaProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  count?: number;
  disabled?: boolean;
  isMini?: boolean;
  defaultHeight?: string;
  hierarchy?: "default" | "sigmine";
  error?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      placeholder,
      value = "",
      onChange,
      count,
      disabled = false,
      isMini = false,
      defaultHeight,
      error = true,
      hierarchy = "default",
    },
    ref
  ) => {
    const [isError, setIsError] = useState(error);

    const handleClick = () => {
      setIsError(false);
    };

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
      const value = e.target.value;
      if (count && value.length > count) return;
      onChange(value);

      // 높이 자동 조절
      if (isMini) {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
      }
    }

    useEffect(() => {
      setIsError(error);
    }, [error]);

    return (
      <TextareaContainer
        $length={value.length}
        $disabled={disabled}
        $error={isError}
        $hierarchy={hierarchy}
      >
        <StyledTextarea
          ref={ref}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          $isMini={isMini}
          rows={isMini ? 1 : undefined}
          $defaultHeight={defaultHeight}
          $error={isError}
          onClick={handleClick}
        />
        {count && (
          <CountBox $length={value.length}>
            <b>{value.length}</b>/{count}
          </CountBox>
        )}
      </TextareaContainer>
    );
  }
);

export default Textarea;

const TextareaContainer = styled.div<{
  $length: number;
  $disabled?: boolean;
  $error: boolean;
  $hierarchy: "default" | "sigmine";
}>`
  position: relative;

  display: flex;
  flex-direction: column;
  margin-top: 8px;

  gap: 1px;
  padding: 11px 12px;

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

  ${({ $disabled, theme }) =>
    $disabled &&
    css`
      background: ${theme.colors.G_100};
      border: 1px solid ${theme.colors.G_100};
      pointer-events: none;
    `}

  ${({ $error }) =>
    $error &&
    `
          border: 1px solid rgba(246, 78, 57, 0.30); 
          background: rgba(246, 78, 57, 0.05);
        `}
`;

const StyledTextarea = styled.textarea<{
  $isMini: boolean;
  $defaultHeight?: string;
  $error: boolean;
}>`
  ${({ theme }) => theme.fonts.b3_14_reg};
  height: ${({ $isMini, $defaultHeight }) =>
    $isMini ? "23px" : $defaultHeight || "87px"};
  min-height: 23px;
  max-height: 300px;

  border: none;
  background: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  resize: vertical;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary_60};
  }

  &:disabled {
    resize: none;
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

const CountBox = styled.span<{ $length: number }>`
  align-self: flex-end;
  ${({ theme }) => theme.fonts.c1_12_reg};
  color: ${({ theme }) => theme.colors.G_300};

  b {
    ${({ theme }) => theme.fonts.c1_12_semi};
    color: ${({ theme, $length }) =>
      $length > 0 ? theme.colors.primary : theme.colors.G_300};
  }
`;
