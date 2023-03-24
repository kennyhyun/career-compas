import React from "react";

import { QResult } from "./QResult";

export default {
  title: "Comp/QResult",
  component: QResult,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <QResult {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  industry: "tech",
  percent: 58,
};
