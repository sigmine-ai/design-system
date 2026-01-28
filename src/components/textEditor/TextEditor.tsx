"use client";

import React, {
  forwardRef,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import styled, { css } from "styled-components";
import Icon from "@/components/icon/Icon";

export interface TextEditorProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  count?: number;
  disabled?: boolean;
  isMini?: boolean;
  defaultHeight?: string;
  hierarchy?: "default" | "sigmine";
  error?: boolean;
  maxHeight?: string;
  attachmentAccept?: string;
  onAttachmentChange?: (files: FileList | null) => void;
  attachments?: File[];
  attachmentPreviewSize?: number;
  onAttachmentRemove?: (file: File, index: number) => void;
}

const TextEditor = forwardRef<HTMLTextAreaElement, TextEditorProps>(
  (
    {
      placeholder,
      value = "",
      onChange,
      count,
      disabled = false,
      isMini = false,
      defaultHeight,
      error = false,
      hierarchy = "default",
      maxHeight,
      attachmentAccept = "image/*",
      onAttachmentChange,
      attachments,
      attachmentPreviewSize = 64,
      onAttachmentRemove,
    },
    ref
  ) => {
    const [isError, setIsError] = useState(error);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const attachmentInputRef = useRef<HTMLInputElement | null>(null);
    const attachmentInputId = useId();
    const [attachmentPreviews, setAttachmentPreviews] = useState<
      Array<{ key: string; url: string; name: string; index: number; file: File }>
    >([]);

    const handleClick = () => {
      setIsError(false);
    };

    function adjustHeight() {
      if (textareaRef.current && !isMini) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight + 20}px`;
      }
    }

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
      const inputValue = e.target.value;
      if (count && inputValue.length > count) return;
      onChange(inputValue);

      if (!isMini && !defaultHeight?.includes("px")) {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
      }

      if (e.target.setSelectionRange) {
        const pos = e.target.selectionStart;
        e.target.setSelectionRange(pos, pos, "none");
      }
    }

    function handleAttachmentButtonClick() {
      attachmentInputRef.current?.click();
    }

    function handleAttachmentChange(
      event: React.ChangeEvent<HTMLInputElement>
    ) {
      const files = event.target.files;
      onAttachmentChange?.(files ?? null);
      if (attachmentInputRef.current) {
        attachmentInputRef.current.value = "";
      }
    }

    useEffect(() => {
      setIsError(error);
    }, [error]);

    useEffect(() => {
      if (defaultHeight?.includes("px")) return;
      adjustHeight();
    }, [value]);

    useEffect(() => {
      if (!attachments || attachments.length === 0) {
        setAttachmentPreviews([]);
        return;
      }

      const nextPreviews = attachments.map((file, index) => {
        const key = `${file.name}-${file.size}-${file.lastModified}`;
        return {
          key,
          url: URL.createObjectURL(file),
          name: file.name,
          file,
          index,
        };
      });

      setAttachmentPreviews(nextPreviews);

      return () => {
        nextPreviews.forEach((preview) => URL.revokeObjectURL(preview.url));
      };
    }, [attachments]);

    return (
      <TextareaContainer
        $length={value.length}
        $disabled={disabled}
        $error={isError}
        $hierarchy={hierarchy}
      >
        <StyledTextarea
          ref={(el) => {
            textareaRef.current = el;
            if (typeof ref === "function") {
              ref(el);
            } else if (ref) {
              (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current =
                el;
            }
          }}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          $isMini={isMini}
          rows={isMini ? 1 : undefined}
          $defaultHeight={defaultHeight}
          $error={isError}
          onClick={handleClick}
          autoFocus={false}
          $maxHeight={maxHeight}
        />
        {attachmentPreviews.length > 0 && (
          <AttachmentPreviewBar>
            {attachmentPreviews.map((preview) => (
              <AttachmentPreviewItem
                key={preview.key}
                $size={attachmentPreviewSize}
              >
                <img src={preview.url} alt={preview.name} />
                {onAttachmentRemove && !disabled && (
                  <AttachmentRemoveButton
                    type="button"
                    aria-label="첨부 삭제"
                    onClick={() =>
                      onAttachmentRemove(preview.file, preview.index)
                    }
                  >
                    <Icon name="CloseCircle" variant="Bold" size={14} />
                  </AttachmentRemoveButton>
                )}
              </AttachmentPreviewItem>
            ))}
          </AttachmentPreviewBar>
        )}
        <AttachmentContainer>
          <AttachmentInput
            id={attachmentInputId}
            ref={attachmentInputRef}
            type="file"
            accept={attachmentAccept}
            onChange={handleAttachmentChange}
          />
          <AttachmentButton
            type="button"
            aria-label="이미지 첨부"
            disabled={disabled}
            onClick={handleAttachmentButtonClick}
          >
            <Icon name="Gallery" variant="Bold" size={18} />
          </AttachmentButton>
          {count && (
          <CountBox $length={value.length}>
            <b>{value.length}</b>/{count}
          </CountBox>
        )}
        </AttachmentContainer>
        
      </TextareaContainer>
    );
  }
);

export default TextEditor;

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
          background: ${$length > 0 ? theme.colors.primary_10 : theme.colors.white};
          border: 1px solid ${theme.colors.primary_20};

          &:hover {
            background: ${theme.colors.primary_10};
          }

          &:focus-within {
            background: ${theme.colors.primary_10};
            border: 1px solid ${theme.colors.primary_60};
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
  $maxHeight?: string;
}>`
  ${({ theme }) => theme.fonts.b3_14_reg};
  height: ${({ $isMini, $defaultHeight }) =>
    $isMini ? "23px" : $defaultHeight || "87px"};
  min-height: 23px;
  max-height: ${({ $defaultHeight, $maxHeight }) =>
    $defaultHeight ? $defaultHeight : $maxHeight ? $maxHeight : ""};

  border: none;
  background: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  resize: vertical;
  overflow-x: ${({ $isMini }) => ($isMini ? "auto" : "hidden")};
  overflow-y: ${({ $isMini }) => ($isMini ? "hidden" : "auto")};
  white-space: ${({ $isMini }) => ($isMini ? "pre" : "pre-wrap")};

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

const AttachmentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

const AttachmentPreviewBar = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
  overflow-x: auto;
  padding-bottom: 4px;
`;

const AttachmentPreviewItem = styled.div<{ $size: number }>`
  flex: 0 0 ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.G_100};
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const AttachmentRemoveButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  padding: 0;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.white};
  }
`;

const AttachmentInput = styled.input`
  display: none;
`;

const AttachmentButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary_20};
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.colors.G_100};
    background: ${({ theme }) => theme.colors.G_100};
  }
`;
