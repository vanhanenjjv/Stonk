import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Input, InputProps } from '../../components/Input';


export default {
  title: 'Components/Input',
  component: Input
} as Meta;

const Template: Story<InputProps> = args => <Input {...args} />;

export const File = Template.bind({});
File.args = { type: 'file' };

export const Date = Template.bind({});
Date.args = { type: 'date' };

export const DateRange = Template.bind({});
DateRange.args = { type: 'date-range', onChange: console.log };
