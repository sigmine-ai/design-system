"use client";

import React, { useMemo, useState } from "react";
import styled, { css } from "styled-components";
import dayjs, { Dayjs } from "dayjs";
import theme from "@/styles/theme";
import Icon from "@/components/icon/Icon";
import Button from "@/components/button/Button";

export type RangeCalendarProps = {
  value?: [Dayjs | null, Dayjs | null];
  defaultValue?: [Dayjs, Dayjs];
  onChange?: (range: [Dayjs, Dayjs]) => void;
  selectionMode?: "range" | "single"; // 선택 모드
  calendars?: 1 | 2; // 달력 개수
  showQuickRanges?: boolean; // 좌측 퀵 범위 패널 노출 여부
  disableFuture?: boolean; // 미래 날짜 비활성화
  disablePast?: boolean; // 과거 날짜 비활성화
  colorScheme?: {
    primary?: keyof typeof theme.colors | string;
    rangeBg?: keyof typeof theme.colors | string;
    weekend?: keyof typeof theme.colors | string;
  };
  className?: string;
  style?: React.CSSProperties;
  onApply?: (range: [Dayjs, Dayjs]) => void; // 선택 확정용 (옵션)
  applyLabel?: string;
};

type InternalRange = [Dayjs | null, Dayjs | null];

const WEEKDAYS_KO = ["일", "월", "화", "수", "목", "금", "토"];

// 고정 퀵 범위 (요구사항: 목록은 고정)
const getQuickRanges = () => {
  const now = dayjs();
  return [
    {
      label: "오늘",
      get: () => [now.startOf("day"), now.endOf("day")] as [Dayjs, Dayjs],
    },
    {
      label: "지난 3일",
      get: () =>
        [now.subtract(2, "day").startOf("day"), now.endOf("day")] as [
          Dayjs,
          Dayjs
        ],
    },
    {
      label: "지난 7일",
      get: () =>
        [now.subtract(6, "day").startOf("day"), now.endOf("day")] as [
          Dayjs,
          Dayjs
        ],
    },
    {
      label: "지난 30일",
      get: () =>
        [now.subtract(29, "day").startOf("day"), now.endOf("day")] as [
          Dayjs,
          Dayjs
        ],
    },
    {
      label: "지난 2개월",
      get: () =>
        [now.subtract(2, "month").startOf("month"), now.endOf("day")] as [
          Dayjs,
          Dayjs
        ],
    },
    {
      label: "지난 6개월",
      get: () =>
        [now.subtract(6, "month").startOf("month"), now.endOf("day")] as [
          Dayjs,
          Dayjs
        ],
    },
  ];
};

function coerceColor(
  color?: keyof typeof theme.colors | string,
  fallback?: keyof typeof theme.colors
): string | undefined {
  if (!color && fallback) return theme.colors[fallback];
  if (!color) return undefined;
  return (theme.colors as any)[color] ?? color;
}

