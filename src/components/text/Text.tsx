"use client";

import { ThemeColors, ThemeFonts } from "@/styles/theme.type";
import { HTMLAttributes, PropsWithChildren } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

interface TextProps extends HTMLAttributes<HTMLDivElement> {
  font: keyof ThemeFonts;
  color: keyof ThemeColors;
  markdown?: boolean;
}

const Text: React.FC<TextProps> = ({
  font,
  color = "black",
  children,
  markdown = false,
  ...props
}: PropsWithChildren<TextProps>) => {
  return (
    <StyledText
      $font={font}
      $color={color}
      $hasEvent={!!props.onClick}
      {...props}
    >
      {markdown ? (
        <MarkdownWrapper>
          <ReactMarkdown components={markdownStyles}>
            {String(children)}
          </ReactMarkdown>
        </MarkdownWrapper>
      ) : (
        children
      )}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.div<{
  $font: keyof ThemeFonts;
  $color: keyof ThemeColors;
  $hasEvent: boolean;
}>`
  ${({ theme, $font }) => theme.fonts[$font]};
  color: ${({ theme, $color }) => theme.colors[$color]};
  white-space: pre-wrap;
  pointer-events: ${({ $hasEvent }) => ($hasEvent ? "all" : "none")};
`;

const MarkdownWrapper = styled.div`
  line-height: 1.4; /* 전체 줄 간격을 좁힘 */
  font-size: 16px;
  color: #333;

  h1,
  h2,
  h3,
  h4 {
    margin: 0.5em 0 0.3em 0; /* 위-아래 여백을 최소화 */
    font-weight: bold;
  }

  h1 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.3em;
  }

  h3 {
    font-size: 1.2em;
  }

  p {
    margin: 0.1em 0; /* 문단의 위아래 여백을 최소화 */
  }

  ol {
    padding-left: 1.8em; /* 리스트 들여쓰기 최소화 */
    margin: 0; /* 리스트 위아래 여백을 줄임 */
  }

  ul {
    padding-left: 1.8em; /* 리스트 들여쓰기 최소화 */
    margin: 0; /* 리스트 위아래 여백을 줄임 */
    list-style: disc;
  }

  li {
    margin-bottom: 0.1em; /* 리스트 항목 간 여백을 줄임 */
    line-height: 1.4; /* 리스트 줄 간격 */
  }

  strong {
    font-weight: bold;
    margin-right: 0.1em; /* 강조된 텍스트와 다음 요소의 간격 최소화 */
  }

  hr {
    margin: 0.8em 0; /* 수평선 위아래 여백 최소화 */
    border: none;
    border-top: 1px solid #eaeaea;
  }

  blockquote {
    margin: 0.3em 0; /* 인용문 여백 최소화 */
    padding: 0.3em 0.8em;
    background: #f9f9f9;
    border-left: 3px solid #ccc;
    color: #555;
  }

  code {
    background: #f5f5f5;
    padding: 0.1em 0.2em;
    border-radius: 3px;
    font-family: "Fira Code", "Source Code Pro", "Menlo", "Consolas",
      "Courier New", monospace;
    font-size: 0.95em;
  }

  pre {
    background: #f5f5f5;
    border: 1px solid #e1e1e1;
    padding: 0.6em;
    border-radius: 4px;
    max-width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    margin: 0.3em 0;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
`;

// 마크다운 스타일 컴포넌트
const markdownStyles = {
  h1: (props: PropsWithChildren<object>) => <h1>{props.children}</h1>,
  h2: (props: PropsWithChildren<object>) => <h2>{props.children}</h2>,
  h3: (props: PropsWithChildren<object>) => <h3>{props.children}</h3>,
  p: (props: PropsWithChildren<object>) => <p>{props.children}</p>,
  ul: (props: PropsWithChildren<object>) => <ul>{props.children}</ul>,
  ol: (props: PropsWithChildren<object>) => <ol>{props.children}</ol>,
  li: (props: PropsWithChildren<object>) => <li>{props.children}</li>,
  blockquote: (props: PropsWithChildren<object>) => (
    <blockquote>{props.children}</blockquote>
  ),
  hr: () => <hr />,
};
