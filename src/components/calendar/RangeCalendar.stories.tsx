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
      <div style={{ maxWidth: 1000 }}>
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