const RangeCalendar: React.FC<RangeCalendarProps> = ({
  value,
  defaultValue,
  onChange,
  selectionMode = "range",
  calendars = 2,
  showQuickRanges = true,
  disableFuture = true,
  disablePast = false,
  colorScheme,
  className,
  style,
  onApply,
  applyLabel = "적용하기",
}) => {
  const [internalRange, setInternalRange] = useState<InternalRange>(() => {
    if (value) return value;
    if (defaultValue) return defaultValue;
    return [null, null];
  });
  const range = value ?? internalRange;

  const [pendingStart, setPendingStart] = useState<Dayjs | null>(null);
  const [hoverDate, setHoverDate] = useState<Dayjs | null>(null);
  const [baseMonth, setBaseMonth] = useState<Dayjs>(() =>
    (range[0] ?? dayjs()).startOf("month")
  );

  const appliedPrimary = coerceColor(colorScheme?.primary, "sigmine_primary");
  const appliedRangeBg = coerceColor(
    colorScheme?.rangeBg,
    "sigmine_primary_10"
  );
  const appliedWeekend =
    coerceColor(colorScheme?.weekend, undefined) ?? "#E54848";

  const quickRanges = useMemo(() => getQuickRanges(), []);

  const leftMonth = baseMonth.startOf("month");
  const rightMonth = leftMonth.add(1, "month");

  const todayStart = dayjs().startOf("day");
  const todayEnd = dayjs().endOf("day");

  const displayedMonths =
    calendars === 2 ? [leftMonth, rightMonth] : [leftMonth];

  const effectiveRange: [Dayjs | null, Dayjs | null] = useMemo(() => {
    if (selectionMode === "single") return range;
    if (pendingStart && hoverDate && !range[1]) {
      const start = pendingStart.isBefore(hoverDate) ? pendingStart : hoverDate;
      const end = pendingStart.isBefore(hoverDate) ? hoverDate : pendingStart;
      return [start, end];
    }
    return range;
  }, [selectionMode, hoverDate, pendingStart, range]);

  const isDisabled = (d: Dayjs) => {
    const afterToday = d.startOf("day").isAfter(todayEnd);
    const beforeToday = d.endOf("day").isBefore(todayStart);
    return (disableFuture && afterToday) || (disablePast && beforeToday);
  };

  const handleSelect = (date: Dayjs) => {
    if (isDisabled(date)) return;

    if (selectionMode === "single") {
      updateInternal([date, date], true);
      setPendingStart(null);
      setHoverDate(null);
      return;
    }

    // 첫 클릭
    if (!pendingStart) {
      setPendingStart(date);
      updateInternal([date, null]);
      return;
    }

    // 두 번째 클릭
    const start = pendingStart.isBefore(date) ? pendingStart : date;
    const end = pendingStart.isBefore(date) ? date : pendingStart;
    updateInternal([start, end], true);
    setPendingStart(null);
    setHoverDate(null);
  };

  const updateInternal = (next: InternalRange, fire?: boolean) => {
    if (!value) setInternalRange(next);
    if (fire && next[0] && next[1]) onChange?.([next[0], next[1]]);
  };

  const goPrev = () => setBaseMonth((m) => m.subtract(1, "month"));
  const goNext = () => setBaseMonth((m) => m.add(1, "month"));

  const handleApply = () => {
    if (onApply && range[0] && range[1]) {
      onApply([range[0]!, range[1]!]);
    }
  };

  return (
    <Wrapper className={className} style={style}>
      <Panel>
        <Calendars $showQuickRanges={showQuickRanges}>
          {displayedMonths.map((m, idx) => (
            <Calendar key={idx}>
              <Header>
                {idx === 0 && (
                  <NavButton
                    onClick={goPrev}
                    aria-label="prev-month"
                    style={{
                      position: "absolute",
                      left: 0,
                    }}
                  >
                    <Icon name="ArrowLeft2" variant="Bold" size={18} />
                  </NavButton>
                )}
                <HeaderLabel>{m.format("YYYY년 M월")}</HeaderLabel>
                {idx === displayedMonths.length - 1 && (
                  <NavButton
                    onClick={goNext}
                    aria-label="next-month"
                    style={{
                      position: "absolute",
                      right: 0,
                    }}
                  >
                    <Icon name="ArrowRight2" variant="Bold" size={18} />
                  </NavButton>
                )}
              </Header>

              <WeekRow>
                {WEEKDAYS_KO.map((w) => (
                  <WeekCell key={w}>{w}</WeekCell>
                ))}
              </WeekRow>

              <Grid>
                {buildMonthDays(m).map((cell, i) => {
                  if (!cell) return <EmptyCell key={i} />;
                  const d = cell;
                  const isWeekend = d.day() === 0 || d.day() === 6;
                  const disabled = isDisabled(d);

                  const [selStart, selEnd] = effectiveRange;
                  const inRange =
                    selStart &&
                    selEnd &&
                    !d.isBefore(selStart, "day") &&
                    !d.isAfter(selEnd, "day");
                  const isStart = selStart && d.isSame(selStart, "day");
                  const isEnd = selEnd && d.isSame(selEnd, "day");

                  return (
                    <DayCell
                      key={i}
                      $weekend={isWeekend}
                      $disabled={!!disabled}
                      $inRange={!!inRange}
                      $isStart={!!isStart}
                      $isEnd={!!isEnd}
                      $isSingle={selectionMode === "single"}
                      $colors={{
                        primary: appliedPrimary,
                        rangeBg: appliedRangeBg,
                        weekend: appliedWeekend,
                      }}
                      onMouseEnter={() => setHoverDate(d)}
                      onMouseLeave={() => setHoverDate(null)}
                      onClick={() => handleSelect(d)}
                    >
                      {d.date()}
                    </DayCell>
                  );
                })}
              </Grid>
            </Calendar>
          ))}
        </Calendars>

        {selectionMode === "range" && showQuickRanges && (
          <SidePanel>
            <QuickList>
              {quickRanges.map((q) => {
                const [qs, qe] = q.get();
                const disabled =
                  (disableFuture && qe.endOf("day").isAfter(todayEnd)) ||
                  (disablePast && qs.startOf("day").isBefore(todayStart));
                const active = !!(
                  range[0] &&
                  range[1] &&
                  range[0].isSame(qs, "day") &&
                  range[1].isSame(qe, "day")
                );
                return (
                  <QuickItem
                    key={q.label}
                    onClick={() => {
                      if (!disabled) {
                        setPendingStart(null);
                        setHoverDate(null);
                        updateInternal([qs, qe], true);
                      }
                    }}
                    $disabled={disabled}
                    $active={active}
                  >
                    {q.label}
                  </QuickItem>
                );
              })}
            </QuickList>

            {onApply && (
              <Button
                hierarchy="sigminePrimary"
                onClick={handleApply}
                size={36}
                style={{ justifyContent: "center" }}
              >
                {applyLabel}
              </Button>
            )}
          </SidePanel>
        )}
      </Panel>
    </Wrapper>
  );
};

