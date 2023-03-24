import React from "react";

import { QPage } from "./QPage";

export default {
  title: "Comp/Qpage",
  component: QPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <QPage {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Primary",
  text: "awsdfewejfeowpfjewlkfjeiowjfoiefjewoifjencjfeiwopjeiofjncewoifjnewoifcjnweofcjnewif",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large",
  text: "awsdfewejfeowpfjewlkfjeiowjfoiefjewoifjencjfeiwopjeiofjncewoifjnewoifcjnweofcjnewif",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small",
  text: "awsdfewejfeowpfjewlkfjeiowjfoiefjewoifjencjfeiwopjeiofjncewoifjnewoifcjnweofcjnewif",
};
