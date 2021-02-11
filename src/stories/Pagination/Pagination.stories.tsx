import React from 'react';

import { Story, Meta } from '@storybook/react';

import { Pagination, PaginationProps } from '../../components/Pagination/Pagination';


export default {
  title: 'Components/Pagination',
  component: Pagination
} as Meta;

const Template: Story<PaginationProps> = args => {
  const [page, setPage] = React.useState(0);

  return <Pagination {...args} page={page} pages={9} onChangePage={setPage} />;
};

export const Default = Template.bind({});