export default RangeCalendar;

// Utils
function buildMonthDays(month: Dayjs): Array<Dayjs | null> {
  const start = month.startOf("month");
  const end = month.endOf("month");
  const days: Array<Dayjs | null> = [];

  // 앞쪽 공백 (일요일=0 기준)
  for (let i = 0; i < start.day(); i += 1) days.push(null);

  // 실제 일자
  for (let d = start.date(); d <= end.date(); d += 1) {
    days.push(start.set("date", d));
  }

  // 총 6주(42칸)로 맞춤
  while (days.length % 7 !== 0) days.push(null);
  while (days.length < 42) days.push(null);

  return days;
}

// Styles
const Wrapper = styled.div`
  width: 100%;
`;

const Panel = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px;
  //   background: ${theme.colors.G_50};
  flex-wrap: wrap;
  justify-content: center;
`;

const Calendars = styled.div<{ $showQuickRanges: boolean }>`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  border-radius: 5px;
  border: ${({ $showQuickRanges }) =>
    $showQuickRanges ? "1px solid " + theme.colors.G_100 : "none"};
  background: ${theme.colors.white};
`;

const Calendar = styled.div`
  padding: 8px;
  //   border-radius: 4px;
  //   border: 1px solid ${theme.colors.G_100};
  //   background: ${theme.colors.white};
  min-width: 260px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  position: relative;
`;

const HeaderLabel = styled.div`
  ${theme.fonts.b3_14_med};
`;

const NavButton = styled.button`
  border: none;
  background: transparent;
  padding: 4px;
  cursor: pointer;
`;

const WeekRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 4px;
`;

const WeekCell = styled.div`
  ${theme.fonts.c1_12_med};
  color: ${theme.colors.G_500};
  text-align: center;
  padding: 4px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  //   gap: 2px;
`;

const EmptyCell = styled.div`
  height: 32px;
`;

const DayCell = styled.button<{
  $weekend: boolean;
  $disabled: boolean;
  $inRange: boolean;
  $isStart: boolean;
  $isEnd: boolean;
  $colors: { primary?: string; rangeBg?: string; weekend?: string };
  $isSingle: boolean;
}>`
  height: 32px;
  border-radius: ${({ $isStart, $isEnd, $inRange, $isSingle }) =>
    $isStart
      ? "4px 0px 0px 4px"
      : $isEnd
      ? "0px 4px 4px 0px"
      : $inRange
      ? "0px"
      : "4px"};
  border: 0px solid ${theme.colors.G_100};
  background: ${({ $inRange, $colors }) =>
    $inRange
      ? $colors.rangeBg ?? theme.colors.sigmine_primary_10
      : theme.colors.white};
  color: ${({ $weekend, $disabled, $isStart, $isEnd, $colors }) =>
    $disabled
      ? theme.colors.G_300
      : $isStart || $isEnd
      ? theme.colors.white
      : $weekend
      ? $colors.weekend ?? "#E54848"
      : theme.colors.G_600};
  position: relative;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  ${theme.fonts.c1_12_med};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  ${({ $isStart, $isEnd, $colors }) =>
    ($isStart || $isEnd) &&
    css`
      background: ${$colors.primary ?? theme.colors.sigmine_primary};
      border-color: ${$colors.primary ?? theme.colors.sigmine_primary};
    `}

  ${({ $isSingle, $colors, $isStart }) =>
    $isSingle &&
    $isStart &&
    css`
      border-radius: 4px;
      background: ${$colors.primary ?? theme.colors.sigmine_primary};
    `}
`;

const SidePanel = styled.div`
  width: 140px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.G_100};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const QuickList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const QuickItem = styled.button<{ $disabled?: boolean; $active?: boolean }>`
  width: 100%;
  text-align: left;
  height: 32px;
  padding: 4px 8px;
  border-radius: 3px;
  background: ${({ $disabled, $active }) =>
    $active
      ? theme.colors.sigmine_primary_10
      : $disabled
      ? theme.colors.G_50
      : theme.colors.white};
  color: ${({ $disabled, $active }) =>
    $disabled
      ? theme.colors.G_300
      : $active
      ? theme.colors.sigmine_primary
      : theme.colors.G_600};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  border: 0px solid ${theme.colors.G_100};
  ${theme.fonts.c1_12_med};
`;
