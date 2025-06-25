"use client";

import { HTMLAttributes, forwardRef } from "react";
import styled, { css } from "styled-components";

type ButtonHierachy =
  | "primary"
  | "secondary"
  | "normal"
  | "disabled"
  | "default"
  | "gray"
  | "sigminePrimary"
  | "sigmineSecondary"
  | "sigmineDefault";

type ButtonProps = {
  size?: number;
  width?: string;
  hierarchy?: ButtonHierachy;
  suffix?: React.ReactNode;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
} & HTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 56,
      width,
      hierarchy = "primary",
      suffix,
      children,
      type = "submit",
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        width={width}
        size={size}
        $hierarchy={hierarchy}
        disabled={hierarchy === "disabled"}
        {...props}
        type={type}
      >
        {children}
        {suffix && suffix}
      </StyledButton>
    );
  }
);

export default Button;

const StyledButton = styled.button<{
  width?: string;
  size: number;
  disabled?: boolean;
  $hierarchy: string;
}>`
  width: ${({ width }) => (width ? `${width}` : "auto")};
  height: ${({ size }) => `${size}px`};
  ${({ theme }) => theme.fonts.b2_16_semi};

  border-radius: 12px;
  padding: 8px 16px;

  box-sizing: border-box;
  border: none;

  ${({ theme }) => theme.mixins.flexBox("row", "flex-start")};
  gap: 8px;

  transition: all 0.2s;
  cursor: pointer;

  ${({ $hierarchy, theme }) => {
    switch ($hierarchy) {
      case "primary":
        return css`
          background: ${theme.colors.primary};
          color: ${theme.colors.white};

          &:hover {
            box-shadow: 0px 2px 16px 0px #7580ea;
          }

          &:active {
            background: ${theme.colors.primary_dark};
          }
        `;
      case "secondary":
        return css`
          background: ${theme.colors.white};
          box-shadow: inset 0 0 0 1.5px ${theme.colors.primary_30};
          color: ${theme.colors.primary};

          &:hover {
            background: ${theme.colors.primary_10};
            box-shadow: inset 0 0 0 1.5px ${theme.colors.primary_50};
          }
        `;
      case "normal":
        return css`
          background: ${theme.colors.primary_10};
          color: ${theme.colors.primary};

          &:hover {
            background: ${theme.colors.primary_20};
          }
        `;
      case "gray":
        return css`
          background: ${theme.colors.G_50};
          color: ${theme.colors.G_600};
          border: 1.5px solid ${theme.colors.G_100};

          &:hover {
            box-shadow: inset 0 0 0 3px ${theme.colors.primary_20};
          }
        `;
      case "default":
        return css`
          background: ${theme.colors.white};
          color: ${theme.colors.black};

          &:hover {
            background: ${theme.colors.G_100};
          }
        `;
      case "disabled":
        return css`
          background: ${theme.colors.G_100};
          color: ${theme.colors.G_300};
          pointer-events: none;
        `;
      case "sigminePrimary":
        return css`
          background: ${theme.colors.sigmine_primary};
          color: ${theme.colors.white};

          &:hover {
            box-shadow: inset 0 0 0 4px ${theme.colors.primary_30};
          }

          &:active {
            background: ${theme.colors.sigmine_primary_dark};
          }
        `;
      case "sigmineSecondary":
        return css`
          background: ${theme.colors.white};
          color: ${theme.colors.sigmine_primary};
          border: 1.5px solid ${theme.colors.sigmine_primary_20};

          &:active {
            background: ${theme.colors.sigmine_primary_10};
          }
        `;
      case "sigmineDefault":
        return css`
          background: ${theme.colors.G_50};
          color: ${theme.colors.G_600};
          border: 1px solid ${theme.colors.G_100};

          &:hover {
            background: ${theme.colors.sigmine_primary_10};
            color: ${theme.colors.sigmine_primary};
            border: 1px solid ${theme.colors.sigmine_primary_20};
          }
        `;
      default:
        return css`
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
        `;
    }
  }}
`;
