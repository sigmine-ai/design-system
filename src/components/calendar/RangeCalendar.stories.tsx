import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import dayjs, { Dayjs } from "dayjs";
import RangeCalendar from "./RangeCalendar";

const meta: Meta<typeof RangeCalendar> = {
  title: "Components/Calendar/RangeCalendar",
  component: RangeCalendar,
};

export default meta;

type Story = StoryObj<typeof RangeCalendar>;

export const Basic: Story = {
  render: () => {
    const [range, setRange] = useState<[Dayjs, Dayjs]>([
      dayjs().subtract(6, "day").startOf("day"),
      dayjs().endOf("day"),
    ]);
    return (
      <div style={{ maxWidth: 1000, height: 2000 }}>
        <RangeCalendar defaultValue={range} onChange={(r) => setRange(r)} />
      </div>
    );
  },
};

export const SingleCalendar: Story = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <RangeCalendar calendars={1} />
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div style={{ maxWidth: 640 }}>
      <RangeCalendar
        calendars={2}
        colorScheme={{
          primary: "green_100",
          rangeBg: "yellow_10",
          weekend: "#E54848",
        }}
      />
    </div>
  ),
};

export const WithoutQuickRanges: Story = {
  render: () => (
    <div style={{ maxWidth: 640 }}>
      <RangeCalendar calendars={1} showQuickRanges={false} />
    </div>
  ),
};

export const SingleDate: Story = {
  render: () => (
    <div style={{ maxWidth: 320 }}>
      <RangeCalendar calendars={1} selectionMode="single" />
    </div>
  ),
};

export const FutureOnly: Story = {
  render: () => (
    <div style={{ maxWidth: 640 }}>
      <RangeCalendar calendars={2} disableFuture={false} disablePast />
    </div>
  ),
};

export const PastOnly: Story = {
  render: () => (
    <div style={{ maxWidth: 640 }}>
      <RangeCalendar calendars={2} disableFuture disablePast={false} />
    </div>
  ),
};

export const ResponsiveContainer: Story = {
  render: () => {
    const [width, setWidth] = React.useState(360);
    return (
      <div>
        <div style={{ marginBottom: 12 }}>
          <label style={{ marginRight: 8 }}>컨테이너 너비: {width}px</label>
          <input
            type="range"
            min={320}
            max={1200}
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            style={{ verticalAlign: "middle", width: 300 }}
          />
        </div>
        <div style={{ width, border: "1px dashed #d9d9d9", padding: 8 }}>
          <RangeCalendar calendars={2} />
        </div>
      </div>
    );
  },
};

export const WithApplyButton: Story = {
  render: () => {
    const [preview, setPreview] = useState<[Dayjs | null, Dayjs | null]>([
      null,
      null,
    ]);
    const [confirmed, setConfirmed] = useState<[Dayjs | null, Dayjs | null]>([
      null,
      null,
    ]);
    return (
      <div style={{ maxWidth: 1000 }}>
        <RangeCalendar
          value={preview}
          onChange={setPreview}
          onApply={(r) => setConfirmed(r)}
          applyLabel="적용하기"
          calendars={2}
        />
        <div style={{ marginTop: 12 }}>
          <div>
            미리보기:{" "}
            {preview[0] && preview[1]
              ? `${preview[0].format("YYYY-MM-DD")} ~ ${preview[1].format(
                  "YYYY-MM-DD"
                )}`
              : "-"}
          </div>
          <div>
            확정:{" "}
            {confirmed[0] && confirmed[1]
              ? `${confirmed[0].format("YYYY-MM-DD")} ~ ${confirmed[1].format(
                  "YYYY-MM-DD"
                )}`
              : "-"}
          </div>
        </div>
      </div>
    );
  },
};
