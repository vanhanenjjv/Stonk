import React from 'react';

import { Story, Meta } from '@storybook/react';

import { DragAndDrop, DragAndDropProps } from '../../components/DragAndDrop/DragAndDrop';


export default {
  title: 'Components/Drag and Drop',
  component: DragAndDrop
} as Meta;

const Template: Story<DragAndDropProps> = args => (
  <DragAndDrop {...args}>
    <div className="border p-24 rounded-lg text-center">
      <span className="text-gray-500">Drag and Drop area</span>
    </div>
  </DragAndDrop>
);


export const Default = Template.bind({});
