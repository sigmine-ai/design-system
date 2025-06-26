import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";
import Icon from "../icon/Icon";
import Text from "../text/Text";
import styled from "styled-components";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: (args) => (
    <Toast {...args}>
      <Wrapper>
        <Icon name="SimpleCheck" variant="Linear" color="white" size={24} />
        <Text font="b2_16_semi" color="white">
          꼬리글 5개가 생성되었어요!
        </Text>
      </Wrapper>
    </Toast>
  ),
};

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
