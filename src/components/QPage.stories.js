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
  label: "01",
  text: "awsdfewejfeowpfjewlkfjeiowjfoiefjewoifjencjfeiwopjeiofjncewoifjnewoifcjnweofcjnewif",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "02",
};

export const Large = Template.bind({});
Large.args = {
  label: "02",
  size: "large",
  text: "awsdfewejfeowpfjewlkfjeiowjfoiefjewoifjencjfeiwopjeiofjncewoifjnewoifcjnweofcjnewif",
};

export const Small = Template.bind({});
Small.args = {
  label: "03",
  size: "small",
  text: "awsdfewejfeowpfjewlkfjeiowjfoiefjewoifjencjfeiwopjeiofjncewoifjnewoifcjnweofcjnewif",
};
